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
    root.FreeeAccountingClient.DealsIndexResponse = factory(root.FreeeAccountingClient.ApiClient, root.FreeeAccountingClient.Deals);
  }
}(this, function(ApiClient, Deals) {
  'use strict';




  /**
   * The DealsIndexResponse model module.
   * @module model/DealsIndexResponse
   * @version v1.0
   */

  /**
   * Constructs a new <code>DealsIndexResponse</code>.
   * @alias module:model/DealsIndexResponse
   * @class
   * @param deals {Array.<module:model/Deals>} 
   */
  var exports = function(deals) {
    var _this = this;

    _this['deals'] = deals;
  };

  /**
   * Constructs a <code>DealsIndexResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DealsIndexResponse} obj Optional instance to populate.
   * @return {module:model/DealsIndexResponse} The populated <code>DealsIndexResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('deals')) {
        obj['deals'] = ApiClient.convertToType(data['deals'], [Deals]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/Deals>} deals
   */
  exports.prototype['deals'] = undefined;



  return exports;
}));

