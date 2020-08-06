import React from "react"
import AboutComponent from "./AboutComponent"
import PersonalData from "../../Assets/Data/AboutMe.json"
class AboutContainer extends React.Component{
    constructor(props){
        super(props);
    }
    componentWillMount(){
        this.props.updateMessage("About")
    }
    render(){
        return (
            <AboutComponent {...this.props} data={PersonalData}/>
        );
    }
}

export default AboutContainer;