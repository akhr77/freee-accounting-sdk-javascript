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
    instance = new FreeeAccountingClient.PartnerParamsAddressAttributes();
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

  describe('PartnerParamsAddressAttributes', function() {
    it('should create an instance of PartnerParamsAddressAttributes', function() {
      // uncomment below and update the code to test PartnerParamsAddressAttributes
      //var instance = new FreeeAccountingClient.PartnerParamsAddressAttributes();
      //expect(instance).to.be.a(FreeeAccountingClient.PartnerParamsAddressAttributes);
    });

    it('should have the property zipcode (base name: "zipcode")', function() {
      // uncomment below and update the code to test the property zipcode
      //var instance = new FreeeAccountingClient.PartnerParamsAddressAttributes();
      //expect(instance).to.be();
    });

    it('should have the property prefectureCode (base name: "prefecture_code")', function() {
      // uncomment below and update the code to test the property prefectureCode
      //var instance = new FreeeAccountingClient.PartnerParamsAddressAttributes();
      //expect(instance).to.be();
    });

    it('should have the property streetName1 (base name: "street_name1")', function() {
      // uncomment below and update the code to test the property streetName1
      //var instance = new FreeeAccountingClient.PartnerParamsAddressAttributes();
      //expect(instance).to.be();
    });

    it('should have the property streetName2 (base name: "street_name2")', function() {
      // uncomment below and update the code to test the property streetName2
      //var instance = new FreeeAccountingClient.PartnerParamsAddressAttributes();
      //expect(instance).to.be();
    });

  });

}));
