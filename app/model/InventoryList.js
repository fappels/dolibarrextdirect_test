/**
 * file: app/model/InventoryList.js
 * InventoryList Model
 */

Ext.define('ConnectorTest.model.InventoryList', {
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
            name: 'ref'
        },
        {
            name: 'description'
        },
        {
            name: 'warehouse_id',
            type: 'int',
            critical: true
        },
        {
            name: 'product_id',
            type: 'int'
        },
        {
            name: 'user_id',
            type: 'int'
        },
        {
            name: 'status_id',
            type: 'int',
            critical: true
        },
        {
            dateFormat: 'timestamp',
            name: 'date_intervention',
            type: 'date'
        },
        {
            name: 'statusdisplay',
        },
        {
            name: 'ref_product'
        },
        {
            name: 'app_id'
        }
    ]
});