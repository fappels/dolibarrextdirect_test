/*
 * File: app/store/ProductList.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.1.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('ConnectorTest.store.CompanyList', {
    extend: 'Ext.data.Store',

    requires: [
        'ConnectorTest.model.CompanyList'
    ],

    config: {
        model: 'ConnectorTest.model.CompanyList',
        remoteFilter: true,
        storeId: 'companylist'
    }
});