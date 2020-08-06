import React from "react"
import styled from "styled-components"
const Styles = styled.div`
    .card-deck{
        display: flex;
        padding-top:2vh;
    }
    .skills{
        display:flex;
    }
`;
class AboutComponent extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        console.log(this.props.data.transferableSkills)
        return (
            <Styles>
                <div>
                    <div class="card-deck">
                        
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Biography</h5>                                    
                                <p class="card-text">{this.props.data.bio}</p>
                                <h5 class="card-title">Transferable Skills</h5>  
                                {                                    
                                        this.props.data.transferableSkills.map((value, index) => {
                                            return(
                                                <div>
                                                    <h6 class="card-title">{value[0]}</h6> 
                                                    <ul class="card-text"><small className="text-muted">{value[1]}</small></ul><br/> 
                                                </div>
                                            );
                                        })
                                    }
                            </div>
                        </div>
                        <div className="QualificationsAndSkills">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Qualifications</h5>
                                    <p class="card-text">Degree: BSc in Computer Science, 1st Class</p>
                                    <p class="card-text">A-Levels:</p>
                                    {                                    
                                        this.props.data.qualifications[0].ALevel.map((value, index) => {
                                            return(
                                            <ul class="card-text"><small className="text-muted">{this.props.language} {value[0]}: {value[1]}</small></ul> 
                                            );
                                        })
                                    }
                                </div>
                            </div>
                            <div class="card">
                                <h5 class="card-title" style={{paddingLeft:"1vw", paddingTop:"2vh"}}>Technical Skills</h5>
                                <div className="skills">
                                    <div class="card-body">
                                        <h5 class="card-title">Languages</h5>
                                        {                                    
                                            this.props.data.technicalSkills[0].Languages.map((value, index) => {
                                                return(
                                                <ul class="card-text"><small className="text-muted"> {value}</small></ul> 
                                                );
                                            })
                                        }
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">Libraries</h5>
                                        {                                    
                                            this.props.data.technicalSkills[0].Libraries.map((value, index) => {
                                                return(
                                                <ul class="card-text"><small className="text-muted"> {value}</small></ul> 
                                                );
                                            })
                                        }
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">Tools</h5>
                                        {                                    
                                            this.props.data.technicalSkills[0].Tools.map((value, index) => {
                                                return(
                                                <ul class="card-text"><small className="text-muted"> {value}</small></ul> 
                                                );
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Styles>
            );
    }
}

export default AboutComponent;