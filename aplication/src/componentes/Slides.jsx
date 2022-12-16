import "./Slides.css";
function Slides (){
    return(
        <>
        <div className="slide-style">
            <div className='box-content'>   
            <img src= {require("../images/icons/icons8-chevron-left-30.png")} className="arrow"></img>
            <div className="box-style"></div>
            <div className="box-style"></div>
            <div className="box-style"></div>
            <img src= {require("../images/icons/icons8-chevron-left-30 (1).png")} className="arrow"></img>
            </div>
        </div>
        </>
    );
}
export default Slides;