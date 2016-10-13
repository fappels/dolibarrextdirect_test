/*
 * File: app/store/OrderConstants.js
 *
 */

Ext.define('ConnectorTest.store.OrderConstants', {
    extend: 'Ext.data.Store',

    requires: [
        'ConnectorTest.model.Constant'
    ],

    config: {
        model: 'ConnectorTest.model.Constant',
        remoteFilter: true,
        storeId: 'OrderConstants'
    }
});