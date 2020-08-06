import React from 'react'
import ThumbnailContainer from "./ThumbnailContainer"
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
        width: 100% !important;
        max-width: 100% !important;
        height: 100% !important;
    }
`;

//<div className = "album py-5 bg-light">
//<div className="projectPage">

class AlbumComponent extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
                <div className="album py-5 bg-light" style={{width: "100%"}}>
                        <div className="row">
                            {
                                this.props.data.map((value, index) => {
                                    return (                       
                                        /*<ThumbnailContainer image={value[Object.keys(value)[0]][0].thumbnail} title={Object.keys(value)[0]} date={value[Object.keys(value)[0]][0].date} language={value[Object.keys(value)[0]][0].software}/>*/
                                        <ThumbnailContainer image={value.thumbnail} title={value.title} date={value.date} language={value.software} index={index} {...this.props}/>
                                    );
                                })
                            }
                        </div>  
                </div>     
        );
    }
}
export default AlbumComponent;