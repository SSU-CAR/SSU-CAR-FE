import styled from "styled-components";
import car_driving_img from "@assets/images/car_driving.gif";
import { useNavigate } from "react-router-dom";
import { drivingEndAPI } from "@api/drivingAPIS";
import { useEffect, useState } from "react";
import { Toast } from "@components/common/Toast";

export const Drive = () => {
  const [toast, setToast] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("졸음 운전이 감지되었습니다");

  const navigate = useNavigate();
  let eventSource: any;

  const handleClickArriveBtn = () => {
    const apiResponse = drivingEndAPI();
    apiResponse.then((res) => {
      console.log(res);
      navigate(`/end/${res.reportId}`);
    });
    eventSource.close();
  };

  useEffect(() => {
    window.speechSynthesis.getVoices();
  }, []);

  const fetchSSE = async () => {
    try {
      eventSource = new EventSource("/driving/events");
      eventSource.onmessage = async (event: any) => {
        const response = await event.data;
        console.log(response);
        console.log("sse success");
        setToast(true);
        setMessage("message");
      };
      eventSource.onerror = async (event: any) => {
        console.error("sse error", event);
        eventSource.close();
      };
    } catch {}
  };

  useEffect(() => {
    fetchSSE();
  }, []);

  return (
    <DriveContainer>
      <img src={car_driving_img} alt="주행 중" />
      <InfoText>주행 중입니다</InfoText>
      <button
        onClick={() => {
          setToast(true);
        }}
      >
        클릭
      </button>
      <ArriveButton onClick={handleClickArriveBtn}>목적지 도착</ArriveButton>
      {toast && <Toast message={message} setToast={setToast} />}
    </DriveContainer>
  );
};

const DriveContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const InfoText = styled.div`
  font-family: "HyndaiHarmony";
  font-size: 24px;
  color: ${({ theme }) => theme.colors.blue500};

  margin-bottom: 80px;
`;

const ArriveButton = styled.button`
  position: absolute;
  bottom: 100px;
  left: 50%;
  transform: translate(-50%, 0);

  width: 360px;
  height: 45px;
  border-radius: 8px;
  border: none;
  background-color: ${({ theme }) => theme.colors.blue400};

  font-family: "HyndaiHarmony";
  font-size: 15px;
  font-weight: 300;
  color: white;

  &:hover {
    cursor: pointer;
  }
`;
