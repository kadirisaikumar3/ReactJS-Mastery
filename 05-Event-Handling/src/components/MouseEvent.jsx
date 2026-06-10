function MouseEvent() {

  return (
    <>
      <h2
        onMouseOver={() =>
          console.log("Mouse Entered")
        }
      >
        Hover Over Me
      </h2>
    </>
  );
}

export default MouseEvent;