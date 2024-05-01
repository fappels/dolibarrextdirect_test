/*
 * Order object
 */

Ext.define('ConnectorTest.model.Order', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.Field'
    ],


    fields: [{
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
        name: 'ref_ext',
        type: 'string'
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
        type: 'int',
        critical: true
    },
    {
        name: 'supplier_id',
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
        name: 'user_approve_id',
        type: 'int'
    },
    {
        name: 'orderstatus_id',
        type: 'int',
        critical: true
    },
    {
        dateFormat: 'timestamp',
        name: 'create_date', // for supplier order
        type: 'date'
    },
    {
        dateFormat: 'timestamp',
        name: 'date_creation',
        type: 'date'
    },
    {
        dateFormat: 'timestamp',
        name: 'date_modification', // tms
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
        type: 'date',
        critical: true
    },
    {
        dateFormat: 'timestamp',
        name: 'deliver_date',
        type: 'date',
        critical: true
    },
    {
        name: 'note_private'
    },
    {
        name: 'note_public'
    },
    {
        name: 'ref_customer',
        type: 'string'
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
        name: 'trueDepth', // deprecated
        type: 'float'
    },
    {
        name: 'trueWidth', // deprecated
        type: 'float'
    },
    {
        name: 'trueHeight', // deprecated
        type: 'float'
    },
    {
        name: 'length',
        type: 'float'
    },
    {
        name: 'width',
        type: 'float'
    },
    {
        name: 'height',
        type: 'float'
    },
    {
        name: 'reduction_percent',
        type: 'float',
        critical: true
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
        type: 'int',
        critical: true
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
        type: 'int',
        allowNull: true
    },
    {
        name: 'signature',
        defaultValue: null,
        allowNull: true
    },
    {
        name: 'shippable_qty'
    },
    {
        name: 'origin_ref'
    },
    {
        name: 'app_id'
    }
    ]
});