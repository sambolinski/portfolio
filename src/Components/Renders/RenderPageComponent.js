import React from "react"
import AlbumContainer from "../AlbumContainer"


class RenderPageComponent extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        console.log(this.props)
        return(
            <AlbumContainer {...this.props} />
        );
    }
}

export default RenderPageComponent;