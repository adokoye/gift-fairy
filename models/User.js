const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');
const bcrypt = require('bcrypt'); 

class User extends Model 
{
    checkPassword(loginPw) 
    {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

User.init(
{
    id:
    {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    full_name:
    {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email:
    {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate:
        {
            isEmail: true
        }
    },
    password:
    {
        type: DataTypes.STRING,
        allowNull: false,
        validate:
        {
            len: [4]
        }
    },
    dob: 
    { 
        type: DataTypes.DATE, 
        allowNull: false,
        validate:
        {
            isDate: true
        }
    },
    shirt_size:
    {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: ''
    },
    shoe_size:
    {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: ''
    },
    favorite_color:
    {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: ''
    },
    favorite_brand:
    {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: ''
    }
},
{
    hooks: 
    {
        async beforeCreate(newUserData) 
        {
            newUserData.password = await bcrypt.hash(newUserData.password, 10);
            return newUserData;
        },
        async beforeUpdate(updatedUserData) 
        {
            updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
            return updatedUserData;
        }
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user'
});
  
module.exports = User;