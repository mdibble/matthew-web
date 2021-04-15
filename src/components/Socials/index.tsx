import styled from 'styled-components';

type Props = {
  link: string;
  type: string;
}

const ImgContainer = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  outline: none;
  background-color: ${(props) => props.theme.secondary};
  cursor: pointer;
  img {
    background: none;
    width: 25px;
    height: 25px;
    filter: ${(props) => props.theme.svg};
  }
`;

function Social(props: Props): JSX.Element {
  const { link, type } = props;
  return (
    <a href={link} style={{ display: 'inline', marginRight: '10px' }}>
      <ImgContainer>
        <img src={`/assets/socials/${type}.svg`} alt={type} />
      </ImgContainer>
    </a>
  );
}

export default Social;
