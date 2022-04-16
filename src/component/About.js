import React from 'react'

function About(props) {

  let style={
    color:props.mode==='dark'?'white':'black',
    backgroundColor:props.mode==='dark'?'black':'white',
    border:'1px solid',
    borderColor:props.mode==='dark'?'yellow':'black'
  }

  // const [style, setStyle] = useState({
  //   color:'black',
  //   backgroundColor:'white'}
  // )

  // const [btntext, setbtntext] = useState("Enable Dark mode")

  // const togglestyle=()=>{
  //   if(style.color==='black'){
  //     setStyle({
  //       color:'white',
  //       backgroundColor:'black'
  //     })
  //     setbtntext("Enable light mode")
  //   }
  //   else{
  //     setStyle({
  //       color:'black',
  //       backgroundColor:'white'
  //     })
  //     setbtntext("Enable Dark mode")
  //   }
  // }
  return (
    <>
  <div className="container  my-3">
    <h2 className="h2" style={{color:props.mode==='dark'?'white':'black'}}>About us</h2>
  <div className="accordion accordion-flush my-2" id="accordionFlushExample">
       <div className="accordion-item" >
    <h2 className="accordion-header" id="flush-headingOne">
      <button className="accordion-button collapsed" type="button" style={style} data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" style={style} aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the first item's accordion body.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingTwo">
      <button className="accordion-button collapsed" type="button" style={style} data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" style={style} aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingThree">
      <button className="accordion-button collapsed" type="button" style={style} data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" style={style} aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>
</div>
    {/* <button type="button" className="btn btn-primary mx-6"  onClick={togglestyle}>{btntext}</button> */}
    </div>
    </>
  )
}  

export default About
