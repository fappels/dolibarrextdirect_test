/*
 * File: app/model/Order.js
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

Ext.define('ConnectorTest.model.Order', {
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
                name: 'ref_ext'
            },
            {
                name: 'comment'
            },
            {
                name: 'availability_id'
            },
            {
                name: 'availability_code'
            },
            {
                name: 'shipment_id',
                type: 'int'
            },
            {
                name: 'customer_id',
                type: 'int'
            },
            {
                name: 'supplier_id',
                type: 'int'
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
                name: 'user_approve_id',
                type: 'int'
            },
            {
                name: 'orderstatus_id',
                type: 'int'
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
                dateFormat: 'timestamp',
                name: 'approve_date',
                type: 'date'
            },
            {
                dateFormat: 'timestamp',
                name: 'order_date',
                type: 'date'
            },
            {
                dateFormat: 'timestamp',
                name: 'deliver_date',
                type: 'date'
            },
            {
                name: 'note_private'
            },
            {
                name: 'note_public'
            },
            {
                name: 'ref_customer'
            },
            {
                name: 'ref_supplier'
            },
            {
                name: 'user_name'
            },
            {
                name: 'customer_name'
            },
            {
                name: 'supplier_name'
            },
            {
                name: 'orderstatus'
            },
            {
                name: 'weight_units'
            },
            {
                name: 'weight',
                type: 'float'
            },
            {
                name: 'size_units'
            },
            {
                name: 'trueDepth',
                type: 'float'
            },
            {
                name: 'trueWidth',
                type: 'float'
            },
            {
                name: 'trueHeight',
                type: 'float'
            },
            {
                name: 'reduction_percent',
                type: 'float'
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
                name: 'warehouse_id',
                type: 'int'
            },
            {
                name: 'order_method_id'
            },
            {
                name: 'order_method'
            },
            {
                name: 'total_net',
                type: 'float'
            },
            {
                name: 'total_tax',
                type: 'float'
            },
            {
                name: 'total_inc',
                type: 'float'
            },
            {
                name: 'total_localtax1',
                type: 'float'
            },
            {
                name: 'total_localtax2',
                type: 'float'
            },
            {
                name: 'shipping_method_id',
                type: 'int'
            },
            {
                name: 'incoterms_id',
                type: 'int'
            },
            {
                name: 'location_incoterms'
            },
            {
                name: 'delivery_address_id',
                type: 'int'
            },
            {
                name: 'model_pdf'
            },
            {
                name: 'tracking_number'
            },
            {
                name: 'customer_type'
            },
            {
                name: 'reduction',
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
    }
});