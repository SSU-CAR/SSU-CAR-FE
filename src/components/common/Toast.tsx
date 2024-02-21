import { useEffect } from "react";
import styled from "styled-components";
import alarm_sound from "@assets/sound/alram.mp3";

interface ToastProps {
  message: string;
  setToast: React.Dispatch<React.SetStateAction<boolean>>;
}
export const Toast = ({ message, setToast }: ToastProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setToast(false);
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <ToastContainer>
      <audio src={alarm_sound} autoPlay />
      {message}
    </ToastContainer>
  );
};

const ToastContainer = styled.div`
  width: 280px;
  height: 42px;
  padding: 0 12px;
  border-radius: 4px;
  background-color: #f86d60;

  color: white;
  font-family: "Pretendard";
  font-weight: 500;
  line-height: 42px;

  position: absolute;
  left: 10px;
  top: 40px;

  animation: fadeout 2s ease-in-out;
  opacity: 0;

  @keyframes fadeout {
    0% {
      opacity: 0;
    }
    25% {
      opacity: 1;
    }
    75% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;
