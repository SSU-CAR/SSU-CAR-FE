import { useEffect, useState } from "react";
import styled from "styled-components";
import { BadgeType } from "src/types/badge";
import { Badge } from "./Badge";
import { BottomSheet } from "./BottomSheet";

const data = [
  {
    badgeId: 1,
    status: 0,
    name: "귀향길 운전왕",
    caption: "시작이 반이다! 벌써 베스트 드라이버에 가까워지고 있어요.",
  },
  {
    badgeId: 2,
    status: 1,
    name: "베스트 드라이버",
    caption: "시작이 반이다! 벌써 베스트 드라이버에 가까워지고 있어요.",
  },
  {
    badgeId: 3,
    status: 0,
    name: "피드백 만점",
    caption: "시작이 반이다! 벌써 베스트 드라이버에 가까워지고 있어요.",
  },
  {
    badgeId: 4,
    status: 0,
    name: "귀향길 운전왕",
    caption: "시작이 반이다! 벌써 베스트 드라이버에 가까워지고 있어요.",
  },
  {
    badgeId: 5,
    status: 1,
    name: "베스트 드라이버",
    caption: "시작이 반이다! 벌써 베스트 드라이버에 가까워지고 있어요.",
  },
];

export const BadgeContents = () => {
  const [badges, setBadges] = useState<BadgeType[]>([]);
  const [open, setOpen] = useState<Boolean>(false);

  useEffect(() => {
    setBadges(data);
  }, []);

  return (
    <BadgeContentsContainer>
      <Badges>
        {badges.map((el) => {
          return <Badge key={el.badgeId} badgeData={el} setOpen={setOpen} />;
        })}
      </Badges>
      {open ? <BottomSheet setOpen={setOpen} /> : null}
    </BadgeContentsContainer>
  );
};

const BadgeContentsContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 106px;
  background-color: white;

  display: flex;
  justify-content: center;
`;

const Badges = styled.div`
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;

  width: 372px;
  padding-top: 20px;
`;
