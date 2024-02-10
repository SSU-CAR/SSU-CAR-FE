import styled from "styled-components";
import { Layout } from "@components/common/Layout";

export const HomePage = () => {
  return (
    <Layout navbar={true}>
      <Title>안녕하세요</Title>
    </Layout>
  );
};

const Title = styled.div`
  font-family: "Pretendard";
`;
