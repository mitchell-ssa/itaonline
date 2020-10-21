import React from 'react';

import Header from './components/Header';

import './style.css';

function Home () {
  return (
    <div id="root">
      <Header />

      <main>
        <div className="content">
          Conteudo
        </div>
      </main>
    </div>
  )
}

export default Home;