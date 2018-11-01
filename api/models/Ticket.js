/**
 * Ticket.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

tableName: 'tickets',
  attributes: {
    id: {type: 'number', autoIncrement: true, columnName: 'ticket_id', unique: true,},
    purchase_id: {type: 'number', columnName: 'purchase_id', required: true },
    price_id: {type: 'number', columnName: 'price_id', required: true },
    name: {type: 'string', columnName: 'name', required: true },
    last_name: {type: 'string', columnName: 'last_name', required: true },
    age: {type: 'number', columnName: 'age', required: true,},
    date_tour: {type: 'ref', columnType: 'date', columnName: 'date_tour', required: true, } ,
    qr_code: {type: 'string', columnName: 'qr_code', required: true },
    sub_total: {type: 'number', columnName: 'sub_total', required: true },
    created_at: {type: 'ref', columnType: 'timestamp', columnName: 'created_at', } ,
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

