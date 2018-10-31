/**
 * Usuario.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'usuario',
  attributes: {
	id: {type: 'number', autoIncrement: true, unique: true, columnName: 'usuario_id', },
	name: {type: 'string', columnName: 'name', required: true },
	last_name: {type: 'string', columnName: 'last_name', required: true },
	email: {type: 'string', unique: true, columnName: 'email', required: true },
	birthdate: {type: 'ref', columnType: 'date', columnName: 'birthdate', },
	password: {type: 'string', columnName: 'password', required: true },
	postal_code: {type: 'number', columnName: 'postal:code', required: true },
	phone_number: {type: 'string', columnName: 'phone_number', required: true },


    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

  },

};

