"use client"
import React, {useState} from 'react'

const page = () => {
  const [title,settitle]=useState("");
  const [desc,setdesc]=useState("");
  const [mainTask,setMainTask]=useState([]);

  const submitHandler =(e)=>{
         e.preventDefault()
         setMainTask([...mainTask,{title,desc}]);
         settitle("");
         setdesc("");
        
  }
  const deleteHandler=(i)=>{
    let copytask = [...mainTask];
    copytask.splice(i,1);
    setMainTask(copytask);
  }

  let renderTask = <h2>No Task Available</h2>;

if(mainTask.length>0){
  renderTask = mainTask.map((t,i)=>{
    return (
    
    <li key={i} className='flex items-center justify-between'>
      <div className='flex justify-between mb-2 w-2/3'>
        <h5>{i+1}</h5>
       <h5 className='text-xl font-semibold'>{t.title}</h5>
       <h6 className='text-2xl font-semibold' >{t.desc}</h6>
     </div>
     <button className='bg-red-400 text-white p-4 rounded-xl mb-1'
     onClick={()=>{
      {deleteHandler(i)}
     }}>Delete</button>
    </li>
    )
  });
}
  return (
    <>
    <div className=''>
      <h1 className='bg-black text-white p-5 text-5xl font-bold text-center'>Chetan to do list</h1>
      <form onSubmit={submitHandler}>
        <input type="text" className='border-zinc-800 border-4 m-2 px-4 py-2 content-center justify-items-center' 
        placeholder='Enter task title Here' 
        value={title} 
        onChange={(e)=>{
          settitle(e.target.value)
          }}
          />
        <br></br><input type="text" className='border-zinc-800 border-4 m-2 px-4 py-2' placeholder='Enter description here'
        value={desc} 
        onChange={(e)=>{
          setdesc(e.target.value)
          }}
          />
      <br></br><button className='bg-black text-white px-4 m-2 py-2 font-bold rounded ' >Add task</button>
      </form>
      <hr></hr>
    </div>
    <div className='p-8 bg-slate-400'>
      <ul>
        {renderTask}
      </ul>
    </div>
    </>
  )
}

export default page
