/*
 * File: app/model/Authentication.js
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

Ext.define('ConnectorTest.model.Authentication', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.Field'
    ],

    config: {
        fields: [{
            name: 'id',
            type: 'int'
        },
        {
            name: 'requestid',
            defaultValue: '',
            critical: true
        },
        {
            name: 'app_id',
            defaultValue: '',
            critical: true
        },
        {
            name: 'app_name'
        },
        {
            name: 'dev_platform'
        },
        {
            name: 'dev_type'
        },
        {
            name: 'fk_user',
            type: 'int'
        },
        {
            name: 'username'
        },
        {
            name: 'ack_id',
            critical: true
        },
        {
            dateFormat: 'timestamp',
            name: 'datec',
            type: 'date'
        },
        {
            dateFormat: 'timestamp',
            name: 'date_last_connect',
            type: 'date'
        },
        {
            name: 'connector_id'
        },
        {
            name: 'connector_name'
        },
        {
            name: 'connector_version'
        },
        {
            name: 'connector_description'
        },
        {
            name: 'connector_compatibility'
        },
        {
            name: 'dolibarr_version'
        },
        {
            name: 'home_country_id'
        },
        {
            name: 'home_state_id'
        },
        {
            name: 'home_localtax1_assuj',
            type: 'int'
        },
        {
            name: 'home_localtax2_assuj',
            type: 'int'
        },
        {
            name: 'home_name'
        },
        {
            name: 'timezone_offset',
            type: 'int'
        },
        {
            name: 'timezone'
        },
        {
            name: 'local_timezone_offset',
            type: 'int'
        },
        {
            name: 'local_dst',
            type: 'boolean'
        },
        {
            name: 'local_timezone'
        },
        {
            name: 'webview_name'
        },
        {
            name: 'webview_version'
        },
        {
            name: 'identify',
            type: 'int'
        },
        {
            name: 'site_cookie_samesite'
        },
        {
            name: 'site_cookie_secure'
        },
        {
            name: 'session_cookie_samesite'
        },
        {
            name: 'session_cookie_secure'
        },
        {
            name: 'multicurrency_enabled',
            defaultValue: 0,
            type: 'int'
        }
        ]
    }
});