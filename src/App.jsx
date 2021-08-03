import React from "react";

class App extends React.Component {
  state = {
    data: []
  }

  handleFetch = async () => {
    const response = await fetch("https://api.chucknorris.io/jokes/random");
    const data = await response.json();
    this.setState({ data: data })
    // fetch("https://api.chucknorris.io/jokes/random")
    //   .then(response => response.json())
    //   .then(data => console.log(data))
  };

  render() {
    const { data } = this.state
    return (
      <div>
        <h1>{data.value && data.value}</h1>
        <button onClick={this.handleFetch}>click me</button>
      </div>
    );
  }
}

export default App;
