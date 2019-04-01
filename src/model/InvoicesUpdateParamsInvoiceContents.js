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
    root.FreeeAccountingClient.InvoicesUpdateParamsInvoiceContents = factory(root.FreeeAccountingClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The InvoicesUpdateParamsInvoiceContents model module.
   * @module model/InvoicesUpdateParamsInvoiceContents
   * @version v1.0
   */

  /**
   * Constructs a new <code>InvoicesUpdateParamsInvoiceContents</code>.
   * @alias module:model/InvoicesUpdateParamsInvoiceContents
   * @class
   * @param order {Number} 順序
   * @param type {module:model/InvoicesUpdateParamsInvoiceContents.TypeEnum} 行の種類
   */
  var exports = function(order, type) {
    var _this = this;


    _this['order'] = order;
    _this['type'] = type;













  };

  /**
   * Constructs a <code>InvoicesUpdateParamsInvoiceContents</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InvoicesUpdateParamsInvoiceContents} obj Optional instance to populate.
   * @return {module:model/InvoicesUpdateParamsInvoiceContents} The populated <code>InvoicesUpdateParamsInvoiceContents</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('order')) {
        obj['order'] = ApiClient.convertToType(data['order'], 'Number');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('qty')) {
        obj['qty'] = ApiClient.convertToType(data['qty'], 'Number');
      }
      if (data.hasOwnProperty('unit')) {
        obj['unit'] = ApiClient.convertToType(data['unit'], 'String');
      }
      if (data.hasOwnProperty('unit_price')) {
        obj['unit_price'] = ApiClient.convertToType(data['unit_price'], 'Number');
      }
      if (data.hasOwnProperty('vat')) {
        obj['vat'] = ApiClient.convertToType(data['vat'], 'Number');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('account_item_id')) {
        obj['account_item_id'] = ApiClient.convertToType(data['account_item_id'], 'Number');
      }
      if (data.hasOwnProperty('tax_code')) {
        obj['tax_code'] = ApiClient.convertToType(data['tax_code'], 'Number');
      }
      if (data.hasOwnProperty('item_id')) {
        obj['item_id'] = ApiClient.convertToType(data['item_id'], 'Number');
      }
      if (data.hasOwnProperty('section_id')) {
        obj['section_id'] = ApiClient.convertToType(data['section_id'], 'Number');
      }
      if (data.hasOwnProperty('tag_ids')) {
        obj['tag_ids'] = ApiClient.convertToType(data['tag_ids'], ['Number']);
      }
      if (data.hasOwnProperty('segment_1_tag_id')) {
        obj['segment_1_tag_id'] = ApiClient.convertToType(data['segment_1_tag_id'], 'Number');
      }
      if (data.hasOwnProperty('segment_2_tag_id')) {
        obj['segment_2_tag_id'] = ApiClient.convertToType(data['segment_2_tag_id'], 'Number');
      }
      if (data.hasOwnProperty('segment_3_tag_id')) {
        obj['segment_3_tag_id'] = ApiClient.convertToType(data['segment_3_tag_id'], 'Number');
      }
    }
    return obj;
  }

  /**
   * 請求内容ID
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * 順序
   * @member {Number} order
   */
  exports.prototype['order'] = undefined;
  /**
   * 行の種類
   * @member {module:model/InvoicesUpdateParamsInvoiceContents.TypeEnum} type
   */
  exports.prototype['type'] = undefined;
  /**
   * 数量
   * @member {Number} qty
   */
  exports.prototype['qty'] = undefined;
  /**
   * 単位
   * @member {String} unit
   */
  exports.prototype['unit'] = undefined;
  /**
   * 単価 (tax_entry_method: inclusiveの場合は税込価格、tax_entry_method: exclusiveの場合は税抜価格となります)
   * @member {Number} unit_price
   */
  exports.prototype['unit_price'] = undefined;
  /**
   * 消費税額
   * @member {Number} vat
   */
  exports.prototype['vat'] = undefined;
  /**
   * 備考
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * 勘定科目ID
   * @member {Number} account_item_id
   */
  exports.prototype['account_item_id'] = undefined;
  /**
   * 税区分ID
   * @member {Number} tax_code
   */
  exports.prototype['tax_code'] = undefined;
  /**
   * 品目ID
   * @member {Number} item_id
   */
  exports.prototype['item_id'] = undefined;
  /**
   * 部門ID
   * @member {Number} section_id
   */
  exports.prototype['section_id'] = undefined;
  /**
   * @member {Array.<Number>} tag_ids
   */
  exports.prototype['tag_ids'] = undefined;
  /**
   * セグメント１ID
   * @member {Number} segment_1_tag_id
   */
  exports.prototype['segment_1_tag_id'] = undefined;
  /**
   * セグメント２ID
   * @member {Number} segment_2_tag_id
   */
  exports.prototype['segment_2_tag_id'] = undefined;
  /**
   * セグメント３ID
   * @member {Number} segment_3_tag_id
   */
  exports.prototype['segment_3_tag_id'] = undefined;


  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "normal"
     * @const
     */
    "normal": "normal",
    /**
     * value: "discount"
     * @const
     */
    "discount": "discount",
    /**
     * value: "text"
     * @const
     */
    "text": "text"  };


  return exports;
}));


