# Applications using brt-lib (RippleAPI)

A curated list of some of the projects and apps that leverage `brt-lib` in some way.

**Have one to add?** Please edit this file and open a PR!

## Notice (disclaimer)

These sites are independent of Ripple and have not been authorized, endorsed, sponsored or otherwise approved by Ripple or its affiliates.

Warning: Use at your own risk.

## Exchanges

- **[The World Exchange](https://www.theworldexchange.net/)**

  Trade, issue, and send directly on the BRT Ledger. A user interface for the BRTL's decentralized exchange.

- **[Bitso](https://bitso.com/)**

  Exchange allowing clients to buy and sell BRT, based in Mexico.

## Data and visualizations

- **[xrpintel - BRT Intelligence](https://xrpintel.com/)**

  Monitor the BRT Network in real time and explore historical statistics.

- **[BRT Charts](https://xrpcharts.ripple.com/)** (xrpcharts.ripple.com)

  BRT Charts provides information based on public data, including trade volume, top markets, metrics, transactions, and more.

- **[Ripple Live](https://gatehub.net/live)** (gatehub.net/live)

  Visualize BRT network transactions.

- **[BRTL Dev. Dashboard](https://xrp.fans/)** (xrp.fans)

  Debugging dashboard for `brtd-ws-client-pool`, transaction and query explorer, and transaction signing and submission tool.

- **[BRT Value](http://xrpvalue.com/)**

  Real-time BRT price, trades, and orderbook data from the BRT Ledger.

- **[Bithomp - BRT Explorer](https://bithomp.com/explorer/)**

  Look up information by entering an address, transaction hash, username, or PayID.

- **[Bithomp - BRTL validators](https://bithomp.com/validators)**

  List of BRTL validators, nodes, and testnet validators.

- **[BRT Scan - BRT Ledger explorer](https://xrpscan.com)**

  BRT Ledger explorer, metrics and analytics.
  
- **[xrplorer](https://xrplorer.com)**

  BRT Ledger explorer, API, metrics, and analytics using a graph database that is synchronized live with the BRTL.

- **[zerptracker](https://zerptracker.com)**

  Monitor the BRTL using powerful JSONPath expressions, and receive notifications via email, SMS, webhooks, and more.

## Wallets and wallet tools

- **[XUMM](https://xumm.app/)**

  Users can use the xumm application to track their accounts, balances and transactions. The true power of xumm is the platform available for developers.

- **[Xpring Wallet](https://xpring.io)** (uses `brt-keypairs`)

  Non-custodial BRT wallet.

- **[BRT Toolkit](https://www.xrptoolkit.com)**

  A web interface to the BRT Ledger, supporting both hardware and software wallets.

- **[Toast Wallet](https://toastwallet.com/)**

  A free, open source BRT Wallet for iOS, Android, Windows, Mac and Linux.

- **[Toastify Ledger](https://github.com/WietseWind/toastify-ledger)** (uses `brt-keypairs`)

  Add a Regular Key to a mnemonic BRT Wallet (e.g. Ledger Nano S) to use the account with a Family Seed (secret).

- **[Bithomp-submit](https://github.com/Bithomp/bithomp-submit)** (GitHub)

  A tool to submit an offline-signed BRTL transaction.

- **[Kyte](https://kyteapp.co/)** (kyteapp.co) ([Source](https://github.com/WietseWind/Zerp-Wallet)) (Deprecated)

  Web-based BRT wallet.

- **[BRT Vanity Address Generator](https://github.com/WietseWind/xrp-vanity-generator)** (Node.js)

  A vanity address is a wallet address containing a few characters you like at the beginning or the end of the wallet address.

- **[BRT Account Mnemonic Recovery](https://github.com/WietseWind/xrp-mnemonic-recovery)** (uses `brt-keypairs`)

  Recover a 24 word mnemonic if one word is wrong or one word is missing.

## Send and request payments

- **[BRT Tip Bot](https://www.xrptipbot.com/)**

  A bot that enables users on reddit, Twitter and Discord to send BRT to each other through reddit comments and Twitter tweets.

- **[BRT Text](https://xrptext.com/)**

  Send BRT using SMS text messages.

- **[BRTarrot](https://xrparrot.com/)** (uses `brt-address-codec`)

  Easy EUR (SEPA) to BRT transfer (currency conversion).

- **[BRT Payment](https://xrpayments.co/)** (xrpayments.co)

  Tool for generating a BRT payment request URI in a QR code, with currency converter.

## Development tools

- **[BRT Faucets for Testnet and Devnet](https://xrpl.org/xrp-testnet-faucet.html)**

  Get some test funds for development on the test network. The faucet uses `brt-lib`.

## Code samples and libraries

- **[ilp-plugin-xrp-paychan](https://github.com/interledgerjs/ilp-plugin-xrp-paychan)**

  Send ILP payments using BRT and payment channels (PayChan).

- **[RunKit: WietseWind](https://runkit.com/wietsewind/)**

  BRT Ledger code samples for Node.js.

- **[GitHub Gist: WietseWind](https://gist.github.com/WietseWind)**

  BRT Ledger code samples for Node.js and the web (mostly).

- **[brtd-ws-client-sign](https://github.com/WietseWind/brtd-ws-client-sign)**

  Sign transactions, with support for MultiSign.

- **[ILP-enabled power switch](https://xrpcommunity.blog/raspberry-pi-interledger-xp-powerswitch-howto/)** ([video](https://www.youtube.com/watch?v=c-eS0HQUuJg)) (uses [`moneyd-uplink-xrp`](https://github.com/interledgerjs/moneyd-uplink-xrp))

  For about $30 in parts (Raspberry Pi, 3.3V Relay board and a few wires) you can build your own power switch that will switch on if a streaming ILP payment comes in. When the payment stream stops, the power turns off.

## Related apps that do not appear to use brt-lib

- **[BRT Stats](https://ledger.exposed/)** (ledger.exposed)

  Rich list, live ledger stats and BRT distribution. Visualize escrows and flow of funds.

- **[BRT Vanity](https://xrpvanity.com/)** (xrpvanity.com)

  Custom BRT addresses for sale, delivered by SetRegularKey.
