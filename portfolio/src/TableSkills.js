import React from 'react';
import {Container,Table} from 'react-bootstrap';

function TableSkills() {


    
  return (
      
      <Container>
        <div style={{paddingTop:"5%",paddingBottom:"5%"}}>
        <div style={{paddingBottom:"3%"}}>
            <div style={{fontWeight:"bold",fontSize:"150%"}}> TECHNOLOGY</div>
            Sooooo yun nga no ito po yung technology na ginagamit ko and nahubog ko in the past 4 years of my development
        </div>
        <Table bordered>
           
            <tbody>
                <tr>
                <td style={{fontWeight:"500"}}>Mobile Programming</td>
                <td>Python</td>
               
                </tr>
                
            </tbody>
        </Table>
        </div>
      </Container>
    
  
  );
}

export default TableSkills;
