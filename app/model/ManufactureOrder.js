/*
 * ShipmentPackage object
 */

Ext.define('ConnectorTest.model.ManufactureOrder', {
	extend: 'ConnectorTest.model.Order',

	requires: [
		'Ext.data.Field'
	],
	config: {
		fields: [
			{
				name: 'status_id',
				type: 'int',
				critical: true
			},
			{
				name: 'statusdisplay'
			},
			{
				name: 'ref_bom'
			},
			{
				name: 'ref_product'
			},
			{
				name: 'product_id',
				type: 'int'
			},
			{
				name: 'qty_toproduce',
				type: 'float'
			},
			{
				name: 'bom_id',
				type: 'int'
			},
			{
				dateFormat: 'timestamp',
				name: 'date_valid',
				type: 'date'
			},
			{
				dateFormat: 'timestamp',
				name: 'date_start_planned',
				type: 'date'
			},
			{
				dateFormat: 'timestamp',
				name: 'date_end_planned',
				type: 'date'
			}
		]
	}
});