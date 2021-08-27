'use strict';
import {
  Model, UUIDV4
} from 'sequelize';

interface ExoAttributes {
  id: string;
  title: string;
  texte: string;
 }

module.exports = (sequelize: any, DataTypes: any) => {
  class exo extends Model<ExoAttributes>
    implements ExoAttributes {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    id!: string;
    title!: string;
    texte!: string;
    static associate(models: any) {
      // define association here
      exo.belongsToMany(models.program, {
        through: 'program_exo'
      })
    }
  };
  exo.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    texte: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'exo',
  });
  return exo;
};