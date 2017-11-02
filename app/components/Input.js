var React = require('react');


export class Input extends React.Component{
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(e){
    let content = e.target.value;
    this.props.onChange(content);
  }

  render(){
    return(
      <div id="input-container">
        <textarea onChange={this.handleChange}>{this.props.value}</textarea>
      </div>
    );
  }
}
