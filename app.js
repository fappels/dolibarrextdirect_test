/*
 * File: app.js
 *
 * This file was generated by Sencha Architect version 3.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.3.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.3.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

// @require @packageOverrides
Ext.Loader.setConfig({

});

Ext.application({
	
	requires: [
        'Ext.MessageBox',
        'Ext.data.*',
        'Ext.direct.*'
    ],
	
	controllers: [
	    'Main'
	],
	
    models: [
        'Authentication',
        'Action',
        'ActionList',
        'Activity',
        'Availability',
        'BarcodeType',
        'Categorie',
        'CategorieList',
        'CommercialStatus',
        'Company',
        'CompanyList',
        'Contact',
        'ContactList',
        'Country',
        'Lang',
        'Location',
        'Order',
        'OrderLine',
        'OrderList',
        'DispatchList',
        'OrderStatus',
        'PaymentCondition',
        'PaymentType',
        'PriceIndex',
        'Product',
        'ProductList',
        'ProductBatchList',
        'ProductType',
        'ProspectLevel',
        'State',
        'Town',
        'User',
        'Warehouse',
        'ContactLinkTypeList',
	    'IncotermsCode',
	    'ShipmentMode',
	    'PriceBaseType',
	    'ShipmentList'
    ],
    
    stores: [
            'ActionList',
		    'Actions',
		    'Activities',
		    'Authentication',
		    'Availability',
		    'BarcodeTypes',
		    'CategorieList',
		    'Categories',
		    'CommercialStatus',
		    'Companies',
		    'CompanyList',
		    'ContactLinkTypeList',
		    'ContactList',
		    'Contacts',
		    'Countries',
		    'Lang',
		    'Locations',
		    'Order',
		    'OrderLine',
		    'OrderList',
		    'OrderStatus',
		    'PaymentConditions',
		    'PaymentTypes',
		    'PriceIndex',
		    'Product',
		    'ProductBatchList',
		    'ProductList',
		    'ProductTypeList',
		    'ProspectLevel',
		    'PurchaseOrder',
		    'PurchaseOrderLine',
		    'PurchaseOrderList',
		    'PurchaseOrderStatus',
		    'Shipment',
		    'ShipmentLine',
		    'States',
		    'Towns',
		    'Users',
		    'Warehouse',
		    'IncotermsCodes',
		    'ShipmentModes',
		    'PriceBaseTypes',
		    'ShipmentList',
		    'ShipmentStatus',
		    'ShipmentContactTypeList'
	],
	
    views: [
        'MainView'
    ],
    name: 'ConnectorTest',

    launch: function() {
        // hide the main view, jasmine will show testresults
        Ext.Viewport.hide();
        //Ext.create('ConnectorTest.view.MainView', {fullscreen: true});
    }

});
