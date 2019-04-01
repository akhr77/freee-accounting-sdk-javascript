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
    define(['ApiClient', 'model/BadRequestError', 'model/Parameters1', 'model/SectionParams', 'model/SectionsCreateResponse', 'model/SectionsIndexResponse', 'model/SectionsUpdateResponse', 'model/UnauthorizedError'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/BadRequestError'), require('../model/Parameters1'), require('../model/SectionParams'), require('../model/SectionsCreateResponse'), require('../model/SectionsIndexResponse'), require('../model/SectionsUpdateResponse'), require('../model/UnauthorizedError'));
  } else {
    // Browser globals (root is window)
    if (!root.FreeeAccountingClient) {
      root.FreeeAccountingClient = {};
    }
    root.FreeeAccountingClient.SectionsApi = factory(root.FreeeAccountingClient.ApiClient, root.FreeeAccountingClient.BadRequestError, root.FreeeAccountingClient.Parameters1, root.FreeeAccountingClient.SectionParams, root.FreeeAccountingClient.SectionsCreateResponse, root.FreeeAccountingClient.SectionsIndexResponse, root.FreeeAccountingClient.SectionsUpdateResponse, root.FreeeAccountingClient.UnauthorizedError);
  }
}(this, function(ApiClient, BadRequestError, Parameters1, SectionParams, SectionsCreateResponse, SectionsIndexResponse, SectionsUpdateResponse, UnauthorizedError) {
  'use strict';

  /**
   * Sections service.
   * @module api/SectionsApi
   * @version v1.0
   */

  /**
   * Constructs a new SectionsApi. 
   * @alias module:api/SectionsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createSection operation.
     * @callback module:api/SectionsApi~createSectionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SectionsCreateResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 部門の作成
     * 
     * @param {Object} opts Optional parameters
     * @param {module:model/SectionParams} opts.parameters 部門の作成
     * @param {module:api/SectionsApi~createSectionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SectionsCreateResponse}
     */
    this.createSection = function(opts, callback) {
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
      var returnType = SectionsCreateResponse;

      return this.apiClient.callApi(
        '/sections', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the destroySection operation.
     * @callback module:api/SectionsApi~destroySectionCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 部門の削除
     * 
     * @param {Number} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/Parameters1} opts.parameters 部門の削除
     * @param {module:api/SectionsApi~destroySectionCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.destroySection = function(id, opts, callback) {
      opts = opts || {};
      var postBody = opts['parameters'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling destroySection");
      }


      var pathParams = {
        'id': id
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
      var returnType = null;

      return this.apiClient.callApi(
        '/sections/{id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getSections operation.
     * @callback module:api/SectionsApi~getSectionsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SectionsIndexResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 部門一覧の取得
     * 
     * @param {Number} companyId 事業所ID
     * @param {module:api/SectionsApi~getSectionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SectionsIndexResponse}
     */
    this.getSections = function(companyId, callback) {
      var postBody = null;

      // verify the required parameter 'companyId' is set
      if (companyId === undefined || companyId === null) {
        throw new Error("Missing the required parameter 'companyId' when calling getSections");
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
      var returnType = SectionsIndexResponse;

      return this.apiClient.callApi(
        '/sections', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateSection operation.
     * @callback module:api/SectionsApi~updateSectionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SectionsUpdateResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 部門の更新
     * 
     * @param {Number} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/SectionParams} opts.parameters 部門の更新
     * @param {module:api/SectionsApi~updateSectionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SectionsUpdateResponse}
     */
    this.updateSection = function(id, opts, callback) {
      opts = opts || {};
      var postBody = opts['parameters'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateSection");
      }


      var pathParams = {
        'id': id
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
      var returnType = SectionsUpdateResponse;

      return this.apiClient.callApi(
        '/sections/{id}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));