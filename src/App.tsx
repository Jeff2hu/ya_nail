import { BrowserRouter, Route, Routes } from "react-router-dom";

import Slide from "./page/Slide";

import foot_1 from "./assets/foot/foot_1.jpg";
import foot_2 from "./assets/foot/foot_2.jpg";
import foot_3 from "./assets/foot/foot_3.jpg";

import hand_1 from "./assets/hand/hand_1.jpg";
import hand_10 from "./assets/hand/hand_10.jpg";
import hand_11 from "./assets/hand/hand_11.jpg";
import hand_12 from "./assets/hand/hand_12.jpg";
import hand_13 from "./assets/hand/hand_13.jpg";
import hand_14 from "./assets/hand/hand_14.jpg";
import hand_15 from "./assets/hand/hand_15.jpg";
import hand_16 from "./assets/hand/hand_16.jpg";
import hand_17 from "./assets/hand/hand_17.jpg";
import hand_18 from "./assets/hand/hand_18.jpg";
import hand_19 from "./assets/hand/hand_19.jpg";
import hand_2 from "./assets/hand/hand_2.jpg";
import hand_20 from "./assets/hand/hand_20.jpg";
import hand_21 from "./assets/hand/hand_21.jpg";
import hand_22 from "./assets/hand/hand_22.jpg";
import hand_23 from "./assets/hand/hand_23.jpg";
import hand_24 from "./assets/hand/hand_24.jpg";
import hand_25 from "./assets/hand/hand_25.jpg";
import hand_26 from "./assets/hand/hand_26.jpg";
import hand_27 from "./assets/hand/hand_27.jpg";
import hand_3 from "./assets/hand/hand_3.jpg";
import hand_4 from "./assets/hand/hand_4.jpg";
import hand_5 from "./assets/hand/hand_5.jpg";
import hand_6 from "./assets/hand/hand_6.jpg";
import hand_7 from "./assets/hand/hand_7.jpg";
import hand_8 from "./assets/hand/hand_8.jpg";
import hand_9 from "./assets/hand/hand_9.jpg";
import Layout from "./page/Layout";
import Profile from "./page/Profile";

const footImages = [foot_1, foot_2, foot_3];
const handImages = [
  hand_1,
  hand_2,
  hand_3,
  hand_4,
  hand_5,
  hand_6,
  hand_7,
  hand_8,
  hand_9,
  hand_10,
  hand_11,
  hand_12,
  hand_13,
  hand_14,
  hand_15,
  hand_16,
  hand_17,
  hand_18,
  hand_19,
  hand_20,
  hand_21,
  hand_22,
  hand_23,
  hand_24,
  hand_25,
  hand_26,
  hand_27,
];

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/hand" element={<Slide images={handImages} />} />
          <Route path="/foot" element={<Slide images={footImages} />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
