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
    root.FreeeAccountingClient.SectionsIndexResponseSections = factory(root.FreeeAccountingClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SectionsIndexResponseSections model module.
   * @module model/SectionsIndexResponseSections
   * @version v1.0
   */

  /**
   * Constructs a new <code>SectionsIndexResponseSections</code>.
   * @alias module:model/SectionsIndexResponseSections
   * @class
   * @param id {Number} 部門ID
   * @param name {String} 部門名 (30文字以内)
   * @param companyId {Number} 事業所ID
   */
  var exports = function(id, name, companyId) {
    var _this = this;

    _this['id'] = id;
    _this['name'] = name;
    _this['company_id'] = companyId;
  };

  /**
   * Constructs a <code>SectionsIndexResponseSections</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SectionsIndexResponseSections} obj Optional instance to populate.
   * @return {module:model/SectionsIndexResponseSections} The populated <code>SectionsIndexResponseSections</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('company_id')) {
        obj['company_id'] = ApiClient.convertToType(data['company_id'], 'Number');
      }
    }
    return obj;
  }

  /**
   * 部門ID
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * 部門名 (30文字以内)
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * 事業所ID
   * @member {Number} company_id
   */
  exports.prototype['company_id'] = undefined;



  return exports;
}));

