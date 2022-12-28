import styled from "styled-components";
export const StyledComponents = () => {
  return (
    <SContainer>
      <STitle>- Styled Components -</STitle>
      <SButton>FIGHT!</SButton>
    </SContainer>
  );
};

//当てたいタグを変数名に変更
//styled.タグ名``でバッククオートの中にcssの中身を記述する
//ぱっと見、コンポーネントがstyledされているのか、importしたコンポーネントかわからなくなるので、Styledしたコンポーネント変数名の頭にSをつけるとわかりやすい
const SContainer = styled.div`
  border: solid 2px #392eff;
  border-radius: 20px;
  padding: 8px;
  margin: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const STitle = styled.p`
  margin: 0;
  color: #3d84a8;
`;

const SButton = styled.button`
          background-color: #abedd8;
          border: none;
          padding: 8px;
          border-radius: 8px;
          &:hover {
            background-color: #46cdcf;
            color: #fff;
            cursor: pointer;
`;
