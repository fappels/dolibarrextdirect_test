/*
 * File: app/store/ProductOptionalModel.js
 *
 */

Ext.define('ConnectorTest.store.ProductOptionalModel', {
    extend: 'Ext.data.Store',

    requires: [
        'ConnectorTest.model.OptionalModel'
    ],

    config: {
        model: 'ConnectorTest.model.OptionalModel',
        remoteFilter: true,
        storeId: 'ProductOptionalModel'
    }
});