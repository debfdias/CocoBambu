import Sequelize from 'sequelize'

import databaseConfig from '../config/database'
import User from '../app/models/User'
import Recipe from '../app/models/User'

const models = [ User, Recipe ]

class DataBase {
    constructor() {
        this.init()
    }

    init() {
        this.connection = new Sequelize(databaseConfig.url, { logging: false })
        models.map(model => model.init(this.connection))       
    }
}

export default new DataBase()