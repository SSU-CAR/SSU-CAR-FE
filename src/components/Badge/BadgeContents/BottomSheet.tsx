import { BadgeType } from "src/types/badge";
import styled from "styled-components";

interface BottomSheetProps {
  setOpen: React.Dispatch<React.SetStateAction<Boolean>>;
  current: BadgeType | undefined;
}
export const BottomSheet = ({ setOpen, current }: BottomSheetProps) => {
  const handleClickBottomSheet = () => {
    setOpen(false);
  };
  return (
    <BottomSheetContainer onClick={handleClickBottomSheet}>
      <BottomContent onClick={(event) => event.stopPropagation()}>
        <img
          src={`/images/badge_${current?.badgeId}_complete.png`}
          alt="배지"
        />
        <BadgeName>{current?.name}</BadgeName>
        <BadgeCaption>{current?.caption}</BadgeCaption>
      </BottomContent>
    </BottomSheetContainer>
  );
};

const BottomSheetContainer = styled.div`
  width: 100%;
  max-width: 460px;
  position: fixed;
  top: 0;
  bottom: 0;
  background-color: rgba(87, 96, 106, 0.5);
  border: 1px solid #eaeef2;
  z-index: 500;
`;

const BottomContent = styled.div`
  width: 100%;
  max-width: 460px;
  height: 200px;

  background-color: white;
  border-radius: 16px 16px 0 0;
  opacity: 1;

  position: absolute;
  bottom: 0;
  z-index: 600;

  @keyframes fadeInUp {
    0% {
      transform: translate3d(0, 100%, 0);
    }
    to {
      transform: translateZ(0);
    }
  }
  animation: fadeInUp 0.5s;

  img {
    width: 110px;
    height: 110px;
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BadgeName = styled.div`
  color: ${({ theme }) => theme.colors.blue900};
  font-weight: 600;
  font-size: 18px;
`;

const BadgeCaption = styled.div`
  color: ${({ theme }) => theme.colors.gray6};
  font-weight: 500;
  font-size: 14px;
  margin: 12px 0;
`;
