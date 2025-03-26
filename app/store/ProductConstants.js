/*
 * File: app/store/ProductConstants.js
 *
 */

Ext.define('ConnectorTest.store.ProductConstants', {
    extend: 'Ext.data.Store',

    requires: [
        'ConnectorTest.model.Constant'
    ],

    config: {
        model: 'ConnectorTest.model.Constant',
        remoteFilter: true,
        storeId: 'ProductConstants'
    }
});