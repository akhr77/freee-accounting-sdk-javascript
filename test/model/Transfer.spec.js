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
    instance = new FreeeAccountingClient.Transfer();
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

  describe('Transfer', function() {
    it('should create an instance of Transfer', function() {
      // uncomment below and update the code to test Transfer
      //var instance = new FreeeAccountingClient.Transfer();
      //expect(instance).to.be.a(FreeeAccountingClient.Transfer);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new FreeeAccountingClient.Transfer();
      //expect(instance).to.be();
    });

    it('should have the property companyId (base name: "company_id")', function() {
      // uncomment below and update the code to test the property companyId
      //var instance = new FreeeAccountingClient.Transfer();
      //expect(instance).to.be();
    });

    it('should have the property amount (base name: "amount")', function() {
      // uncomment below and update the code to test the property amount
      //var instance = new FreeeAccountingClient.Transfer();
      //expect(instance).to.be();
    });

    it('should have the property _date (base name: "date")', function() {
      // uncomment below and update the code to test the property _date
      //var instance = new FreeeAccountingClient.Transfer();
      //expect(instance).to.be();
    });

    it('should have the property fromWalletableId (base name: "from_walletable_id")', function() {
      // uncomment below and update the code to test the property fromWalletableId
      //var instance = new FreeeAccountingClient.Transfer();
      //expect(instance).to.be();
    });

    it('should have the property toWalletableId (base name: "to_walletable_id")', function() {
      // uncomment below and update the code to test the property toWalletableId
      //var instance = new FreeeAccountingClient.Transfer();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new FreeeAccountingClient.Transfer();
      //expect(instance).to.be();
    });

  });

}));
