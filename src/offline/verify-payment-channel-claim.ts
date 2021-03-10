import keypairs from '@brtnetwork/brt-keypairs'
import binary from '@brtnetwork/brt-binary-codec'
import {validate, brtToDrops} from '../common'

function verifyPaymentChannelClaim(
  channel: string,
  amount: string,
  signature: string,
  publicKey: string
): boolean {
  validate.verifyPaymentChannelClaim({channel, amount, signature, publicKey})

  const signingData = binary.encodeForSigningClaim({
    channel: channel,
    amount: brtToDrops(amount)
  })
  return keypairs.verify(signingData, signature, publicKey)
}

export default verifyPaymentChannelClaim
