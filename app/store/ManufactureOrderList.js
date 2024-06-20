/*
 * File: app/store/ManufactureOrderList.js
 *
 */

Ext.define('ConnectorTest.store.ManufactureOrderList', {
    extend: 'Ext.data.Store',

    requires: [
        'ConnectorTest.model.ManufactureOrderList',
        'Ext.util.Grouper'
    ],

    config: {
        model: 'ConnectorTest.model.ManufactureOrderList',
        remoteFilter: true,
        storeId: 'ManufactureOrderList',
        grouper: {
            groupFn: function(item) {
                return item.get('statusdisplay');
            },
            sortProperty: 'status_id'
        }
    }
});