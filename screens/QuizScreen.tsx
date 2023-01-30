import { useEffect } from "react"
import { Text, View, StyleSheet, TouchableHighlight, ScrollView } from "react-native"
import { Tenframe } from "../components/Tenframe/Tenframe"
import { useQuiz } from "../hooks/useQuiz"
import { RootTabScreenProps } from "../types"

const QuizScreen = ({navigation}:RootTabScreenProps<'TabThree'>) => {
  const {
    questions, 
    answers, 
    responses, 
    addResponse, 
    evaluationMode, 
    submit,
    retry
  } = useQuiz([
    {question: "5 + 4", answer: 9},
    {question: "6 - 3", answer: 3},
    {question: "8 - 2", answer: 6},
    {question: "10 + 5", answer: 15}
  ])

  return (
    <ScrollView>
      {questions.map((q,index)=>{
	return (
	  <View key={index}>
	    <Text style={[styles.header, 
	      evaluationMode && 
		(answers[index]==responses[index]?
		  styles.correct:
		  styles.incorrect)
	      ]}>
	      {(index+1)}. {q}
	    </Text>
	    <Tenframe 
	      onSelect={n => {addResponse(n, index)}} 
	      interactable={!evaluationMode}
	      value={responses[index]}
	      cellCount={answers[index] <= 10 ? 10 : 20}
	    />
	  </View>
	)
      })}
      {
	evaluationMode ? (
	<TouchableHighlight 
	  style={styles.submit} 
	  onPress={_=>retry()}
	  activeOpacity={0.6}
	  underlayColor="#555"
	>
	  <Text style={styles.submitText}>Retry</Text>
	</TouchableHighlight>
	):(
	<TouchableHighlight 
	  style={styles.submit} 
	  onPress={_=>submit()}
	  activeOpacity={0.6}
	  underlayColor="#555"
	>
	  <Text style={styles.submitText}>Submit</Text>
	</TouchableHighlight>
	)
      }
      
    </ScrollView>
  )
}

export default QuizScreen


const styles = StyleSheet.create({ 
  header:{
    color:"#FFF",
    fontWeight:"bold",
    alignSelf:"center",
    fontSize: 20
  },
  correct:{
    color:"#0F0"
  },
  incorrect:{
    color:"#F00"
  },
  submit:{
   backgroundColor:"#AAA",
   margin:10,
   padding:10,
   borderRadius:10
  },
  submitText:{
    color:"#000",
    alignSelf:"center"
  }
})
