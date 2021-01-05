import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll"; 
/* react-scrollが使えるようになる */
/* 今回使いやすさ重視のために、”animateScroll”を付けている */

export default class Navbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <nav className="nav" id="navbar">
        <div className="nav-content">
          <ul className="nav-items">
            <li className="nav-item">
              <Link
                activeClass="active"  /* 要素に到達したときに適用されるクラス */
                to="pasta"              /* スクロール先のターゲット  (App.jsで定義したidを指定) */
                spy={true}            /* スクロールがターゲットの位置にあるときにリンクを選択する */
                smooth={true}         /* スクロールをアニメーション化 */
                offset={-70}          /* 追加スクロール量 */
                duration={800}        /* スクロールアニメーションの時間 関数にも変更可能 */
              >
                パスタ
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="rice"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                おこめ
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="okazu"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                おかず
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="meat"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                おにく
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
