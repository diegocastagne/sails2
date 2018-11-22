/**
 * AdminUsersController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
	login: async function(req, res) {
        var usuario = await AdminUsers.findOne({
           where: { email: req.body.email }
        });
        if (usuario) {
            sails.log.info(usuario.password);
            if (usuario.password == req.body.password) {
                return res.ok();
            } else {
                return res.serverError('Wrong Password');
            }
        }

            return res.serverError('Invalid User');
    },

};

