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
    define(['ApiClient', 'model/AccountItem'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AccountItem'));
  } else {
    // Browser globals (root is window)
    if (!root.FreeeAccountingClient) {
      root.FreeeAccountingClient = {};
    }
    root.FreeeAccountingClient.AccountItemsUpdateResponse = factory(root.FreeeAccountingClient.ApiClient, root.FreeeAccountingClient.AccountItem);
  }
}(this, function(ApiClient, AccountItem) {
  'use strict';




  /**
   * The AccountItemsUpdateResponse model module.
   * @module model/AccountItemsUpdateResponse
   * @version v1.0
   */

  /**
   * Constructs a new <code>AccountItemsUpdateResponse</code>.
   * @alias module:model/AccountItemsUpdateResponse
   * @class
   * @param accountItem {module:model/AccountItem} 
   */
  var exports = function(accountItem) {
    var _this = this;

    _this['account_item'] = accountItem;
  };

  /**
   * Constructs a <code>AccountItemsUpdateResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AccountItemsUpdateResponse} obj Optional instance to populate.
   * @return {module:model/AccountItemsUpdateResponse} The populated <code>AccountItemsUpdateResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('account_item')) {
        obj['account_item'] = AccountItem.constructFromObject(data['account_item']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/AccountItem} account_item
   */
  exports.prototype['account_item'] = undefined;



  return exports;
}));


