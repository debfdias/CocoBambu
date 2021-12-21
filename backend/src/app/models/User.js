import Sequelize, { Model } from 'sequelize'
import bcrypt from 'bcryptjs'

class User extends Model {
  static init(sequelize) {
    super.init({
      email: Sequelize.STRING,
      password: Sequelize.VIRTUAL,
      password_hash: Sequelize.STRING,
      createdAt: {
        field: 'createdAt',
        type: Sequelize.DATE,
      },
      updatedAt: {
        field: 'updatedAt',
        type: Sequelize.DATE,
      } 
    },
    {
      sequelize,
      tableName: 'Users'
    })

    this.addHook('beforeSave', async (user) => {
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 8)
      }
    })
  }

  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash)

  }
}

export default User