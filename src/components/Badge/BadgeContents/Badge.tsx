import styled from "styled-components";
import { BadgeType } from "src/types/badge";

interface BadgeProps {
  badgeData: BadgeType;
}
export const Badge = ({ badgeData }: BadgeProps) => {
  return (
    <BadgeContainer>
      <BadgeImage done={badgeData.status}>
        <img
          src={`/images/badge_${badgeData.badgeId}${
            badgeData.status === 1 ? "_complete" : ""
          }.png`}
          alt={badgeData.name}
        />
      </BadgeImage>
      <BadgeName>{badgeData.name}</BadgeName>
    </BadgeContainer>
  );
};

const BadgeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 120px;
  margin: 10px;
`;

const BadgeImage = styled.button<{ done: number }>`
  width: 85px;
  height: 85px;
  border-radius: 50%;
  border: none;

  background-color: ${(props) => (props.done === 0 ? "#F6F8FA" : "#5F81FF")};

  img {
    width: 75px;
  }
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BadgeName = styled.div`
  font-weight: 600;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.blue900};

  margin: 12px 0;
`;
