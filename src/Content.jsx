import React from 'react';
import piclogo from './piclogo.jpg'
export default function Content (){
  return (
    <div id="div1">
      <img src={piclogo}  alt="Logo"/>
      <div id="div2">
        <h1>FAIJ SHAIKH</h1>
        <br />
        <b style={{ color: 'blue', fontSize: 'large' }}>Web Designer</b>
        <p>
          A passionate web developer with expertise in creating stunning and functional websites.
           Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
           Tenetur incidunt id placeat ratione excepturi suscipit.
            Repellendus, ut autem? Repellendus magni labore consequatur fuga excepturi,
             eius sint est error esse! Ducimus. Nam, ea. Non odio possimus voluptates 
             laborum consequuntur provident nam tempora at aut iure delectus quo voluptatem eaque ipsa,
              esse fuga eius est nulla placeat animi. Nihil Lorem ipsum, dolor sit amet consectetur adip
              isicing elit. Rerum nam, omnis adipisci voluptate alias cupiditate. Ut, blanditiis harum. 
              Enim, corrupti praesentium! Inventore vitae itaque ullam laboriosam deleniti magnam.
               Obcaecati, vel. deleniti accusantium aspernatur.
        </p>
        <br/>
        <button style={{ color:'blue', fontSize:'large', backgroundColor:'black'}}>Download CV</button>
      </div>
    </div>
  );
};


