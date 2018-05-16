module.exports = function(sequelize, DataTypes) {
    var Games = sequelize.define("Games", {
        gameType: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        totalTimePlayed: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1]
            }
        },
        largestPool: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                len: [1]
            }
        }
    });
    return Games;
};