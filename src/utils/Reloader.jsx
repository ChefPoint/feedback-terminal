/* * */
/* * */
/* * * * * */
/* RELOADER */
/* * */

/* * */
/* IMPORTS */
import React from "react";

import lottie from "lottie-web";
import reversedProgressBar from "../components/common/animation/files/reversed-progress-bar.json";

/* * */
/* * * * */
class Reloader extends React.Component {
  // The element holding the animation
  container = null;

  // The lottie animation object
  animation = null;

  // Initialize Reloader
  componentDidMount() {
    this.setupResetEvents();
    this.setupAnimation();
  }

  setupAnimation() {
    // Load animation properties
    this.animation = lottie.loadAnimation({
      container: this.container,
      renderer: "svg",
      animationData: reversedProgressBar,
      loop: false,
      rendererSettings: {
        preserveAspectRatio: "none"
      }
    });

    // Set Animation speed
    // Animation is 1 second by default,
    // so total duration is 1 divided by desired speed.
    const desiredSpeed = this.props.seconds || 1;
    this.animation.setSpeed(1 / desiredSpeed);

    // When animation ends perform desired operation
    this.animation.addEventListener("complete", () =>
      this.inactiveTimeHasBeenReached(this)
    );

    // Adjustment for default SVG alignment
    this.container.getElementsByTagName("svg")[0].style.verticalAlign = "top";
  }

  setupResetEvents() {
    document.addEventListener("scroll", () => this.reset(this), false);
    document.addEventListener("mousemove", () => this.reset(this), false);
    document.addEventListener("mousedown", () => this.reset(this), false);
    document.addEventListener("keypress", () => this.reset(this), false);
    document.addEventListener("touchmove", () => this.reset(this), false);
  }

  reset(that) {
    that.animation.goToAndPlay(1);
  }

  inactiveTimeHasBeenReached(that) {
    window.location.replace(that.props.path);
  }

  render() {
    return (
      <div
        style={{
          height: 6,
          width: "100%",
          position: "fixed",
          top: 0,
          zIndex: 99999
        }}
        ref={ref => (this.container = ref)}
      />
    );
  }
}

export default Reloader;
