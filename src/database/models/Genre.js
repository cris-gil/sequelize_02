module.exports = (sequelize, DataType) => {

    let alias = "Genres";
    let config = {
        tableName: "Genres",
        timestamps: false
    };
    
    const cols = {
        id: {
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
            type: DataType.INTEGER
        },

        title: {
            allowNull: false,
            type: DataType.STRING
        },
        ranking: {
            allowNull: false,
            type: DataType.INTEGER
        },
    }

    const genre = sequelize.define(alias, cols, config);

    return genre;
}