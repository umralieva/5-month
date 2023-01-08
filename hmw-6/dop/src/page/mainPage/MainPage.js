import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../../components/buttons/Button'
import Input from '../../components/inputs/Input'
import { getAdd } from '../../store/calcReducer'

function MainPage() {
  const [inp1,setInp1]= useState('')
  const [inp2,setInp2]= useState('')

  const dispatch = useDispatch()
  const { final} = useSelector(state=>state.calcReducer)
  console.log(final)

  const setInput1=(e)=>{
    setInp1(e.target.value)
  }

  const setInput2=(e)=>{
    setInp2(e.target.value)
  }

  const handleFunc=(e)=>{
    if(inp1!=='' && inp2!== ''){
      const number1=Number(inp1)
      const number2=Number(inp2)
      switch(e.target.id){
        case '+':
          const addit =  number1+number2
          dispatch(getAdd(addit))
          break
        case '-':
          const min = number1-number2
          dispatch(getAdd(min))
          break
        case '/':
          const dev =  number1/number2
          dispatch(getAdd(dev))
          break
        case '*':
          const mult = number1*number2
          dispatch(getAdd(mult))
          break
        default:alert('error')
      }
      setInp1('')
      setInp2('')
    }else{
      alert('Fill the blanks')
    }
   
  }

  return (
    <div>
        <Input fc={setInput1} val={inp1} />
        <Input fc={setInput2}  val={inp2}/>
        <Button fc={handleFunc} name ='+'/>
        <Button fc={handleFunc} name= '-'/>
        <Button fc={handleFunc} name = '/'/>
        <Button fc={handleFunc} name = '*'/>
        <h1>{final}</h1>
    </div>
  )
}

export default MainPage;