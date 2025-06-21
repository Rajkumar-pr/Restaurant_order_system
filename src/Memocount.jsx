import React from 'react'
import ChildComp from './ChildComp'

function Memocount() {
  const[count,setCount]=useState(0);
  return (
    <div>
      <ChildComp name="Ajinkya"/>
<button onClick={()=>setCount(count+1)}>Incre,ment</button>
    </div>
  )
}

export default Memocount
