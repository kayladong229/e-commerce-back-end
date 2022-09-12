const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    // ID column
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // Product ID column
    product_id: {
      type: DataTypes.INTEGER,
      // Reference product model id
      references: {
        model: 'product',
        key: 'id',
      },
    },
    // Tag ID column
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        // Reference tag model id
        model: 'tag',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
