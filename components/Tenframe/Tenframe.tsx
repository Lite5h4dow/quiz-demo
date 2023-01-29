import {StyleSheet, View, Text, TouchableHighlight} from "react-native"
import { useTenFrame } from "../../hooks/useTenFrame"

// create a tenframe module
export const Tenframe = ({
    cellCount=10, 
    interactable=false, 
    active=0, 
    onSelect
  }:{
    cellCount?:5|10|15|20, 
    interactable?: boolean,
    active?:number, 
    onSelect?:(number:number)=>void}
) => {
  const {cells, updateCells} = 
    useTenFrame(cellCount, active, onSelect)

  return(
  <View style={style.container}>
    <View style={style.frame}>
      {cells.map((i, index)=>(
	<TouchableHighlight 
	  style={[style.cell, i.active && style.activeCell]} 
	  key={index} 
	  onPress={(e)=>{updateCells(i.number)}}
	  activeOpacity={0.6}
	  underlayColor="#0DD"
	  disabled={!interactable}
	>
	    <Text style={style.cellText}>{++index}</Text>
	</TouchableHighlight>
      ))}
    </View>
    {interactable &&
    <TouchableHighlight 
      style={style.clear}
      onPress={(e)=>{updateCells(0)}}
      activeOpacity={0.6}
      underlayColor="#555"
    >
      <Text>Clear</Text>
    </TouchableHighlight>
    }
  </View>
  )
}

const style = StyleSheet.create({
  frame:{
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#fff",
    flexWrap: "wrap",
    justifyContent:"space-between",
    alignContent:"space-between",
    padding: 10,
    borderRadius:10,
  },
  cell:{
    display:"flex",
    backgroundColor: "#FFF",
    borderColor:"#000A",
    borderStyle: "solid",
    borderWidth:2,
    borderRadius: 5,
    padding: 5,
    margin: 3,
    flexBasis:"18%",
    alignItems:"center"
  },
  cellText:{
    display:"flex",
    textAlign:"center",
    color:"#000000",
    opacity:0.25 
  },
  activeCell:{
    borderColor:"#0FFA",
    backgroundColor:"#0FF"
  },
  container:{
    borderRadius: 10,
    backgroundColor:"#AAA",
    display:"flex",
    margin:10,
  },
  clear:{
    borderRadius:10,
    display:"flex",
    padding:5, 
    alignSelf: "stretch",
    alignItems: "center",
  }
})
