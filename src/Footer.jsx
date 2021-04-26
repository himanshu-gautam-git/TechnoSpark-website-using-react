import React from 'react';

const Footer=()=>{
    var year=new Date().getFullYear(); 
  return(
    <>
    <footer className='w-100 bg-light text-center'>
        &copy; {year} TechnoSpark. All rights Reserved | Terms and Conditions
    </footer>
    </>
  );
}

export default Footer;