const { comparePassword } = require('../helpers/bcrypt.helper');
const { signToken } = require('../helpers/jwt.helper');
const { User } = require('../models')

class UserController {
    static async register (req, res) {
        try {
            const payload = {
                email: req.body.email,
                password: req.body.password,
                role: 'customer'
            }

            const user = await User.create(payload)

            res.status(201).json({
                status: 'success',
                data: {
                    email: user.email,
                    role: user.role
                }
            })
        } catch (error) {
            res.status(400).json({
                status: 'failed',
                message: error.message
            })            
        }
    }

    static async login (req, res) {
        try {
            const payload = {
                email: req.body.email,
                password: req.body.password,
            }

            const user = await User.findOne({ 
                where: { email: payload.email }
            })

            const comparedPassword = comparePassword(payload.password, user.password);

            if (!user || !comparedPassword) {
                res.status(400).json({
                    status: 'failed',
                    message: 'Wrong email or password'
                })
            }

            const accessToken = signToken({
                id: user.id,
                email: user.email,
                role: user.role
            });

            res.status(200).json({
                status: 'success',
                data: {
                    access_token: accessToken
                }
            })
        } catch (error) {
            res.status(400).json({
                status: 'failed',
                message: error.message
            })            
        }
    }
}

module.exports = UserController