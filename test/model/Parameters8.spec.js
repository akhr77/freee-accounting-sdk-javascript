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
    instance = new FreeeAccountingClient.Parameters8();
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

  describe('Parameters8', function() {
    it('should create an instance of Parameters8', function() {
      // uncomment below and update the code to test Parameters8
      //var instance = new FreeeAccountingClient.Parameters8();
      //expect(instance).to.be.a(FreeeAccountingClient.Parameters8);
    });

    it('should have the property companyId (base name: "company_id")', function() {
      // uncomment below and update the code to test the property companyId
      //var instance = new FreeeAccountingClient.Parameters8();
      //expect(instance).to.be();
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instance = new FreeeAccountingClient.Parameters8();
      //expect(instance).to.be();
    });

    it('should have the property issueDate (base name: "issue_date")', function() {
      // uncomment below and update the code to test the property issueDate
      //var instance = new FreeeAccountingClient.Parameters8();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new FreeeAccountingClient.Parameters8();
      //expect(instance).to.be();
    });

    it('should have the property editableOnWeb (base name: "editable_on_web")', function() {
      // uncomment below and update the code to test the property editableOnWeb
      //var instance = new FreeeAccountingClient.Parameters8();
      //expect(instance).to.be();
    });

    it('should have the property sectionId (base name: "section_id")', function() {
      // uncomment below and update the code to test the property sectionId
      //var instance = new FreeeAccountingClient.Parameters8();
      //expect(instance).to.be();
    });

    it('should have the property tagIds (base name: "tag_ids")', function() {
      // uncomment below and update the code to test the property tagIds
      //var instance = new FreeeAccountingClient.Parameters8();
      //expect(instance).to.be();
    });

    it('should have the property expenseApplicationLines (base name: "expense_application_lines")', function() {
      // uncomment below and update the code to test the property expenseApplicationLines
      //var instance = new FreeeAccountingClient.Parameters8();
      //expect(instance).to.be();
    });

  });

}));
