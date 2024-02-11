import styled from "styled-components";
import { Layout } from "@components/common/Layout";

export const HomePage = () => {
  return (
    <Layout navbar>
      <Title>홈</Title>
    </Layout>
  );
};

const Title = styled.div`
  font-family: "Pretendard";
`;
