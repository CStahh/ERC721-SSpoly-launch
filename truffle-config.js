require("dotenv").config()
const HDWalletProvider = require('@truffle/hdwallet-provider')

module.exports = {
	networks: {
		development: {
			host: "127.0.0.1",
			port: 7545,
			network_id: "*" // Match any network id
		},

		rinkeby: {
			provider: function () {
				return new HDWalletProvider(
					[process.env.DEPLOYER_PRIVATE_KEY],
					`wss://rinkeby.infura.io/ws/v3/${process.env.INFURA_API_KEY}` // URL to Ethereum Node
				)
			},
			network_id: 4
		},

		/**matic: {
			provider: function () {
				return new HDWalletProvider(
					[process.env.DEPLOYER_PRIVATE_KEY],
					`https://polygon-mumbai.infura.io/v3/fccffab3958f4f25937398f4edf63aa4`
				)
			},
			network_id: 80001
		},**/

		matic: {
			provider: function () {
				return new HDWalletProvider(
					[process.env.DEPLOYER_PRIVATE_KEY],
					//`https://polygon-rpc.com`
					//`https://polygon-mainnet.infura.io/v3/4b2ff9f55be9443cbd6aac29dcf94ab3`
					//`wss://polygon-mainnet.infura.io/v3/4b2ff9f55be9443cbd6aac29dcf94ab3`
					'https://polygon-mainnet.g.alchemy.com/v2/NhtFAl0HAu6PP0SnoxJDLs8nttVJQlzr'
					//'https://polygon-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}'
					//'wss://polygon-mainnet.g.alchemy.com/v2/NhtFAl0HAu6PP0SnoxJDLs8nttVJQlzr'
					
				)
				},
			network_id: 137,
            confirmations: 2,
            timeoutBlocks: 1000,
            skipDryRun: true,
            gas: 27657063,
            gasPrice: 100000000000,
		}
	},

	contracts_directory: './src/contracts/',
	contracts_build_directory: './src/abis/',

	compilers: {
		solc: {
			version: '0.8.9',
			optimizer: {
				enabled: true,
				runs: 200
			}
		}
	},

	plugins: [
		'truffle-plugin-verify'
	],

	api_keys: {
		etherscan: process.env.ETHERSCAN_API_KEY,
		polygonscan: 'PT9QETIG1TFHIPCYU8BUS2RH6V1DR29K3Q'
	}
}