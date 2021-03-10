import * as _ from 'lodash'
import {convertKeysFromSnakeCaseToCamelCase} from './utils'
import BigNumber from 'bignumber.js'
import {BRTAPI} from '..'

export type GetServerInfoResponse = {
  buildVersion: string
  completeLedgers: string
  hostID: string
  ioLatencyMs: number
  load?: {
    jobTypes: Array<object>
    threads: number
  }
  lastClose: {
    convergeTimeS: number
    proposers: number
  }
  loadFactor: number
  peers: number
  pubkeyNode: string
  pubkeyValidator?: string
  serverState: string
  validatedLedger: {
    age: number
    baseFeeBRT: string
    hash: string
    reserveBaseBRT: string
    reserveIncrementBRT: string
    ledgerVersion: number
  }
  validationQuorum: number
  networkLedger?: string
}

function renameKeys(object, mapping) {
  _.forEach(mapping, (to, from) => {
    object[to] = object[from]
    delete object[from]
  })
}

function getServerInfo(this: BRTAPI): Promise<GetServerInfoResponse> {
  return this.request('server_info').then((response) => {
    const info = convertKeysFromSnakeCaseToCamelCase(response.info)
    renameKeys(info, {hostid: 'hostID'})
    if (info.validatedLedger) {
      renameKeys(info.validatedLedger, {
        baseFeeXrp: 'baseFeeBRT',
        reserveBaseXrp: 'reserveBaseBRT',
        reserveIncXrp: 'reserveIncrementBRT',
        seq: 'ledgerVersion'
      })
      info.validatedLedger.baseFeeBRT = info.validatedLedger.baseFeeBRT.toString()
      info.validatedLedger.reserveBaseBRT = info.validatedLedger.reserveBaseBRT.toString()
      info.validatedLedger.reserveIncrementBRT = info.validatedLedger.reserveIncrementBRT.toString()
    }
    return info
  })
}

// This is a public API that can be called directly.
// This is not used by the `prepare*` methods. See `src/transaction/utils.ts`
async function getFee(this: BRTAPI, cushion?: number): Promise<string> {
  if (cushion === undefined) {
    cushion = this._feeCushion
  }
  if (cushion === undefined) {
    cushion = 1.2
  }

  const serverInfo = (await this.request('server_info')).info
  const baseFeeXrp = new BigNumber(serverInfo.validated_ledger.base_fee_xrp)
  let fee = baseFeeXrp.times(serverInfo.load_factor).times(cushion)

  // Cap fee to `this._maxFeeBRT`
  fee = BigNumber.min(fee, this._maxFeeBRT)
  // Round fee to 6 decimal places
  return new BigNumber(fee.toFixed(6)).toString(10)
}

export {getServerInfo, getFee}
