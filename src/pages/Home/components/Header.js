import React from 'react';

function Header () {
  return (
    <header>
        <div className="toolbar">
          <div>
            <span>ItaOnline</span>
          </div>

          <div>
            <span>Menu</span>
            <span>Avatar</span>
            <button>Quero Anunciar!</button>
          </div>
        </div>
      </header>
  );
}

export default Header;