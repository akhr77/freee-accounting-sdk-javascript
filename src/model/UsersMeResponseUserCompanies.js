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
    root.FreeeAccountingClient.UsersMeResponseUserCompanies = factory(root.FreeeAccountingClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The UsersMeResponseUserCompanies model module.
   * @module model/UsersMeResponseUserCompanies
   * @version v1.0
   */

  /**
   * Constructs a new <code>UsersMeResponseUserCompanies</code>.
   * @alias module:model/UsersMeResponseUserCompanies
   * @class
   * @param id {Number} 事業所ID
   * @param displayName {String} 表示名
   * @param role {module:model/UsersMeResponseUserCompanies.RoleEnum} ユーザーの権限
   * @param useCustomRole {Boolean} カスタム権限（true: 使用する、false: 使用しない）
   */
  var exports = function(id, displayName, role, useCustomRole) {
    var _this = this;

    _this['id'] = id;
    _this['display_name'] = displayName;
    _this['role'] = role;
    _this['use_custom_role'] = useCustomRole;
  };

  /**
   * Constructs a <code>UsersMeResponseUserCompanies</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UsersMeResponseUserCompanies} obj Optional instance to populate.
   * @return {module:model/UsersMeResponseUserCompanies} The populated <code>UsersMeResponseUserCompanies</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('display_name')) {
        obj['display_name'] = ApiClient.convertToType(data['display_name'], 'String');
      }
      if (data.hasOwnProperty('role')) {
        obj['role'] = ApiClient.convertToType(data['role'], 'String');
      }
      if (data.hasOwnProperty('use_custom_role')) {
        obj['use_custom_role'] = ApiClient.convertToType(data['use_custom_role'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * 事業所ID
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * 表示名
   * @member {String} display_name
   */
  exports.prototype['display_name'] = undefined;
  /**
   * ユーザーの権限
   * @member {module:model/UsersMeResponseUserCompanies.RoleEnum} role
   */
  exports.prototype['role'] = undefined;
  /**
   * カスタム権限（true: 使用する、false: 使用しない）
   * @member {Boolean} use_custom_role
   */
  exports.prototype['use_custom_role'] = undefined;


  /**
   * Allowed values for the <code>role</code> property.
   * @enum {String}
   * @readonly
   */
  exports.RoleEnum = {
    /**
     * value: "admin"
     * @const
     */
    "admin": "admin",
    /**
     * value: "simple_accounting"
     * @const
     */
    "simple_accounting": "simple_accounting",
    /**
     * value: "self_only"
     * @const
     */
    "self_only": "self_only",
    /**
     * value: "read_only"
     * @const
     */
    "read_only": "read_only"  };


  return exports;
}));


