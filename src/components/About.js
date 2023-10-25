import React  from 'react'

function About(props) {

    let myStyle = {
        color: props.mode === 'dark' ? 'white' : '#042743',
        backgroundColor: props.mode === 'dark' ? 'rgb(12 93 157)' : 'white'
    }

    return (
        <div className="container my-2" >
            <h2 style={{color:props.mode==='dark'?'white':'#042743'}}>About Us</h2>
            <div className="accordion" id="accordionPanelsStayOpenExample" >
                <div className="accordion-item" >
                    <h2 className="accordion-header" >
                        <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                            <strong>Free</strong>
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" style={myStyle} className="accordion-collapse collapse show">
                        <div className="accordion-body">
                            It is free to use
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                        <strong>Opensource</strong>
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" style={myStyle} className="accordion-collapse collapse">
                        <div className="accordion-body">
                            It is opensource
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed"style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                        <strong>Awesome</strong>
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseThree" style={myStyle} className="accordion-collapse collapse">
                        <div className="accordion-body">
                            It is Awesome
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About