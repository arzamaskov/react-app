import './App.css';

const App = () => {
  return (
    <div className='app-wrapper'>
      <header className='header'>
        <img src='./logo.svg' alt='logo' />
      </header>
      <nav className='nav'>
        <div><a href="#">Profile</a></div>
        <div><a href='#'>Messages</a></div>
        <div><a href='#'>News</a></div>
        <div><a href='#'>Music</a></div>
        <div><a href='#'>Settings</a></div>
      </nav>
      <div className='content'>
        <div>
          <img src='#' alt='main content background' />
        </div>
        <div>
          ava + descr
        </div>
        <div>
          My posts
          <div>
            New post
          </div>
          <div>
            <div>
              post 1
            </div>
            <div>
              post 2
            </div>
          </div>
        </div>
        Main content
      </div>
    </div>
  );
}

export default App;
