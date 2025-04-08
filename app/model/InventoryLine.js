/**
 * InventoryLine Model
 * file: app/model/InventoryLine.js
 */

Ext.define('ConnectorTest.model.InventoryLine', {
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
            name: 'origin_id',
            type: 'int',
            critical: true
        },
        {
            name: 'line_id',
            type: 'int',
            critical: true
        },
        {
            name: 'batch'
        },
        {
            name: 'product_id',
            type: 'int',
            critical: true
        },
        {
            name: 'warehouse_id',
            type: 'int',
            critical: true
        },
        {
            name: 'qty_stock',
            type: 'float'
        },
        {
            defaultValue: 0,
            name: 'qty_view',
            type: 'float',
            critical: true
        },
        {
            name: 'qty_regulated',
            type: 'float'
        },
        {
            name: 'pmp_real',
            type: 'float'
        },
        {
            name: 'pmp_expected',
            type: 'float'
        },
        {
            name: 'ref_product'
        },
        {
            name: 'product_label'
        },
        {
            name: 'product_desc'
        },
		{
			name: 'product_type'
		},
		{
			name: 'barcode'
		},
		{
			name: 'barcode_type',
			type: 'int'
		},
		{
			name: 'barcode_with_checksum'
		},
		{
			name: 'has_photo',
			type: 'int',
			critical: true
		},
		{
			name: 'photo_size'
		},
		{
			name: 'photo',
			allowNull: true
		},
        {
            name: 'app_id'
        }
    ]
});