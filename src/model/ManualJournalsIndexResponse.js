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
    define(['ApiClient', 'model/ManualJournal'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ManualJournal'));
  } else {
    // Browser globals (root is window)
    if (!root.FreeeAccountingClient) {
      root.FreeeAccountingClient = {};
    }
    root.FreeeAccountingClient.ManualJournalsIndexResponse = factory(root.FreeeAccountingClient.ApiClient, root.FreeeAccountingClient.ManualJournal);
  }
}(this, function(ApiClient, ManualJournal) {
  'use strict';




  /**
   * The ManualJournalsIndexResponse model module.
   * @module model/ManualJournalsIndexResponse
   * @version v1.0
   */

  /**
   * Constructs a new <code>ManualJournalsIndexResponse</code>.
   * @alias module:model/ManualJournalsIndexResponse
   * @class
   * @param manualJournals {Array.<module:model/ManualJournal>} 
   */
  var exports = function(manualJournals) {
    var _this = this;

    _this['manual_journals'] = manualJournals;
  };

  /**
   * Constructs a <code>ManualJournalsIndexResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ManualJournalsIndexResponse} obj Optional instance to populate.
   * @return {module:model/ManualJournalsIndexResponse} The populated <code>ManualJournalsIndexResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('manual_journals')) {
        obj['manual_journals'] = ApiClient.convertToType(data['manual_journals'], [ManualJournal]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/ManualJournal>} manual_journals
   */
  exports.prototype['manual_journals'] = undefined;



  return exports;
}));


