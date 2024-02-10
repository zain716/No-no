const { DataTypes, Sequelize } = require("sequelize");
var dburl = process.env.DATABASE_URL || 'postgresql://postgres:Daa5d51e1D--BaE*-f1GfcA-Ec1e25G6@roundhouse.proxy.rlwy.net:14752/railway'
const DATABASE = dburl ? new Sequelize(dburl, { dialectOptions: { ssl: { require: true, rejectUnauthorized: false } }, logging: false }) : new Sequelize({ dialect: 'sqlite', storage: "./database/session.db", logging: false })

const session = DATABASE.define("session", {
   id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
  is_connect: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    creds: {
        type: DataTypes.TEXT,
        allowNull: false
    }

}, { timestamps: false });

module.exports.inputses = async (is_connect, creds) => {
    await DATABASE.sync();

    var data = await session.findAll({ where: { id: 1 } });

    if (data.length < 1) {
        return await session.create({ id: 1, is_connect: is_connect, creds : creds });
    } else {
        return await data[0].update({ id: 1, is_connect: is_connect, creds : creds });
    }
};
module.exports.getses = async () => {
    await DATABASE.sync();
    var result = await session.findAll({ where: { id: 1 } });

    if (result.length < 1) {
        return false;
    } else {
        return result[0].dataValues;
    }
};
module.exports.resetses = async () => {
    await DATABASE.sync();

    var data = await session.findAll({ where: { id: 1 } });

    if (data.length < 1) {
        return await session.create({ id: 1, is_connect: false, creds : '' });
    } else {
        return await data[0].update({ id: 1, is_connect: false, creds : ''});
    }
}
