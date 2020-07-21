import React from 'react'; 
import Featured from './modules/Featured';
import ProductItem from './modules/ProductItem';

import './scss/layout.scss';
import './scss/header.scss';


function App() {
  return (
    <div className="App">
      <main>
        
        <header className="full-width">
          <h1>Scandavian Adventures</h1>
          <nav>
            <ul>
              <li><a href="#">Experiences</a></li>
              <li><a href="#">Company</a></li>
              <li><a href="#">Support</a></li>
              <li><a href="#">[I]</a></li>
            </ul>
          </nav>
        </header>
        
        <Featured />

        <section className="row-split">
          <ProductItem />
        </section>
      </main>

    </div>
  );
}

export default App;
