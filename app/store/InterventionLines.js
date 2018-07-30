/*
 * File: app/store/InterventionLines.js
 *
 */

Ext.define('ConnectorTest.store.InterventionLines', {
    extend: 'Ext.data.Store',

    requires: [
        'ConnectorTest.model.InterventionLine'
    ],

    config: {
        model: 'ConnectorTest.model.InterventionLine',
        remoteFilter: true,
        storeId: 'InterventionLines'
    }
});