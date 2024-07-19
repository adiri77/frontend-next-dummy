import React from 'react';
import { connect } from 'react-redux';
import { fetchCounter, incrementCounter, decrementCounter } from '../store/reducers/counterActions';
import { wrapper } from '../store';
import styled from 'styled-components';

// Styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f7f9fc;
  font-family: Arial, sans-serif;
`;

const CounterText = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const CircleButton = styled.button`
  width: 60px;
  height: 60px;
  border: none;
  border-radius: 50%;
  background-color: #007bff;
  color: white;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const Home = ({ value, increment, decrement }) => {
  return (
    <Container>
      <CounterText>Counter: {value}</CounterText>
      <ButtonContainer>
        <CircleButton onClick={increment}>+</CircleButton>
        <CircleButton onClick={decrement}>-</CircleButton>
      </ButtonContainer>
    </Container>
  );
};

export const getServerSideProps = wrapper.getServerSideProps((store) => async () => {
  await store.dispatch(fetchCounter());
  return { props: {} };
});

const mapStateToProps = (state) => ({
  value: state.counter.value,
});

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch(incrementCounter()),
  decrement: () => dispatch(decrementCounter()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
