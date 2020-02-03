/* eslint-disable import/no-unresolved, import/no-extraneous-dependencies */
import React, { Component, useState } from "react";
import PropTypes from "prop-types";

function Button() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return <button type="button" onClick={handleClick} />;
}

class App extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    lastname: PropTypes.string,
  };

  static defaultProps = {
    lastname: "",
  };

  static CURRENCY = "USD";

  static get staticGet() {
    return 1;
  }

  static format(input) {
    return String(input).toUpperCase();
  }

  state = {
    mounted: true,
  };

  timer = null;

  get someGetter() {
    return this.constructor.name;
  }

  constructor(props) {
    super(props);
    this.method();
  }

  componentDidMount() {
    this.setState({ mounted: true });
  }

  method() {
    return this.constructor.name;
  }

  onSubmit = e => {
    e.preventDefault();
  };

  render() {
    const { name, lastname, ...props } = this.props;
    return (
      <h1 {...props}>
        {name} {lastname} {String(this.state.mounted)}
        <Button onEvenNumber={this.handleClick}>Press me</Button>
      </h1>
    );
  }
}

export default App;
