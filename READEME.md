# MOVIE 앱

### 2023 UPDATE

<div align="center">
  <p>MOVIE앱 SKILL</p>
  	<img src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=HTML5&logoColor=white" />
	<img src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=CSS3&logoColor=white" />
	<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=JavaScript&logoColor=white" />
     <img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=JavaScript&logoColor=white" />
</div>

<!-- 
04-03
 .env 에러.. 이슈
 CRA 는 REACT_APP_API_KEY 이런식으로 node js 환경 (process.env)를 허용하는데
 Vite 는 그렇지 못하다..
VITE_API_KEY=your-api-key 이런식으로 선언하고
import.meta.env.VITE_API_KEY; 이렇게 받아야한다..
 -->

 <!-- 
 04-04
 이슈) Search 컴포넌트에서 검색하면 SearchResults 에서 매핑 후 보여주는 코드를 만들 던 중 여러 에러 발생, module 문제 & React hook 순서 문제 등등..

 해결) Search 에서 useEffect로 처음 렌더링시 searchQuery가 아무것도 없으면 dispatch(updateSearch("")) => input에 값을 비워두고 디스패치
 data가 있으면 updateResults에 결과값을 보내 주려고 했는데 .. 검색하지도 않았는데

  의미로는 ES6의 비구조화 할당
  const { VITE_API_KEY: API_KEY, VITE_BASE_URL: API_BASE_URL } = import.meta.env;

  handleSubmit 에 useCallback을 써줌으로 최적화
  [data, dispatch, history, searchQuery] 가 변할때만 함수 재생성
  
  -->

<!-- 
  04-05	
  오늘 적용 할 것
  1. 메인 home 인기영화 slider 만들고 고치기
  2. 볼 수 있는 거 더 만들기 (main home)
  3. 게시판 & 로그인 적용
  4. sidebar 수정 ( contents & Link )
  5. 영화 각 종류 별로 link넣기

이슈) TMDB API 에서는 국적별 영화 API를 get할 수 없기에 .. 한국에서만 개봉한 영화로 대체

animation - 영화
animation - japan

but 외국 영화 & 애니메이션 받아오면 title or desc 에서 외국어로 번역되어 있어 한글로 번역이 안되는 이슈가 있음. google api 쓰던지 그냥 두던지 해결해야 할듯

search 로 받아온 SearchResults 페이지에서 매핑되어 보여준 리스트들을 드롭다운 메뉴를 통해 필터링 해주고싶어 제작중

search 검색폼에서 검색 시 한글자당 네트워크 요청이 발생함.
고로 useCallback을 사용해 메모이제이션 하고 debounce 를 통해 방지
hooks 로 따로 useDebounce 를 만들어서 import 하여 Search 컴포넌트에서
onChange 되는 searchQuery 값을 useDebounce에 매개변수로 

> debounce란? debounce는 dom 스크롤 또는 숫자 입력에 따른 api값 호출 같이 이벤트가 과도하게 많은 호출할 하는 경우 지정한 시간 동안 호출네 제약을 걸어 api 호출 과부하를 방지하는 기술

SearchResults 컴포넌트에서 filterData 즉 검색결과가 없는 것 length가 0이면 nonpage (404 not found) 보여줌 & 1 이상 결과가 나오면 매핑하여 Card 컴포넌트 보여줌

sidebar 의 width 값에 따라 전체 Section & footer padding-left 변경
allSlice 에 sidebar reducer

모바일 버전을 따로 만들자.

04.06
> 모달 팝업으로 detailpage를 새로 만들려다가 약간의 시간 방해이슈로 멈춤
> 

04-07

api에서 총 데이터를 받아와서 page 전환해서 보여주기 위해 npm install react-paginate 설치
라이브러리를 이용해서 페이지네이션 하기위해!
이슈발생 ) 복잡한 코드 & api에서 총 결과를 각 page번호 에 맞게 부여하는게 생각보다 복잡하고 어려워서 포기

최종적으로 pagination 할때 라이브러리 도움 안받고 그냥
redux-toolkit으로 관리함

PaginationContainer & PaginationButton 스타일 컴포넌트를 생성 (박스 & 버튼)

dispatch로 handlePageChange 파라미터에 page를 받아옴 이때
page는 redux 스토에 저장된 state값 -1 , +1 형식으로 한칸식 이동 기본값이 1
<PaginationButton
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
        >
disabled 에 조건을 줘서 1일때 1 이하로 비활성화 하기
slice(0,12) 로 매핑시 12개 까지 보여줌

lazyloading을 위해 각 컴포넌트 isLoading && 추가

 -->