const { DataTypes, Sequelize } = require("sequelize");
var dburl = process.env.DATABASE_URL || ''
const DATABASE = dburl ? new Sequelize(dburl, { dialectOptions: { ssl: { require: true, rejectUnauthorized: false } }, logging: false }) : new Sequelize({ dialect: 'sqlite', storage: "./database/userj.db", logging: false })

const dbs = DATABASE.define("users", {
   id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    jids : {
        type: DataTypes.TEXT,
        allowNull: false
    }

}, { timestamps: false });

module.exports.inputus = async (jids) => {
    await DATABASE.sync();

    var data = await dbs.findAll({ where: { id: 1 } });

    if (data.length < 1) {
        return await dbs.create({ id: 1, jids : jids });
    } else {
        return await data[0].update({ id: 1, jids : jids });
    }
};
module.exports.getus = async () => {
    await DATABASE.sync();
    var result = await dbs.findAll({ where: { id: 1 } });

    if (result.length < 1) {
        return false;
    } else {
        return result[0].dataValues;
    }
};
module.exports.resetus = async () => {
    await DATABASE.sync();

    var data = await dbs.findAll({ where: { id: 1 } });

    if (data.length < 1) {
        return await dbs.create({ id: 1,  jids : 'jids' });
    } else {
        return await data[0].update({ id: 1,  jids : 'jids' });
    }
}
