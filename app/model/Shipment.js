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
            type: 'int',
            critical: true
        },
        {
            dateFormat: 'timestamp',
            name: 'shipment_date',
            type: 'date',
            critical: true
        },
        {
            name: 'shipmentstatus'
        }
    ]
});