/**
 * Screen shown to the user when the are not bookmarks in the list (most of the
 * time it happens if no bookmarks are available in the search result).
 */
import React from "react";
import styled from "styled-components/macro";
import { Quote } from "../types/Quote";
import { Clock } from "./Clock";

export const QuoteComponent = (props: { quote: Quote }) => {
  return (
    <QuoteBox>
      <ClockBox>
        <Clock />
      </ClockBox>
      {/* <Sentence>Test asdasd asdlasjdla dalskdalsd alskdlas dalskdlakd  aksldkasldklaskdlasd lkasldkalskdlaskdlaksdlakd kalsdkalskdlaksdlkasld kasdklaskdlaskdlaskdlaksdlak ldkalsdkalskdlaskdlaskdl </Sentence> */}
      <Sentence>{props.quote.text}</Sentence>
    </QuoteBox>
  )
};

const QuoteBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 5em;
`;

const Sentence = styled.div`
  color: #fff;
  font-size: 3.5em;
  padding: 1em;
`;

const ClockBox = styled.div`
  min-width: 100%;
  color: white;
  font-size: 3.5em;
  border-bottom: 2px solid white;
`;
