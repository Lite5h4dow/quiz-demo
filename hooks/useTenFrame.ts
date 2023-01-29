import { useState } from "react"
export const useTenFrame = (cellCount:5|10|15|20 ,active:number=0) => {
  const [cells, setCells] = useState<{active:boolean, number:number}[]>(
    Array.from(
      {length: cellCount}, 
      (_,index)=>({active:++index<=active, number: index})
    ));

  const [selected, setSelected] = useState(active)

  //update states on call

  const updateCells = (number:number) => {
    setSelected(number)
    setCells((state)=>(state.map((i)=>
      ({...i, active: i.number <= number}))))
  }

  return {cells, updateCells, selected}
}
