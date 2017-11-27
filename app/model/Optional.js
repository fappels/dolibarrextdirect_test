/*
 * File: app/model/Optional.js
 *
 */

Ext.define('ConnectorTest.model.Optional', {
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
                name: 'value'
            }
        ]
    }
});