import { useState } from "react"


function App() {
  const [color, setColor] = useState("olive")
  return (
    <>
     <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
     
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        
              <div className=" flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-1 rounded-2xl " onClick={()=>(setColor("red"))}> 
                 <button className="outline-none px-3 py-1 rounded-full text-white shadow-sm" style={{backgroundColor:"red"}}> red</button>
                
              </div>
              <div className=" flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-1 rounded-2xl " onClick={()=>(setColor("green"))}> 
                 <button className="outline-none px-3 py-1 rounded-full text-white shadow-sm" style={{backgroundColor:"green"}}> green</button>
              </div>
              <div className=" flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-1 rounded-2xl " onClick={()=>(setColor("black"))} > 
                 <button className="outline-none px-3 py-1 rounded-full text-white shadow-sm" style={{backgroundColor:"black"}}> Black</button>
              </div>
             
              <div className=" flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-1 rounded-2xl "onClick={()=>(setColor("blue"))}> 
                 <button className="outline-none px-3 py-1 rounded-full text-white shadow-sm" style={{backgroundColor:"blue"}}> Blue</button>
              </div>
              <div className=" flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-1 rounded-2xl " onClick={()=>(setColor("cyan"))}> 
                 <button className="outline-none px-3 py-1 rounded-full text-white shadow-sm" style={{backgroundColor:"cyan"}}> Cyan</button>
              </div>
              <div className=" flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-1 rounded-2xl " onClick={()=>(setColor("violet"))}> 
                 <button className="outline-none px-3 py-1 rounded-full text-white shadow-sm" style={{backgroundColor:"violet"}}> Silver</button>
              </div>
              <div className=" flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-1 rounded-2xl " onClick={()=>(setColor("grey"))}> 
                 <button className="outline-none px-3 py-1 rounded-full text-white shadow-sm" style={{backgroundColor:"grey"}}> Grey</button>
              </div>

        </div>
     </div>
    </>
  )
}

export default App
