/**
 * file: app/store/InventoryList.js
 * InventoryList Store
 */

Ext.define('ConnectorTest.store.InventoryList', {
    extend: 'Ext.data.Store',

    requires: [
        'ConnectorTest.model.InventoryList'
    ],

    config: {
        model: 'ConnectorTest.model.InventoryList',
        remoteFilter: true,
        storeId: 'InventoryList'
    }
});