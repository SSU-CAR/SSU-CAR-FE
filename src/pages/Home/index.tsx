import styled from "styled-components";
import { Layout } from "@components/common/Layout";
import { Home } from "@components/Home";

export const HomePage = () => {
  return (
    <Layout navbar>
      <Home />
    </Layout>
  );
};
