/*
 * List of manufacture orders
 */

Ext.define('ConnectorTest.model.ManufactureOrderList', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.Field'
    ],

    config: {
        fields: [{
            name: 'id'
        },
        {
            name: 'ref'
        },
        {
            name: 'ref_bom'
        },
        {
            name: 'customer'
        },
        {
            name: 'status_id',
            type: 'int'
        },
        {
            name: 'statusdisplay'
        },
        {
            name: 'customer_id',
            type: 'int'
        },
        {
            name: 'status'
        },
        {
            name: 'ref_product'
        },
        {
            dateFormat: 'timestamp',
            name: 'date_start_planned',
            type: 'date'
        },
        {
            name: 'qty_toproduce',
            type: 'float'
        },
        {
            name: 'qty_produced',
            type: 'float'
        }
        ]
    }
});