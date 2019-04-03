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
    define(['ApiClient', 'model/DealsRenewsDetails'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DealsRenewsDetails'));
  } else {
    // Browser globals (root is window)
    if (!root.FreeeAccountingClient) {
      root.FreeeAccountingClient = {};
    }
    root.FreeeAccountingClient.DealsRenews = factory(root.FreeeAccountingClient.ApiClient, root.FreeeAccountingClient.DealsRenewsDetails);
  }
}(this, function(ApiClient, DealsRenewsDetails) {
  'use strict';




  /**
   * The DealsRenews model module.
   * @module model/DealsRenews
   * @version v0.0.2
   */

  /**
   * Constructs a new <code>DealsRenews</code>.
   * @alias module:model/DealsRenews
   * @class
   * @param id {Number} +更新行ID
   * @param updateDate {String} 更新日 (yyyy-mm-dd)
   * @param renewTargetId {Number} +更新の対象行ID
   * @param renewTargetType {module:model/DealsRenews.RenewTargetTypeEnum} +更新の対象行タイプ
   * @param details {Array.<module:model/DealsRenewsDetails>} +更新の明細行一覧（配列）
   */
  var exports = function(id, updateDate, renewTargetId, renewTargetType, details) {
    var _this = this;

    _this['id'] = id;
    _this['update_date'] = updateDate;
    _this['renew_target_id'] = renewTargetId;
    _this['renew_target_type'] = renewTargetType;
    _this['details'] = details;
  };

  /**
   * Constructs a <code>DealsRenews</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DealsRenews} obj Optional instance to populate.
   * @return {module:model/DealsRenews} The populated <code>DealsRenews</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('update_date')) {
        obj['update_date'] = ApiClient.convertToType(data['update_date'], 'String');
      }
      if (data.hasOwnProperty('renew_target_id')) {
        obj['renew_target_id'] = ApiClient.convertToType(data['renew_target_id'], 'Number');
      }
      if (data.hasOwnProperty('renew_target_type')) {
        obj['renew_target_type'] = ApiClient.convertToType(data['renew_target_type'], 'String');
      }
      if (data.hasOwnProperty('details')) {
        obj['details'] = ApiClient.convertToType(data['details'], [DealsRenewsDetails]);
      }
    }
    return obj;
  }

  /**
   * +更新行ID
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * 更新日 (yyyy-mm-dd)
   * @member {String} update_date
   */
  exports.prototype['update_date'] = undefined;
  /**
   * +更新の対象行ID
   * @member {Number} renew_target_id
   */
  exports.prototype['renew_target_id'] = undefined;
  /**
   * +更新の対象行タイプ
   * @member {module:model/DealsRenews.RenewTargetTypeEnum} renew_target_type
   */
  exports.prototype['renew_target_type'] = undefined;
  /**
   * +更新の明細行一覧（配列）
   * @member {Array.<module:model/DealsRenewsDetails>} details
   */
  exports.prototype['details'] = undefined;


  /**
   * Allowed values for the <code>renew_target_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.RenewTargetTypeEnum = {
    /**
     * value: "detail"
     * @const
     */
    "detail": "detail",
    /**
     * value: "accrual"
     * @const
     */
    "accrual": "accrual",
    /**
     * value: "renew"
     * @const
     */
    "renew": "renew"  };


  return exports;
}));


