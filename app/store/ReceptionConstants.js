/*
 * File: app/store/ReceptionConstants.js
 *
 */

Ext.define('ConnectorTest.store.ReceptionConstants', {
    extend: 'Ext.data.Store',

    requires: [
        'ConnectorTest.model.Constant'
    ],

    config: {
        model: 'ConnectorTest.model.Constant',
        remoteFilter: true,
        storeId: 'ReceptionConstants'
    }
});
