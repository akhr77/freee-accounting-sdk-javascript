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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.FreeeAccountingClient) {
      root.FreeeAccountingClient = {};
    }
    root.FreeeAccountingClient.TrialBalanceApi = factory(root.FreeeAccountingClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * TrialBalance service.
   * @module api/TrialBalanceApi
   * @version v0.0.2
   */

  /**
   * Constructs a new TrialBalanceApi. 
   * @alias module:api/TrialBalanceApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getTrialBs operation.
     * @callback module:api/TrialBalanceApi~getTrialBsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 貸借対照表の取得
     * 
     * @param {Number} companyId 事業所ID
     * @param {Object} opts Optional parameters
     * @param {Number} opts.fiscalYear 会計年度
     * @param {Number} opts.startMonth 発生月で絞込：開始会計月(mm)
     * @param {Number} opts.endMonth 発生月で絞込：終了会計月(mm)
     * @param {String} opts.startDate 発生日で絞込：開始日(yyyy-mm-dd)
     * @param {String} opts.endDate 発生日で絞込：終了日(yyyy-mm-dd)
     * @param {module:model/String} opts.accountItemDisplayType 勘定科目の表示（勘定科目: account_item, 決算書表示:group）
     * @param {module:model/String} opts.breakdownDisplayType 内訳の表示（取引先: partner, 品目: item, 勘定科目: account_item） ※勘定科目はaccount_item_display_typeが「group」の時のみ指定できます
     * @param {Number} opts.partnerId 取引先IDで絞込（0を指定すると、取引先が未選択で絞り込めます）
     * @param {Number} opts.itemId 品目IDで絞込（0を指定すると、品目が未選択で絞り込めます）
     * @param {module:model/String} opts.adjustment 決算整理仕訳で絞込（決算整理仕訳のみ: only, 決算整理仕訳以外: without）
     * @param {module:api/TrialBalanceApi~getTrialBsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getTrialBs = function(companyId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'companyId' is set
      if (companyId === undefined || companyId === null) {
        throw new Error("Missing the required parameter 'companyId' when calling getTrialBs");
      }


      var pathParams = {
      };
      var queryParams = {
        'company_id': companyId,
        'fiscal_year': opts['fiscalYear'],
        'start_month': opts['startMonth'],
        'end_month': opts['endMonth'],
        'start_date': opts['startDate'],
        'end_date': opts['endDate'],
        'account_item_display_type': opts['accountItemDisplayType'],
        'breakdown_display_type': opts['breakdownDisplayType'],
        'partner_id': opts['partnerId'],
        'item_id': opts['itemId'],
        'adjustment': opts['adjustment'],
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
        '/reports/trial_bs', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getTrialBsThreeYears operation.
     * @callback module:api/TrialBalanceApi~getTrialBsThreeYearsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 貸借対照表(３期間比較)の取得
     * 
     * @param {Number} companyId 事業所ID
     * @param {Object} opts Optional parameters
     * @param {Number} opts.fiscalYear 会計年度
     * @param {Number} opts.startMonth 発生月で絞込：開始会計月(mm)
     * @param {Number} opts.endMonth 発生月で絞込：終了会計月(mm)
     * @param {String} opts.startDate 発生日で絞込：開始日(yyyy-mm-dd)
     * @param {String} opts.endDate 発生日で絞込：終了日(yyyy-mm-dd)
     * @param {module:model/String} opts.accountItemDisplayType 勘定科目の表示（勘定科目: account_item, 決算書表示:group）
     * @param {module:model/String} opts.breakdownDisplayType 内訳の表示（取引先: partner, 品目: item, 勘定科目: account_item） ※勘定科目はaccount_item_display_typeが「group」の時のみ指定できます
     * @param {Number} opts.partnerId 取引先IDで絞込（0を指定すると、取引先が未選択で絞り込めます）
     * @param {Number} opts.itemId 品目IDで絞込（0を指定すると、品目が未選択で絞り込めます）
     * @param {module:model/String} opts.adjustment 決算整理仕訳で絞込（決算整理仕訳のみ: only, 決算整理仕訳以外: without）
     * @param {module:api/TrialBalanceApi~getTrialBsThreeYearsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getTrialBsThreeYears = function(companyId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'companyId' is set
      if (companyId === undefined || companyId === null) {
        throw new Error("Missing the required parameter 'companyId' when calling getTrialBsThreeYears");
      }


      var pathParams = {
      };
      var queryParams = {
        'company_id': companyId,
        'fiscal_year': opts['fiscalYear'],
        'start_month': opts['startMonth'],
        'end_month': opts['endMonth'],
        'start_date': opts['startDate'],
        'end_date': opts['endDate'],
        'account_item_display_type': opts['accountItemDisplayType'],
        'breakdown_display_type': opts['breakdownDisplayType'],
        'partner_id': opts['partnerId'],
        'item_id': opts['itemId'],
        'adjustment': opts['adjustment'],
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
        '/reports/trial_bs_three_years', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getTrialBsTwoYears operation.
     * @callback module:api/TrialBalanceApi~getTrialBsTwoYearsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 貸借対照表(前年比較)の取得
     * 
     * @param {Number} companyId 事業所ID
     * @param {Object} opts Optional parameters
     * @param {Number} opts.fiscalYear 会計年度
     * @param {Number} opts.startMonth 発生月で絞込：開始会計月(mm)
     * @param {Number} opts.endMonth 発生月で絞込：終了会計月(mm)
     * @param {String} opts.startDate 発生日で絞込：開始日(yyyy-mm-dd)
     * @param {String} opts.endDate 発生日で絞込：終了日(yyyy-mm-dd)
     * @param {module:model/String} opts.accountItemDisplayType 勘定科目の表示（勘定科目: account_item, 決算書表示:group）
     * @param {module:model/String} opts.breakdownDisplayType 内訳の表示（取引先: partner, 品目: item, 勘定科目: account_item） ※勘定科目はaccount_item_display_typeが「group」の時のみ指定できます
     * @param {Number} opts.partnerId 取引先IDで絞込（0を指定すると、取引先が未選択で絞り込めます）
     * @param {Number} opts.itemId 品目IDで絞込（0を指定すると、品目が未選択で絞り込めます）
     * @param {module:model/String} opts.adjustment 決算整理仕訳で絞込（決算整理仕訳のみ: only, 決算整理仕訳以外: without）
     * @param {module:api/TrialBalanceApi~getTrialBsTwoYearsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getTrialBsTwoYears = function(companyId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'companyId' is set
      if (companyId === undefined || companyId === null) {
        throw new Error("Missing the required parameter 'companyId' when calling getTrialBsTwoYears");
      }


      var pathParams = {
      };
      var queryParams = {
        'company_id': companyId,
        'fiscal_year': opts['fiscalYear'],
        'start_month': opts['startMonth'],
        'end_month': opts['endMonth'],
        'start_date': opts['startDate'],
        'end_date': opts['endDate'],
        'account_item_display_type': opts['accountItemDisplayType'],
        'breakdown_display_type': opts['breakdownDisplayType'],
        'partner_id': opts['partnerId'],
        'item_id': opts['itemId'],
        'adjustment': opts['adjustment'],
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
        '/reports/trial_bs_two_years', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getTrialPl operation.
     * @callback module:api/TrialBalanceApi~getTrialPlCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 損益計算書の取得
     * 
     * @param {Number} companyId 事業所ID
     * @param {Object} opts Optional parameters
     * @param {Number} opts.fiscalYear 会計年度
     * @param {Number} opts.startMonth 発生月で絞込：開始会計月(mm)
     * @param {Number} opts.endMonth 発生月で絞込：終了会計月(mm)
     * @param {String} opts.startDate 発生日で絞込：開始日(yyyy-mm-dd)
     * @param {String} opts.endDate 発生日で絞込：終了日(yyyy-mm-dd)
     * @param {module:model/String} opts.accountItemDisplayType 勘定科目の表示（勘定科目: account_item, 決算書表示:group）
     * @param {module:model/String} opts.breakdownDisplayType 内訳の表示（取引先: partner, 品目: item, 部門: section, 勘定科目: account_item） ※勘定科目はaccount_item_display_typeが「group」の時のみ指定できます
     * @param {Number} opts.partnerId 取引先IDで絞込（0を指定すると、取引先が未選択で絞り込めます）
     * @param {Number} opts.itemId 品目IDで絞込（0を指定すると、品目が未選択で絞り込めます）
     * @param {Number} opts.sectionId 部門IDで絞込（0を指定すると、部門が未選択で絞り込めます）
     * @param {module:model/String} opts.adjustment 決算整理仕訳で絞込（決算整理仕訳のみ: only, 決算整理仕訳以外: without）
     * @param {module:model/String} opts.costAllocation 配賦仕訳で絞込（配賦仕訳のみ：only,配賦仕訳以外：without）
     * @param {module:api/TrialBalanceApi~getTrialPlCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getTrialPl = function(companyId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'companyId' is set
      if (companyId === undefined || companyId === null) {
        throw new Error("Missing the required parameter 'companyId' when calling getTrialPl");
      }


      var pathParams = {
      };
      var queryParams = {
        'company_id': companyId,
        'fiscal_year': opts['fiscalYear'],
        'start_month': opts['startMonth'],
        'end_month': opts['endMonth'],
        'start_date': opts['startDate'],
        'end_date': opts['endDate'],
        'account_item_display_type': opts['accountItemDisplayType'],
        'breakdown_display_type': opts['breakdownDisplayType'],
        'partner_id': opts['partnerId'],
        'item_id': opts['itemId'],
        'section_id': opts['sectionId'],
        'adjustment': opts['adjustment'],
        'cost_allocation': opts['costAllocation'],
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
        '/reports/trial_pl', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getTrialPlSections operation.
     * @callback module:api/TrialBalanceApi~getTrialPlSectionsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 損益計算書(部門比較)の取得
     * 
     * @param {Number} companyId 事業所ID
     * @param {String} sectionIds 出力する部門の指定（半角数字のidを半角カンマ区切りスペースなしで指定してください）
     * @param {Object} opts Optional parameters
     * @param {Number} opts.fiscalYear 会計年度
     * @param {Number} opts.startMonth 発生月で絞込：開始会計月(mm)
     * @param {Number} opts.endMonth 発生月で絞込：終了会計月(mm)
     * @param {String} opts.startDate 発生日で絞込：開始日(yyyy-mm-dd)
     * @param {String} opts.endDate 発生日で絞込：終了日(yyyy-mm-dd)
     * @param {module:model/String} opts.accountItemDisplayType 勘定科目の表示（勘定科目: account_item, 決算書表示:group）
     * @param {module:model/String} opts.breakdownDisplayType 内訳の表示（取引先: partner, 品目: item, 部門: section, 勘定科目: account_item） ※勘定科目はaccount_item_display_typeが「group」の時のみ指定できます
     * @param {Number} opts.partnerId 取引先IDで絞込（0を指定すると、取引先が未選択で絞り込めます）
     * @param {Number} opts.itemId 品目IDで絞込（0を指定すると、品目が未選択で絞り込めます）
     * @param {module:model/String} opts.adjustment 決算整理仕訳で絞込（決算整理仕訳のみ: only, 決算整理仕訳以外: without）
     * @param {module:model/String} opts.costAllocation 配賦仕訳で絞込（配賦仕訳のみ：only,配賦仕訳以外：without）
     * @param {module:api/TrialBalanceApi~getTrialPlSectionsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getTrialPlSections = function(companyId, sectionIds, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'companyId' is set
      if (companyId === undefined || companyId === null) {
        throw new Error("Missing the required parameter 'companyId' when calling getTrialPlSections");
      }

      // verify the required parameter 'sectionIds' is set
      if (sectionIds === undefined || sectionIds === null) {
        throw new Error("Missing the required parameter 'sectionIds' when calling getTrialPlSections");
      }


      var pathParams = {
      };
      var queryParams = {
        'company_id': companyId,
        'section_ids': sectionIds,
        'fiscal_year': opts['fiscalYear'],
        'start_month': opts['startMonth'],
        'end_month': opts['endMonth'],
        'start_date': opts['startDate'],
        'end_date': opts['endDate'],
        'account_item_display_type': opts['accountItemDisplayType'],
        'breakdown_display_type': opts['breakdownDisplayType'],
        'partner_id': opts['partnerId'],
        'item_id': opts['itemId'],
        'adjustment': opts['adjustment'],
        'cost_allocation': opts['costAllocation'],
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
        '/reports/trial_pl_sections', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getTrialPlThreeYears operation.
     * @callback module:api/TrialBalanceApi~getTrialPlThreeYearsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 損益計算書(３期間比較)の取得
     * 
     * @param {Number} companyId 事業所ID
     * @param {Object} opts Optional parameters
     * @param {Number} opts.fiscalYear 会計年度
     * @param {Number} opts.startMonth 発生月で絞込：開始会計月(mm)
     * @param {Number} opts.endMonth 発生月で絞込：終了会計月(mm)
     * @param {String} opts.startDate 発生日で絞込：開始日(yyyy-mm-dd)
     * @param {String} opts.endDate 発生日で絞込：終了日(yyyy-mm-dd)
     * @param {module:model/String} opts.accountItemDisplayType 勘定科目の表示（勘定科目: account_item, 決算書表示:group）
     * @param {module:model/String} opts.breakdownDisplayType 内訳の表示（取引先: partner, 品目: item, 部門: section, 勘定科目: account_item） ※勘定科目はaccount_item_display_typeが「group」の時のみ指定できます
     * @param {Number} opts.partnerId 取引先IDで絞込（0を指定すると、取引先が未選択で絞り込めます）
     * @param {Number} opts.itemId 品目IDで絞込（0を指定すると、品目が未選択で絞り込めます）
     * @param {Number} opts.sectionId 部門IDで絞込（0を指定すると、部門が未選択で絞り込めます）
     * @param {module:model/String} opts.adjustment 決算整理仕訳で絞込（決算整理仕訳のみ: only, 決算整理仕訳以外: without）
     * @param {module:model/String} opts.costAllocation 配賦仕訳で絞込（配賦仕訳のみ：only,配賦仕訳以外：without）
     * @param {module:api/TrialBalanceApi~getTrialPlThreeYearsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getTrialPlThreeYears = function(companyId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'companyId' is set
      if (companyId === undefined || companyId === null) {
        throw new Error("Missing the required parameter 'companyId' when calling getTrialPlThreeYears");
      }


      var pathParams = {
      };
      var queryParams = {
        'company_id': companyId,
        'fiscal_year': opts['fiscalYear'],
        'start_month': opts['startMonth'],
        'end_month': opts['endMonth'],
        'start_date': opts['startDate'],
        'end_date': opts['endDate'],
        'account_item_display_type': opts['accountItemDisplayType'],
        'breakdown_display_type': opts['breakdownDisplayType'],
        'partner_id': opts['partnerId'],
        'item_id': opts['itemId'],
        'section_id': opts['sectionId'],
        'adjustment': opts['adjustment'],
        'cost_allocation': opts['costAllocation'],
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
        '/reports/trial_pl_three_years', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getTrialPlTwoYears operation.
     * @callback module:api/TrialBalanceApi~getTrialPlTwoYearsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 損益計算書(前年比較)の取得
     * 
     * @param {Number} companyId 事業所ID
     * @param {Object} opts Optional parameters
     * @param {Number} opts.fiscalYear 会計年度
     * @param {Number} opts.startMonth 発生月で絞込：開始会計月(mm)
     * @param {Number} opts.endMonth 発生月で絞込：終了会計月(mm)
     * @param {String} opts.startDate 発生日で絞込：開始日(yyyy-mm-dd)
     * @param {String} opts.endDate 発生日で絞込：終了日(yyyy-mm-dd)
     * @param {module:model/String} opts.accountItemDisplayType 勘定科目の表示（勘定科目: account_item, 決算書表示:group）
     * @param {module:model/String} opts.breakdownDisplayType 内訳の表示（取引先: partner, 品目: item, 部門: section, 勘定科目: account_item） ※勘定科目はaccount_item_display_typeが「group」の時のみ指定できます
     * @param {Number} opts.partnerId 取引先IDで絞込（0を指定すると、取引先が未選択で絞り込めます）
     * @param {Number} opts.itemId 品目IDで絞込（0を指定すると、品目が未選択で絞り込めます）
     * @param {Number} opts.sectionId 部門IDで絞込（0を指定すると、部門が未選択で絞り込めます）
     * @param {module:model/String} opts.adjustment 決算整理仕訳で絞込（決算整理仕訳のみ: only, 決算整理仕訳以外: without）
     * @param {module:model/String} opts.costAllocation 配賦仕訳で絞込（配賦仕訳のみ：only,配賦仕訳以外：without）
     * @param {module:api/TrialBalanceApi~getTrialPlTwoYearsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getTrialPlTwoYears = function(companyId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'companyId' is set
      if (companyId === undefined || companyId === null) {
        throw new Error("Missing the required parameter 'companyId' when calling getTrialPlTwoYears");
      }


      var pathParams = {
      };
      var queryParams = {
        'company_id': companyId,
        'fiscal_year': opts['fiscalYear'],
        'start_month': opts['startMonth'],
        'end_month': opts['endMonth'],
        'start_date': opts['startDate'],
        'end_date': opts['endDate'],
        'account_item_display_type': opts['accountItemDisplayType'],
        'breakdown_display_type': opts['breakdownDisplayType'],
        'partner_id': opts['partnerId'],
        'item_id': opts['itemId'],
        'section_id': opts['sectionId'],
        'adjustment': opts['adjustment'],
        'cost_allocation': opts['costAllocation'],
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
        '/reports/trial_pl_two_years', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
