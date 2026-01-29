import { useState } from 'react'
import './App.css'

function App() {
    const [title, setitle] = useState()
    const [detailed, setdetailed]=useState()
    const [task, setStask]=useState([])
  function Handleform(e){
    e.preventDefault()
  setStask(prev=>{
return  [...prev, {title,detailed}]
  })



    
     console.log(title, detailed)
    setitle('')
    setdetailed("")
  }

  return (
    <> 
  
  <div className=' h-screen lg:flex bg-black gap-10 text-white overflow-auto ' >
    <form onSubmit={(e)=>Handleform(e)}  className="flex flex-col gap-10 p-5   items-start " action="">
      <h1 className="text-3xl font-bold pl-1">Add Notes</h1>
      <input type="text" placeholder='write the heading of note' className='rounded border-2 outline-none px-5 py-10  w-full lg:w-150 text-2xl ' 
      // heading
      value={title} onChange={(e)=>{
        setitle(e.target.value)
      }}
        />
      <textarea type="text" placeholder='write details' className='rounded border-2 px-5 py-10 w-full lg:w-150 outline-none h-40 text-2xl '
      //detailed
      value={detailed}
      onChange={(e)=>{
        setdetailed(e.target.value)
      
      }}

    />
      <button type='submit' className=' active:scale-98 rounded border-2 px-2 py-5 text-black  bg-amber-50 w-full lg:w-150 outline-none  text-4xl mb-4'> Add One</button>
    </form>

    <div className="lg:border-l-2   h-full overflow-auto flex flex-wrap  "> 
      <h1 className=" text-3xl font-bold pl-5">Recent Notes</h1>
   <div className="mb-2 p-5 gap-5   mt-5 lg:w-screen h-screen  flex flex-wrap ">
  
    
{task.map((item,index)=>(
    < div key={index} className="  my-3.5  rounded-2xl w-55 h-65 bg-[url('https://static.vecteezy.com/system/resources/previews/010/793/873/non_2x/a-lined-note-paper-covered-with-transparent-tape-on-a-yellow-background-with-a-white-checkered-pattern-free-png.png')] bg-cover ">
         <h2 className='text-cyan-950  py-7.5   text-2xl -tracking-tighter   font-bold flex justify-center   '>{item.title}</h2>
         <p className='text-gray-800  text-1xl font leading-loose px-5'  >{item.detailed}</p>
    </div>
 
)
)
}

    </div>
  </div>
 </div>

    </>
  )
}

export default App
