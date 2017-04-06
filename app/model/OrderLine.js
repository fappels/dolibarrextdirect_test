/*
 * File: app/model/OrderLine.js
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

Ext.define('ConnectorTest.model.OrderLine', {
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
                name: 'local_id'
            },
            {
                name: 'line_id'
            },
            {
                name: 'origin_id',
                type: 'int'
            },
            {
                name: 'description'
            },
            {
                name: 'comment'
            },
            {
                name: 'product_id',
                type: 'int'
            },
            {
                name: 'qty_asked',
                type: 'float'
            },
            {
                defaultValue: 0,
                name: 'qty_shipped',
                type: 'float'
            },
            {
                defaultValue: 0,
                name: 'stock',
                type: 'float'
            },
            {
                defaultValue: 0,
                name: 'qty_toship',
                type: 'float'
            },
            {
                name: 'ref'
            },
            {
                name: 'product_label'
            },
            {
                name: 'product_desc'
            },
            {
                name: 'product_price',
                type: 'float'
            },
            {
                name: 'product_price_ttc',
                type: 'float'
            },
            {
                name: 'barcode'
            },
            {
                name: 'barcode_type',
                type: 'int'
            },
            {
                name: 'barcode_with_checksum'
            },
            {
                name: 'product_tax'
            },
            {
                name: 'warehouse_id',
                type: 'int'
            },
            {
                name: 'origin_line_id',
                type: 'int'
            },
            {
                name: 'reduction_percent',
                type: 'float'
            },
            {
                name: 'label'
            },
            {
                name: 'product_type'
            },
            {
                name: 'ref_supplier'
            },
            {
                name: 'ref_supplier_id',
                type: 'int'
            },
            {
                name: 'tax_tx',
                type: 'float'
            },
            {
                name: 'localtax1_tx',
                type: 'float'
            },
            {
                name: 'localtax2_tx',
                type: 'float'
            },
            {
                name: 'total_net',
                type: 'float'
            },
            {
                name: 'total_inc',
                type: 'float'
            },
            {
                name: 'total_tax',
                type: 'float'
            },
            {
                name: 'total_localtax1',
                type: 'float'
            },
            {
                name: 'total_localtax2',
                type: 'float'
            },
            {
                name: 'rang',
                type: 'int'
            },
            {
                name: 'price',
                type: 'float'
            },
            {
                name: 'price_base_type'
            },
            {
                name: 'subprice',
                type: 'float'
            },
            {
                name: 'has_batch',
                type: 'int'
            },
            {
                name: 'batch_id',
                type: 'int'
            },
            {
                name: 'stock_id',
                type: 'int'
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
                dateFormat: 'timestamp',
                name: 'date_start',
                type: 'date'
            },
            {
                dateFormat: 'timestamp',
                name: 'date_end',
                type: 'date'
            },
            {
                name: 'has_photo',
                type: 'int'
            },
            {
                name: 'photo_size'
            },
            {
                name: 'photo'
            },
            {
                name: 'hidden',
                type: 'boolean'
            },
            {
                name: 'total_stock',
                type: 'float'
            },
            {
                name: 'desiredstock',
                type: 'int'
            },
            {
                name: 'app_id'
            }
        ]
    }
});