import express from 'express';
import {Question} from '../models/question.js';
 
const router = express.Router();

router.get('/', (req, res) => {
    // return a list of questions. for now, placeholders
    Question.find()
    .then(questions => res.json(questions))
    .catch(err => res.status(404).json(err))
});

router.post('/', (req, res) => {
    // return the question we created. for now, we will just return the request body which contains the question data.
    const newQuestion = new Question({
        name: req.body.name,
        content: req.body.content,
    });
    newQuestion.save().then(question => res.json(question))
    .catch(err => res.status(404).json(err))
});

router.delete('/:question_id', (req, res) => {
    // return the id of the deleted question. for now, we will just return the request params which contain the id. 
    Question.findOneAndDelete({_id: req.params.question_id})
    .then(question => res.json({_id: question._id}))
    .catch(err => res.status(404).json(err))
});

export const questions = router;