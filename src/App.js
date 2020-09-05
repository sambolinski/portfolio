import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import ErrorPageContainer from "./Components/ErrorPageContainer"
import Layout from "./Components/Layout"
import NavigationBar from "./Components/NavigationBar"
import Jumbotron from "./Components/Jumbotron"
import './App.css';
import './Styling/Album.css'
import ProjectPageContainer from './Components/Projects/ProjectPageContainer';
import RenderPageContainer from './Components/Renders/RenderPageContainer';
import ProjectData from "./Assets/Data/Projects.json"
import IndividualProjectContainer from './Components/Projects/IndividualProjectContainer';
import AboutContainer from './Components/About/AboutContainer';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      message: ""
    }
    this.updateMessage = this.updateMessage.bind(this);
  }
  
  updateMessage(text){
    this.setState({
        message: text
    });
  }
  
  render(){
    return (
        <React.Fragment>
          <NavigationBar/>
          <Jumbotron message = {this.state.message}/>
          <Layout>
            <HashRouter>
              <Switch>
                <Route exact path = "/" render={(props) => <AboutContainer updateMessage={this.updateMessage} {...props} /> } />
                <Route exact path = "/portfolio/#/about/" render={(props) => <AboutContainer updateMessage={this.updateMessage} {...props} /> } />
                <Route exact path = "/portfolio/#/projects/" render={(props) => <ProjectPageContainer updateMessage={this.updateMessage} {...props} /> } />
                <Route exact path = "/portfolio/#/projects/:id" render={(props) => <IndividualProjectContainer updateMessage={this.updateMessage} {...props} /> } />
                <Route exact path = "/portfolio/#/renders/" render={(props) => <RenderPageContainer updateMessage={this.updateMessage} {...props} /> }/>
                <Route exact path = "/portfolio/#/renders/:id/" render={(props) => <RenderPageContainer updateMessage={this.updateMessage} {...props} /> } />
                <Route component={ErrorPageContainer} />
              </Switch>
            </HashRouter>
          </Layout>
        </React.Fragment>
    );
  }
  }

export default App;
