import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";
 
const app = express();
mongoose.connect('mongodb://daniandhika:Agistama120899@ac-0k49fzn-shard-00-00.kuh3fkm.mongodb.net:27017,ac-0k49fzn-shard-00-01.kuh3fkm.mongodb.net:27017,ac-0k49fzn-shard-00-02.kuh3fkm.mongodb.net:27017/?ssl=true&replicaSet=atlas-102tj7-shard-0&authSource=admin&retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Database Connected...'));
 
app.use(cors());
app.use(express.json());
app.use(UserRoute);
 
app.listen(process.env.PORT || 5000, ()=> console.log('Server up and running...'));