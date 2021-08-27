'use strict';

import {
  Model, UUIDV4
} from 'sequelize';

interface GroupsMsgAttributes {
  id: string;
  groupId: string
  UserId: string;
  texte: string;
 }

module.exports = (sequelize: any, DataTypes: any) => {
  class groups_msg extends Model<GroupsMsgAttributes>
    implements GroupsMsgAttributes {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    id!: string;
    groupId!: string;
    UserId!: string;
    texte!: string;
    static associate(models: any) {
      // define association here
    }
  };
  groups_msg.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    groupId: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      references: {
        model:'groups',
        key: 'id'
      }
    },
    UserId: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      references: {
        model:'Users',
        key: 'id'
      }
    },
    texte: {
      type: DataTypes.STRING,
      allowNull: false
    }

  }, {
    sequelize,
    modelName: 'groups_msg',
  });
  return groups_msg;
};