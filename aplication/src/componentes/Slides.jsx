import { useState } from "react";
import "./Slides.css";
function Slides (){
    const [contador,setContador]=useState(0);
    const caminho=["https://www.thelostpassport.com/wp-content/uploads/2019/01/Renewing-an-Expired-lost-Passport-1.jpg"
    ,
"https://www.kaspersky.com/content/en-global/images/repository/isc/46-LostorStolen.jpg"
    ,
    "https://st2.depositphotos.com/2338875/5818/i/600/depositphotos_58180531-stock-photo-man-opening-file-cabinet.jpg"
    ,"https://media.npr.org/assets/bakertaylor/covers/t/the-lost-book-of-adana-moreau/9781335010124_custom-e38505d966dccc8903ff4f86b84addbfbfc8ba60-s300-c85.jpg"];

    function nextImage(){
        if(contador<1){
            setContador(contador+1)
          
        }
       
    }
    
    
    function prevImage(){
        if(contador>0){
            setContador(contador-1)
        }
    }
    return(
        <>
        <div className="slide-style">
            <div className='box-content'>   
            <img
            onClick={()=>prevImage()}  
            src= {require("../images/icons/icons8-chevron-left-30.png")}  alt='' className="arrow"></img>

            <img src= {caminho[contador]} alt='' className="box-style"></img>
            <img src= {caminho[contador+1]} alt='' className="box-style"></img>
            <img src={caminho[contador+2]} className="box-style" ></img>

            <img
            onClick={()=>nextImage()}  
            src= {require("../images/icons/icons8-chevron-left-30 (1).png")} alt='' className="arrow"></img>
            </div>
        </div>
        </>
    );
}
export default Slides;