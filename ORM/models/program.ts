'use strict';

import {
  Model, UUIDV4
} from 'sequelize';

interface ProgramAttributes {
  id: string;
  image: string;
  name: string;
  type: string;
 }

module.exports = (sequelize: any, DataTypes: any) => {
  class program extends Model<ProgramAttributes>
    implements ProgramAttributes {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     id!: string; 
     image!: string;
     name!: string;
     type!: string;
    static associate(models: any) {
        // define association here
        program.belongsToMany(models.exo, {
          through: 'program_exo'
        })
    }
  };
  program.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    image: {
      type: DataTypes.BLOB('tiny'),
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'program',
  });
  return program;
};