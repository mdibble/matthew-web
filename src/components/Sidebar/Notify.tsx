import { useEffect, useState } from 'react';
import styled from 'styled-components';

type ConditionCallback = () => boolean;

type Props = {
  condition: ConditionCallback;
};

const NotifyDiv = styled.div`
  background-color: ${(props) => props.theme.primaryInverse};
  height: 8px;
  width: 8px;
  border-radius: 100%;
  display: inline-block;
  margin-left: 12px;
  margin-bottom: 3px;
`;

const NotifyText = styled.div`
  display: inline-block;
  margin-left: 6px;
  font-size: 12px;
  font-weight: bold;
  vertical-align: top;
  margin-top: 10px;
`;

function Notify(props: Props): JSX.Element {
  const { condition } = props;
  const [result, setResult] = useState(condition());

  useEffect(() => {
    window.addEventListener('storage', () => {
      setResult(condition());
    });
  }, []);

  return (
    <>
      {result
      && (
        <>
          <NotifyDiv />
          <NotifyText>NEW</NotifyText>
        </>
      )}
    </>
  );
}

export default Notify;
