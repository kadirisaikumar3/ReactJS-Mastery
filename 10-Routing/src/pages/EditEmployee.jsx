import { useParams } from "react-router-dom";

function EditEmployee() {
  const { id } = useParams();

  return (
    <>
      <h1>Edit Employee</h1>
      <h2>Employee ID: {id}</h2>
    </>
  );
}

export default EditEmployee;