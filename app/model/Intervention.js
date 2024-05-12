/*
 * File: app/model/Intervention.js
 *
 */

Ext.define('ConnectorTest.model.Intervention', {
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
            name: 'origin'
        },
        {
            name: 'origin_id',
            type: 'int'
        },
        {
            name: 'ref'
        },
        {
            name: 'description'
        },
        {
            name: 'customer_id',
            type: 'int',
            critical: true
        },
        {
            name: 'user_id',
            type: 'int'
        },
        {
            name: 'user_valid_id',
            type: 'int'
        },
        {
            name: 'status_id',
            type: 'int',
            critical: true
        },
        {
            dateFormat: 'timestamp',
            name: 'create_date',
            type: 'date'
        },
        {
            dateFormat: 'timestamp',
            name: 'valid_date',
            type: 'date'
        },
        {
            name: 'note_private'
        },
        {
            name: 'note_public'
        },
        {
            name: 'user_name'
        },
        {
            name: 'customer_name'
        },
        {
            name: 'status'
        },
        {
            name: 'model_pdf'
        },
        {
            name: 'project_id',
            type: 'int'
        },
        {
            name: 'project_ref'
        },
        {
            name: 'contract_id',
            type: 'int'
        },
        {
            name: 'contract_ref'
        },
        {
            name: 'duration',
            type: 'float'
        },
        {
            name: 'has_signature',
            type: 'int'
        },
        {
            name: 'signature'
        },
        {
            name: 'app_id'
        }
    ]
});