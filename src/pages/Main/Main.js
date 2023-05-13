import React, { useRef, useEffect } from "react";
import "./style.css";

const Main = () => {
  // 시,분,초를 나타내는 요소를 가져오기
  const hourHandRef = useRef(null);
  const minuteHandRef = useRef(null);
  const secondHandRef = useRef(null);

  // 랜더링될때 최초로 실행하지만 인터벌을 이용하여 1초마다 함수 반복실행
  useEffect(() => {
    const intervalId = setInterval(() => {
      clock();
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  // 1초마다 반복되는 함수
  function clock() {
    const date = new Date();

    // const hours = ((date.getHours() + 11) % 12) + 1;
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const hour = hours * 30;
    const minute = minutes * 6;
    const second = seconds * 6;

    if (hourHandRef.current) {
      hourHandRef.current.style.transform = `rotate(${hour}deg)`;
    }

    if (minuteHandRef.current) {
      minuteHandRef.current.style.transform = `rotate(${minute}deg)`;
    }

    if (secondHandRef.current) {
      secondHandRef.current.style.transform = `rotate(${second}deg)`;
    }
  }

  return (
    <>
      <div class="toggle-wrapper">
        <div class="toggle normal">
          <input id="normal" type="checkbox" />
          <label class="toggle-item" for="normal"></label>
        </div>
        <div class="name">Normal</div>
      </div>
      <section className="clock">
        <div className="hands">
          <div className="hour" ref={hourHandRef}></div>
          <div className="minute" ref={minuteHandRef}></div>
          <div className="second" ref={secondHandRef}></div>
        </div>
      </section>
    </>
  );
};

export default Main;