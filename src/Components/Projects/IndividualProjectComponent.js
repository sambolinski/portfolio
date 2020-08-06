import React from 'react'
import styled from "styled-components"

/* const Styles = styled.div`
    .video{
        width: 100%;
    }
    .projectBio{       
        display: flex;
    }
    .col-md-4{
        display: flex;
    }
    .technicalDetails{

    }
    .video{
        width: 100%;
    }
    .bs-docs-example{
        display: flex;
        flex: left;
        justify: space-between;
    }
    .card-img-top{
        width: 100px;
        height: 100px;
        display: flex;
    }
    .technicalAndGithub{
        width: 100%; !important
        display: flex;
    }
    .col-md-4{
    }
`;*/

const Styles = styled.div`
    .card-deck{
        display: flex;
    }
    .videoTitle{
        paddingLeft: 2vw;
    }
`;
class IndividualProjectComponent extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
        <Styles>
            <div>
                <div class="card-deck">
                    {
                    this.props.video != ""&&
                    <div>
                        <div class="row">
                            <div class="card">
                                <div class="col-4-4">
                                    <div className="videoTitle">
                                        <h5 class="card-title">Video</h5>
                                    </div>
                                    <div class="card-body">
                                        <iframe className = "staticVideo" src={this.props.video} target={this.props.thumbnailType} frameBorder={0} allowFullScreen={true}></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    }
                    
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">{this.props.title}</h5>
                            <p class="card-text">{this.props.about}</p>
                        </div>
                    </div>
                    <div className="TechnicalAndGitHub">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Technical Details</h5>
                                <p class="card-text">Language: {this.props.language}</p>
                                <p class="card-text">Libraries:</p>
                                {                                    
                                    this.props.libraries.map((value, index) => {
                                        return(
                                            <ul class="card-text"> {value}</ul> 
                                        );
                                    })
                                }
                            </div>
                        </div>
                        {
                            this.props.github != "" &&
                            <div class="card">
                                <div class="card-body">
                                    <img className="card-img-left"alt="" src={"https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"} data-holder-rendered="true" width = {"100px"} height={"100px"}/>
                                    <div className="card-body">
                                        <h6 className="card-text">GitHub</h6>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <a href={this.props.github} target="_blank"><button type="button" className="btn btn-sm btn-outline-secondary">View</button></a>
                                            </div>
                                        </div>
                                    </div> 
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </Styles>
        );
    }
}




export default IndividualProjectComponent;


/*
return (
            <Styles>
                <div className = "individual-project-page">
                    <div className="card-group">
                        {
                            this.props.video != "" &&
                            <div className = "video">
                                <div className="card">
                                    <div className="card box-shadow">
                                        <h3>Video</h3>
                                        <iframe className = "staticVideo" src={this.props.video} target={this.props.thumbnailType} frameBorder={0} allowFullScreen={true}></iframe>
                                        
                                    </div>
                                </div>
                            </div>
                        }
                        <div className = "projectBio">
                            <div className="card">
                                <div className="card box-shadow">
                                    <h1>{this.props.title}</h1>
                                    <p>{this.props.about}</p>
                                </div>
                            </div>
                        </div>
                        <div className = "technicalAndGithub">
                            <div className = "technicalDetails">
                                <div className="card">
                                    <div className="card box-shadow">
                                        <h1>Technical Details</h1>
                                        <p>Language: {this.props.language}</p>
                                        <p>Libraries:</p>
                                        {                                    
                                            this.props.libraries.map((value, index) => {
                                                return(
                                                    <ul> {value}</ul> 
                                                );
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                            {
                                this.props.github != "" &&
                                <div className="card">
                                    <div className="card box-shadow">
                                        <img className="card-img-top"alt="" src={"https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"} data-holder-rendered="true"/>
                                        <div className="card-body">
                                            <h6 className="card-text">GitHub</h6>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="btn-group">
                                                    <a href={this.props.github}><button type="button" className="btn btn-sm btn-outline-secondary">View</button></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> 
                            }
                        </div>
                    </div>
                </div>
            </Styles>
        );
*/