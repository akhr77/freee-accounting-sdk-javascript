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
    define(['ApiClient', 'model/BadRequestError', 'model/JournalsDownloadNotFoundError', 'model/JournalsEnqueueJournalsResponse', 'model/JournalsStatusNotFoundError', 'model/JournalsStatusResponse', 'model/UnauthorizedError'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/BadRequestError'), require('../model/JournalsDownloadNotFoundError'), require('../model/JournalsEnqueueJournalsResponse'), require('../model/JournalsStatusNotFoundError'), require('../model/JournalsStatusResponse'), require('../model/UnauthorizedError'));
  } else {
    // Browser globals (root is window)
    if (!root.FreeeAccountingClient) {
      root.FreeeAccountingClient = {};
    }
    root.FreeeAccountingClient.JournalsApi = factory(root.FreeeAccountingClient.ApiClient, root.FreeeAccountingClient.BadRequestError, root.FreeeAccountingClient.JournalsDownloadNotFoundError, root.FreeeAccountingClient.JournalsEnqueueJournalsResponse, root.FreeeAccountingClient.JournalsStatusNotFoundError, root.FreeeAccountingClient.JournalsStatusResponse, root.FreeeAccountingClient.UnauthorizedError);
  }
}(this, function(ApiClient, BadRequestError, JournalsDownloadNotFoundError, JournalsEnqueueJournalsResponse, JournalsStatusNotFoundError, JournalsStatusResponse, UnauthorizedError) {
  'use strict';

  /**
   * Journals service.
   * @module api/JournalsApi
   * @version v1.0
   */

  /**
   * Constructs a new JournalsApi. 
   * @alias module:api/JournalsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the downloadJournal operation.
     * @callback module:api/JournalsApi~downloadJournalCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * ダウンロード実行
     * 
     * @param {Number} id 受け付けID
     * @param {Number} companyId 事業所ID
     * @param {module:api/JournalsApi~downloadJournalCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.downloadJournal = function(id, companyId, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling downloadJournal");
      }

      // verify the required parameter 'companyId' is set
      if (companyId === undefined || companyId === null) {
        throw new Error("Missing the required parameter 'companyId' when calling downloadJournal");
      }


      var pathParams = {
        'id': id
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
      var accepts = ['application/pdf', 'text/csv; charset=sjis; header=present'];
      var returnType = null;

      return this.apiClient.callApi(
        '/journals/reports/{id}/download', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getJournalStatus operation.
     * @callback module:api/JournalsApi~getJournalStatusCallback
     * @param {String} error Error message, if any.
     * @param {module:model/JournalsStatusResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * ステータス確認
     * 
     * @param {Number} companyId 事業所ID
     * @param {Number} id 受け付けID
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.visibleTags 補助科目やコメントとして出力する項目
     * @param {String} opts.startDate 取得開始日 (yyyy-mm-dd)
     * @param {String} opts.endDate 取得終了日 (yyyy-mm-dd)
     * @param {module:api/JournalsApi~getJournalStatusCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/JournalsStatusResponse}
     */
    this.getJournalStatus = function(companyId, id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'companyId' is set
      if (companyId === undefined || companyId === null) {
        throw new Error("Missing the required parameter 'companyId' when calling getJournalStatus");
      }

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getJournalStatus");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'company_id': companyId,
        'start_date': opts['startDate'],
        'end_date': opts['endDate'],
      };
      var collectionQueryParams = {
        'visible_tags': {
          value: opts['visibleTags'],
          collectionFormat: 'csv'
        },
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = JournalsStatusResponse;

      return this.apiClient.callApi(
        '/journals/reports/{id}/status', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getJournals operation.
     * @callback module:api/JournalsApi~getJournalsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/JournalsEnqueueJournalsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * ダウンロード要求
     * 
     * @param {module:model/String} downloadType ダウンロード形式
     * @param {Number} companyId 事業所ID
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.visibleTags 補助科目やコメントとして出力する項目
     * @param {String} opts.startDate 取得開始日 (yyyy-mm-dd)
     * @param {String} opts.endDate 取得終了日 (yyyy-mm-dd)
     * @param {module:api/JournalsApi~getJournalsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/JournalsEnqueueJournalsResponse}
     */
    this.getJournals = function(downloadType, companyId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'downloadType' is set
      if (downloadType === undefined || downloadType === null) {
        throw new Error("Missing the required parameter 'downloadType' when calling getJournals");
      }

      // verify the required parameter 'companyId' is set
      if (companyId === undefined || companyId === null) {
        throw new Error("Missing the required parameter 'companyId' when calling getJournals");
      }


      var pathParams = {
      };
      var queryParams = {
        'download_type': downloadType,
        'company_id': companyId,
        'start_date': opts['startDate'],
        'end_date': opts['endDate'],
      };
      var collectionQueryParams = {
        'visible_tags': {
          value: opts['visibleTags'],
          collectionFormat: 'csv'
        },
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = JournalsEnqueueJournalsResponse;

      return this.apiClient.callApi(
        '/journals', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
