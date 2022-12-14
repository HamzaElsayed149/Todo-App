import React ,{useEffect, useState} from 'react'
import TodoList from './TodoList'
export default function TodoForm() {
function getdata(){
    if(localStorage.getItem("item")  != null){
     return JSON.parse(localStorage.item)
  }else{
  return [];
  }
}
   const[input,setInput]=useState("")
  const [itemList,setitemList]=useState(getdata())


useEffect(() => {
  localStorage.setItem("item", JSON.stringify (itemList) )

}, [itemList])


function handleSubmit (e){
  e.preventDefault()

  if ( input=== '' ){
  }else{
  
setitemList([...itemList , {item: input , key: Date.now() , complete : false}])
console.log(itemList);
setInput('')
  }

    }


  return (
<div className='d-flex  py-5 mt-5 flex-column container align-items-center  text-center'>
<div className=" content w-50  ">


<h1 className='mb-5'>Todo List</h1>
<form className=" form-group mb-5 d-flex w-100" onSubmit={handleSubmit}>
    <input type="text" className="form-control-plaintext  border-bottom text-white w-75  h-50 me-4 "  placeholder='Add a Todo' onChange={(e)=> setInput(e.target.value)} value={input}/>
    <button type='submit'  className='btn w-25 colored text-dark '>Add </button>
</form>

<TodoList itemList={itemList}  setitemList={setitemList} setInput={setInput} />
</div>
</div>
 )
}
