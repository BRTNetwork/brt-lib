import {BRTAPI, BRTAPIBroadcast} from '../src'
import ledgerClosed from './fixtures/brtd/ledger-close.json'
import {createMockRippled} from './mock-brtd'
import {getFreePort} from './utils'

function setupMockRippledConnection(testcase, port) {
  return new Promise((resolve, reject) => {
    testcase.mockRippled = createMockRippled(port)
    testcase._mockedServerPort = port
    testcase.api = new BRTAPI({server: 'ws://localhost:' + port})
    testcase.api
      .connect()
      .then(() => {
        testcase.api.once('ledger', () => resolve())
        testcase.api.connection._ws.emit(
          'message',
          JSON.stringify(ledgerClosed)
        )
      })
      .catch(reject)
  })
}

function setupMockRippledConnectionForBroadcast(testcase, ports) {
  return new Promise((resolve, reject) => {
    const servers = ports.map((port) => 'ws://localhost:' + port)
    testcase.mocks = ports.map((port) => createMockRippled(port))
    testcase.api = new BRTAPIBroadcast(servers)
    testcase.api
      .connect()
      .then(() => {
        testcase.api.once('ledger', () => resolve())
        testcase.mocks[0].socket.send(JSON.stringify(ledgerClosed))
      })
      .catch(reject)
  })
}

function setup(this: any) {
  return getFreePort().then((port) => {
    return setupMockRippledConnection(this, port)
  })
}

function setupBroadcast(this: any) {
  return Promise.all([getFreePort(), getFreePort()]).then((ports) => {
    return setupMockRippledConnectionForBroadcast(this, ports)
  })
}

function teardown(this: any, done) {
  this.api
    .disconnect()
    .then(() => {
      if (this.mockRippled !== undefined) {
        this.mockRippled.close()
      } else {
        this.mocks.forEach((mock) => mock.close())
      }
      setImmediate(done)
    })
    .catch(done)
}

export default {
  setup: setup,
  teardown: teardown,
  setupBroadcast: setupBroadcast,
  createMockRippled: createMockRippled
}
