/*
 * File: app/model/DataConstant.js
 *
 */

Ext.define('ConnectorTest.model.DataConstant', {
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
                name: 'code'
            },
            {
                name: 'label'
            },
            {
                name: 'type'
            }
        ]
    }
});