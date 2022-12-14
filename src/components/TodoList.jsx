import React from 'react'

export default function TodoList(props) {
    function deletItem(key){
    const newList =    props.itemList.filter((todo)=>{
         return   todo.key !== key
        })
        props.setitemList(newList)
    }

    function toggletocomplete(id){
      props.setitemList(props.itemList.map((item )=>{
        console.log(item.key);
      if(item.key === id){
return {...item,
  complete: !item.complete , }
}else{
  return item
  
}
}))
    }

function deletAll(){
          props.setitemList([])
      }

function toggletoAll(){
    props.setitemList(props.itemList.map((item )=>{
    return {...item,complete: !item.complete , }}))
      }

 
  return ( 
<div >
      {props?.itemList.map((todo)=><div className=' pt-3  mb-3 rounded-2 border-1 border-light border  container d-flex justify-content-between    text-start '>
{todo.complete?       <p className='fs-4 ' key={todo.key }><del>{todo.item}</del></p>: <p className='fs-4 ' key={todo.key }>{todo.item}</p>}
   <div className='pt-2'>
   <i className="fa-solid fa-trash me-2 text-danger" onClick={()=>deletItem(todo.key)}></i>
   <i className="fa-sharp fa-solid fa-circle-check" onClick={()=>toggletocomplete(todo.key)} ></i>
   </div>

      </div>
      )}
         {props.itemList =='' ? "Add ToDo" :  <div><button className='btn btn-danger' onClick={deletAll}> DeletAll</button> <button className='btn colored text-dark' onClick={toggletoAll}>CompleteAll</button></div>  }   

      </div>

 
  )
}
