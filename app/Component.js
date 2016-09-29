sap.ui.define([
  'sap/ui/core/UIComponent',
  'sap/ui/model/json/JSONModel',
  'sap/ui/model/resource/ResourceModel'
], function(UIComponent, JSONModel, ResourceModel) {
    'use strict';
    return UIComponent.extend('sap.ui.app.Component', {
      metadata : {
        manifest: 'json'
      },

      init: function() {
        UIComponent.prototype.init.apply(this, arguments);
        var oData = {
          recipient: {
            name: 'Peter'
          }
        };
        var oModel = new JSONModel(oData);
        var i18nModel = new ResourceModel({
          bundleName: 'sap.ui.app.i18n.i18n'
        });

        this.setModel(oModel);
        this.setModel(i18nModel, 'i18n');
      }
    });
});
