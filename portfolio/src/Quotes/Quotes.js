import React from 'react';
import {Row,Container,Col} from 'react-bootstrap';


function Quotes() {
 


  const image = require('./source/Slide1.PNG')
  return (     
    
    <div style={{
      backgroundImage: `url(${image})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '50vh'
    } }>



       <div style={{textAlign:"center",color:"white",verticalAlign:"middle",fontSize:"2vw"}}>
        

       </div>
    </div>   
 

    
  );
}

export default Quotes;