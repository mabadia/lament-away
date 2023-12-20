import Button from 'react-bootstrap/Button'

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
              <input type="text" placeholder="Search For Companies Here" id="search" />
            </div>
          </>
        </div>
      </main>
    </>
  );
}

export default Home;
