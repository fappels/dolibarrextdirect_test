/*
 * File: app/controller/Main.js
 *	
 *	Main Controller for ControllerTest
 *
 *	@author Francis Appels <francis.appels@z-application.com>
 * 
 */

Ext.define('ConnectorTest.controller.Main', 
/**
 * @author Francis
 *
 */

{
    extend: 'Ext.app.Controller',
    
    debug: true, // show debug messages on console
    
    jasmineEnv: null,
    
    config: {
        refs: {
           
        },

        control: {
            
        }
    },
    
    /**
     * init:
     * set REMOTING_API add remoting provider
     * set exeption listener
     * set Proxy api and fn
     * set available modules
     * init bluetooth
     */
    init: function () {
    	//setup jasmine environment
    	this.jasmineEnv = jasmine.getEnv();
    	this.jasmineEnv.updateInterval = 1000;

        var htmlReporter = new jasmine.HtmlReporter();

        this.jasmineEnv.addReporter(htmlReporter);

        this.jasmineEnv.specFilter = function(spec) {
          return htmlReporter.specFilter(spec);
        };
        
		Ext.ns("Ext.app.REMOTING_API");
		Ext.app.REMOTING_API = {
			"id":"dolibarr_connector",
			"url":"http://localhost/dolibarr/htdocs/extdirect/router.php",
			"type":"remoting",
			"actions":{
				"ExtDirectProduct":[
						{"name":"readProduct","len":1},
						{"name":"createProduct","len":1},
						{"name":"updateProduct","len":1},
						{"name":"destroyProduct","len":1},
						{"name":"readProductList","len":1},
						{"name":"readProductBatchList","len":1},
						{"name":"readOptionalModel","len":1},
						{"name":"readOptionals","len":1}
				],
				"ExtDirectTranslate":[
						{"name":"load","len":1}
				],
				"ExtDirectFormProduct":[
						{"name":"readWarehouses","len":1},
						{"name":"readPriceIndex","len":1},
						{"name":"readProductType","len":1},
						{"name":"readPriceBaseType","len":1},
						{"name":"readBarcodeType","len":1},
						{"name":"readSupplierReputations","len":1}
				],
				"ExtDirectAuthenticate":[
						{"name":"createAuthentication","len":1},
						{"name":"readAuthentication","len":1},
						{"name":"updateAuthentication","len":1},
						{"name":"destroyAuthentication","len":1}
				],
				"ExtDirectActivities":[
						{"name":"createActivity","len":1},
						{"name":"readActivities","len":1},
						{"name":"updateActivity","len":1},
						{"name":"destroyActivity","len":1}
				],
				"ExtDirectCommande":[
						{"name":"readOrder","len":1},
						{"name":"createOrder","len":1},
						{"name":"updateOrder","len":1},
						{"name":"destroyOrder","len":1},
						{"name":"readOrderList","len":1},
						{"name":"readOrderStatus","len":1},
						{"name":"readContactTypes","len":1},
						{"name":"readOrderLine","len":1},
						{"name":"createOrderLine","len":1},
						{"name":"updateOrderLine","len":1},
						{"name":"destroyOrderLine","len":1},
						{"name":"readAvailabilityCodes","len":1},
						{"name":"readShipmentModes","len":1},
						{"name":"readIncotermCodes","len":1},
						{"name":"readConstants","len":1}
				],
				"ExtDirectCommandeFournisseur":[
						{"name":"readOrder","len":1},
						{"name":"createOrder","len":1},
						{"name":"updateOrder","len":1},
						{"name":"destroyOrder","len":1},
						{"name":"readOrderList","len":1},
						{"name":"readOrderStatus","len":1},
						{"name":"readContactTypes","len":1},
						{"name":"readOrderLine","len":1},
						{"name":"createOrderLine","len":1},
						{"name":"updateOrderLine","len":1},
						{"name":"destroyOrderLine","len":1},
						{"name":"readConstants","len":1}
				],
				"ExtDirectExpedition":[
						{"name":"readShipment","len":1},
						{"name":"createShipment","len":1},
						{"name":"updateShipment","len":1},
						{"name":"destroyShipment","len":1},
						{"name":"readShipmentList","len":1},
						{"name":"readShipmentStatus","len":1},
						{"name":"readContactTypes","len":1},
						{"name":"readShipmentLine","len":1},
						{"name":"createShipmentLine","len":1},
						{"name":"updateShipmentLine","len":1},
						{"name":"destroyShipmentLine","len":1},
						{"name":"readConstants","len":1}
				],
				"ExtDirectSociete":[
						{"name":"readSociete","len":1},
						{"name":"createSociete","len":1},
						{"name":"updateSociete","len":1},
						{"name":"destroySociete","len":1},
						{"name":"readSocieteList","len":1},
						{"name":"getTowns","len":1},
						{"name":"getCategories","len":1},
						{"name":"readStComm","len":1},
						{"name":"readProspectLevel","len":1},
						{"name":"readPaymentTypes","len":1},
						{"name":"readPaymentConditions","len":1},
						{"name":"readCountryConstants","len":1},
						{"name":"readStateConstants","len":1},
						{"name":"readConstants","len":1}
				],
				"ExtDirectContact":[
						{"name":"readContact","len":1},
						{"name":"readContactList","len":1},
						{"name":"createContact","len":1},
						{"name":"updateContact","len":1},
						{"name":"destroyContact","len":1}
				],
				"ExtDirectActionComm":[
						{"name":"readAction","len":1},
						{"name":"readActionList","len":1},
						{"name":"createAction","len":1},
						{"name":"updateAction","len":1},
						{"name":"destroyAction","len":1},
						{"name":"getAllUsers","len":1}
				],
				"ExtDirectCategorie":[
						{"name":"readCategorie","len":1},
						{"name":"createCategorie","len":1},
						{"name":"updateCategorie","len":1},
						{"name":"destroyCategorie","len":1},
						{"name":"readCategorieList","len":1}
				]	
			},
			"total":2200
		};
		Ext.Direct.addProvider(Ext.app.REMOTING_API);
		Ext.Direct.addListener({
			exception: function(e) {
				console.log('Exception:' + e.getMessage());
				console.log('Detail:' + e.getData());
			},
			scope: this 
		});
		Ext.getStore('authentication').setProxy({
			type: 'direct',
			api: {
				create: ExtDirectAuthenticate.createAuthentication,
				read: ExtDirectAuthenticate.readAuthentication,
				update: ExtDirectAuthenticate.updateAuthentication,
				destroy: ExtDirectAuthenticate.destroyAuthentication
			}
		});
		Ext.getStore('activities').setProxy({
			type: 'direct',
			api: {
				create: ExtDirectActivities.createActivity,
				read: ExtDirectActivities.readActivities,
				update: ExtDirectActivities.updateActivity,
				destroy: ExtDirectActivities.destroyActivity
			}
		});
		Ext.getStore('product').setProxy({
			type: 'direct',
			api: {
				create: ExtDirectProduct.createProduct,
				read: ExtDirectProduct.readProduct,
				update: ExtDirectProduct.updateProduct,
				destroy: ExtDirectProduct.destroyProduct
			}
		});
		Ext.getStore('order').setProxy({
			type: 'direct',
			api: {
				create: ExtDirectCommande.createOrder,
				read: ExtDirectCommande.readOrder,
				update: ExtDirectCommande.updateOrder,
				destroy: ExtDirectCommande.destroyOrder
			}
		});
		Ext.getStore('orderline').setProxy({
			type: 'direct',
			api: {
				create: ExtDirectCommande.createOrderLine,
				read: ExtDirectCommande.readOrderLine,
				update: ExtDirectCommande.updateOrderLine,
				destroy: ExtDirectCommande.destroyOrderLine
				}
		});
		Ext.getStore('shipment').setProxy({
			type: 'direct',
			api: {
				create: ExtDirectExpedition.createShipment,
				read: ExtDirectExpedition.readShipment,
				update: ExtDirectExpedition.updateShipment,
				destroy: ExtDirectExpedition.destroyShipment
			}
		});
		Ext.getStore('shipmentline').setProxy({
			type: 'direct',
			api: {
				create: ExtDirectExpedition.createShipmentLine,
				read: ExtDirectExpedition.readShipmentLine,
				update: ExtDirectExpedition.updateShipmentLine,
				destroy: ExtDirectExpedition.destroyShipmentLine
			}
		});
		Ext.getStore('PurchaseOrder').setProxy({
			type: 'direct',
			api: {
				create: ExtDirectCommandeFournisseur.createOrder,
				read: ExtDirectCommandeFournisseur.readOrder,
				update: ExtDirectCommandeFournisseur.updateOrder,
				destroy: ExtDirectCommandeFournisseur.destroyOrder
			}
		});
		Ext.getStore('PurchaseOrderLine').setProxy({
			type: 'direct',
			api: {
				create: ExtDirectCommandeFournisseur.createOrderLine,
				read: ExtDirectCommandeFournisseur.readOrderLine,
				update: ExtDirectCommandeFournisseur.updateOrderLine,
				destroy: ExtDirectCommandeFournisseur.destroyOrderLine
				}
		});
		Ext.getStore('companies').setProxy({
			type: 'direct',
			api: {
				create: ExtDirectSociete.createSociete,
				read: ExtDirectSociete.readSociete,
				update: ExtDirectSociete.updateSociete,
				destroy: ExtDirectSociete.destroySociete
			}
		});
		Ext.getStore('contacts').setProxy({
			type: 'direct',
			api: {
				create: ExtDirectContact.createContact,
				read: ExtDirectContact.readContact,
				update: ExtDirectContact.updateContact,
				destroy: ExtDirectContact.destroyContact
			}
		});
		Ext.getStore('categories').setProxy({
			type: 'direct',
			api: {
				create: ExtDirectCategorie.createCategorie,
				read: ExtDirectCategorie.readCategorie,
				update: ExtDirectCategorie.updateCategorie,
				destroy: ExtDirectCategorie.destroyCategorie
			}
		});
		Ext.getStore('actions').setProxy({
			type: 'direct',
			api: {
				create: ExtDirectActionComm.createAction,
				read: ExtDirectActionComm.readAction,
				update: ExtDirectActionComm.updateAction,
				destroy: ExtDirectActionComm.destroyAction
			}
		});
		Ext.getStore('companylist').setProxy({
			type: 'direct',
			directFn: ExtDirectSociete.readSocieteList
		});
		Ext.getStore('towns').setProxy({
			type: 'direct',
			directFn: ExtDirectSociete.getTowns
		});
		Ext.getStore('categorielist').setProxy({
			type: 'direct',
			directFn: ExtDirectCategorie.readCategorieList
		});
		Ext.getStore('commercialstatus').setProxy({
			type: 'direct',
			directFn: ExtDirectSociete.readStComm
		});
		Ext.getStore('contactlist').setProxy({
			type: 'direct',
			directFn: ExtDirectContact.readContactList
		});
		Ext.getStore('actionlist').setProxy({
			type: 'direct',
			directFn: ExtDirectActionComm.readActionList
		});
		Ext.getStore('prospectlevel').setProxy({
			type: 'direct',
			directFn: ExtDirectSociete.readProspectLevel
		});
		Ext.getStore('orderlist').setProxy({
			type: 'direct',
			directFn: ExtDirectCommande.readOrderList
		});
		Ext.getStore('PurchaseOrderList').setProxy({
			type: 'direct',
			directFn: ExtDirectCommandeFournisseur.readOrderList
		});
		Ext.getStore('productlist').setProxy({
			type: 'direct',
			directFn: ExtDirectProduct.readProductList
		});
		Ext.getStore('productbatchlist').setProxy({
			type: 'direct',
			directFn: ExtDirectProduct.readProductBatchList
		});
		Ext.getStore('orderstatus').setProxy({
			type: 'direct',
			directFn: ExtDirectCommande.readOrderStatus
		});
		Ext.getStore('PurchaseOrderStatus').setProxy({
			type: 'direct',
			directFn: ExtDirectCommandeFournisseur.readOrderStatus
		});
		Ext.getStore('lang').setProxy({
			type: 'direct',
			directFn: ExtDirectTranslate.load
		});
		Ext.getStore('warehouse').setProxy({
			type: 'direct',
			directFn: ExtDirectFormProduct.readWarehouses
		});
		Ext.getStore('priceindex').setProxy({
			type: 'direct',
			directFn: ExtDirectFormProduct.readPriceIndex
		});
		Ext.getStore('users').setProxy({
			type: 'direct',
			directFn: ExtDirectActionComm.getAllUsers
		});
		Ext.getStore('availability').setProxy({
			type: 'direct',
			directFn: ExtDirectCommande.readAvailabilityCodes
		});
		Ext.getStore('ProductTypeList').setProxy({
			type: 'direct',
			directFn: ExtDirectFormProduct.readProductType
		});
		Ext.getStore('PaymentTypes').setProxy({
			type: 'direct',
			directFn: ExtDirectSociete.readPaymentTypes
		});
		Ext.getStore('PaymentConditions').setProxy({
			type: 'direct',
			directFn: ExtDirectSociete.readPaymentConditions
		});
		Ext.getStore('Countries').setProxy({
			type: 'direct',
			directFn: ExtDirectSociete.readCountryConstants
		});
		Ext.getStore('States').setProxy({
			type: 'direct',
			directFn: ExtDirectSociete.readStateConstants
		});
		Ext.getStore('BarcodeTypes').setProxy({
			type: 'direct',
			directFn: ExtDirectFormProduct.readBarcodeType
		});
		Ext.getStore('ContactLinkTypeList').setProxy({
			type: 'direct',
			directFn: ExtDirectCommandeFournisseur.readContactTypes
		});
		Ext.getStore('ShipmentModes').setProxy({
			type: 'direct',
			directFn: ExtDirectCommande.readShipmentModes
		});
		Ext.getStore('IncotermsCodes').setProxy({
			type: 'direct',
			directFn: ExtDirectCommande.readIncotermCodes
		});
		Ext.getStore('PriceBaseTypes').setProxy({
			type: 'direct',
			directFn: ExtDirectFormProduct.readPriceBaseType
		});
		Ext.getStore('ShipmentList').setProxy({
			type: 'direct',
			directFn: ExtDirectExpedition.readShipmentList
		});
		Ext.getStore('ShipmentStatus').setProxy({
			type: 'direct',
			directFn: ExtDirectExpedition.readShipmentStatus
		});
		Ext.getStore('ShipmentContactTypeList').setProxy({
			type: 'direct',
			directFn: ExtDirectExpedition.readContactTypes
		});
		Ext.getStore('OrderConstants').setProxy({
			type: 'direct',
			directFn: ExtDirectCommande.readConstants
		});
		Ext.getStore('ShipmentConstants').setProxy({
			type: 'direct',
			directFn: ExtDirectExpedition.readConstants
		});
		Ext.getStore('CompanyConstants').setProxy({
			type: 'direct',
			directFn: ExtDirectSociete.readConstants
		});
		Ext.getStore('PurchaseConstants').setProxy({
			type: 'direct',
			directFn: ExtDirectCommandeFournisseur.readConstants
		});
		Ext.getStore('SupplierReputations').setProxy({
			type: 'direct',
			directFn: ExtDirectFormProduct.readSupplierReputations
		});
		Ext.getStore('ProductOptionalModel').setProxy({
			type: 'direct',
			directFn: ExtDirectProduct.readOptionalModel
		});
		Ext.getStore('ProductOptionals').setProxy({
			type: 'direct',
			directFn: ExtDirectProduct.readOptionals
		});
	},
    
    
    /**
     * launch:
     * 	Add views
	 *	destroy apploading indicator 
	 *	find active setting, load setting and connect to provider or show settings view to create first settings
	 *	add ExtBluetooth exception and connected listeners
     */
    launch: function() {
    	this.debug?console.log('launch main controller'):null;
    	
    	this.jasmineEnv.execute(); 
    }
});