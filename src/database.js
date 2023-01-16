import {connect} from "mongoose";

(async () => {
    try{
        const db = await connect("mongodb+srv://mika:0000@cluster0.rmwhw.mongodb.net/?retryWrites=true&w=majority")
        console.log('DB connected to', db.connection.name)
    } catch (error) {
        console.log(error)
    }
})();