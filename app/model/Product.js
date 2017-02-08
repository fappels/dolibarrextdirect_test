/*
 * File: app/model/Product.js
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

Ext.define('ConnectorTest.model.Product', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.Field'
    ],

    config: {
        fields: [
            {
                name: 'id',
                type: 'int'
            },
            {
                name: 'ref'
            },
            {
                name: 'type'
            },
            {
                name: 'date_creation'
            },
            {
                name: 'date_modification'
            },
            {
                name: 'label'
            },
            {
                name: 'description'
            },
            {
                name: 'note'
            },
            {
                name: 'price',
                type: 'float'
            },
            {
                name: 'price_ttc',
                type: 'float'
            },
            {
                name: 'tva_tx',
                type: 'float'
            },
            {
                name: 'price_base_type'
            },
            {
                name: 'stock_reel',
                type: 'float'
            },
            {
                name: 'tosell',
                type: 'int'
            },
            {
                name: 'tobuy',
                type: 'int'
            },
            {
                name: 'finished'
            },
            {
                name: 'customcode'
            },
            {
                name: 'country_id',
                type: 'int'
            },
            {
                name: 'weight',
                type: 'float'
            },
            {
                name: 'weight_units'
            },
            {
                name: 'length',
                type: 'float'
            },
            {
                name: 'length_units'
            },
            {
                name: 'surface',
                type: 'float'
            },
            {
                name: 'surface_units'
            },
            {
                name: 'volume',
                type: 'float'
            },
            {
                name: 'volume_units'
            },
            {
                name: 'barcode'
            },
            {
                name: 'barcode_type',
                type: 'int'
            },
            {
                name: 'warehouse_id',
                type: 'int'
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
                name: 'ref_supplier'
            },
            {
                name: 'ref_supplier_id',
                type: 'int'
            },
            {
                name: 'price_supplier'
            },
            {
                name: 'qty_supplier'
            },
            {
                name: 'reduction_percent_supplier'
            },
            {
                name: 'reduction_supplier'
            },
            {
                name: 'pu_supplier'
            },
            {
                name: 'vat_supplier'
            },
            {
                name: 'supplier_id'
            },
            {
                name: 'multiprices_index',
                type: 'int'
            },
            {
                name: 'correct_stock_dest_warehouseid',
                type: 'int'
            },
            {
                name: 'correct_stock_nbpiece',
                type: 'float'
            },
            {
                name: 'correct_stock_movement'
            },
            {
                name: 'correct_stock_label'
            },
            {
                name: 'correct_stock_price',
                type: 'float'
            },
            {
                name: 'pmp',
                type: 'float'
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
                name: 'inventorycode'
            },
            {
                name: 'seuil_stock_alerte',
                type: 'int'
            },
            {
                name: 'desiredstock',
                type: 'int'
            },
            {
                name: 'local_id'
            },
            {
                name: 'app_id'
            }
        ],
        validations: [
            {
                type: 'presence',
                field: 'ref'
            },
            {
                type: 'presence',
                field: 'label'
            }
        ]
    }
});