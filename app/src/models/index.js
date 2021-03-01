import Sequelize from 'sequelize'

const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST } = global?.config

// import models here

// setup sequalize
export const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: 'postgres'
})

//add all models to object
export const models = {
  User: sequelize.import('./user')
}

Object.keys(models).forEach((key) => {
  if ('associate' in models[key]) {
    models[key].associate(models)
  }
})
