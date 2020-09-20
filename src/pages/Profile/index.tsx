import React from "react";

import {
  Container,
  Main,
  LeftSide,
  RightSide,
  Repos,
  CalendarHeading,
  Tab,
} from "./styles";

import ProfileData from "../../components/ProfileData";
import RepoCard from "../../components/RepoCard";
import RandomCalendar from "../../components/RandomCalendar";
import TabContent from "../../components/TabContent";

const Profile: React.FC = () => {
  return (
    <Container>
      <Tab className="desktop">
        <div className="wrapper">
          <span className="offset" />
          <TabContent />
        </div>

        <span className="line" />
      </Tab>

      <Main>
        <LeftSide>
          <ProfileData
            username={"joaogil"}
            name={"João Gil"}
            avatarUrl={
              "https://avatars0.githubusercontent.com/u/33355337?s=460&u=3c357e3a6e02e6aefbfe745db0a1af594f9906d7&v=4"
            }
            followers={887}
            following={7}
            company={"Empresa de teste"}
            location={"Porto, Portugal"}
            email={"joaogmonteiro06@gmail.com"}
            blog={"https://www.linkedin.com/in/joaogil06/"}
          />
        </LeftSide>
        <RightSide>
          <Tab className="mobile">
            <TabContent />
            <span className="line"></span>
          </Tab>
          <Repos>
            <h2>Random Repos</h2>

            <div>
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <RepoCard
                  key={n}
                  username={"joaogil"}
                  reponame={"githubproject"}
                  description={"Github clone"}
                  language={n % 3 === 0 ? "Javascript" : "Typescript"}
                  stars={8}
                  forks={4}
                />
              ))}
            </div>
          </Repos>

          <CalendarHeading>
            Random calendar (do not represent actual data)
          </CalendarHeading>

          <RandomCalendar />
        </RightSide>
      </Main>
    </Container>
  );
};

export default Profile;
