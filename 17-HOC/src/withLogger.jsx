function withLogger(Component) {

  return function EnhancedComponent(props) {

    console.log(
      "Component Rendered"
    );

    return (
      <Component {...props} />
    );
  };
}

export default withLogger;