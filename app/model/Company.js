/*
 * Third party object
 */

Ext.define('ConnectorTest.model.Company', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.Field'
    ],


    fields: [{
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
            name: 'state_id',
            allowNull: true
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
            defaultValue: 1,
            name: 'tva_assuj',
            type: 'int'
        },
        {
            allowNull: false,
            defaultValue: 0,
            name: 'localtax1_assuj',
            type: 'int'
        },
        {
            allowNull: false,
            defaultValue: 0,
            name: 'localtax2_assuj',
            type: 'int'
        },
        {
            name: 'tva_intra'
        },
        {
            name: 'typent_id',
            type: 'int'
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
});