import React from "react";
import styled from 'styled-components';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const Styles = styled.div`
    .card-img-top{
        height: 235px;
        margin: 0 auto;
        width: 380px;
        layout: center;
        padding-top: 1vh;
    }
    .col-md-4{ 
        width: 60vw;
        height: 28vh;  
        max-width: 22vw !important;
        margin-left: 4vw;
        margin-top: 2vh; 
        margin-bottom: 10vh; 
        
    }
    .thumbnail{
        display: flex;
        flex-wrap: wrap;
    }
`;

class ThumbnailComponent extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(            
            <Styles>
                <div className="col-md-4">
                    <div className="card mb-4 box-shadow">
                        <img className="card-img-top"alt="" src={this.props.image!=""?this.props.image:"https://image.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg"} data-holder-rendered="true"/>
                        <div className="card-body">
                            <h6 className="card-text">{this.props.title}</h6>
                            <div className="d-flex justify-content-between align-items-center">
                                {
                                    this.props.isGallery == 0 &&
                                    <div className="btn-group">
                                        <Link to={this.props.match.path+String(this.props.index)+"/"} onClick={() => this.props.updateData(String(this.props.index))}><button type="button" className="btn btn-sm btn-outline-secondary" >View</button></Link>
                                    </div>
                                }
                                {
                                    this.props.isGallery == 2 &&
                                    <div className="btn-group">
                                        <Link to={this.props.match.path+String(this.props.index)+"/"}><button type="button" className="btn btn-sm btn-outline-secondary" >View</button></Link>
                                    </div>
                                }
                                <small className="text-muted">{this.props.language}</small>
                            </div>
                        </div>
                    </div>
                </div>    
            </Styles>
        );
    }
}

export default ThumbnailComponent;