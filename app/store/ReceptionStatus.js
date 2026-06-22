/*
 * File: app/store/ReceptionStatus.js
 *
 */

Ext.define('ConnectorTest.store.ReceptionStatus', {
    extend: 'Ext.data.Store',

    requires: [
        'ConnectorTest.model.OrderStatus'
    ],

    config: {
        model: 'ConnectorTest.model.OrderStatus',
        storeId: 'ReceptionStatus'
    }
});
