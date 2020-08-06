import React from "react"
import ThumbnailContainer from "../ThumbnailContainer"
import styled from 'styled-components';

const Styles = styled.div`
    .projectPage{
        float: left;
        display: flex;
        flex-wrap: wrap;
    }
    .container{
        max-width:100% !important;
        width:100% !important;
    }
    .album py-5 bg-light{
        max-width: 100% !important;
        background-color:red !important;
    }
    .row{
        width: 1080px !important;
        max-width: 100% !important;
    }
`;

//<div className = "album py-5 bg-light">
//<div className="projectPage">

class ProjectPageComponent extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
                <div className="album py-5 bg-light" style={{width: "100%"}}>
                        <div className="row">
                            {
                                this.props.data.projects.map((value, index) => {
                                    return (                       
                                        <ThumbnailContainer image={value.thumbnail} title={value.title} date={value.date} language={value.language} isGallery={2} index = {index} {...this.props}/>
                                    );
                                })
                            }
                        </div>  
                </div>     
        );
    }
}

export default ProjectPageComponent;