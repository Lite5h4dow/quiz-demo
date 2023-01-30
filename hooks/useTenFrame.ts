import { useState, useEffect } from "react"
export const useTenFrame = (
  cellCount:5|10|15|20,
  value:number=0, 
  onSelect?:(number:number)=>void
) => {
  const [cells, setCells] = useState<{active:boolean, number:number}[]>(
    Array.from(
      {length: cellCount}, 
      (_,index)=>({active:++index<=value, number: index})
    ));

  const [selected, setSelected] = useState<number>(value)
  //update cells on value change
  useEffect(()=>{
    updateCells(value)
  },[value])

  //update states on call
  const updateCells = (number:number) => {
    setSelected(number)
    setCells((state)=>(state.map((i)=>
      ({...i, active: i.number <= number}))))
  }

  //share state change with parent
  useEffect(()=>{
    if(!!onSelect) onSelect(selected)
  },[selected])

  return {cells, updateCells, selected}
}
