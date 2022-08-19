import styled from 'styled-components';

type Props = {
    icon: string
};

const IconContainer = styled.div`
width: 60px;
height: 60px;
border-radius: 50%;
border: none;
outline: none;
background-color: ${(props) => props.theme.secondary};
p {
  padding: 5px;
  background: none;
  width: 25px;
  height: 25px;
  font-size: 36px;
}
`;

function Icon(props: Props): JSX.Element {
  const { icon } = props;
  return (
    <IconContainer>
      <p>{icon}</p>
    </IconContainer>
  );
}

export default Icon;
