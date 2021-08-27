'use strict';

import {
  Model, UUIDV4
} from 'sequelize';

interface GroupsAttributes {
  id: string;
  name: string;
  texte: string;
 }

module.exports = (sequelize: any, DataTypes: any) => {
  class groups extends Model<GroupsAttributes>
    implements GroupsAttributes {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    id!: string;
    name!: string;
    texte!: string;
    static associate(models: any) {
      // define association here
      groups.belongsToMany(models.User, {
        through: 'groups_msg'
      })
    }
  };
  groups.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    texte: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'groups',
  });
  return groups;
};