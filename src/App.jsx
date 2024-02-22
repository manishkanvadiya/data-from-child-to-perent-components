import React from 'react';
import Form from './components/Form';

const App = () => {
  const getData = (data) => {
    console.log(data);
  };
  return (
    <>
      <Form onSubmit={getData} />
    </>
  );
};
export default App;
