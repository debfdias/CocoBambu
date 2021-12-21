import * as Yup from 'yup';

import authConfig from '../../config/auth'
import User from '../models/User';

class UserController {
    async signin(req, res) {
        const { email, password } = req.body
        const user = await User.findOne({ where: { email } })

        if (!user) {
            return res.status(401).json({ error: 'Usuário não existe.' })

        }

        if (!(await user.checkPassword(password))) {
            return res.status(401).json({ error: 'Senha incorreta.' })
        }

        return res.json({

            user,
            token: jwt.sign({ id }, authConfig.secret, { expiresIn: authConfig.expiresIn })
        })
    }    
}

module.exports = new UserController();