/*
 * File: app/model/Constant.js
 *
 */

Ext.define('ConnectorTest.model.Constant', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.Field'
    ],

    config: {
        fields: [
            {
                name: 'constant'
            },
            {
                name: 'value'
            }
        ]
    }
});