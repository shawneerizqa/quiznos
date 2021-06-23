import React, { useContext } from 'react';
import { SportsCategory, ScienceCategory, MusicCategory, NatureCategory, TriviaContext } from '../common/TriviaContext';
import './Answer.css';

function Answer(props) {
    const { category, question, clickedAnswer, correctAnswer, updateClickedAnswer, updateCorrectAnswer, updateScore } = useContext(TriviaContext);

    const checkAnswer = (clicked) => {
        if (clickedAnswer != 0) {
            // if user already chose an answer, can't click anymore
            return;
        }

        if (clicked === category.correctAnswers[question]) {
            updateCorrectAnswer(category.correctAnswers[question]);
            updateClickedAnswer(clicked);
            updateScore(category.scores[question])
            console.log("Correct!")
        }
        else {
            updateCorrectAnswer(0);
            updateClickedAnswer(clicked);
            updateScore(-category.scores[question])
            console.log("Incorrect!")
        }
    }

    let answer = Object.keys(props.answers)
        .map((qAnswer, i) => (
            <li
                className={
                    correctAnswer === qAnswer ?
                        'correct' :
                        clickedAnswer === qAnswer ?
                            'incorrect' : ''
                }
                onClick={() => checkAnswer(qAnswer)}
                key={qAnswer} >
                {props.answers[qAnswer]}
            </li >
        ));

    return (
        <ul className='Answers'>
            {answer}
        </ul>
    );

}


export default Answer;    