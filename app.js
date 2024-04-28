/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'ConnectorTest.Application',


    requires: [
        // This will automatically load all classes in the ConnectorTest namespace
        // so that application classes do not need to require each other.
        'ConnectorTest.*',
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
	    'ShipmentList',
	    'Constant',
		'DataConstant',
		'OptionalModel',
		'Optional',
		'Intervention',
		'InterventionLine',
		'InterventionList',
		'Shipment'
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
		    'ShipmentContactTypeList',
		    'OrderConstants',
		    'ShipmentConstants',
			'CompanyConstants',
			'SupplierReputations',
			'PurchaseConstants',
			'ProductOptionalModel',
			'ProductOptionals',
			'Intervention',
			'InterventionLines',
			'InterventionList',
			'InterventionConstants',
			'InterventionStatus'
	],
	
    views: [
        'MainView'
    ],
	name: 'ConnectorTest',
    // The name of the initial view to create.
    mainView: 'ConnectorTest.view.MainView',

    launch: function() {
        // hide the main view, jasmine will show testresults
        Ext.Viewport.hide();
        //Ext.create('ConnectorTest.view.MainView', {fullscreen: true});
    }
});
