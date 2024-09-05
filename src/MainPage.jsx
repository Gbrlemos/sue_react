import React, { useState } from 'react'

const MainPage = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const validUsername = 'teste';
    const validPassword = '1234';

    const handleSubmit = (e) => {
        e.preventDefault();

        if(username == validUsername && password == validPassword) {
            setMessage('Login efetuado com sucesso');
        } else {
            setMessage('Credenciais incorretas');
        }
    };

    return(
        <div className='LoginContainer'>
        <h2>LOGIN SUE</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Usuário</label>
                    <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                </div>
                <div>
                    <label htmlFor="password">Senha</label>
                    <input type="text" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <button type="submit">Entrar</button>
            </form>
            {message && <p>{message}</p>} {/* mensagem */}
        </div>
    );
    
};

export default MainPage;