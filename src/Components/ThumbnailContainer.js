import React from "react"
import ThumbnailComponent from "./ThumbnailComponent";

class ThumbnailContainer extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <ThumbnailComponent {...this.props}/>
        );
    }
}
export default ThumbnailContainer;