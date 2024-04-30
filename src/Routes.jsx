import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import HomePageOne from "pages/HomePageOne";
import HomePageTwo from "pages/HomePageTwo";
import SprintGameOne from "pages/SprintGameOne";
import SprintGameTwo from "pages/SprintGameTwo";
import AudiocallGameOne from "pages/AudiocallGameOne";
import AudiocallGameTwo from "pages/AudiocallGameTwo";
import ClassbookOne from "pages/ClassbookOne";
import ClassbookTwo from "pages/ClassbookTwo";
import StatisticsOne from "pages/StatisticsOne";
import StatisticsTwo from "pages/StatisticsTwo";
import AboutOne from "pages/AboutOne";
import AudiocallGameFour from "pages/AudiocallGameFour";
import SprintGameThree from "pages/SprintGameThree";
import AudiocallGameThree from "pages/AudiocallGameThree";
import SprintGameFour from "pages/SprintGameFour";
import StatisticsThree from "pages/StatisticsThree";
import ClassbookThree from "pages/ClassbookThree";
import ClassbookFour from "pages/ClassbookFour";
import AudiocallGameFive from "pages/AudiocallGameFive";
import AudiocallGameSix from "pages/AudiocallGameSix";
import FrameEighteen from "pages/FrameEighteen";
import FrameTen from "pages/FrameTen";
import FrameTwelve from "pages/FrameTwelve";
import ClassbookFive from "pages/ClassbookFive";
import ClassbookSix from "pages/ClassbookSix";
import Frame35271 from "pages/Frame35271";
import FrameThirteen from "pages/FrameThirteen";
import Frame35272 from "pages/Frame35272";
import FrameSeventeen from "pages/FrameSeventeen";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "dhiwise-dashboard", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "/",
      element: <HomePageOne />,
    },
    {
      path: "homepagetwo",
      element: <HomePageTwo />,
    },
    {
      path: "sprintgameone",
      element: <SprintGameOne />,
    },
    {
      path: "sprintgametwo",
      element: <SprintGameTwo />,
    },
    {
      path: "audiocallgameone",
      element: <AudiocallGameOne />,
    },
    {
      path: "audiocallgametwo",
      element: <AudiocallGameTwo />,
    },
    {
      path: "classbookone",
      element: <ClassbookOne />,
    },
    {
      path: "classbooktwo",
      element: <ClassbookTwo />,
    },
    {
      path: "statisticsone",
      element: <StatisticsOne />,
    },
    {
      path: "statisticstwo",
      element: <StatisticsTwo />,
    },
    {
      path: "aboutone",
      element: <AboutOne />,
    },
    {
      path: "audiocallgamefour",
      element: <AudiocallGameFour />,
    },
    {
      path: "sprintgamethree",
      element: <SprintGameThree />,
    },
    {
      path: "audiocallgamethree",
      element: <AudiocallGameThree />,
    },
    {
      path: "sprintgamefour",
      element: <SprintGameFour />,
    },
    {
      path: "statisticsthree",
      element: <StatisticsThree />,
    },
    {
      path: "classbookthree",
      element: <ClassbookThree />,
    },
    {
      path: "classbookfour",
      element: <ClassbookFour />,
    },
    {
      path: "audiocallgamefive",
      element: <AudiocallGameFive />,
    },
    {
      path: "audiocallgamesix",
      element: <AudiocallGameSix />,
    },
    {
      path: "frameeighteen",
      element: <FrameEighteen />,
    },
    {
      path: "frameten",
      element: <FrameTen />,
    },
    {
      path: "frametwelve",
      element: <FrameTwelve />,
    },
    {
      path: "classbookfive",
      element: <ClassbookFive />,
    },
    {
      path: "classbooksix",
      element: <ClassbookSix />,
    },
    {
      path: "frame35271",
      element: <Frame35271 />,
    },
    {
      path: "framethirteen",
      element: <FrameThirteen />,
    },
    {
      path: "frame35272",
      element: <Frame35272 />,
    },
    {
      path: "frameseventeen",
      element: <FrameSeventeen />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
