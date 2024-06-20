/*
 * File: app/store/ManufactureOrderLines.js
 *
 */

Ext.define('ConnectorTest.store.ManufactureOrderLines', {
    extend: 'Ext.data.Store',

    requires: [
        'ConnectorTest.model.ManufactureOrderLine'
    ],

    config: {
        model: 'ConnectorTest.model.ManufactureOrderLine',
        remoteFilter: true,
        storeId: 'ManufactureOrderLines'
    }
});