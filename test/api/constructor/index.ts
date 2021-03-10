import assert from 'assert-diff'
import {TestSuite} from '../../utils'
import {BRTAPI} from '../../../src'

/**
 * Every test suite exports their tests in the default object.
 * - Check out the "TestSuite" type for documentation on the interface.
 * - Check out "test/api/index.ts" for more information about the test runner.
 */
export default <TestSuite>{
  'BRTAPI - implicit server port': () => {
    new BRTAPI({server: 'wss://s1.ripple.com'})
  },

  'BRTAPI invalid options': () => {
    // @ts-ignore - This is intentionally invalid
    assert.throws(() => new BRTAPI({invalid: true}))
  },

  'BRTAPI valid options': () => {
    const api = new BRTAPI({server: 'wss://s:1'})
    const privateConnectionUrl = (api.connection as any)._url
    assert.deepEqual(privateConnectionUrl, 'wss://s:1')
  },

  'BRTAPI invalid server uri': () => {
    assert.throws(() => new BRTAPI({server: 'wss//s:1'}))
  }
}
