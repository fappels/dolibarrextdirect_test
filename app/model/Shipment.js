/*
 * Shipment object
 */

Ext.define('ConnectorTest.model.Shipment', {
    extend: 'ConnectorTest.model.Order',

    requires: [
        'Ext.data.Field'
    ],

    fields: [
        {
            name: 'shipmentstatus_id',
            type: 'int'
        },
        {
            dateFormat: 'timestamp',
            name: 'shipment_date',
            type: 'date'
        },
        {
            name: 'shipmentstatus'
        }
    ]
});