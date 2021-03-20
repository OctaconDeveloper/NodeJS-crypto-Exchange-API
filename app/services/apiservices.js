const axios = require("axios");

var baseURL = null;
var payload = null;
var response = null;
var headers = {};
var allowedMethods = [
    'post','get','patch','delete',
    'POST','GET','PATCH','DELETE'
]

class ApiService {
    constructor() {
      if (new.target === "ApiService") {
        throw new TypeError("Cannot construct Abstract instances directly");
      }
    }
    setBaseURL(data) {
        baseURL = data
    }
    setHeader(header) {
        headers = data
    }
    setPayload(data) {
        payload = data
    }
    getResponse() {
        return response
    }
    async makeRequest(method)
    { 
      switch(method)
      {
        case 'GET' : await this.handleGetRequest();
        break;
        case 'get' : await this.handleGetRequest();
        break; 

        default: response = "Invalid Request Parameter"
      }
    }

  async handleGetRequest(){
      await axios.get(baseURL, payload, headers)
      .then(result => {
        response = result.data
      })
      .catch(error => {
        response = error.data
      })
  }
  async handlePostRequest(){
    
  }
  async handlePatchRequest(){
    
  }
  async handleDeleteRequest(){
    
  }

  }

  module.exports = ApiService;