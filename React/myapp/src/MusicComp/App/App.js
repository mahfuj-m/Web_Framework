import React from 'react';
import './App.css';
// Change the path 
/*import {ClassComp, ClassComp1 } from './Components/ClassComp';
import Click from './Components/Click';
import Counter from './Components/Counter';
import FC  from './Components/FunctionalComp';
import ParentComp from './Components/ParentComp';
import ClassProps from './ComponentsProps/ClassProps';
import FunctionalProps from './ComponentsProps/FunctionalProps';
import NewComp from './StateComponents/NewComp';*/
// Components are imported automatically

import Playlist from "../Playlist/Playlist";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
// import Spotify from "../util/Spotify";

class App extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       SearchResults:[],
       playlistName:"New Playlist",
       playlistTracks:[]
    };
    //this.search=this.search.bind(this);
    this.addTrack=this.addTrack.bind(this);
    this.removeTrack=this.removeTrack.bind(this);
    this.updatePlaylistName=this.updatePlaylistName.bind(this);
    this.savePlaylist=this.savePlaylist.bind(this);
    this.removeTrackSearch=this.removeTrackSearch.bind(this);
    this.doThese=this.doThese.bind(this);
  }
  /*search(term){
    Spotify.search(term).then(SearchResults=>{
      this.setState({SearchResults:SearchResults});
    });
  }*/
  addTrack(track){
    let tracks=this.state.playlistTracks;
    if(tracks.find(savedTrack=> savedTrack.id === track.id)){
      return;
    }
    tracks.push(track);
    this.setState({playlistTracks:tracks});
  }

  removeTrack(track){
    let tracks=this.state.playlistTracks;
    let trackSearch=this.state.SearchResults;
    tracks=tracks.filter(currentTrack=> currentTrack.id !== track.id);
    trackSearch.unshift(track);
    this.setState({playlistTracks: tracks});
  }

  removeTrackSearch(track){

    let tracks=this.state.SearchResults;
    tracks=tracks.filter(currentTrack=> currentTrack.id !== track.id);
    this.setState({SearchResults:tracks});
  }
  doThese(track){
    this.addTrack(track);
    this.removeTrackSearch(track);
  }
  updatePlaylistName(name){
    this.setState({updatePlaylistName:name});

  }
  savePlaylist(){
    //const trackUris=this.state.playlistTracks.map(track=> track.uri);
   /* Spotify.savePlaylist(this.state.playlistName,trackUris).then(()=>{
      this.setState({
        updatePlaylistName:"New Playlist",
        playlistTracks:[]
      });
    });*/
  }

  


  render(){
    return(
      <div>
        <h1>
          <a href="http://localhost:3000">MusicoPhile</a>
        </h1>
        <div className="App">
          <SearchBar onSearch={this.search}/>
          <div className="App-playlist">
            <SearchResults SearchResults={this.state.SearchResults} onAdd={this.doThese}/>
            <Playlist playlistTracks={this.state.playlistTracks} onNameChange={this.updatePlaylistName}
             onRemove={this.removeTrack} onSave={this.savePlaylist}/>
  
          </div>

  
  
        </div>
      </div>
    );

  }
  /*styles={
    fontStyle:'bold',
    color:'teal'
  };
  render(){
    return (
    <div>
  <div className='App'><h4 style={this.styles}>Welcome</h4></div>
   <h1> Mahfujur Rahman</h1>
      <NewComp/>

    <FC></FC>
    <ClassComp/>
    <ClassComp1/>
    <Click/>
    <Counter/>
    <ParentComp/>
    <ClassProps name="Mahfuj" place="Kishoreganj"/>
    <ClassProps name="Tabiul" place="Comilla"><button>Click</button></ClassProps>
    <ClassProps name="Zinia" place ="Bogra" >Child Component</ClassProps>
    <FunctionalProps name="Fatima" place="Noagoan"/>
</div>

  );
  }*/

    

}

//Functional Method
/*function App(){

  return(
    <div>
      <h1>
        <a href="http://localhost:3000">MusicoPhile</a>
      </h1>
      <div className="App">
        <SearchBar onSearch={this.search}/>
        <div className="App-playlist">
          <SearchResults SearchResults={this.state.SearchResults} onAdd={this.doThese}/>
          <Playlist playlistTracks={this.state.playlistTracks} onNameChange={this.updatePlaylistName}
           onRemove={this.removeTrack} onSave={this.savePlaylist}/>

        </div>


      </div>
    </div>
  );
}*/

// defoult export will help to rename the file while importing



export default App;
