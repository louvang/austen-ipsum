import React from 'react';
import Header from './Header';
import { IpsumGen } from '../redux/ipsumGen/IpsumGen';
import Footer from './Footer';

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
