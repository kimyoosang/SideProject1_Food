import Intro from "../Pages/Intro/Intro";
import Popular from "../Pages/Popular/Popular";
import Gallery from "../Pages/Gallery/Gallery";
import Footer from "../Pages/Footer/Footer";

export const TOTAL_SCREENS = [
  {
    screen_name: "Intro",
    component: Intro,
  },
  {
    screen_name: "Popular",
    component: Popular,
  },
  {
    screen_name: "Gallery",
    component: Gallery,
  },
  {
    screen_name: "Footer",
    component: Footer,
  },
];

export const GET_SCREEN_INDEX = (screen_name) => {
  if (!screen_name) return -1;
  for (let i = 0; i < TOTAL_SCREENS.length; i++) {
    if (TOTAL_SCREENS[i].screen_name === screen_name) return i;
  }
  return -1;
};
