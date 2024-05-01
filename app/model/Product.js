/*
 * Product object
 */

Ext.define('ConnectorTest.model.Product', {
	extend: 'Ext.data.Model',

	requires: [
		'Ext.data.Field'
	],


	fields: [{
			name: 'id',
			type: 'int'
		},
		{
			name: 'ref'
		},
		{
			name: 'type'
		},
		{
			name: 'date_creation'
		},
		{
			name: 'date_modification'
		},
		{
			name: 'label'
		},
		{
			name: 'description'
		},
		{
			name: 'note'
		},
		{
			name: 'price',
			type: 'float',
			critical: true
		},
		{
			name: 'price_ttc',
			type: 'float'
		},
		{
			name: 'tva_tx',
			type: 'float'
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
			name: 'price_base_type',
			critical: true
		},
		{
			name: 'stock_reel', // deprecated, TODO refactor
			type: 'float'
		},
		{
			name: 'stock',
			type: 'float'
		},
		{
			name: 'is_virtual_stock',
			type: 'boolean',
			defaultValue: false
		},
		{
			name: 'total_stock',
			type: 'float'
		},
		{
			name: 'tosell',
			type: 'int'
		},
		{
			name: 'tobuy',
			type: 'int'
		},
		{
			name: 'finished'
		},
		{
			name: 'customcode'
		},
		{
			name: 'country_id',
			type: 'int'
		},
		{
			name: 'weight',
			type: 'float'
		},
		{
			name: 'weight_units',
			type: 'int'
		},
		{
			name: 'product_length',
			type: 'float'
		},
		{
			name: 'length_units',
			type: 'int'
		},
		{
			name: 'width',
			type: 'float'
		},
		{
			name: 'width_units',
			type: 'int'
		},
		{
			name: 'height',
			type: 'float'
		},
		{
			name: 'height_units',
			type: 'int'
		},
		{
			name: 'surface',
			type: 'float'
		},
		{
			name: 'surface_units',
			type: 'int'
		},
		{
			name: 'volume',
			type: 'float'
		},
		{
			name: 'volume_units',
			type: 'int'
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
			name: 'has_batch',
			type: 'int'
		},
		{
			name: 'batch_id',
			type: 'int',
			defaultValue: -1,
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
			type: 'date',
			critical: true
		},
		{
			dateFormat: 'timestamp',
			name: 'eatby',
			type: 'date',
			critical: true
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
			name: 'ref_supplier'
		},
		{
			name: 'ref_supplier_id',
			type: 'int',
			critical: true
		},
		{
			name: 'price_supplier',
			type: 'float',
			critical: true
		},
		{
			name: 'qty_supplier',
			type: 'float',
			defaultValue: '1',
			critical: true
		},
		{
			name: 'reduction_percent_supplier'
		},
		{
			name: 'reduction_supplier'
		},
		{
			name: 'pu_supplier',
			type: 'float',
			allowNull: true
		},
		{
			name: 'vat_supplier',
			type: 'float',
			critical: true
		},
		{
			name: 'price_base_type_supplier',
			critical: true
		},
		{
			name: 'supplier_id',
			type: 'int',
			critical: true
		},
		{
			name: 'multiprices_index',
			type: 'int',
			critical: true
		},
		{
			name: 'correct_stock_dest_warehouseid',
			type: 'int',
			critical: true,
			allowNull: true
		},
		{
			name: 'correct_stock_nbpiece',
			type: 'float',
			critical: true
		},
		{
			name: 'correct_stock_movement',
			type: 'int',
			critical: true
		},
		{
			name: 'correct_stock_label',
			defaultValue: '',
			critical: true
		},
		{
			name: 'correct_stock_price',
			type: 'float',
			critical: true
		},
		{
			name: 'pmp',
			type: 'float'
		},
		{
			name: 'has_photo',
			type: 'int'
		},
		{
			name: 'photo_size'
		},
		{
			name: 'photo',
			allowNull: true
		},
		{
			name: 'inventorycode',
			defaultValue: '',
			critical: true
		},
		{
			name: 'default_reduction_percent'
		},
		{
			name: 'seuil_stock_alerte',
			type: 'int'
		},
		{
			name: 'desiredstock',
			type: 'int'
		},
		{
			name: 'unit_id',
			type: 'int'
		},
		{
			name: 'cost_price',
			type: 'float',
			allowNull: true
		},
		{
			name: 'local_id'
		},
		{
			name: 'app_id'
		}
	]
});