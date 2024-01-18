import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';

const Home = () => {
  const { isLoggedIn, login, logout } = useContext(AuthContext);
  return (
    <>
      <h2>Hello Context Api || useContext</h2>

      {isLoggedIn ? (
        <div>
          <p>Welcome! you are now logged in</p>
          <button onClick={logout}>logout</button>
        </div>
      ) : (
        <div>
          <p>Please log in</p>
          <button onClick={login}>login</button>
        </div>
      )}
    </>
  );
};

export default Home;
