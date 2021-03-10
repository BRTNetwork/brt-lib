import BigNumber from 'bignumber.js'
import {dropsToXrp} from '../../common'

function parseFeeUpdate(tx: any) {
  const baseFeeDrops = new BigNumber(tx.BaseFee, 16).toString()
  return {
    baseFeeBRT: dropsToXrp(baseFeeDrops),
    referenceFeeUnits: tx.ReferenceFeeUnits,
    reserveBaseBRT: dropsToXrp(tx.ReserveBase),
    reserveIncrementBRT: dropsToXrp(tx.ReserveIncrement)
  }
}

export default parseFeeUpdate
