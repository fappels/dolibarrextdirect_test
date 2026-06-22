/*
 * Reception object
 */

Ext.define('ConnectorTest.model.Reception', {
    extend: 'ConnectorTest.model.Order',

    requires: [
        'Ext.data.Field'
    ],

    fields: [
        {
            name: 'status_id',
            type: 'int',
            critical: true
        },
        {
            dateFormat: 'timestamp',
            name: 'date_reception',
            type: 'date',
            critical: true
        },
        {
            name: 'statusdisplay'
        }
    ]
});
