import styled from 'styled-components';

export const BreakMini = styled.div`
  height: 20px;
`;

export const Break = styled.div`
  height: 40px;
`;

export const EndBreak = styled.div`
  height: 100px;
`;

export const Paragraph = styled.p`
  font-size: 20px;
`;

export const ParagraphNB = styled.p`
  font-size: 20px;
  display: inline;
`;

export const Hyperlink = styled.a`
  font-size: 20px;
  display: inline;
`;

export const Subtitle = styled.p`
  font-size: 18px;
  font-style: bold;
`;

export const Title = styled.h1`
`;

export const TitleMini = styled.h2`
`;

export const Portrait = styled.img`
  height: 100px;
  width: 100px;
  border: 4px solid;
  border-color: ${(props) => props.theme.secondary};
  border-radius: 100%;
  margin-right: 20px;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`;
