import React from 'react'
import IndividualProjectComponent from './IndividualProjectComponent'
import data from "../../Assets/Data/Projects.json"
class IndividualProjectContainer extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div>
                <IndividualProjectComponent {...this.props} {...data.projects[this.props.match.params.id]}/>
            </div>
        );
    }
}

export default IndividualProjectContainer;