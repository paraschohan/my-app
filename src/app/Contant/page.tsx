import Link from 'next/link'
import style from "../Contant/Contant.module.css"

const ContantPage =()=> {
  return (
    
    <div className= {style.container}>
      <h1 className = {style.header}>contant page</h1>

      
      <ul>
        <li><Link href ="/">Go to Home page</Link></li>
        <li><Link href ="/About"> Go to About page</Link></li>
        <li><Link href ="/services">Go to services page</Link></li>

      </ul>
  
    </div>
    
  )
}

export default ContantPage;