var React = require('react');
var marked = require('marked');
marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true
});

export class Result extends React.Component{
  render() {
    return (
      <div id="result-container">
        <div id="result" dangerouslySetInnerHTML={{__html: marked(this.props.content)}} />
      </div>
    );
  }
}
