import React, { useEffect, useState } from "react";
import home from "./css/navigation.module.less";
import { NavLink } from "react-router-dom";
export default function Navigation(): JSX.Element {
  const [beforeScrollTop, setBeforeScrollTop] = useState(window.scrollY);
  const [scrollDirection, setScrollDirection] = useState(0); //1up,2down
  useEffect(() => {
    window.addEventListener("scroll", (): void => {
      const afterScrollTop: number = window.scrollY;
      setBeforeScrollTop(afterScrollTop);
      const nav = document.getElementsByClassName(home.nav);
      if (scrollDirection === 1 || scrollDirection === 0) {
        if (afterScrollTop > beforeScrollTop) {
          console.log(beforeScrollTop);

          (nav[0] as HTMLElement).style.marginTop = "-200px";
          setScrollDirection(2);
        }
      } else if (scrollDirection === 2 || scrollDirection === 0) {
        if (afterScrollTop < beforeScrollTop) {
          (nav[0] as HTMLElement).style.marginTop = "20px";
          setScrollDirection(1);
        }
      }
    });
  }, []);

  return (
    <>
      <div className={home.navBox}>
        <nav className={home.nav}>
          <div
            className={home.img}
            onClick={(e) => {
              (e.target as HTMLElement).classList.toggle(home.img);
              (e.target as HTMLElement).classList.toggle(home.imgClick);
            }}
          ></div>
          <ul>
            <li>
              <NavLink to="/">首页</NavLink>
            </li>
            <li>
              <NavLink to="/log">日志</NavLink>
            </li>
            <li>
              <NavLink to="/project">项目</NavLink>
            </li>
            <li>
              <NavLink to="/game">游戏</NavLink>
            </li>
            <li>
              <NavLink to="/message">留言</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
