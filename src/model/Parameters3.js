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
    define(['ApiClient', 'model/CompaniesidAddressAttributes', 'model/CompaniesidDocTemplate', 'model/CompaniesidFiscalYearsAttributes', 'model/CompaniesidSalesInformationAttributes'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CompaniesidAddressAttributes'), require('./CompaniesidDocTemplate'), require('./CompaniesidFiscalYearsAttributes'), require('./CompaniesidSalesInformationAttributes'));
  } else {
    // Browser globals (root is window)
    if (!root.FreeeAccountingClient) {
      root.FreeeAccountingClient = {};
    }
    root.FreeeAccountingClient.Parameters3 = factory(root.FreeeAccountingClient.ApiClient, root.FreeeAccountingClient.CompaniesidAddressAttributes, root.FreeeAccountingClient.CompaniesidDocTemplate, root.FreeeAccountingClient.CompaniesidFiscalYearsAttributes, root.FreeeAccountingClient.CompaniesidSalesInformationAttributes);
  }
}(this, function(ApiClient, CompaniesidAddressAttributes, CompaniesidDocTemplate, CompaniesidFiscalYearsAttributes, CompaniesidSalesInformationAttributes) {
  'use strict';




  /**
   * The Parameters3 model module.
   * @module model/Parameters3
   * @version v1.0
   */

  /**
   * Constructs a new <code>Parameters3</code>.
   * @alias module:model/Parameters3
   * @class
   */
  var exports = function() {
    var _this = this;















  };

  /**
   * Constructs a <code>Parameters3</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Parameters3} obj Optional instance to populate.
   * @return {module:model/Parameters3} The populated <code>Parameters3</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('name_kana')) {
        obj['name_kana'] = ApiClient.convertToType(data['name_kana'], 'String');
      }
      if (data.hasOwnProperty('contact_name')) {
        obj['contact_name'] = ApiClient.convertToType(data['contact_name'], 'String');
      }
      if (data.hasOwnProperty('address_attributes')) {
        obj['address_attributes'] = CompaniesidAddressAttributes.constructFromObject(data['address_attributes']);
      }
      if (data.hasOwnProperty('phone1')) {
        obj['phone1'] = ApiClient.convertToType(data['phone1'], 'String');
      }
      if (data.hasOwnProperty('phone2')) {
        obj['phone2'] = ApiClient.convertToType(data['phone2'], 'String');
      }
      if (data.hasOwnProperty('fax')) {
        obj['fax'] = ApiClient.convertToType(data['fax'], 'String');
      }
      if (data.hasOwnProperty('sales_information_attributes')) {
        obj['sales_information_attributes'] = CompaniesidSalesInformationAttributes.constructFromObject(data['sales_information_attributes']);
      }
      if (data.hasOwnProperty('head_count')) {
        obj['head_count'] = ApiClient.convertToType(data['head_count'], 'Number');
      }
      if (data.hasOwnProperty('corporate_number')) {
        obj['corporate_number'] = ApiClient.convertToType(data['corporate_number'], 'String');
      }
      if (data.hasOwnProperty('fiscal_years_attributes')) {
        obj['fiscal_years_attributes'] = CompaniesidFiscalYearsAttributes.constructFromObject(data['fiscal_years_attributes']);
      }
      if (data.hasOwnProperty('doc_template')) {
        obj['doc_template'] = CompaniesidDocTemplate.constructFromObject(data['doc_template']);
      }
      if (data.hasOwnProperty('txn_number_format')) {
        obj['txn_number_format'] = ApiClient.convertToType(data['txn_number_format'], 'String');
      }
      if (data.hasOwnProperty('private_settlement')) {
        obj['private_settlement'] = ApiClient.convertToType(data['private_settlement'], 'Number');
      }
    }
    return obj;
  }

  /**
   * 事業所の正式名称 (100文字以内)
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * 正式名称フリガナ (100文字以内)
   * @member {String} name_kana
   */
  exports.prototype['name_kana'] = undefined;
  /**
   * user1
   * @member {String} contact_name
   */
  exports.prototype['contact_name'] = undefined;
  /**
   * @member {module:model/CompaniesidAddressAttributes} address_attributes
   */
  exports.prototype['address_attributes'] = undefined;
  /**
   * 電話番号１
   * @member {String} phone1
   */
  exports.prototype['phone1'] = undefined;
  /**
   * 電話番号２
   * @member {String} phone2
   */
  exports.prototype['phone2'] = undefined;
  /**
   * FAX
   * @member {String} fax
   */
  exports.prototype['fax'] = undefined;
  /**
   * @member {module:model/CompaniesidSalesInformationAttributes} sales_information_attributes
   */
  exports.prototype['sales_information_attributes'] = undefined;
  /**
   * 従業員数（0: 経営者のみ、1: 2~5人、2: 6~10人、3: 11~20人、4: 21~30人、5: 31~40人、6: 41~100人、7: 100人以上
   * @member {Number} head_count
   */
  exports.prototype['head_count'] = undefined;
  /**
   * 法人番号 (半角数字13桁、法人のみ)
   * @member {String} corporate_number
   */
  exports.prototype['corporate_number'] = undefined;
  /**
   * @member {module:model/CompaniesidFiscalYearsAttributes} fiscal_years_attributes
   */
  exports.prototype['fiscal_years_attributes'] = undefined;
  /**
   * @member {module:model/CompaniesidDocTemplate} doc_template
   */
  exports.prototype['doc_template'] = undefined;
  /**
   * 仕訳番号形式（not_used: 使用しない、digits: 数字（例：5091824）、alnum: 英数字（例：59J0P））Available values : not_used, digits, alnum
   * @member {module:model/Parameters3.TxnNumberFormatEnum} txn_number_format
   */
  exports.prototype['txn_number_format'] = undefined;
  /**
   * プライベート資金/役員資金（0: 使用しない、1: 使用する）
   * @member {Number} private_settlement
   */
  exports.prototype['private_settlement'] = undefined;


  /**
   * Allowed values for the <code>txn_number_format</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TxnNumberFormatEnum = {
    /**
     * value: "not_used"
     * @const
     */
    "not_used": "not_used",
    /**
     * value: "digits"
     * @const
     */
    "digits": "digits",
    /**
     * value: "alnum"
     * @const
     */
    "alnum": "alnum"  };


  return exports;
}));


