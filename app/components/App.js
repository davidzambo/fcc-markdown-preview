var React = require('react');
var { Input } = require('./Input');
var { Result } = require('./Result');
var { DcmfLogo } = require('./DcmfLogo');

export class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      content : 'Heading\n' +
                '=======\n' +
                ' \n' +
                'Sub-heading\n' +
                '-----------\n' +
                ' \n' +
                '### Another deeper heading\n' +
                ' \n' +
                'Paragraphs are separated\n' +
                'by a blank line.\n' +
                ' \n' +
                'Leave 2 spaces at the end of a line to do a  \n' +
                'line break\n' +
                ' \n' +
                'Text attributes *italic*, **bold**, \n' +
                '`monospace`, ~~strikethrough~~ .\n' +
                ' \n' +
                'Shopping list:\n' +
                ' \n' +
                '  * apples\n' +
                '  * oranges\n' +
                '   * pears\n' +
                ' \n' +
                'Numbered list:\n' +
                ' \n' +
                '  1. apples\n' +
                '  2. oranges\n' +
                '  3. pears\n' +
                ' \n' +
                'The rain---not the reign---in\n' +
                'Spain.\n' +
                ' \n' +
                ' *[Herman Fassett](https://freecodecamp.com/hermanfassett)*\n'
    };
    this.getContent = this.getContent.bind(this);
  }

  getContent(newContent){
    this.setState({
      content: newContent
    });
  }

  render(){
    return (
      <div className="container">
        <Input onChange={this.getContent} value={this.state.content}/>
        <Result content={this.state.content}/>
        <DcmfLogo />
      </div>
    )
  }
}
