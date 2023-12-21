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
          <div className='search'>
            <Button variant="secondary" id="search_btn">Search</Button>{''}
            <input type="text" placeholder="Search For Companies Here" id="search"/>
          </div>
          </> 
        </div>
      
      </main>
      <footer>
        <div>

          <h4>About Lament Away</h4>

          <p>Welcome to Lament Away, your go-to platform for job reviews and discussions!</p>

          <p> Why We Built This:</p>

          <p>At Lament Away, we believe in the power of shared experiences. We've created this space for users to come together, share their job experiences, and help others make informed career decisions.</p>

          <p> Our Mission:</p>

          <p>Our mission is to empower individuals by providing a platform to openly discuss the pros and cons of different jobs. Lament Away is here to foster a supportive community where users can connect, learn, and grow in their careers.</p>

          <p> Future Goals:</p>

          <p>We're committed to continuously improving Lament Away. In the future, expect exciting features, enhanced user interactions, and even more valuable insights to guide your career journey.</p>


        </div>
      </footer>
      </>
    );
  }
  
  export default Home;
  