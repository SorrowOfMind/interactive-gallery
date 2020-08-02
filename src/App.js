import React from 'react';
import Header from './components/Header';
import UploadForm from './components/UploadForm';
import Images from './components/Images';

function App() {
  return (
    <div className="App">
      <Header />
      <UploadForm />
      <Images />
    </div>
  );
}

export default App;
