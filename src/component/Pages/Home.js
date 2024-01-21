import { Table, Button } from "react-bootstrap";

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <div>
        <h1>Tours</h1>
        <Table>
          <tbody>
            <tr>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>
                <Button>BUY TICKETS</Button>{" "}
              </td>
            </tr>
            <tr>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>
                <Button>BUY TICKETS</Button>{" "}
              </td>
            </tr>
            <tr>
              <td>Larry the Bird</td>
              <td>@instagram</td>
              <td>@twitter</td>
              <td>
                <Button>BUY TICKETS</Button>{" "}
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Home;
