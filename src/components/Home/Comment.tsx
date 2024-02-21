import styled from "styled-components";
import comment_icon from "@assets/icons/comment_icon.svg";

export const Comment = () => {
  return (
    <CommentContainer>
      <CommentContents>
        <img src={comment_icon} alt="코멘트" />
        <CommentText>{"오늘도 안전한 운전 하세요!"}</CommentText>
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
