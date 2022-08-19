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
position: relative;
p {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: none;
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
