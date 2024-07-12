import React, { Component } from 'react';

class StyledComponent extends Component {
  render() {
    const headingStyle = {
      color: 'blue',
      fontSize: '24px',
      fontWeight: 'bold',
      textAlign: 'left'
    };

    const paragraphStyle = {
      color: 'gray',
      fontSize: '16px',
      textAlign: 'justify',
      margin: '20px'
    };

    return (
      <div>
        <h1 style={headingStyle}>This is a Heading</h1>
        <p style={paragraphStyle}>
          This is a paragraph with some inline styling applied to it. It has a
          gray color, justified text alignment, and a margin of 20px.
        </p>
      </div>
    );
  }
}

export default StyledComponent;
