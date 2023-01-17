import React from 'react'

import { Container } from './styled';

interface HabitProps {
  completed: number;
}

function Habit(props: HabitProps) {
  return (
    <Container>
      <h1>Habit</h1>
      <p>Completed: {props.completed}</p>
    </Container>
  )
}

export default Habit