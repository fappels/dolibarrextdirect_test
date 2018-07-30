/*
 * File: app/model/InterventionList.js
 *
 */

Ext.define('ConnectorTest.model.InterventionList', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.Field'
    ],

    config: {
        fields: [
            {
                name: 'id'
            },
            {
                name: 'ref'
            },
            {
                name: 'description'
            },
            {
                name: 'customer'
            },
            {
                name: 'status_id',
                type: 'int'
            },
            {
                name: 'status'
            },
            {
                name: 'customer_id',
                type: 'int'
            },
            {
                name: 'status'
            },
            {
                name: 'user_id',
                type: 'int'
            },
            {
                name: 'user_name'
            },
            {
                dateFormat: 'timestamp',
                name: 'create_date',
                type: 'date'
            }
        ]
    }
});