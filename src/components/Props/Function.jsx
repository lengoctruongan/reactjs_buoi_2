import React from 'react'

export default function Function({girl}) {
    let {ten,tuoi}=girl
    return (
        <div>
            <h2>StateLess Component</h2>
            <div className="card">
                <img className="card-img-top" src="./img/hinh.jpg" alt />
                <div className="card-body">
                    <h4 className="card-title">{ten}</h4>
                    <p className="card-text">{tuoi}</p>
                </div>
            </div>
        </div>

    )
}
