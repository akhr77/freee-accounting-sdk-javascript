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
    root.FreeeAccountingClient.CompaniesidAddressAttributes = factory(root.FreeeAccountingClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CompaniesidAddressAttributes model module.
   * @module model/CompaniesidAddressAttributes
   * @version v1.0
   */

  /**
   * Constructs a new <code>CompaniesidAddressAttributes</code>.
   * @alias module:model/CompaniesidAddressAttributes
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>CompaniesidAddressAttributes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CompaniesidAddressAttributes} obj Optional instance to populate.
   * @return {module:model/CompaniesidAddressAttributes} The populated <code>CompaniesidAddressAttributes</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('zipcode')) {
        obj['zipcode'] = ApiClient.convertToType(data['zipcode'], 'String');
      }
      if (data.hasOwnProperty('prefecture_code')) {
        obj['prefecture_code'] = ApiClient.convertToType(data['prefecture_code'], 'Number');
      }
      if (data.hasOwnProperty('street_name1')) {
        obj['street_name1'] = ApiClient.convertToType(data['street_name1'], 'String');
      }
      if (data.hasOwnProperty('street_name2')) {
        obj['street_name2'] = ApiClient.convertToType(data['street_name2'], 'String');
      }
    }
    return obj;
  }

  /**
   * 郵便番号
   * @member {String} zipcode
   */
  exports.prototype['zipcode'] = undefined;
  /**
   * 都道府県コード（0: 北海道、1:青森、2:岩手、3:宮城、4:秋田、5:山形、6:福島、7:茨城、8:栃木、9:群馬、10:埼玉、11:千葉、12:東京、13:神奈川、14:新潟、15:富山、16:石川、17:福井、18:山梨、19:長野お、20:岐阜、21:静岡、22:愛知、23:三重、24:滋賀、25:京都、26:大阪、27:兵庫、28:奈良、29:和歌山、30:鳥取、31:島根、32:岡山、33:広島、34:山口、35:徳島、36:香川、37:愛媛、38:高知、39:福岡、40:佐賀、41:長崎、42:熊本、43:大分、44:宮崎、45:鹿児島、46:沖縄
   * @member {Number} prefecture_code
   */
  exports.prototype['prefecture_code'] = undefined;
  /**
   * 市区町村・番地
   * @member {String} street_name1
   */
  exports.prototype['street_name1'] = undefined;
  /**
   * 建物名・部屋番号など
   * @member {String} street_name2
   */
  exports.prototype['street_name2'] = undefined;



  return exports;
}));


