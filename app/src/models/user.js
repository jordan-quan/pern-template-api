// CURRENTLY UNUSED
// import bcrypt from 'bcrypt'

const user = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: true,
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [7, 42]
      }
    },
    role: {
      type: DataTypes.STRING
    }
  })

  User.associate = () => { }

  User.findByLogin = async (login) => {
    let foundUser = await User.findOne({
      where: { username: login }
    })

    if (!foundUser) {
      foundUser = await foundUser.findOne({
        where: { email: login }
      })
    }

    return foundUser
  }

  // User.beforeCreate(async (user) => {
  //   user.password = await user.generatePasswordHash()
  // })

  // User.prototype.generatePasswordHash = async () => {
  //   const saltRounds = 10
  //   return await bcrypt.hash(this.password, saltRounds)
  // }

  // User.prototype.validatePassword = async (password) =>
  //   await bcrypt.compare(password, this.password)

  return User
}

export default user
