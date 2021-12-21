import Sequelize, { Model } from 'sequelize'
import bcrypt from 'bcryptjs'

class Recipe extends Model {
  static init(sequelize) {
    super.init({
      title: Sequelize.STRING,
      description: Sequelize.STRING,
      time: Sequelize.INTEGER,
      ingredients: Sequelize.ARRAY(Sequelize.STRING),
      steps: Sequelize.ARRAY(Sequelize.STRING),
      image: Sequelize.STRING,
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
      tableName: 'Recipes'
    })

    return this;
  }
}

export default Recipe