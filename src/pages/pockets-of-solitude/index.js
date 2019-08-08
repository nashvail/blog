import React from "react";
import '../../utils/global.css';
import './styles.css';

import {rhythm, scale, options} from '../../utils/typography';

class PocketsOfSolitude extends React.Component {
  render() {
    console.log(rhythm());
    console.log(scale());
    console.log(options);
    return (
      <div>
        <h1>This is nice right?</h1>
        <h2>This is nice right?</h2>
        <h3>This is nice right?</h3>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed sapien quam. Sed dapibus est id enim facilisis, at posuere turpis adipiscing. Quisque sit amet dui dui.Yp
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed sapien quam. Sed dapibus est id enim facilisis, at posuere turpis adipiscing. Quisque sit amet dui dui.Yp
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed sapien quam. Sed dapibus est id enim facilisis, at posuere turpis adipiscing. Quisque sit amet dui dui.Yp
        </p>
      </div>
    );
  }
}

export default PocketsOfSolitude;

// export default () => (
//   <h1>This is nice right?</h1>
// );

