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
    define(['ApiClient', 'model/Deals'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Deals'));
  } else {
    // Browser globals (root is window)
    if (!root.FreeeAccountingClient) {
      root.FreeeAccountingClient = {};
    }
    root.FreeeAccountingClient.RenewsResponse = factory(root.FreeeAccountingClient.ApiClient, root.FreeeAccountingClient.Deals);
  }
}(this, function(ApiClient, Deals) {
  'use strict';




  /**
   * The RenewsResponse model module.
   * @module model/RenewsResponse
   * @version v1.0
   */

  /**
   * Constructs a new <code>RenewsResponse</code>.
   * @alias module:model/RenewsResponse
   * @class
   * @param deal {module:model/Deals} 
   */
  var exports = function(deal) {
    var _this = this;

    _this['deal'] = deal;
  };

  /**
   * Constructs a <code>RenewsResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RenewsResponse} obj Optional instance to populate.
   * @return {module:model/RenewsResponse} The populated <code>RenewsResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('deal')) {
        obj['deal'] = Deals.constructFromObject(data['deal']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Deals} deal
   */
  exports.prototype['deal'] = undefined;



  return exports;
}));


