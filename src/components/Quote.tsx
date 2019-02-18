/**
 * Screen shown to the user when the are not bookmarks in the list (most of the
 * time it happens if no bookmarks are available in the search result).
 */
import React from "react";
import styled, { keyframes } from "styled-components/macro";
import { Clock } from "./Clock";
import { useMappedActions } from "../hooks/useMappedActions";
import { actions } from "../actions";

export const QuoteComponent = (props: { quote: string, isQuoteChanged: boolean }) => {
  const {
    goToNextQuote
  } = useMappedActions(actions);
  return (
    <QuoteBox>
      <ClockBox>
        <Clock />
      </ClockBox>
      <Sentence onClick={(event) => {
        event.preventDefault();
        goToNextQuote();
      }}>{props.quote}</Sentence>
    </QuoteBox>
  )
};

const fadeIn = keyframes`
  from { opacity: 0;}
  to { opacity: 1; }
`;

const QuoteBox = styled.div`
  animation: ${fadeIn} 0.5s ease-in-out both;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

const Sentence = styled.div`
  margin-top: 2rem;
  color: #fff;
  font-size: 2rem;
  padding: 1.5rem 2rem;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  box-sizing: border-box;
  transition: background-color .3s ease-in;
  :hover {
    background-color: rgba(255, 255, 255, 0.8);
    color: #006283;
    transition: background-color .3s linear;
  }
`;

const ClockBox = styled.div`
  min-width: 100%;
  color: white;
  border-bottom: 1.5px solid white;
`;
