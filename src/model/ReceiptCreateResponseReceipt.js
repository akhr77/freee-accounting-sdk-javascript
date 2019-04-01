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
    define(['ApiClient', 'model/ReceiptCreateResponseReceiptUser'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ReceiptCreateResponseReceiptUser'));
  } else {
    // Browser globals (root is window)
    if (!root.FreeeAccountingClient) {
      root.FreeeAccountingClient = {};
    }
    root.FreeeAccountingClient.ReceiptCreateResponseReceipt = factory(root.FreeeAccountingClient.ApiClient, root.FreeeAccountingClient.ReceiptCreateResponseReceiptUser);
  }
}(this, function(ApiClient, ReceiptCreateResponseReceiptUser) {
  'use strict';




  /**
   * The ReceiptCreateResponseReceipt model module.
   * @module model/ReceiptCreateResponseReceipt
   * @version v1.0
   */

  /**
   * Constructs a new <code>ReceiptCreateResponseReceipt</code>.
   * @alias module:model/ReceiptCreateResponseReceipt
   * @class
   * @param id {Number} 証憑ID
   * @param status {module:model/ReceiptCreateResponseReceipt.StatusEnum} ステータス
   * @param origin {module:model/ReceiptCreateResponseReceipt.OriginEnum} アップロード元種別
   * @param createdAt {String} 作成日時（ISO8601形式）
   * @param user {module:model/ReceiptCreateResponseReceiptUser} 
   */
  var exports = function(id, status, origin, createdAt, user) {
    var _this = this;

    _this['id'] = id;
    _this['status'] = status;

    _this['origin'] = origin;
    _this['created_at'] = createdAt;
    _this['user'] = user;
  };

  /**
   * Constructs a <code>ReceiptCreateResponseReceipt</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ReceiptCreateResponseReceipt} obj Optional instance to populate.
   * @return {module:model/ReceiptCreateResponseReceipt} The populated <code>ReceiptCreateResponseReceipt</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('issue_date')) {
        obj['issue_date'] = ApiClient.convertToType(data['issue_date'], 'String');
      }
      if (data.hasOwnProperty('origin')) {
        obj['origin'] = ApiClient.convertToType(data['origin'], 'String');
      }
      if (data.hasOwnProperty('created_at')) {
        obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
      }
      if (data.hasOwnProperty('user')) {
        obj['user'] = ReceiptCreateResponseReceiptUser.constructFromObject(data['user']);
      }
    }
    return obj;
  }

  /**
   * 証憑ID
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * ステータス
   * @member {module:model/ReceiptCreateResponseReceipt.StatusEnum} status
   */
  exports.prototype['status'] = undefined;
  /**
   * 発生日
   * @member {String} issue_date
   */
  exports.prototype['issue_date'] = undefined;
  /**
   * アップロード元種別
   * @member {module:model/ReceiptCreateResponseReceipt.OriginEnum} origin
   */
  exports.prototype['origin'] = undefined;
  /**
   * 作成日時（ISO8601形式）
   * @member {String} created_at
   */
  exports.prototype['created_at'] = undefined;
  /**
   * @member {module:model/ReceiptCreateResponseReceiptUser} user
   */
  exports.prototype['user'] = undefined;


  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "unconfirmed"
     * @const
     */
    "unconfirmed": "unconfirmed",
    /**
     * value: "confirmed"
     * @const
     */
    "confirmed": "confirmed",
    /**
     * value: "deleted"
     * @const
     */
    "deleted": "deleted",
    /**
     * value: "ignored"
     * @const
     */
    "ignored": "ignored"  };

  /**
   * Allowed values for the <code>origin</code> property.
   * @enum {String}
   * @readonly
   */
  exports.OriginEnum = {
    /**
     * value: "unknown"
     * @const
     */
    "unknown": "unknown",
    /**
     * value: "web"
     * @const
     */
    "web": "web",
    /**
     * value: "mobile_camera"
     * @const
     */
    "mobile_camera": "mobile_camera",
    /**
     * value: "mobile_album"
     * @const
     */
    "mobile_album": "mobile_album",
    /**
     * value: "scansnap"
     * @const
     */
    "scansnap": "scansnap",
    /**
     * value: "scannable"
     * @const
     */
    "scannable": "scannable",
    /**
     * value: "dropbox"
     * @const
     */
    "dropbox": "dropbox",
    /**
     * value: "mail"
     * @const
     */
    "mail": "mail",
    /**
     * value: "safety_contact_file"
     * @const
     */
    "safety_contact_file": "safety_contact_file",
    /**
     * value: "public_api"
     * @const
     */
    "public_api": "public_api"  };


  return exports;
}));


