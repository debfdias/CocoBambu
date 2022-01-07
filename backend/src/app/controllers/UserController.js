import * as Yup from 'yup';

import jwt from 'jsonwebtoken';
import authConfig from '../../config/auth'
import User from '../models/User';

class UserController {
    async signin(req, res) {

        const { email, password } = req.body
        const user = await User.findOne({ where: { email } })

        if (!user) {
            console.log("Usuário não existe!");
            return res.status(401).json({ error: 'Usuário não existe.' })

        }

        if (!(await user.checkPassword(password))) {
            console.log("Senha incorreta!");
            return res.status(401).json({ error: 'Senha incorreta.' })
        }
        
        const _id = user.id;

        return res.json({

            user,
            token: jwt.sign({ _id }, authConfig.secret, { expiresIn: authConfig.expiresIn })
        })
    }    
}

module.exports = new UserController();