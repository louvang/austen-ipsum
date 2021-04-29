import React from 'react';
import Header from './components/Header';
import { IpsumGen } from './features/ipsumGen/IpsumGen';
import Footer from './components/Footer';

function App() {
  return (
    <div className="container">
      <Header />
      <IpsumGen />
      <Footer />
    </div>
  );
}

export default App;
