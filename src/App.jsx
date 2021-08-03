const App = () => {

  const handleFetch = async () => {
    const response = await fetch("https://api.chucknorris.io/jokes/random")
    const data = await response.json()
    console.log(data)
    // fetch("https://api.chucknorris.io/jokes/random")
    //   .then(response => response.json())
    //   .then(data => console.log(data))
  }

  return (
    <div>
      <h1>Hi there</h1>
      <button onClick={handleFetch}>click me</button>
    </div>
  )
}

export default App;
