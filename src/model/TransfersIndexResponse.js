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
    define(['ApiClient', 'model/Transfer'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Transfer'));
  } else {
    // Browser globals (root is window)
    if (!root.FreeeAccountingClient) {
      root.FreeeAccountingClient = {};
    }
    root.FreeeAccountingClient.TransfersIndexResponse = factory(root.FreeeAccountingClient.ApiClient, root.FreeeAccountingClient.Transfer);
  }
}(this, function(ApiClient, Transfer) {
  'use strict';




  /**
   * The TransfersIndexResponse model module.
   * @module model/TransfersIndexResponse
   * @version v0.0.2
   */

  /**
   * Constructs a new <code>TransfersIndexResponse</code>.
   * @alias module:model/TransfersIndexResponse
   * @class
   * @param transfers {Array.<module:model/Transfer>} 
   */
  var exports = function(transfers) {
    var _this = this;

    _this['transfers'] = transfers;
  };

  /**
   * Constructs a <code>TransfersIndexResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TransfersIndexResponse} obj Optional instance to populate.
   * @return {module:model/TransfersIndexResponse} The populated <code>TransfersIndexResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('transfers')) {
        obj['transfers'] = ApiClient.convertToType(data['transfers'], [Transfer]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/Transfer>} transfers
   */
  exports.prototype['transfers'] = undefined;



  return exports;
}));


