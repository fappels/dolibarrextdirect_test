/*
 * File: app/store/ProductOptionals.js
 *
 */

Ext.define('ConnectorTest.store.ProductOptionals', {
    extend: 'Ext.data.Store',

    requires: [
        'ConnectorTest.model.Optional'
    ],

    config: {
        model: 'ConnectorTest.model.Optional',
        remoteFilter: true,
        storeId: 'ProductOptionals'
    }
});