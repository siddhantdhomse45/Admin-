import { useState } from "react"

const LoginPage = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const validUserName = "Admin";
    const validPassword = "Admin@123";

    const handleLogin = (event) => {
        event.preventDefault();

        if (userName === validUserName && password === validPassword) {
            setError('');
            alert('Login Successful');
        }else {
            setError('Invalid Username or Password');
        }
    };
  return (
    <div className="login-container">
       <h2>Admin Panel Login</h2>
       <form onSubmit={handleLogin} className="login-form">
        <div className="input-group">
            <label htmlFor="username">User Name</label>
            <input type="text" id="username" value={username} onChange={(e) =>setUserName(e.target.value)} placeholder="Enter your User Name" />
        </div>
        <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="text" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your Password" />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit"></button>
        </form>
    </div>
  )
}

export default LoginPage