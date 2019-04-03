/**
 * freee API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.0-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/BadRequestError', 'model/ItemsCreateResponse', 'model/ItemsIndexResponse', 'model/Parameters4', 'model/UnauthorizedError'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/BadRequestError'), require('../model/ItemsCreateResponse'), require('../model/ItemsIndexResponse'), require('../model/Parameters4'), require('../model/UnauthorizedError'));
  } else {
    // Browser globals (root is window)
    if (!root.FreeeAccountingClient) {
      root.FreeeAccountingClient = {};
    }
    root.FreeeAccountingClient.ItemsApi = factory(root.FreeeAccountingClient.ApiClient, root.FreeeAccountingClient.BadRequestError, root.FreeeAccountingClient.ItemsCreateResponse, root.FreeeAccountingClient.ItemsIndexResponse, root.FreeeAccountingClient.Parameters4, root.FreeeAccountingClient.UnauthorizedError);
  }
}(this, function(ApiClient, BadRequestError, ItemsCreateResponse, ItemsIndexResponse, Parameters4, UnauthorizedError) {
  'use strict';

  /**
   * Items service.
   * @module api/ItemsApi
   * @version v0.0.2
   */

  /**
   * Constructs a new ItemsApi. 
   * @alias module:api/ItemsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createItem operation.
     * @callback module:api/ItemsApi~createItemCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ItemsCreateResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 品目の作成
     * 
     * @param {Object} opts Optional parameters
     * @param {module:model/Parameters4} opts.parameters 品目の作成
     * @param {module:api/ItemsApi~createItemCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ItemsCreateResponse}
     */
    this.createItem = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['parameters'];


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = ItemsCreateResponse;

      return this.apiClient.callApi(
        '/items', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getItems operation.
     * @callback module:api/ItemsApi~getItemsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ItemsIndexResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 品目一覧の取得
     * 
     * @param {Number} companyId 事業所ID
     * @param {module:api/ItemsApi~getItemsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ItemsIndexResponse}
     */
    this.getItems = function(companyId, callback) {
      var postBody = null;

      // verify the required parameter 'companyId' is set
      if (companyId === undefined || companyId === null) {
        throw new Error("Missing the required parameter 'companyId' when calling getItems");
      }


      var pathParams = {
      };
      var queryParams = {
        'company_id': companyId,
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = ItemsIndexResponse;

      return this.apiClient.callApi(
        '/items', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
