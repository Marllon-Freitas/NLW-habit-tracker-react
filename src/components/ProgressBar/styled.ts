import styled from "styled-components";
interface ProgressBarContainerProps {
  progress: number;
}
export const ProgressBarContainer = styled.div`
  height: 0.5rem;
  border-radius: 0.5rem;
  background-color: #262626;
  margin-top: 1rem;
  margin-bottom: 1rem;
  
  div {
    height: 100%;
    border-radius: 0.5rem;
    background-color: var(--primary);
    width: ${(props: ProgressBarContainerProps) => props.progress}%;
  }
`;
