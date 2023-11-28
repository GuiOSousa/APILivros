import mongoose, {mongo} from "mongoose";

export default async function conectaNaDatabase() {
    mongoose.connect(process.env.DB_CONNECTION_STRING)

    return mongoose.connection;
}

