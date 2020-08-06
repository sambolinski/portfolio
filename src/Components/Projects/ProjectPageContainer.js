import React from "react"
import ProjectPageComponent from "./ProjectPageComponent";
import data from "../../Assets/Data/Projects.json"
class ProjectPageContainer extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        this.props.updateMessage("Projects")
    }
    render(){
        return(
            <ProjectPageComponent data={data} {...this.props}/>
        );
    }
}

export default ProjectPageContainer;