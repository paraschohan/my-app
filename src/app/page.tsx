import React from 'react';
import Link from 'next/link';


const HomePage = () => {
  return (
    <div className= "py-20 bg-fuchsia-300 "  >
      
      <ul>
        <li className="flex items-center justify-center px-6 font-bold "><Link href ="/">Home</Link></li>
        <li><Link href ="/About">About</Link></li>
        <li><Link href = "/Contant">Contant</Link></li>
        <li><Link href ="/services">services</Link></li>



      </ul>
    
    </div>
  );
};

export default HomePage;