function ButtonClick() {

  const handleClick = () => {
    alert("Button Clicked");
  };

  return (
    <>
      <h2>Button Click Event</h2>

      <button onClick={handleClick}>
        Click Me
      </button>
    </>
  );
}

export default ButtonClick;