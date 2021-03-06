/*
 * File: app/model/ProductBatchList.js
 *
 * This file was generated by Sencha Architect version 3.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.4.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.4.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('ConnectorTest.model.ProductBatchList', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.Field'
    ],

    config: {
        fields: [
            {
                name: 'id'
            },
            {
                name: 'product_id',
                type: 'int'
            },
            {
                name: 'batch_id',
                type: 'int'
            },
            {
                name: 'product_ref'
            },
            {
                dateFormat: 'timestamp',
                name: 'sellby',
                type: 'date'
            },
            {
                dateFormat: 'timestamp',
                name: 'eatby',
                type: 'date'
            },
            {
                name: 'batch'
            },
            {
                name: 'batch_info'
            },
            {
                name: 'warehouse_id',
                type: 'int'
            },
            {
                name: 'stock_reel',
                type: 'float'
            }
        ]
    }
});