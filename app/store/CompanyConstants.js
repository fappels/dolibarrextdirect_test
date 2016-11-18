/*
 * File: app/store/CompanyConstants.js
 *
 */

Ext.define('ConnectorTest.store.CompanyConstants', {
    extend: 'Ext.data.Store',

    requires: [
        'ConnectorTest.model.Constant'
    ],

    config: {
        model: 'ConnectorTest.model.Constant',
        remoteFilter: true,
        storeId: 'CompanyConstants'
    }
});