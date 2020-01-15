import React, { Component } from "react";
import "./styles.css";
class App extends Component {
  render() {
    return (
      <div>
        <h1>Employee Details</h1>
        <table className="table">
          <tr>
            <th>Employee Id</th>
            <th>Employee Name</th>
            <th>Email Id</th>
          </tr>
          <tr>
            <td>20111710</td>
            <td>Shashi</td>
            <td>shashi@wipro.com</td>
          </tr>
          <tr>
            <td>4589660</td>
            <td>Amit</td>
            <td>amit@wipro.com</td>
          </tr>
          <tr>
            <td>60346710</td>
            <td>Akshay</td>
            <td>akshay@wipro.com</td>
          </tr>
          <tr>
            <td>45698756</td>
            <td>Vikash</td>
            <td>vikash@wipro.com</td>
          </tr>
          <tr>
            <td>56987524</td>
            <td>Pratik</td>
            <td>pratik@wipro.com</td>
          </tr>
        </table>
      </div>
    );
  }
}
export default App;
