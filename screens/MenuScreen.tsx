import { StyleSheet, TouchableHighlight } from 'react-native';
import { Text, View } from '../components/Themed';
import { RootStackScreenProps } from '../types';

export default function MenuScreen({navigation}:RootStackScreenProps<'MenuScreen'>) {
  return (
    <View style={styles.container}>
      <TouchableHighlight style={styles.button} onPress={(_)=>{navigation.push("QuizScreen")}}>
	<Text>Quiz</Text>
      </TouchableHighlight> 
      <TouchableHighlight style={styles.button} onPress={(_)=>{navigation.push("TentableScreen")}}>
	<Text>TenTable Test</Text>
      </TouchableHighlight> 
    </View>
  );
}

const styles = StyleSheet.create({
  button:{
    display: "flex",
    margin: 5,
    padding:10,
    borderRadius:10,
    backgroundColor:"#AAA"
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
