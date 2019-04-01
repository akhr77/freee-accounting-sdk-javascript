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
    define(['ApiClient', 'model/SelectablesIndexResponseAccountCategories', 'model/SelectablesIndexResponseAccountGroups'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SelectablesIndexResponseAccountCategories'), require('./SelectablesIndexResponseAccountGroups'));
  } else {
    // Browser globals (root is window)
    if (!root.FreeeAccountingClient) {
      root.FreeeAccountingClient = {};
    }
    root.FreeeAccountingClient.SelectablesIndexResponse = factory(root.FreeeAccountingClient.ApiClient, root.FreeeAccountingClient.SelectablesIndexResponseAccountCategories, root.FreeeAccountingClient.SelectablesIndexResponseAccountGroups);
  }
}(this, function(ApiClient, SelectablesIndexResponseAccountCategories, SelectablesIndexResponseAccountGroups) {
  'use strict';




  /**
   * The SelectablesIndexResponse model module.
   * @module model/SelectablesIndexResponse
   * @version v1.0
   */

  /**
   * Constructs a new <code>SelectablesIndexResponse</code>.
   * @alias module:model/SelectablesIndexResponse
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>SelectablesIndexResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SelectablesIndexResponse} obj Optional instance to populate.
   * @return {module:model/SelectablesIndexResponse} The populated <code>SelectablesIndexResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('account_categories')) {
        obj['account_categories'] = ApiClient.convertToType(data['account_categories'], [SelectablesIndexResponseAccountCategories]);
      }
      if (data.hasOwnProperty('account_groups')) {
        obj['account_groups'] = ApiClient.convertToType(data['account_groups'], [SelectablesIndexResponseAccountGroups]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/SelectablesIndexResponseAccountCategories>} account_categories
   */
  exports.prototype['account_categories'] = undefined;
  /**
   * 決算書表示名（小カテゴリー）
   * @member {Array.<module:model/SelectablesIndexResponseAccountGroups>} account_groups
   */
  exports.prototype['account_groups'] = undefined;



  return exports;
}));


