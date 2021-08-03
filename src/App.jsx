import React from "react";

class App extends React.Component {
  state = {
    data: [],
    loading: true,
    error: false
  }

  componentDidMount () {
    this.handleFetch()
  }

  handleFetch = async () => {
    try {
      const response = await fetch("https://api.chucknorris.io/jokes/random");
      const data = await response.json();
      if (response.status !== 200) {
        throw new Error(`${response.status} Error`)
      }
      this.setState({ data: data, loading: false })
    } catch (error) {
      this.setState({ error: true })
      console.log(error)
    }
  };

  render() {
    const { data, loading, error } = this.state
    if (error) {
      return <h1>Error.</h1>
    } else if (loading) {
      return <h1>Loading...</h1>
    }
    return (
      <div>
        <h1>{data.value}</h1>
        <button onClick={this.handleFetch}>click me</button>
      </div>
    );
  }
}

export default App;
