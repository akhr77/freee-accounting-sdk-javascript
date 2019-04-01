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
    define(['ApiClient', 'model/SelectablesIndexResponseDefaultTax'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SelectablesIndexResponseDefaultTax'));
  } else {
    // Browser globals (root is window)
    if (!root.FreeeAccountingClient) {
      root.FreeeAccountingClient = {};
    }
    root.FreeeAccountingClient.SelectablesIndexResponseAccountItems = factory(root.FreeeAccountingClient.ApiClient, root.FreeeAccountingClient.SelectablesIndexResponseDefaultTax);
  }
}(this, function(ApiClient, SelectablesIndexResponseDefaultTax) {
  'use strict';




  /**
   * The SelectablesIndexResponseAccountItems model module.
   * @module model/SelectablesIndexResponseAccountItems
   * @version v1.0
   */

  /**
   * Constructs a new <code>SelectablesIndexResponseAccountItems</code>.
   * @alias module:model/SelectablesIndexResponseAccountItems
   * @class
   * @param id {Number} 勘定科目ID
   */
  var exports = function(id) {
    var _this = this;

    _this['id'] = id;





  };

  /**
   * Constructs a <code>SelectablesIndexResponseAccountItems</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SelectablesIndexResponseAccountItems} obj Optional instance to populate.
   * @return {module:model/SelectablesIndexResponseAccountItems} The populated <code>SelectablesIndexResponseAccountItems</code> instance.
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
      if (data.hasOwnProperty('desc')) {
        obj['desc'] = ApiClient.convertToType(data['desc'], 'String');
      }
      if (data.hasOwnProperty('help')) {
        obj['help'] = ApiClient.convertToType(data['help'], 'String');
      }
      if (data.hasOwnProperty('shortcut')) {
        obj['shortcut'] = ApiClient.convertToType(data['shortcut'], 'String');
      }
      if (data.hasOwnProperty('default_tax')) {
        obj['default_tax'] = SelectablesIndexResponseDefaultTax.constructFromObject(data['default_tax']);
      }
    }
    return obj;
  }

  /**
   * 勘定科目ID
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * 勘定科目
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * 勘定科目の説明
   * @member {String} desc
   */
  exports.prototype['desc'] = undefined;
  /**
   * 勘定科目の説明（詳細）
   * @member {String} help
   */
  exports.prototype['help'] = undefined;
  /**
   * ショートカット
   * @member {String} shortcut
   */
  exports.prototype['shortcut'] = undefined;
  /**
   * @member {module:model/SelectablesIndexResponseDefaultTax} default_tax
   */
  exports.prototype['default_tax'] = undefined;



  return exports;
}));

