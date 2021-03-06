/*
 * File: app/model/Action.js
 *
 * This file was generated by Sencha Architect version 3.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.4.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.4.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('ConnectorTest.model.Action', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.Field'
    ],

    config: {
        fields: [
            {
                name: 'id',
                type: 'int'
            },
            {
                name: 'code'
            },
            {
                name: 'label'
            },
            {
                dateFormat: 'timestamp',
                name: 'datep',
                type: 'date'
            },
            {
                dateFormat: 'timestamp',
                name: 'datef',
                type: 'date'
            },
            {
                name: 'durationp',
                type: 'int'
            },
            {
                name: 'fulldayevent',
                type: 'int'
            },
            {
                name: 'percentage',
                type: 'int'
            },
            {
                name: 'location'
            },
            {
                name: 'transparency',
                type: 'int'
            },
            {
                name: 'priority'
            },
            {
                name: 'note'
            },
            {
                name: 'usertodo_id',
                type: 'int'
            },
            {
                name: 'userdone_id',
                type: 'int'
            },
            {
                name: 'company_id',
                type: 'int'
            },
            {
                name: 'contact_id',
                type: 'int'
            },
            {
                name: 'project_id',
                type: 'int'
            },
            {
                name: 'local_id'
            },
            {
                name: 'app_id'
            }
        ]
    }
});