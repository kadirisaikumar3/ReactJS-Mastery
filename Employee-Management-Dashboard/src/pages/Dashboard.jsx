import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Dashboard() {
  return (
    <>
      <Navbar />

      <div
        style={{
          display: "flex",
        }}
      >
        <Sidebar />

        <div
          style={{
            padding: "20px",
          }}
        >
          <h1>Dashboard</h1>

          <p>
            Welcome Admin
          </p>
        </div>
      </div>
    </>
  );
}

export default Dashboard;