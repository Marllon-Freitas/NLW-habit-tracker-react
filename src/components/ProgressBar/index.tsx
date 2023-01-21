import React from "react";

interface ProgressBarProps {
  progress: number;
}

import { ProgressBarContainer } from "./styled";

function ProgressBar(props: ProgressBarProps) {
  return (
    <ProgressBarContainer progress={props.progress}>
      <div
        className="progress-bar"
        role="progressbar"
        aria-label="Progresso de hábitos completados nesse dia"
        aria-valuenow={
          props.progress > 100 ? 100 : props.progress < 0 ? 0 : props.progress
        }
        aria-valuemin={0}
        aria-valuemax={100}
      />
    </ProgressBarContainer>
  );
}

export default ProgressBar;
