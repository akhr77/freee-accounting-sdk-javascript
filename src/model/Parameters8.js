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
    define(['ApiClient', 'model/ExpenseApplicationsidExpenseApplicationLines'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ExpenseApplicationsidExpenseApplicationLines'));
  } else {
    // Browser globals (root is window)
    if (!root.FreeeAccountingClient) {
      root.FreeeAccountingClient = {};
    }
    root.FreeeAccountingClient.Parameters8 = factory(root.FreeeAccountingClient.ApiClient, root.FreeeAccountingClient.ExpenseApplicationsidExpenseApplicationLines);
  }
}(this, function(ApiClient, ExpenseApplicationsidExpenseApplicationLines) {
  'use strict';




  /**
   * The Parameters8 model module.
   * @module model/Parameters8
   * @version v1.0
   */

  /**
   * Constructs a new <code>Parameters8</code>.
   * @alias module:model/Parameters8
   * @class
   * @param companyId {Number} 事業所ID
   * @param title {String} 申請タイトル
   * @param expenseApplicationLines {Array.<module:model/ExpenseApplicationsidExpenseApplicationLines>} 
   */
  var exports = function(companyId, title, expenseApplicationLines) {
    var _this = this;

    _this['company_id'] = companyId;
    _this['title'] = title;





    _this['expense_application_lines'] = expenseApplicationLines;
  };

  /**
   * Constructs a <code>Parameters8</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Parameters8} obj Optional instance to populate.
   * @return {module:model/Parameters8} The populated <code>Parameters8</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('company_id')) {
        obj['company_id'] = ApiClient.convertToType(data['company_id'], 'Number');
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('issue_date')) {
        obj['issue_date'] = ApiClient.convertToType(data['issue_date'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('editable_on_web')) {
        obj['editable_on_web'] = ApiClient.convertToType(data['editable_on_web'], 'Boolean');
      }
      if (data.hasOwnProperty('section_id')) {
        obj['section_id'] = ApiClient.convertToType(data['section_id'], 'Number');
      }
      if (data.hasOwnProperty('tag_ids')) {
        obj['tag_ids'] = ApiClient.convertToType(data['tag_ids'], ['Number']);
      }
      if (data.hasOwnProperty('expense_application_lines')) {
        obj['expense_application_lines'] = ApiClient.convertToType(data['expense_application_lines'], [ExpenseApplicationsidExpenseApplicationLines]);
      }
    }
    return obj;
  }

  /**
   * 事業所ID
   * @member {Number} company_id
   */
  exports.prototype['company_id'] = undefined;
  /**
   * 申請タイトル
   * @member {String} title
   */
  exports.prototype['title'] = undefined;
  /**
   * 申請日 (yyyy-mm-dd)
   * @member {String} issue_date
   */
  exports.prototype['issue_date'] = undefined;
  /**
   * 備考
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * 会計freeeのWeb画面から申請内容を編集可能：falseの場合、Web上からの項目行の追加／削除・金額の編集が出来なくなります。APIでの編集は可能です。
   * @member {Boolean} editable_on_web
   */
  exports.prototype['editable_on_web'] = undefined;
  /**
   * 部門ID
   * @member {Number} section_id
   */
  exports.prototype['section_id'] = undefined;
  /**
   * メモタグID
   * @member {Array.<Number>} tag_ids
   */
  exports.prototype['tag_ids'] = undefined;
  /**
   * @member {Array.<module:model/ExpenseApplicationsidExpenseApplicationLines>} expense_application_lines
   */
  exports.prototype['expense_application_lines'] = undefined;



  return exports;
}));


