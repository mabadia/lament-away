import Button from 'react-bootstrap/Button'

const React = require('react')

function Home() {
    return (
    <>
      <main>
        <h1>Lament-Away</h1>
        <div className='home'>
          <>
          <h2>Rate Your Job Experience Today!</h2>
            <Button variant="secondary">Secondary</Button>{''}
            <input type="text" placeholder="Search For Companies Here" id="search"/>
          </> 
        </div>
      
      </main>
      </>
    );
  }
  
  export default Home;
  