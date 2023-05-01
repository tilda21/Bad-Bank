import React from 'react';
import Card from './card';

export default function Home(){
  return (
    <Card
      txtcolor="black"
      header="Breanna's Bad Bank"
      title="Welcome to the bank"
      text="You can move around using the navigation bar."
      body={(<img src="bank.png" className="img-fluid" alt="Responsive"/>)}
    />
  );  
}