import quizData from "../data/quizData";
import React from 'react'
import {Button} from "@mui/material";

const QuizPage = () => {

    const [questionNumber,setQuestionNumber] = React.useState(getRandomInt(4));
    const [selectedOption,setSelectedOption] = React.useState("");
    const [questionCorrect, setQuestionCorrect] = React.useState("");

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    function getNewQuestion(){
        let number = getRandomInt(4);
        if(number !== questionNumber){
            setQuestionNumber(number)
        }
        else if(number === 0){
            setQuestionNumber(number+1)
        }
        else {
            setQuestionNumber(number-1)
        }
        setSelectedOption("");
        setQuestionCorrect("");
    }

    function submitQuestion(){
        if(selectedOption === quizData[questionNumber].correctAnswer){
            setQuestionCorrect("correct");
            getNewQuestion();
        }
        else{
            setQuestionCorrect("fout")
        }
    }

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return(
        <React.Fragment>
            <h1>
                {quizData[questionNumber].question}
            </h1>

            {questionCorrect !== "correct" && questionCorrect !== "fout" ?<></>:
                questionCorrect === "correct" ?
                <p>Answer is good</p>:
                <p>answer is wrong</p>}

            <ul>
                {quizData[questionNumber].options.map((listitem,index)=>(
                    <div key={index}>
                        <label>{listitem}</label>
                        <input value={listitem} type="radio" checked={selectedOption === listitem} onChange={handleOptionChange}/>
                    </div>
                ))}
            </ul>
            <Button variant="contained" onClick={()=> submitQuestion()}>Submit</Button>
            </React.Fragment>
    )
}

export default QuizPage;