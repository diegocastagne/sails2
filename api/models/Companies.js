/**
 * Companies.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    id: {type: 'number', autoIncrement: true, columnName: 'company_id', unique: true,},
    name: {type: 'text', columnName: 'name', required: true },
    full_name: {type: 'text', columnName: 'full_name', required: true },
    number: {type: 'number', columnName: 'number', required: true },
    street: {type: 'text', columnName: 'street', required: true },
    postal_code: {type: 'number', columnName: 'postal_code', required: true },
    rfc: {type: 'text', columnName: 'rfc', required: true },
    ieps: {type: 'number', columnName: 'ieps', required: true },
    iva: {type: 'number', columnName: 'iva', required: true },
    lat: {type: 'number', columnName: 'lat', required: true },
    lng: {type: 'number', columnName: 'lng', required: true },
    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝


    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

  },

};

