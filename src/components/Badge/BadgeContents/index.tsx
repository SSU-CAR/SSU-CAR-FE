import { useEffect, useState } from "react";
import styled from "styled-components";
import { BadgeType } from "src/types/badge";
import { Badge } from "./Badge";
import { BottomSheet } from "./BottomSheet";
import { badgeAPI } from "@api/badgeAPIS";

export const BadgeContents = () => {
  const [badges, setBadges] = useState<BadgeType[]>([]);
  const [open, setOpen] = useState<Boolean>(false);
  const [current, setCurrent] = useState<BadgeType>();

  useEffect(() => {
    const response = badgeAPI();
    response.then((res) => {
      setBadges(res);
    });
  }, []);

  return (
    <BadgeContentsContainer>
      <Badges>
        {badges.map((el) => {
          return (
            <Badge
              key={el.badgeId}
              badgeData={el}
              setOpen={setOpen}
              setCurrent={setCurrent}
            />
          );
        })}
      </Badges>
      {open ? <BottomSheet setOpen={setOpen} current={current} /> : null}
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
