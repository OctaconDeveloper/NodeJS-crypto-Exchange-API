const appDebugger = require("../logger");
const ApiService = require("./apiservices");

          
module.exports = class BitcoinService extends ApiService
{

    async getAccountBalanceInSatoshi(address)
    {
        try 
        {
            var baseUrl = process.env.BLOCKCHAIN_MODE==='test'? 'https://api.bitcore.io/api/BTC/testnet/address/': 'https://api.bitcore.io/api/BTC/mainnet/address/';
            this.setBaseURL(`${baseUrl}${address}/balance`);
            await this.makeRequest('GET')
            var response =  this.getResponse() 
            return parseInt(response.confirmed)

        }
        catch(e) 
        {
            appDebugger('error', "BitcoinService", "getAccountBalanceInSatoshi", e.message)
            return 0
        } 
    }

    async getAccountBalance(address)
    { 
        try 
        {
            var baseUrl = process.env.BLOCKCHAIN_MODE==='test'? 'https://api.bitcore.io/api/BTC/testnet/address/': 'https://api.bitcore.io/api/BTC/mainnet/address/';
            this.setBaseURL(`${baseUrl}${address}/balance`);
            await this.makeRequest('GET')
            var response =  this.getResponse() 
            return parseFloat(response.confirmed/100000000)

        }
        catch(e) 
        {
            appDebugger('error', "BitcoinService", "getAccountBalanceInSatoshi", e.message)
            return 0
        }
    }

    
}
