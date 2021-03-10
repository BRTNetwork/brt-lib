import assert from 'assert-diff'
import {assertResultMatch, assertRejects, TestSuite} from '../../utils'
import requests from '../../fixtures/requests'
import responses from '../../fixtures/responses'
import addresses from '../../fixtures/addresses.json'
const {getPaths: REQUEST_FIXTURES} = requests
const {getPaths: RESPONSE_FIXTURES} = responses

/**
 * Every test suite exports their tests in the default object.
 * - Check out the "TestSuite" type for documentation on the interface.
 * - Check out "test/api/index.ts" for more information about the test runner.
 */
export default <TestSuite>{
  'simple test': async (api) => {
    const response = await api.getPaths(REQUEST_FIXTURES.normal)
    assertResultMatch(response, RESPONSE_FIXTURES.XrpToUsd, 'getPaths')
  },
  'queuing': async (api) => {
    const [normalResult, usdOnlyResult, xrpOnlyResult] = await Promise.all([
      api.getPaths(REQUEST_FIXTURES.normal),
      api.getPaths(REQUEST_FIXTURES.UsdToUsd),
      api.getPaths(REQUEST_FIXTURES.XrpToXrp)
    ])
    assertResultMatch(normalResult, RESPONSE_FIXTURES.XrpToUsd, 'getPaths')
    assertResultMatch(usdOnlyResult, RESPONSE_FIXTURES.UsdToUsd, 'getPaths')
    assertResultMatch(xrpOnlyResult, RESPONSE_FIXTURES.XrpToXrp, 'getPaths')
  },
  // @TODO
  // need decide what to do with currencies/BRT:
  // if add 'BRT' in currencies, then there will be exception in
  // brtToDrops function (called from toRippledAmount)
  'getPaths USD 2 USD': async (api) => {
    const response = await api.getPaths(REQUEST_FIXTURES.UsdToUsd)
    assertResultMatch(response, RESPONSE_FIXTURES.UsdToUsd, 'getPaths')
  },
  'getPaths BRT 2 BRT': async (api) => {
    const response = await api.getPaths(REQUEST_FIXTURES.XrpToXrp)
    assertResultMatch(response, RESPONSE_FIXTURES.XrpToXrp, 'getPaths')
  },
  'source with issuer': async (api) => {
    return assertRejects(
      api.getPaths(REQUEST_FIXTURES.issuer),
      api.errors.NotFoundError
    )
  },
  'BRT 2 BRT - not enough': async (api) => {
    return assertRejects(
      api.getPaths(REQUEST_FIXTURES.XrpToXrpNotEnough),
      api.errors.NotFoundError
    )
  },
  'invalid PathFind': async (api) => {
    assert.throws(() => {
      api.getPaths(REQUEST_FIXTURES.invalid)
    }, /Cannot specify both source.amount/)
  },
  'does not accept currency': async (api) => {
    return assertRejects(
      api.getPaths(REQUEST_FIXTURES.NotAcceptCurrency),
      api.errors.NotFoundError
    )
  },
  'no paths': async (api) => {
    return assertRejects(
      api.getPaths(REQUEST_FIXTURES.NoPaths),
      api.errors.NotFoundError
    )
  },
  'no paths source amount': async (api) => {
    return assertRejects(
      api.getPaths(REQUEST_FIXTURES.NoPathsSource),
      api.errors.NotFoundError
    )
  },
  'no paths with source currencies': async (api) => {
    return assertRejects(
      api.getPaths(REQUEST_FIXTURES.NoPathsWithCurrencies),
      api.errors.NotFoundError
    )
  },
  'error: srcActNotFound': async (api) => {
    return assertRejects(
      api.getPaths({
        ...REQUEST_FIXTURES.normal,
        source: {address: addresses.NOTFOUND}
      }),
      api.errors.RippleError
    )
  },
  'send all': async (api) => {
    const response = await api.getPaths(REQUEST_FIXTURES.sendAll)
    assertResultMatch(response, RESPONSE_FIXTURES.sendAll, 'getPaths')
  }
}
