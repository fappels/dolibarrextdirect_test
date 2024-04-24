/*
 * File: app/model/OptionalModel.js
 *
 */

Ext.define('ConnectorTest.model.OptionalModel', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.Field'
    ],

    config: {
        fields: [
            {
                name: 'name'
            },
            {
                name: 'label'
            },
            {
                name: 'type'
            },
            {
                name: 'default'
            },
            {
                name: 'readonly',
                type: 'int'
            }
        ]
    }
});