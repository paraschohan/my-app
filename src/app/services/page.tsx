import Link from 'next/link';
import styles from "../services/services.module.css"

const servicesPage =()=> {
  return (
    <div className= {styles.container}>
      <h1 className= {styles.header}> This is typescript , html , css</h1>

      <ul>

        <li><Link href = "/services/typescript">This is typescript page</Link></li>
        <li><Link href ="/services/html,css">This is html css page</Link></li>
      </ul>

      

    </div>
  )
}

export default servicesPage;