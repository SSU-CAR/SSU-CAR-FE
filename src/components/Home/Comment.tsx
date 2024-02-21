import styled from "styled-components";
import comment_icon from "@assets/icons/comment_icon.svg";
import { homeFeedbackAPI } from "@api/homeAPIS";
import { useEffect, useState } from "react";

export const Comment = () => {
  const [data, setData] = useState<{
    feedback: string;
  }>();

  useEffect(() => {
    const response = homeFeedbackAPI();
    response.then((res) => {
      setData(res);
    });
  }, []);

  return (
    <CommentContainer>
      <CommentContents>
        <img src={comment_icon} alt="코멘트" />
        <CommentText>{data?.feedback}</CommentText>
      </CommentContents>
    </CommentContainer>
  );
};

const CommentContainer = styled.div`
  width: 100%;
  height: 85px;
  margin-top: 6px;
  background-color: white;

  display: flex;
  justify-content: center;
`;

const CommentContents = styled.div`
  width: 360px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 48px;
    margin-right: 12px;
  }
`;

const CommentText = styled.div`
  width: 300px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray9};
`;
