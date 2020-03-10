import React from 'react';

class App extends React.Component {

  componentDidMount() {
    fetch('http://localhost:3000/songs')
    .then(response => response.json())
    .then(song => console.log(song))
  }

  render () {

    return (
      <div className="App">
        App
      </div>
    );

  }
}

export default App;
