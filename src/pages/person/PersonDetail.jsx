import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useAxios from '../../hooks/useAxios';
import { DetailPage, Section } from '../../styles/GlobalStyle';
import { Loading } from '../../styles/Loading';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { AiOutlineClose } from 'react-icons/ai';
import { useSelector } from 'react-redux';

const PersonDetail = () => {
  const { id } = useParams();
  const dark = useSelector((state) => state.darkMode.dark);
  const [perPage, setPerPage] = useState(6);
  const history = useNavigate();

  const API_KEY = import.meta.env.VITE_API_KEY;
  const API_BASE_URL = import.meta.env.VITE_BASE_URL;
  const POSTER_URL = 'https://image.tmdb.org/t/p/w300/';
  const BACKDROP_URL = 'https://image.tmdb.org/t/p/w1280/';
  const NO_IMAGE_URL = 'https://via.placeholder.com/500x750.png?text=No+Image';

  const { data, error, isLoading } = useAxios(
    `${API_BASE_URL}/person/${id}?api_key=${API_KEY}&language=ko&append_to_response=combined_credits`
  );

  const { data: creditData } = useAxios(
    `${API_BASE_URL}/person/${id}/combined_credits?api_key=${API_KEY}&language=ko`
  );

  const handleResize = () => {
    if (window.innerWidth >= 1280) {
      setPerPage(6);
    } else if (window.innerWidth >= 924) {
      setPerPage(4);
    } else if (window.innerWidth >= 628) {
      setPerPage(3);
    } else {
      setPerPage(2);
    }
  };

  return (
    <Section className={dark ? '' : 'dark'}>
      {isLoading && (
        <Loading>
          <h1>Loading...</h1>
        </Loading>
      )}
      {error && (
        <ErrorBox>
          <h1>Error : {error.message}</h1>
        </ErrorBox>
      )}
      {!isLoading && !error && (
        <DetailPage>
          <div className="content">
            <div className="top">
              <img
                src={
                  data.profile_path
                    ? `${POSTER_URL}${data.profile_path}`
                    : NO_IMAGE_URL
                }
                alt={data.name}
              />
            </div>
            <div className="bot">
              <div className="title">
                <h1>{data.name}</h1>
                <div className="sub">
                  <span>생년월일 {data.birthday}</span>
                  <span>출생지 {data.place_of_birth}</span>
                  <span>직업 {data.known_for_department}</span>
                </div>

                <div className="net">
                  {/* 
                <div className="pro_name">
                  <span>작품 수 {data.combined_credits.cast.length}</span> <br/>
                  <span>작품 제목 
                  <br/>
                  {data.combined_credits.cast.map((item) => item.title).slice(0, 6).join("")}</span>
                  </div>
                */}
                </div>
              </div>
            </div>
          </div>
        </DetailPage>
      )}
    </Section>
  );
};

export default PersonDetail;
