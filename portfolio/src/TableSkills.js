import React,{useState} from 'react';
import {Container,Table} from 'react-bootstrap';

function TableSkills() {

    const [technologies] = useState([

       {category:"Web Front-end", part:"HTML5, CSS,JavaScript"},
       {category:"Mobile", part:"Flutter, Android"},
       {category:"Programming", part:"Python, C#, C++, Java, JavaScript"},
       {category:"Web Backend", part:"Django"},
       {category:"JS Framework/Library", part:"Reactjs, JQuery"},
       {category:"Text editor/IDE", part:"Netbeans, Visual Studio,  VS Code, SublimeText"},
       {category:"Graphic Design", part:"Adobe XD, Adobe Photoshop, Powerpoint as Graphic design tool"},
       {category:"Hosting", part:"Github Page, Firebase"},
    ]);

    
  return (
      
      <Container>
        <div style={{paddingTop:"100px",paddingBottom:"100px",fontSize:"120%"}}>
        <div style={{paddingBottom:"3%"}}>
            <div className="details3 typing-letter"style={{paddingBottom:"40px"}} > TECHNOLOGY</div>
            Sooooo yun nga no ito po yung technology na ginagamit ko and nahubog ko in the past 4 years of my development
        </div>
        <Table bordered>
           
            <tbody>

                {technologies.map(tech=>(
                      <tr>
                      <td style={{fontWeight:"500"}}>{tech.category}</td>
                <td>{tech.part}</td>               
                      </tr>

                ))}
              
                
            </tbody>
        </Table>
        </div>
      </Container>
    
  
  );
}

export default TableSkills;
