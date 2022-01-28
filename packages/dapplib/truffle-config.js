require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half kiwi orange tooth bike curtain net push grid cloth flower segment'; 
let testAccounts = [
"0x4b9db5e956942bdf2a93cab5e75041debf0f7c7764612e3dc132f3c70832826b",
"0x807d1ce4135943e3ae6d20ae8353c013ed83e4a3b9f6a14b32898e77fc77c4fb",
"0x2ef20531c749b92b07cf32a594ac2b1308b97dc870fc2ec4239388fbadfd6761",
"0x20ed80de4c35b95c31cb5397fa8af04fa67e54a855fc8b6a256091add47cc194",
"0xc5ef86176fe65501fa82ad1122da822a3eb0580dde838715cd8b4da9622bdd5b",
"0x05e1b3bb8b8b7ffac8a5f48007421a5b6706ac6199df98fef6106677ca1b4f5c",
"0x97b90fe47f41d58ade4358d3df538fd0727404d59aae8d7c13c841c65b4226ef",
"0x6b7e586c54138de235a88b93a2e22d2e3cfd329cb9e6cb538db89df66f459fa0",
"0xac8be3c6ee71e7809d2434224355dff18288f9c37debeea5d8a9118044819b06",
"0x9932f5c0d58ffdf44fd3905bb8bd672473c9075830c2b7c196d1aaab45523858"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

