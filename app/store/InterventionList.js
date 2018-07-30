/*
 * File: app/store/InterventionList.js
 *
 */

Ext.define('ConnectorTest.store.InterventionList', {
    extend: 'Ext.data.Store',

    requires: [
        'ConnectorTest.model.InterventionList'
    ],

    config: {
        model: 'ConnectorTest.model.InterventionList',
        remoteFilter: true,
        storeId: 'InterventionList',
        grouper: {
            groupFn: function(item) {
                return item.get('status');
            },
            sortProperty: 'status_id'
        }
    }
});