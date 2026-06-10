function KeyboardEvent() {

  const handleKeyDown = (e) => {
    console.log(e.key);
  };

  return (
    <>
      <h2>Keyboard Event</h2>

      <input
        type="text"
        onKeyDown={handleKeyDown}
      />
    </>
  );
}

export default KeyboardEvent;