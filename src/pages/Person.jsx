import React from 'react';
import { Route, Routes } from 'react-router-dom';
import EnterTainer from './person/EnterTainer';
import Popular from './person/Popular';
import PersonDetail from './person/PersonDetail';

// <Route path="/person/:id" element={<PersonDetail />} />
const Person = () => {
  return (
    <Routes>
      <Route path="/popular" element={<Popular />} />
      <Route path="/entertainer" element={<EnterTainer />} />
    </Routes>
  );
};

export default Person;
