/*
 * File: app/store/Intervention.js
 *
 */

Ext.define('ConnectorTest.store.Intervention', {
    extend: 'Ext.data.Store',

    requires: [
        'ConnectorTest.model.Intervention'
    ],

    config: {
        model: 'ConnectorTest.model.Intervention',
        remoteFilter: true,
        storeId: 'Intervention'
    }
});