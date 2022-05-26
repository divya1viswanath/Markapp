import React from 'react'
import Header from './Header'

const Viewall = () => {
    var viewstud=[
        {
            "name":"divya",
            "admission":"101",
            "cgpa":8,
        },
        {
            "name":"appu",
            "admission":"102",
            "cgpa":7,
        },
        {
            "name":"achu",
            "admission":"103",
            "cgpa":7.5,
        }
    ]
  return (
    <div>
        <Header/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <table className="table " >
                            <thead className="table table-secondary">
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Admission no</th>
                                <th scope="col">CGPA</th>
                            </tr>
                            </thead>
                            <tbody>
                                {viewstud.map((value,key)=>{
                                return <tr>
                                <td>{value.name}</td>
                                <td>{value.admission }</td>
                                <td>{value.cgpa}</td>
                                </tr>
                                })}   
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Viewall