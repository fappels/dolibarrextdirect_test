/*
 * File: app/store/ManufactureOrderStatus.js
 *
 */

Ext.define('ConnectorTest.store.ManufactureOrderStatus', {
    extend: 'Ext.data.Store',

    requires: [
        'ConnectorTest.model.OrderStatus'
    ],

    config: {
        model: 'ConnectorTest.model.OrderStatus',
        storeId: 'ManufactureOrderStatus'
    }
});