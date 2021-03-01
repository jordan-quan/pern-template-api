const example = (sequelize, DataTypes) => {
  const Example = sequelize.define(
    'example',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      config: {
        type: DataTypes.JSON,
        defaultValue: '{}'
      }
    },
    {
      tableName: 'examples'
    }
  )

  return Example
}

export default example
