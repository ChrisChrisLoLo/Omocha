import React, {
  Component
} from 'react';
import {
  Button,
  Container,
  Input
} from 'reactstrap';
import '../../css/Notepad.css'

class Notepad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: ''
    };
    this.handleUpdate = this.handleUpdate.bind(this);
    this.parseCode = this.parseCode.bind(this);
  }

  handleUpdate(e) {
    this.setState({
      code: e.target.value
    });
  }

  parseCode(e) {
    var lines = (this.state.code).split('\n');
    console.log(lines);
    const lineTokens = lines.map(x => x.trim().split(' '));
    console.log(lineTokens)
  }

  render() {
    return (
      <div>
        <textarea
          rows={22}
          wrap={'soft'}
          className={'form-control'}
          onChange={this.handleUpdate}
          value={this.state.code}>
        </textarea>
        <Button onClick={this.parseCode}>Run</Button>
      </div>
    );
  }
}

export default Notepad;