import styled from "styled-components";

interface BottomSheetProps {
  setOpen: React.Dispatch<React.SetStateAction<Boolean>>;
}
export const BottomSheet = ({ setOpen }: BottomSheetProps) => {
  const handleClickBottomSheet = () => {
    setOpen(false);
  };
  return (
    <BottomSheetContainer onClick={handleClickBottomSheet}>
      <BottomContent
        onClick={(event) => event.stopPropagation()}
      ></BottomContent>
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
  height: 180px;

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
`;
