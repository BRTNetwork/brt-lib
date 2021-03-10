import * as common from '../common'
import keypairs from '@brtnetwork/brt-keypairs'
import binary from '@brtnetwork/brt-binary-codec'
const {validate, xrpToDrops} = common

function signPaymentChannelClaim(
  channel: string,
  amount: string,
  privateKey: string
): string {
  validate.signPaymentChannelClaim({channel, amount, privateKey})

  const signingData = binary.encodeForSigningClaim({
    channel: channel,
    amount: xrpToDrops(amount)
  })
  return keypairs.sign(signingData, privateKey)
}

export default signPaymentChannelClaim
