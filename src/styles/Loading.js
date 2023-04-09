import styled , {keyframes} from "styled-components";

const spin = keyframes`
    to {
        transform: rotate(360deg);
    }

`

const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Spinner = styled.div`
    border: 4px solid rgba(255,255,255,0.36);
    border-left-color: rgba(255,255,255,0.16);
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: ${spin} 1s ease-in-out infinite;

`

export {
    Loading,
    Spinner
}