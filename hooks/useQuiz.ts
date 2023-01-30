import { useContext, useState } from "react"


export const useQuiz = (quiz:{question:string, answer:number}[]) =>{
  //these could have been handled in here, but i would have had to hcange the context.
  //i wanted this to be capeable of handling a generic quiz. Kenny mentioned running offline.
  //this way we could injest an encrypted or json-bin of quizzes that were downloaded previously.
  const questions = quiz.map((i)=>i.question)
  const answers = quiz.map((i)=>i.answer)

  console.log(answers.length);
  

  //these two variables are session related. for each quiz session we want to keep the evaluation mode and responses in state,
  //the actual questions and answers can be passed into quiz and evaluated.

  const [evaluationMode, setEvaluationMode] = useState<boolean>(false)
  const [responses, setResponses] = useState<number[]>(Array.from(
    {length:answers.length},
    (_)=>0
  ))

 console.log(responses);
 
  function addResponse(response:number, position:number){
    setResponses(state=>{
      state[position] = response
      return state
    })
  }

  function submit(){
    setEvaluationMode(true)
  }

  function retry(){ 
    console.log(responses)
    setResponses(Array.from(
      {length: answers.length},
      (_)=>0
    ))
    setEvaluationMode(false)
  }

  return {questions, answers, responses, evaluationMode, addResponse, submit, retry}
}
