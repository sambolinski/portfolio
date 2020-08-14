import React from "react"
import RenderPageComponent from "./RenderPageComponent";
import data from "../../Assets/Data/Projects.json"
class RenderPageContainer extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            isGallery: true
        }
        this.currentData = [];

        this.updateData = this.updateData.bind(this);
    }
    
    updateData(newValue){
        console.log(newValue);
        let tempData = JSON.parse(JSON.stringify(data.renders));
        let title = "";
        if(newValue === undefined){
            this.currentData = tempData.map((value, index) => {
                let newValue = value[Object.keys(value)][0];
                newValue.title = Object.keys(value)[0];
                return newValue;
            });
            this.setState({
                isGallery: 0
            });
            title = "Renders"
        }else{
            this.currentData = tempData[newValue][Object.keys(tempData[newValue])[0]];
            this.setState({
                isGallery: 1
            });
            title = [Object.keys(tempData[newValue])[0]][0]
        }
        this.props.updateMessage(title);
        this.forceUpdate();
    }
    componentWillReceiveProps(nextProps){
        this.updateData(nextProps.props.match.params.id);
    }
    componentDidMount(){
        this.updateData(this.props.match.params.id);
    }
    render(){
        return(
            <RenderPageComponent data={this.currentData} updateData = {this.updateData} {...this.props} isGallery = {this.state.isGallery}/>
        );
    }
}

export default RenderPageContainer;