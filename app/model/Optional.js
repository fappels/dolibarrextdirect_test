/*
 * File: app/model/Optional.js
 *
 */

Ext.define('ConnectorTest.model.Optional', {
	extend: 'Ext.data.Model',

	requires: [
		'Ext.data.Field'
	],

	config: {
		fields: [{
				name: 'id',
			}, {
				name: 'object_id',
				type: 'int'
			},
			{
				name: 'object_element'
			},
			{
				name: 'name'
			},
			{
				name: 'value'
			},
			{
				name: 'raw_value'
			}
		]
	}
});