import './index.css'

const CustomerData = () => (
  <>
    <div className="btns-container">
      <div className="btn-container">
        <button className="button">Import Orders</button>
        <button className="button">Accept</button>
        <button className="button">print</button>
      </div>
      <div>
        <button className="button2">Refresh</button>
      </div>
    </div>
    <div className="table-container">
      <table>
        <hr className="line" />
        <tr className="row">
          <th className="col-name">+</th>
          <th className="col-name">
            <input type="checkbox" />
          </th>
          <th className="col-name">Channel</th>
          <th className="col-name">Order No</th>
          <th className="col-name">Order Date</th>
          <th className="col-name">City</th>
          <th className="col-name">Customer Name</th>
          <th className="col-name">Order Value</th>
          <th className="col-name">Status</th>
          <th className="col-name">Operation</th>
        </tr>
        <hr className="line" />
        <tr className="row">
          <td className="col-name">+</td>
          <td className="col-name">
            <input type="checkbox" />
          </td>
          <td className="col-name">$</td>
          <td className="col-name">#TKN20203753</td>
          <td className="col-name">2022-05-04</td>
          <td className="col-name">Lucknow</td>
          <td className="col-name">Abhishek Dixit</td>
          <td className="col-name">0.00</td>
          <td className="col-name">
            <button className="green-btn">Pending</button>
          </td>
          <td className="col-name">
            <button>Actions</button>
          </td>
        </tr>
        <hr className="line" />
        <tr className="row">
          <td className="col-name">+</td>
          <td className="col-name">
            <input type="checkbox" />
          </td>
          <td className="col-name">$</td>
          <td className="col-name">#TKN20203752</td>
          <td className="col-name">2022-05-04</td>
          <td className="col-name">Lucknow</td>
          <td className="col-name">Abhishek Dixit</td>
          <td className="col-name">0.00</td>
          <td className="col-name">
            <button className="green-btn">Pending</button>
          </td>
          <td className="col-name">
            <button>Actions</button>
          </td>
        </tr>
        <hr className="line" />
        <tr className="row">
          <td className="col-name">+</td>
          <td className="col-name">
            <input type="checkbox" />
          </td>
          <td className="col-name">$</td>
          <td className="col-name">#TKN20203754</td>
          <td className="col-name">2022-05-04</td>
          <td className="col-name">Lucknow</td>
          <td className="col-name">Abhishek Dixit</td>
          <td className="col-name">0.00</td>
          <td className="col-name">
            <button className="green-btn">Pending</button>
          </td>
          <td className="col-name">
            <button>Actions</button>
          </td>
        </tr>
        <hr className="line" />
      </table>
    </div>
  </>
)

export default CustomerData
