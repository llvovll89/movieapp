import React from 'react';
import { Route, Routes } from 'react-router-dom';
import EnterTainer from './person/EnterTainer';
import FrActor from './person/FrActor'
import Actor from './person/Actor';

const Person = () => {
  return (
    <Routes>
      <Route path="/actor" element={<Actor />} />
      <Route path="/fr_actor" element={<FrActor />} />
      <Route path="/entertainer" element={<EnterTainer />} />
    </Routes>
  );
};

export default Person;
