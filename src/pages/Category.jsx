import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Movies from './movie/Movies';
import Animation from './movie/Animation';
import JapanAni from './animation/JapanAni';
import JapanAniTheater from './animation/JapanAniTheater'
import Drama from './tv/Drama';
import EnterProgram from './tv/EnterProgram';

const Category = () => {
  return (
    <Routes>
      <Route path="/movies" element={<Movies />} />
      <Route path="/animation" element={<Animation />} />
      <Route path="/animation_jp" element={<JapanAni />} />
      <Route path="/animation_jp_theater" element={<JapanAniTheater />} />
      <Route path="/drama" element={<Drama />} />
      <Route path="/tv_enter" element={<EnterProgram />} />
    </Routes>
  );
};

export default Category;
