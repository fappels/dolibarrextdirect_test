/*
 * Extrafield
 */

Ext.define('ConnectorTest.model.Optional', {
	extend: 'Ext.data.Model',

	requires: [
		'Ext.data.Field'
	],


	fields: [{
			name: 'id'
		}, {
			name: 'object_id',
			type: 'int',
			critical: true
		},
		{
			name: 'object_element',
			critical: true
		},
		{
			name: 'name',
			critical: true
		},
		{
			name: 'value',
			type: 'string',
			defautValue: ''
		},
		{
			name: 'raw_value'
		}
	]
});