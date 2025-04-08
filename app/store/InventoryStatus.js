/**
 * file: app/store/InventoryStatus.js
 * InventoryStatus Store
 */

Ext.define('ConnectorTest.store.InventoryStatus', {
    extend: 'Ext.data.Store',

    requires: [
        'ConnectorTest.model.OrderStatus'
    ],

    config: {
        model: 'ConnectorTest.model.OrderStatus',
        remoteFilter: true,
        storeId: 'InventoryStatus'
    }
});