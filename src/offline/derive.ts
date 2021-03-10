import {deriveKeypair, deriveAddress} from 'brt-keypairs'
import {classicAddressToXAddress} from 'brt-address-codec'

function deriveXAddress(options: {
  publicKey: string
  tag: number | false
  test: boolean
}): string {
  const classicAddress = deriveAddress(options.publicKey)
  return classicAddressToXAddress(classicAddress, options.tag, options.test)
}

export {deriveKeypair, deriveAddress, deriveXAddress}
