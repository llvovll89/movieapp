import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Movies from './Movies';
import JapanAni from './JapanAni';
import Animation from './Animation';
import Drama from './Drama';
import EnterProgram from './EnterProgram';

const Category = () => {
  return (
    <Routes>
      <Route path="/movies" element={<Movies />} />
      <Route path="/jp_ani" element={<JapanAni />} />
      <Route path="/animation" element={<Animation />} />
      <Route path="/drama" element={<Drama />} />
      <Route path="/tv_enter" element={<EnterProgram />} />
    </Routes>
  );
};

export default Category;
