/*
 * Order line object
 */

Ext.define('ConnectorTest.model.OrderLine', {
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
			name: 'comment',
			defaultValue: '',
			critical: true
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
			defaultValue: 0,
			name: 'qty_shipped',
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
			defaultValue: -1,
			name: 'qty_toship',
			type: 'float',
			critical: true
		},
		{
			name: 'qty_toreceive',
			type: 'float'
		},
		{
			name: 'ref'
		},
		{
			name: 'product_label'
		},
		{
			name: 'product_desc'
		},
		{
			name: 'product_price',
			type: 'float'
		},
		{
			name: 'product_price_ttc',
			type: 'float'
		},
		{
			name: 'price_base_type',
			defaultValue: 'HT',
			critical: true
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
			name: 'product_tax'
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
			name: 'reduction_percent',
			type: 'float'
		},
		{
			name: 'label'
		},
		{
			name: 'product_type'
		},
		{
			name: 'ref_supplier',
			defaultValue: '',
			critical: true
		},
		{
			name: 'ref_supplier_id',
			type: 'int',
			critical: true,
			allowNull: true
		},
		{
			name: 'tax_tx',
			type: 'float',
			defaultValue: null
		},
		{
			name: 'localtax1_tx',
			type: 'float'
		},
		{
			name: 'localtax2_tx',
			type: 'float'
		},
		{
			name: 'total_net',
			type: 'float'
		},
		{
			name: 'total_inc',
			type: 'float'
		},
		{
			name: 'total_tax',
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
			name: 'rang'
		},
		{
			// deprecated, use cost_price
			name: 'price',
			type: 'float',
			critical: true
		},
		{
			name: 'subprice',
			type: 'float'
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
			dateFormat: 'timestamp',
			name: 'date_start',
			type: 'date'
		},
		{
			dateFormat: 'timestamp',
			name: 'date_end',
			type: 'date'
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
			name: 'desiredstock',
			type: 'int'
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
			name: 'is_sub_product',
			type: 'boolean',
			defaultValue: false
		},
		{
			name: 'sub_product_parent_id',
			type: 'int'
		},
		{
			defaultValue: 0,
			name: 'qty_package',
			type: 'float',
			critical: true
		},
		{
			name: 'cost_price',
			type: 'float',
			allowNull: true,
			critical: true
		},
		{
			name: 'shipment_package_id',
			type: 'int'
		},
		{
			name: 'calculated_weight'
		},
		{
			name: 'calculated_volume'
		},
		{
			name: 'product_weight'
		},
		{
			name: 'product_surface'
		},
		{
			name: 'product_volume'
		},
		{
			name: 'app_id'
		}
	]
});