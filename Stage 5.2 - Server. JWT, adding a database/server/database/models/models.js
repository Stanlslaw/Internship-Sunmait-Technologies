import db, {CardsData} from "../db.js"
import {DataTypes} from "sequelize";

const Users = db.define(
    'users',
    {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        username: {type: DataTypes.STRING, unique: true},
        password: {type: DataTypes.STRING}
    }
)

const Cards = db.define(
    'cards',
    {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        cardHeader: {type: DataTypes.STRING},
        cardDescription: {type: DataTypes.STRING},
        cardImage: {type: DataTypes.TEXT}
    }
)

try{
    await db.sync({force:true}) // del force for production
    await CardsData.forEach(async (item)=>{
        await Cards.create(item)
    })
    console.log('Database schema synchronized');
}
catch(error){
    console.error('Error synchronizing database:', error);
}


export {Users,Cards}