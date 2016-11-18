/*
 * File: app/store/ShipmentConstants.js
 *
 */

Ext.define('ConnectorTest.store.ShipmentConstants', {
    extend: 'Ext.data.Store',

    requires: [
        'ConnectorTest.model.Constant'
    ],

    config: {
        model: 'ConnectorTest.model.Constant',
        remoteFilter: true,
        storeId: 'ShipmentConstants'
    }
});