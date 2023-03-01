import React, { useEffect } from "react";
import gsap from "gsap";

const IntroducePage = () => {
  const titleTL = gsap.timeline({ duration: 1 });
  useEffect(() => {
    titleTL.to(".a-title", {
      opacity: 1,
      delay: 0.1,
      duration: 0.5,
      y: 0,
      ease: "elastic.out(1, 0.3)",
      stagger: 0.2,
    });
    return () => {};
  }, [titleTL]);
  return (
    <section className="introduce-page">
      <h1>AI试衣系统</h1>
      <div className="title">
        <div className="a-title">虚</div>
        <div className="a-title">拟</div>
        <div className="a-title">试</div>
        <div className="a-title">衣</div>
        <div className="a-title">系</div>
        <div className="a-title">统</div>
      </div>
      <button onClick={gotoFitting}>立即试穿</button>
    </section>
  );
};

const gotoFitting = () => {
  window.location.href = "#fitting";
};

export default IntroducePage;
