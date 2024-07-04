import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('almacen', 'root', 'Sinnada123', {
    host: 'localhost',
    dialect: 'mysql'
  });

  export default sequelize;