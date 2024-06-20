/*
 * File: app/store/ManufactureOrder.js
 *
 */

Ext.define('ConnectorTest.store.ManufactureOrder', {
    extend: 'Ext.data.Store',

    requires: [
        'ConnectorTest.model.ManufactureOrder'
    ],

    config: {
        model: 'ConnectorTest.model.ManufactureOrder',
        remoteFilter: true,
        storeId: 'ManufactureOrder'
    }
});