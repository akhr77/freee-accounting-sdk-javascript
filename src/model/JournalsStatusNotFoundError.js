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
    root.FreeeAccountingClient.JournalsStatusNotFoundError = factory(root.FreeeAccountingClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The JournalsStatusNotFoundError model module.
   * @module model/JournalsStatusNotFoundError
   * @version v0.0.2
   */

  /**
   * Constructs a new <code>JournalsStatusNotFoundError</code>.
   * @alias module:model/JournalsStatusNotFoundError
   * @class
   * @param message {module:model/JournalsStatusNotFoundError.MessageEnum} 
   */
  var exports = function(message) {
    var _this = this;

    _this['message'] = message;
  };

  /**
   * Constructs a <code>JournalsStatusNotFoundError</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/JournalsStatusNotFoundError} obj Optional instance to populate.
   * @return {module:model/JournalsStatusNotFoundError} The populated <code>JournalsStatusNotFoundError</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/JournalsStatusNotFoundError.MessageEnum} message
   */
  exports.prototype['message'] = undefined;


  /**
   * Allowed values for the <code>message</code> property.
   * @enum {String}
   * @readonly
   */
  exports.MessageEnum = {
    /**
     * value: "指定されたIDは存在しません。"
     * @const
     */
    "指定されたIDは存在しません。": "指定されたIDは存在しません。"  };


  return exports;
}));


