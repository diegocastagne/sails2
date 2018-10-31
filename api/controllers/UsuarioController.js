/**
 * UsuarioController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
	login: async function (req, res) {
		var id_usuario = req.param('id_usuario');
		var usuario = await Usuario.find({ id: id_usuario });
		if (!usuario){ return res.badRequest('not found'); }
		return res.serverError('welcome ', {name: usuario.name});
	},
};

