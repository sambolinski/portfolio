import React from 'react'
import styled from 'styled-components';
import AlbumComponent from './AlbumComponent';


class AlbumContainer extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <AlbumComponent {...this.props} /> 
        );
    }
}
export default AlbumComponent;