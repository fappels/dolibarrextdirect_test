/*
 * File: app/store/ManufactureOrderConstants.js
 *
 */

Ext.define('ConnectorTest.store.ManufactureOrderConstants', {
    extend: 'Ext.data.Store',

    requires: [
        'ConnectorTest.model.Constant'
    ],

    config: {
        model: 'ConnectorTest.model.Constant',
        remoteFilter: true,
        storeId: 'ManufactureOrderConstants'
    }
});