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
    instance = new FreeeAccountingClient.AccountItemParamsAccountItem();
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

  describe('AccountItemParamsAccountItem', function() {
    it('should create an instance of AccountItemParamsAccountItem', function() {
      // uncomment below and update the code to test AccountItemParamsAccountItem
      //var instance = new FreeeAccountingClient.AccountItemParamsAccountItem();
      //expect(instance).to.be.a(FreeeAccountingClient.AccountItemParamsAccountItem);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new FreeeAccountingClient.AccountItemParamsAccountItem();
      //expect(instance).to.be();
    });

    it('should have the property shortcut (base name: "shortcut")', function() {
      // uncomment below and update the code to test the property shortcut
      //var instance = new FreeeAccountingClient.AccountItemParamsAccountItem();
      //expect(instance).to.be();
    });

    it('should have the property shortcutNum (base name: "shortcut_num")', function() {
      // uncomment below and update the code to test the property shortcutNum
      //var instance = new FreeeAccountingClient.AccountItemParamsAccountItem();
      //expect(instance).to.be();
    });

    it('should have the property taxName (base name: "tax_name")', function() {
      // uncomment below and update the code to test the property taxName
      //var instance = new FreeeAccountingClient.AccountItemParamsAccountItem();
      //expect(instance).to.be();
    });

    it('should have the property groupName (base name: "group_name")', function() {
      // uncomment below and update the code to test the property groupName
      //var instance = new FreeeAccountingClient.AccountItemParamsAccountItem();
      //expect(instance).to.be();
    });

    it('should have the property accountCategory (base name: "account_category")', function() {
      // uncomment below and update the code to test the property accountCategory
      //var instance = new FreeeAccountingClient.AccountItemParamsAccountItem();
      //expect(instance).to.be();
    });

    it('should have the property correspondingIncomeName (base name: "corresponding_income_name")', function() {
      // uncomment below and update the code to test the property correspondingIncomeName
      //var instance = new FreeeAccountingClient.AccountItemParamsAccountItem();
      //expect(instance).to.be();
    });

    it('should have the property correspondingExpenseName (base name: "corresponding_expense_name")', function() {
      // uncomment below and update the code to test the property correspondingExpenseName
      //var instance = new FreeeAccountingClient.AccountItemParamsAccountItem();
      //expect(instance).to.be();
    });

    it('should have the property accumulatedDepAccountItemName (base name: "accumulated_dep_account_item_name")', function() {
      // uncomment below and update the code to test the property accumulatedDepAccountItemName
      //var instance = new FreeeAccountingClient.AccountItemParamsAccountItem();
      //expect(instance).to.be();
    });

    it('should have the property searchable (base name: "searchable")', function() {
      // uncomment below and update the code to test the property searchable
      //var instance = new FreeeAccountingClient.AccountItemParamsAccountItem();
      //expect(instance).to.be();
    });

    it('should have the property items (base name: "items")', function() {
      // uncomment below and update the code to test the property items
      //var instance = new FreeeAccountingClient.AccountItemParamsAccountItem();
      //expect(instance).to.be();
    });

    it('should have the property partners (base name: "partners")', function() {
      // uncomment below and update the code to test the property partners
      //var instance = new FreeeAccountingClient.AccountItemParamsAccountItem();
      //expect(instance).to.be();
    });

  });

}));
