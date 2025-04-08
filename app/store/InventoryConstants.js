/**
 * file: app/store/InventoryConstants.js
 * Inventory Constants Store
 */

Ext.define('ConnectorTest.store.InventoryConstants', {
    extend: 'Ext.data.Store',

    requires: [
        'ConnectorTest.model.Constant'
    ],

    config: {
        model: 'ConnectorTest.model.Constant',
        remoteFilter: true,
        storeId: 'InventoryConstants'
    }
});