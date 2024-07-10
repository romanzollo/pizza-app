// import { useState } from 'react';
import Logo from './components/Logo.jsx';
import PackingList from './components/PackingList.jsx';
import Form from './components/Form.jsx';
import Stats from './components/Stats.jsx';

function App() {
    return (
        <div className="app">
            <Logo />
            <Form />
            <PackingList />
            <Stats />
        </div>
    );
}

export default App;
