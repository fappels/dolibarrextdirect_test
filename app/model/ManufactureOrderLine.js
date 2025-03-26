/*
 * Order line object
 */

Ext.define('ConnectorTest.model.ManufactureOrderLine', {
	extend: 'Ext.data.Model',

	requires: [
		'Ext.data.Field'
	],

	config: {
		fields: [{
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
			type: 'int',
			critical: true
		},
		{
			name: 'description'
		},
		{
			name: 'product_id',
			type: 'int',
			critical: true
		},
		{
			name: 'qty_asked',
			type: 'float'
		},
		{
			name: 'qty_frozen',
			type: 'float'
		},
		{
			defaultValue: 0,
			name: 'qty_produced',
			type: 'float',
			critical: true
		},
		{
			defaultValue: 0,
			name: 'qty_consumed',
			type: 'float',
			critical: true
		},
		{
			defaultValue: 0,
			name: 'stock',
			type: 'float'
		},
		{
			name: 'is_virtual_stock',
			type: 'boolean',
			defaultValue: false
		},
		{
			defaultValue: 0,
			name: 'qty_toprocess',
			type: 'float',
			critical: true
		},
		{
			name: 'role',
			critical: true
		},
		{
			name: 'inventorycode'
		},
		{
			name: 'inventorylabel'
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
			name: 'warehouse_id',
			type: 'int',
			critical: true
		},
		{
			name: 'default_warehouse_id',
			type: 'int'
		},
		{
			name: 'origin_line_id',
			type: 'int',
			critical: true
		},
		{
			name: 'origin_line_type'
		},
		{
			name: 'label'
		},
		{
			name: 'position'
		},
		{
			name: 'has_batch',
			type: 'int'
		},
		{
			name: 'batch_id',
			type: 'int',
			critical: true
		},
		{
			name: 'stock_id',
			type: 'int',
			critical: true
		},
		{
			dateFormat: 'timestamp',
			name: 'date_creation',
			type: 'date'
		},
		{
			dateFormat: 'timestamp',
			name: 'date_modification',
			type: 'date'
		},
		{
			dateFormat: 'timestamp',
			name: 'sellby',
			type: 'date'
		},
		{
			dateFormat: 'timestamp',
			name: 'eatby',
			type: 'date'
		},
		{
			name: 'batch',
			defaultValue: '',
			critical: true
		},
		{
			name: 'batch_info'
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
			name: 'hidden',
			type: 'boolean'
		},
		{
			name: 'total_stock',
			type: 'float'
		},
		{
			name: 'unit_id',
			type: 'int',
			critical: true
		},
		{
			name: 'unit_label' // only used local
		},
		{
			name: 'app_id'
		}
		]
	}
});