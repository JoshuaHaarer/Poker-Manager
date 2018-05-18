module.exports = function(sequelize, DataTypes) {

    var Profile = sequelize.define("playerProfile", {

        playerFirstName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        playerLastName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        userName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        totalWins: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                len: [1]
            }
        },
        knockouts: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                len: [1]
            }
        },
        ranking: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                len: [1]
            }
        },
        
    });
    return Profile;
};