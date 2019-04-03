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
    define(['ApiClient', 'model/SegmentTag'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SegmentTag'));
  } else {
    // Browser globals (root is window)
    if (!root.FreeeAccountingClient) {
      root.FreeeAccountingClient = {};
    }
    root.FreeeAccountingClient.SegmentTagsResponse = factory(root.FreeeAccountingClient.ApiClient, root.FreeeAccountingClient.SegmentTag);
  }
}(this, function(ApiClient, SegmentTag) {
  'use strict';




  /**
   * The SegmentTagsResponse model module.
   * @module model/SegmentTagsResponse
   * @version v0.0.2
   */

  /**
   * Constructs a new <code>SegmentTagsResponse</code>.
   * @alias module:model/SegmentTagsResponse
   * @class
   * @param segmentTag {module:model/SegmentTag} 
   */
  var exports = function(segmentTag) {
    var _this = this;

    _this['segmentTag'] = segmentTag;
  };

  /**
   * Constructs a <code>SegmentTagsResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SegmentTagsResponse} obj Optional instance to populate.
   * @return {module:model/SegmentTagsResponse} The populated <code>SegmentTagsResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('segmentTag')) {
        obj['segmentTag'] = SegmentTag.constructFromObject(data['segmentTag']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/SegmentTag} segmentTag
   */
  exports.prototype['segmentTag'] = undefined;



  return exports;
}));


