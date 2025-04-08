/**
 * file: app/store/InventoryLines.js
 * InventoryLines Store
 */

Ext.define('ConnectorTest.store.InventoryLines', {
    extend: 'Ext.data.Store',

    requires: [
        'ConnectorTest.model.InventoryLine'
    ],

    config: {
        model: 'ConnectorTest.model.InventoryLine',
        remoteFilter: true,
        storeId: 'InventoryLines'
    }
});