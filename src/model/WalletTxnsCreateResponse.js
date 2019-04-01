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
    define(['ApiClient', 'model/WalletTxns'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./WalletTxns'));
  } else {
    // Browser globals (root is window)
    if (!root.FreeeAccountingClient) {
      root.FreeeAccountingClient = {};
    }
    root.FreeeAccountingClient.WalletTxnsCreateResponse = factory(root.FreeeAccountingClient.ApiClient, root.FreeeAccountingClient.WalletTxns);
  }
}(this, function(ApiClient, WalletTxns) {
  'use strict';




  /**
   * The WalletTxnsCreateResponse model module.
   * @module model/WalletTxnsCreateResponse
   * @version v1.0
   */

  /**
   * Constructs a new <code>WalletTxnsCreateResponse</code>.
   * @alias module:model/WalletTxnsCreateResponse
   * @class
   * @param walletTxn {module:model/WalletTxns} 
   */
  var exports = function(walletTxn) {
    var _this = this;

    _this['wallet_txn'] = walletTxn;
  };

  /**
   * Constructs a <code>WalletTxnsCreateResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WalletTxnsCreateResponse} obj Optional instance to populate.
   * @return {module:model/WalletTxnsCreateResponse} The populated <code>WalletTxnsCreateResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('wallet_txn')) {
        obj['wallet_txn'] = WalletTxns.constructFromObject(data['wallet_txn']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/WalletTxns} wallet_txn
   */
  exports.prototype['wallet_txn'] = undefined;



  return exports;
}));


