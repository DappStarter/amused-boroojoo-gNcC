require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture hill fresh skull drift raise saddle evil hunt fat swift genius'; 
let testAccounts = [
"0xb6c931c20463458349689988d956b93a4b16865f8908c62e94eda15ddaf248bf",
"0x13678c5cc5ea8abcf199c5d7f693a113346e834129050f19474889dcd56676d7",
"0xa5c10c290c0db32ee41ab34ebb166143728f45e9ab3bd66c250f2175aa94b201",
"0x0f737aa85478e06f966c002b3832e92bc18bfd40ffd7fbff4503ac2e18eac38e",
"0xbbef6fe23b743eda1ef5accf127915403c297fa9fa4e372d26615208e8c0ee34",
"0xe579271af267437c3dc3af4a0f6bacac34f8782d0d1f40b6266a14d2aca6c699",
"0xc358cf1a41d8e69c21698a8ae7dad69cbcc47da2b412a71ee601967924ed5d4d",
"0x93eaa6ea0c17149afa79e23d8c4f9cdb777f1f3ccba9f03355003b19a8c33190",
"0xfe7a21251e0c965be3541ff3da38b2bd933d81ad99fb044a5fe4a7bf01925344",
"0x24edb910b592dd3e5c36ad43668f9ab64b54319a55eb9ca0b3acbd67b6309961"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

