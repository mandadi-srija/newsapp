import React, { Component } from 'react'
export class Newsitem extends Component {


  render() {
    let {title,description,imageurl,newsurl,author,date} = this.props;
    return (
      <div className='my-3'>
        <div className="card" style={{  width: "18rem"}}>
            <img src={imageurl} className="card-img-top" alt="..." style={{ width: "100%", height: "150px", objectFit: "cover" }}/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-muted">By {!author?"Unknow":author} on {new Date(date).toGMTString()}</small></p>
                    <a rel='noreferrer' href={newsurl} target='_blank' className="btn btn-dark">Read More</a>
                </div>
            </div>
      </div>
    )
  }
}

export default Newsitem
