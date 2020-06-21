import React from 'react';
import {} from 'react-bootstrap';


function Quotes() {
 


  const image = require('./image/image.PNG')
  return (     
    
    <div style={{
      backgroundImage: `url(${image})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '50vh'
    } }>
       <div style={{textAlign:"center",color:"white",verticalAlign:"middle",fontSize:"5vw"}}>
You have power over your mind - not outside events. Realize this, and you will find strength.

       </div>
    </div>   
 

    
  );
}

export default Quotes;