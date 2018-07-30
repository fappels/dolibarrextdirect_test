/*
 * File: app/store/InterventionStatus.js
 *
 */

Ext.define('ConnectorTest.store.InterventionStatus', {
    extend: 'Ext.data.Store',

    requires: [
        'ConnectorTest.model.OrderStatus'
    ],

    config: {
        model: 'ConnectorTest.model.OrderStatus',
        storeId: 'InterventionStatus'
    }
});