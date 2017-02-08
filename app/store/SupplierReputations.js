/*
 * File: app/store/SupplierReputations.js
 *
 */

Ext.define('ConnectorTest.store.SupplierReputations', {
    extend: 'Ext.data.Store',

    requires: [
        'ConnectorTest.model.DataConstant'
    ],

    config: {
        model: 'ConnectorTest.model.DataConstant',
        storeId: 'SupplierReputations'
    }
});