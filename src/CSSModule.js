import React from "react";
import styles from './CSSModule.module.scss'


const CSSModule = () => {
  return (
    <>
      <div className={`${styles.wrapper} ${styles.inverted}`}>
        안녕하세요 저는 <span className="something">CSSModule!!!!</span>

      </div>
      <div className="something">
        이곳은 글로벌 css
      </div>
    </>
  )
}
export default CSSModule