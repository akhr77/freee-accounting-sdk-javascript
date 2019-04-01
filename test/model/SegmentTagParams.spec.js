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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.FreeeAccountingClient);
  }
}(this, function(expect, FreeeAccountingClient) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new FreeeAccountingClient.SegmentTagParams();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('SegmentTagParams', function() {
    it('should create an instance of SegmentTagParams', function() {
      // uncomment below and update the code to test SegmentTagParams
      //var instance = new FreeeAccountingClient.SegmentTagParams();
      //expect(instance).to.be.a(FreeeAccountingClient.SegmentTagParams);
    });

    it('should have the property companyId (base name: "company_id")', function() {
      // uncomment below and update the code to test the property companyId
      //var instance = new FreeeAccountingClient.SegmentTagParams();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new FreeeAccountingClient.SegmentTagParams();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new FreeeAccountingClient.SegmentTagParams();
      //expect(instance).to.be();
    });

    it('should have the property shortcut1 (base name: "shortcut1")', function() {
      // uncomment below and update the code to test the property shortcut1
      //var instance = new FreeeAccountingClient.SegmentTagParams();
      //expect(instance).to.be();
    });

    it('should have the property shortcut2 (base name: "shortcut2")', function() {
      // uncomment below and update the code to test the property shortcut2
      //var instance = new FreeeAccountingClient.SegmentTagParams();
      //expect(instance).to.be();
    });

  });

}));
