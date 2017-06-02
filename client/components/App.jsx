import React from 'react';
import Form from './children/Form.jsx';

export default class App extends React.Component {
  render() {
    return (
    <div>
     <div style={{textAlign: 'center'}}>
        <h1>Hello World</h1>
      </div>
      	<Form />
      </div>
      );
  }
}