import React, { useState } from 'react'
import Header from './Header'

const Searchstudent = () => {
    var [name,setName]=useState("")
    
    const subData=() =>{
        const data={"Name":name}
        console.log(data)
    }
  return (
    <div>
        <Header/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label for="" className="form-label">Name</label>
                            <input onChange={(a)=>{setName(a.target.value)}} type="text" className="form-control"/>
                        </div>
                        <center> <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button onClick={subData} className="btn btn-dark">Search</button>
                        </div> </center>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Searchstudent