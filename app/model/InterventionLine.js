/*
 * File: app/model/InterventionLine.js
 *
 */

Ext.define('ConnectorTest.model.InterventionLine', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.Field'
    ],


    fields: [
        {
            name: 'id'
        },
        {
            name: 'local_id'
        },
        {
            name: 'line_id',
            type: 'int',
            critical: true
        },
        {
            name: 'origin_id',
            type: 'int'
        },
        {
            name: 'description'
        },
        {
            defaultValue: 0,
            name: 'duration',
            type: 'float'
        },
        {
            name: 'rang'
        },
        {
            dateFormat: 'timestamp',
            name: 'date',
            type: 'date'
        },
        {
            name: 'app_id'
        }
    ]
});