/*
 * ProductUnit
 *
 */

Ext.define('ConnectorTest.model.ProductUnit', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.Field'
    ],


    fields: [{
            name: 'id',
            type: 'int'
        },
        {
            name: 'label'
        },
        {
            name: 'short_label'
        },
        {
			name: 'scale',
			type: 'int'
        },
        {
            name: 'unit_type'
        }
    ]
});