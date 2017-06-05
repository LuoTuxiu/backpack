import React from "react";
export default class SVG extends React.Component {
  render() {
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" style={{
      width: "1.125rem",
      height: "1.125rem"
    }} {...this.props}><path d="M13.309 2.11A13.344 13.344 0 0 0 9 1.5C4.5 1.5 3 3 3 3v6s0 4.5 6 7.5c3.75-1.875 5.156-4.336 5.684-5.918a6.841 6.841 0 0 0 .2-.743A4.686 4.686 0 0 0 15 9V3a4.659 4.659 0 0 0-1.691-.89zM5 9V4.132A10.55 10.55 0 0 1 9 3.5v10.722C5.159 11.93 5 9.094 5 9z" /></svg>;
  }

}