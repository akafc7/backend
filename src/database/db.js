import mongoose from "mongoose";

const connectDatabase = () => {

    console.log("connecting to the database...")

    mongoose.connect("mongodb+srv://akafc7:VStPJamlEnku5Er2@cluster0.7dpj7d0.mongodb.net/", { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log("MongoDB Atlas Connected.")).catch((error) => console.log(error));

};
// 
export default connectDatabase;