/**
 * Inventory Model
 * file: app/model/Inventory.js
 */

Ext.define('ConnectorTest.model.Inventory', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.Field'
    ],

    fields: [
        {
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
            name: 'user_id',
            type: 'int'
        },
        {
            name: 'product_id',
            type: 'int'
        },
        {
            name: 'status_id',
            type: 'int',
            critical: true
        },
        {
            dateFormat: 'timestamp',
            name: 'date_creation',
            type: 'date'
        },
        {
            dateFormat: 'timestamp',
            name: 'date_validation',
            type: 'date'
        },
        { 
            dateFormat: 'timestamp',
            name: 'date_modification',
            type: 'date'
        },
        {
            dateFormat: 'timestamp',
            name: 'date_inventory',
            type: 'date'
        },
        {
            name: 'app_id'
        }
    ]
});
