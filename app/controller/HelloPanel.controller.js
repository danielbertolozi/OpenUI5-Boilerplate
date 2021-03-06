sap.ui.define([
  'sap/ui/core/mvc/Controller',
  'sap/m/MessageToast',
], function(Controller, MessageToast) {
    'use strict';
    return Controller.extend('sap.ui.app.controller.HelloPanel', {
      onShowHello: function() {
        var oBundle    = this.getView().getModel('i18n').getResourceBundle();
        var sRecipient = this.getView().getModel().getProperty('/recipient/name');
        var sMsg       = oBundle.getText('helloMsg', [sRecipient]);

        MessageToast.show(sMsg);
      },

      _getDialog: function() {
        if (!this._oDialog) {
          this._oDialog = sap.ui.xmlfragment('sap.ui.app.view.fragment.HelloDialog', this);
          this.getView().addDependent(this._oDialog);
        }
        return this._oDialog;
      },

      onOpenDialog: function() {
        this._getDialog().open();
      },

      onCloseDialog: function() {
        this._getDialog().close();
      }
    });
});
