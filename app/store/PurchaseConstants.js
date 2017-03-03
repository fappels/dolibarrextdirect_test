/*
 * File: app/store/PurchaseConstants.js
 *
 */

Ext.define('ConnectorTest.store.PurchaseConstants', {
    extend: 'Ext.data.Store',

    requires: [
        'ConnectorTest.model.Constant'
    ],

    config: {
        model: 'ConnectorTest.model.Constant',
        remoteFilter: true,
        storeId: 'PurchaseConstants'
    }
});