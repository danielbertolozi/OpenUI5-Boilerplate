sap.ui.define([
  'sap/ui/core/UIComponent',
  'sap/ui/model/json/JSONModel',
  'sap/ui/model/resource/ResourceModel',
  "sap/ui/app/util/Data"
], function(UIComponent, JSONModel, ResourceModel, Data) {
    'use strict';
    return UIComponent.extend('sap.ui.app.Component', {
      metadata : {
        manifest: 'json'
      },

      init: function() {
        UIComponent.prototype.init.apply(this, arguments);
        var i18nModel = new ResourceModel({
          bundleName: 'sap.ui.app.i18n.i18n'
        });

        this.setModel(new JSONModel(Data));
        this.setModel(i18nModel, 'i18n');
        this.getRouter().initialize();
      }
    });
});
