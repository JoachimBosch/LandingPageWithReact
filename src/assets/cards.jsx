import React from "react";
const info = [{id: 1, title: "Card title", }]

const Cards = () => {
    return (
        <div class="container px-0 my-2 rounded d-flex justify-content-center">
            <div className="card px-0 col-3">
                <img src={"https://media.istockphoto.com/id/937170838/vector/television-test-pattern-of-stripes.jpg?s=612x612&w=0&k=20&c=wgalOobYWVpx8E0ynQNkMNNYNymLzuw-bu8uncvOIMM="} className="card-img-top img-fluid" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto.</p>
                    <a href="#" className="btn btn-primary">Find out more</a>
                </div>
            </div>
            <div className="card mx-1 px-0 col-3">
                <img src={"https://media.istockphoto.com/id/937170838/vector/television-test-pattern-of-stripes.jpg?s=612x612&w=0&k=20&c=wgalOobYWVpx8E0ynQNkMNNYNymLzuw-bu8uncvOIMM="} className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto.</p>
                    <a href="#" className="btn btn-primary">Find out more</a>
                </div>
            </div>
            <div className="card mx-1 px-0 col-3">
                <img src={"https://media.istockphoto.com/id/937170838/vector/television-test-pattern-of-stripes.jpg?s=612x612&w=0&k=20&c=wgalOobYWVpx8E0ynQNkMNNYNymLzuw-bu8uncvOIMM="} className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto.</p>
                    <a href="#" className="btn btn-primary">Find out more</a>
                </div>
            </div>
            <div className="card me-1 px-0 col-3">
                <img src={"https://media.istockphoto.com/id/937170838/vector/television-test-pattern-of-stripes.jpg?s=612x612&w=0&k=20&c=wgalOobYWVpx8E0ynQNkMNNYNymLzuw-bu8uncvOIMM="} className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto.</p>
                    <a href="#" className="btn btn-primary">Find out more</a>
                </div>
            </div>
        </div>
)};

export default Cards;