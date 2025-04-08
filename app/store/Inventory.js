/**
 * file: app/store/Inventory.js
 * Inventories Store
 */

Ext.define('ConnectorTest.store.Inventory', {
    extend: 'Ext.data.Store',

    requires: [
        'ConnectorTest.model.Inventory'
    ],

    config: {
        model: 'ConnectorTest.model.Inventory',
        remoteFilter: true,
        storeId: 'Inventory'
    }
});