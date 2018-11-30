/**
 * UsersController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
	
    login: async function(req, res) {
        var usuario = await Users.findOne({
           where: { email: req.body.email }
        }).decrypt();
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
/*
    loginAndroid: async function(req, res) {
	var passwordInput = req.param('email');
	sails.log.info(passwordInput);
        var usuario = await Users.findOne({ email: passwordInput });
        if (usuario) {
            sails.log.info(usuario.password);
            if (usuario.password == req.param('password')) {
                return res.ok();
            } else {
                return res.serverError('Wrong Password');
            }
        }

            return res.serverError('Invalid User');
    }
*/
	checkEmail: async function(req, res) {
        var usuario = await Users.findOne({
           where: { email: req.body.email }
        });
        if (usuario) {
            return res.serverError('Email already registered');
        }

            return res.ok();
    },
};

