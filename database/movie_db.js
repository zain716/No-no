const { DataTypes, Sequelize } = require("sequelize");

const DATABASE = new Sequelize({ dialect: 'sqlite', storage: "./database/moviedl.db", logging: false })

const movies = DATABASE.define("movies", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    is_download: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    name: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    time: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, { timestamps: false });

module.exports.inputMovie = async (is_download, name , time) => {
    await DATABASE.sync();

    var data = await movies.findAll({ where: { id: 1 } });

    if (data.length < 1) {
        return await movies.create({ id: 1, is_download: is_download, name: name , time : time });
    } else {
        return await data[0].update({ id: 1, is_download: is_download, name: name , time : time });
    }
};

module.exports.getMovie = async () => {
    await DATABASE.sync();
    var result = await movies.findAll({ where: { id: 1 } });

    if (result.length < 1) {
        return false;
    } else {
        return result[0].dataValues;
    }
};

module.exports.resetMovie = async () => {
    await DATABASE.sync();

    var data = await movies.findAll({ where: { id: 1 } });

    if (data.length < 1) {
        return await movies.create({ id: 1, is_download: false, name: '' , time : '' });
    } else {
        return await data[0].update({ id: 1, is_download: false, name: '' , time : ''});
    }
}
