/*
 * File: app/store/InterventionConstants.js
 *
 */

Ext.define('ConnectorTest.store.InterventionConstants', {
    extend: 'Ext.data.Store',

    requires: [
        'ConnectorTest.model.Constant'
    ],

    config: {
        model: 'ConnectorTest.model.Constant',
        remoteFilter: true,
        storeId: 'InterventionConstants'
    }
});