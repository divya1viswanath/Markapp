import React, { useState } from 'react'
import Header from './Header'

const Addstudent = () => {
    var [name,setName]=useState("")
    var [admission,setAdmission]=useState("")
    var [cgpa,setCgpa]=useState("")

    const subData=() =>{
        const data={"Name":name,"Admission":admission,"CGPA":cgpa}
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
                            <input onChange={(e)=>{setName(e.target.value)}} type="text" className="form-control"/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label for="" className="form-label">Admission no</label>
                            <input onChange={(e)=>{setAdmission(e.target.value)}} type="text" className="form-control"/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label for="" className="form-label">CGPA</label>
                            <input onChange={(e)=>{setCgpa(e.target.value)}} type="text" className="form-control"/>
                        </div>
                        <center> <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button onClick={subData} className="btn btn-dark">Submit</button>
                        </div> </center>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Addstudent