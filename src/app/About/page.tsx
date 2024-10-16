import styles from "../About/About.module.css";
import Link from 'next/link';

const Aboutpage =()=> {
  return (
    <div className = {styles.container} >
      <p className = {styles.header}> I am student of web development  I have learn next.js , Type scripte ,HTML , Css
      </p>

      <ul>
        <li><Link href ="/">Go to Home page</Link></li>
        <li><Link href = "/Contant">Go to Contant page</Link></li>
        <li><Link href ="/services">Go to services page</Link></li>

      </ul>
  
    </div>
  );
};

export default Aboutpage;