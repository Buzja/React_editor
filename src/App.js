import React, { Component } from 'react';
import Header from './components/Header';
import Settings from './components/Settings';
import Filter from './components/Filter';
import Image from './components/Image';

class App extends Component {
  constructor(props){
    super(props);
    this.url;
    this.state={
      image:"https://images.pexels.com/photos/103596/pexels-photo-103596.jpeg",
      settings: {
        contrast: 100,
        hue: 0,
        brightness: 100,
        saturate: 100,
        sepia: 0,
        invert: 0
      }
    }
  }

  onChangeFunc = (e)=>{
    const setting = e.target.id;
    const value = e.target.value;
    const settings = {...this.state.settings,[setting]:value};
    this.setState({
      settings
    });
  }

  ChangeUrl = (e)=>{
    this.url = e.target.value;
  }

  ChangeUrlFunc=()=>{
    this.setState({
      image : this.url
    });
  }

  render() {
    const {image, settings} = this.state;

    return (
      <div className="App">
        <Header title="Editor"/>

        <section className="content">
          <Settings settings={settings} onChangeFunc={this.onChangeFunc}/>
          <main className="main">
            <Filter settings={settings}>
              <Image src={image}/>
            </Filter>
            <input type="text" onChange={this.ChangeUrl}/>
            <button onClick={this.ChangeUrlFunc}>ChangeUrl</button>
          </main>
        </section>
      </div>
    );
  }
}

export default App;
