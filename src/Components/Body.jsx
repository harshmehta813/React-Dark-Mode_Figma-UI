import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeProvider";
import Bitmap from "./Bitmap.png";
const Body = () => {
  const [{ theme, themeData }, toggleTheme] = useContext(ThemeContext);

  const currentTheme = themeData[theme];
  console.log(currentTheme);
  return (
    <>
      <div
        className="bg"
        style={{
          color: currentTheme.color,
          backgroundColor: currentTheme.background
        }}
      >
        <div className="left-menu">
          <div className="user1">
            <img
              src={Bitmap}
              alt="img"
              height="60px"
              width="60px"
              style={{ borderRadius: "50%" }}
            />
          </div>
          <div className="nav">
            <div className="navItem stats">
              <span class="material-icons-outlined">signal_cellular_alt</span>
            </div>
            <div className="navItem">
              <span class="material-icons-outlined">directions</span>
            </div>
            <div className="navItem">
              <span class="material-icons-outlined">shopping_basket</span>
            </div>
            <div className="navItem">
              <span class="material-icons-outlined">question_answer</span>
            </div>
            <div className="navItem">
              <span class="material-icons-outlined">file_copy</span>
            </div>
            <div className="navItem">
              <span class="material-icons-outlined">settings</span>
            </div>
          </div>
          <div className="addNew">
            <span class="material-icons-outlined">add</span>
          </div>
        </div>

        <div className="centerDiv">
          <div
            className="db"
            style={{
              color: currentTheme.color,
              backgroundColor: currentTheme.background
            }}
          >
            My Dashboard
          </div>
          <div className="slider">
            {theme === "light" ? "Dark" : "Light"} Mode
            <label className="themeBox">
              <input type="checkbox" onChange={toggleTheme} />
              <span className="themeSlider"></span>
            </label>
          </div>

          <div className="users">
            <div className="header">
              <div>Active Users</div>
              <div>
                for December 2021
                <span class="material-icons-outlined">arrow_drop_down</span>
              </div>
            </div>
            <div className="user">
              <div className="top">
                <div>
                  <img
                    src="https://media-exp1.licdn.com/dms/image/C5103AQGBIueSWAkHkw/profile-displayphoto-shrink_800_800/0/1564266187183?e=1645660800&v=beta&t=F_UZN624snppK3aJib454PIwgDUTbgEZkm8QRYs9u3k"
                    alt="img"
                    className="pp"
                  />
                </div>
                <div className="det">
                  <p className="name">Nrupul Dev</p>
                  <p className="city">Banglore, India</p>
                </div>
                <span class="material-icons-outlined"> more_horiz </span>
              </div>
              <div className="mid">
                <span className="green"></span>
                <span className="grey"></span>
              </div>
              <div className="bot">
                <div className="level">
                  <p>Professional Level 15</p>
                </div>
                <h4>4723 Points</h4>
              </div>
            </div>
            <div className="user">
              <div className="top">
                <div>
                  <img
                    src="https://d27028dliefpk3.cloudfront.net/assets/masai-team/sandhya.jpg"
                    alt="img"
                    className="pp"
                  />
                </div>
                <div className="det">
                  <p className="name">Sandhya</p>
                  <p className="city">Banglore, India</p>
                </div>
                <span class="material-icons-outlined"> more_horiz </span>
              </div>
              <div className="mid">
                <span className="blue"></span>
                <span className="grey"></span>
              </div>
              <div className="bot">
                <div className="level">
                  <p>Professional Level 11</p>
                </div>
                <h4>2339 Points</h4>
              </div>
            </div>
            <div className="user">
              <div className="top">
                <div>
                  <img
                    src="https://apidyn.royalsociety.org/images/fellows/P37009-Elon-Musk.jpg"
                    alt="img"
                    className="pp"
                  />
                </div>
                <div className="det">
                  <p className="name">Elon Musk</p>
                  <p className="city">California, USA</p>
                </div>
                <span class="material-icons-outlined"> more_horiz </span>
              </div>
              <div className="mid">
                <span className="heliotrope"></span>
                <span className="grey"></span>
              </div>
              <div className="bot">
                <div className="level">
                  <p>Professional Level 6</p>
                </div>
                <h4>1884 Points</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Body;
