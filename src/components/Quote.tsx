/**
 * Screen shown to the user when the are not bookmarks in the list (most of the
 * time it happens if no bookmarks are available in the search result).
 */
import React from "react";
import styled from "styled-components/macro";
import { Quote } from "../types/Quote";
import ReactCSSTransitionGroup from 'react-transition-group';
import { Clock } from "./Clock";

export const QuoteComponent = (props: { quote: Quote }) => {
  return (
    <QuoteBox>
      <Clock />
      <Sentence>Test</Sentence>
      {/* <Sentence>{props.quote.text} &hearts;</Sentence> */}
    </QuoteBox>
  )
};

const QuoteBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  min-height: 100vh;
  padding: 1em;
`;

const Sentence = styled.div`
  color: #fff;
  font-size: 2.5em;
  padding: 1em;
  border: solid 2px white;
  border-radius: 10px;
`;
