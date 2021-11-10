import express from 'express';
import {questions} from './routes/questions.js';
import mongoose from 'mongoose';
import { MONGO_URI} from './config/keys.js';



const app = express();

const port  = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));

app.use(express.json());
app.use(`/api/questions`, questions)

app.get('/firstwordsentontheinternet', (req,res) => {
    res.send('it does work');
})

mongoose
    .connect(MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log("MongoDB, connected"))
    .catch(err => console.log(err))