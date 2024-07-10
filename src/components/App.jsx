// import { useState } from 'react';
import Logo from './Logo.jsx';
import PackingList from './PackingList.jsx';
import Form from './Form.jsx';
import Stats from './Stats.jsx';

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
