import React from "react";
import { Row, Col } from 'antd';

// DECLARING AN ARRAY WITH ITEMS

const items = [
  {
    key: '1',
    icon: <i className="fas fa-rocket"></i>,
    title: 'Reliable',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultrices enim in lectus egestas, ut volutpat lorem tristique. Aliquam turpis elit, eleifend sed orci non, tempor euismod ante. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum vitae turpis erat. ',
  },
  
  {
    key: '2',
    icon: <i className="fas fa-clock"></i>,
    title: 'Timely',
    content: 'Aliquam in tincidunt tellus. Nam non mollis eros. Aenean sit amet metus tempor, blandit nisl mattis, convallis dolor. Vivamus faucibus risus nisl, a dictum quam pretium sit amet. ',
  },

  {
    key: '3',
    icon: <i className="fas fa-truck"></i>,
    title: 'Delivery',
    content: 'Nunc at turpis ac leo varius faucibus vel vel eros. Sed at dolor non felis mattis commodo a ac massa. Quisque lectus diam, sollicitudin rhoncus sollicitudin ut, auctor id lacus. In et ante blandit, auctor diam at, cursus ligula.',
  },

]

//FUNCTIONAL COMPONENT START

function AppAbout (){
    return(
     <div id="about" className="block aboutBlock">
       <div className="container-fluid">
         <div className="titleHolder">
           <h2>About Us</h2>
           <p>Ut in libero lorem. Nulla suscipit sit amet neque blandit condimentum. Ut ac mi et ipsum bibendum placerat at sed tortor. Mauris eleifend viverra commodo.</p>
         </div>

         <div className="contentHolder">
           <p>Morbi eu magna risus. In euismod efficitur eros eget eleifend. Nunc elementum tempor urna, eget dapibus leo vehicula vitae. Sed ut commodo massa. Ut a massa a purus luctus dignissim sed sit amet turpis. Curabitur eu ipsum et eros tempus ultrices sit amet non elit. Nullam interdum facilisis mauris non semper. Etiam ac feugiat orci. Curabitur vel ligula aliquet, volutpat arcu quis, ultrices diam. Maecenas vestibulum purus in elit malesuada luctus.</p>
         </div>

         <Row gutter={[16, 16]}>

        {/* CALLING THE DECLARED ARRAY AND ITERATING THROUGH ITEMS */}

           {items.map(item => {
             return(
               <Col md={{ span: 8}} key={item.key}>
                 <div className="content">
                   <div className="icon">
                     {item.icon}
                   </div>
                   <h3>{item.title}</h3>
                   <p>{item.content}</p>
                 </div>
               </Col>
             );
           })}
         </Row>

       </div>
     </div>
    );
}

export default AppAbout;