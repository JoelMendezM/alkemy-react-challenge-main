import React from 'react';

export const ItemDetail = ({dish}) => {
    return (
        <>
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                    <img src={dish.image} className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h4 className="card-title">{dish.title}</h4>
                        <h6>Dish summary:</h6>
                        <p className="card-text">{dish.summary}</p>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}