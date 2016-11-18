/*
 * File: app/model/Company.js
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

Ext.define('ConnectorTest.model.Company', {
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
                name: 'name'
            },
            {
                name: 'ref_ext'
            },
            {
                name: 'date_create'
            },
            {
                name: 'date_update'
            },
            {
                name: 'address'
            },
            {
                name: 'zip'
            },
            {
                name: 'town'
            },
            {
                name: 'country'
            },
            {
                name: 'country_id'
            },
            {
                name: 'state'
            },
            {
                name: 'state_id'
            },
            {
                name: 'commercial_status'
            },
            {
                name: 'email',
                type: 'string'
            },
            {
                name: 'url'
            },
            {
                name: 'phone'
            },
            {
                name: 'skype'
            },
            {
                name: 'fax'
            },
            {
                name: 'parent'
            },
            {
                name: 'idprof1'
            },
            {
                name: 'idprof2'
            },
            {
                name: 'idprof3'
            },
            {
                name: 'idprof4'
            },
            {
                name: 'legal_form_code'
            },
            {
                name: 'legal_form'
            },
            {
                name: 'fk_prospectlevel'
            },
            {
                name: 'prefix_comm'
            },
            {
                name: 'reduction_percent'
            },
            {
                name: 'payment_condition_id',
                type: 'int'
            },
            {
                name: 'payment_type_id',
                type: 'int'
            },
            {
                name: 'client',
                type: 'int'
            },
            {
                name: 'supplier',
                type: 'int'
            },
            {
                name: 'note_public'
            },
            {
                name: 'price_level'
            },
            {
                name: 'logo'
            },
            {
                name: 'default_lang'
            },
            {
                name: 'barcode'
            },
            {
                name: 'stcomm_id'
            },
            {
                allowNull: false,
                defaultValue: 0,
                name: 'tva_assuj',
                type: 'int'
            },
            {
                name: 'tva_intra'
            },
            {
            	name: 'typent_id',
            	type: 'ini'
            },
            {
                name: 'code_client'
            },
            {
                name: 'code_supplier'
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