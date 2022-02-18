import { format } from "date-fns";
import { useEffect, useState } from "react";
import { fetchOrders } from "./fakeApi";
import "./styles.css";

function calculateRewards(orderAmt) {
  const rewardPoints =
    orderAmt > 100
      ? 50 + (orderAmt - 100) * 2
      : orderAmt > 50
      ? orderAmt - 50
      : 0;
  return rewardPoints;
}

export default function App() {
  const [data, setData] = useState();

  useEffect(() => {
    async function fetchData() {
      const response = await fetchOrders();
      setData(response);
    }
    fetchData();
  }, []);

  const totalRewads = data?.reduce(
    (acc, order) => calculateRewards(order.amount) + acc,
    0
  );

  const ordersByMonth = data?.reduce((acc, order) => {
    const orderMonth = format(order.date, "MM/yyyy");
    acc[orderMonth] ? acc[orderMonth].push(order) : (acc[orderMonth] = [order]);
    return acc;
  }, {});

  return (
    <div className="App">
      <h1>Orders</h1>
      <h3>Total Rewards: {totalRewads}</h3>
      {ordersByMonth && (
        <table>
          {Object.keys(ordersByMonth).map((month) => (
            <tr key={month}>
              <td>{format(ordersByMonth[month][0].date, "MMM yyyy")}</td>
              <td style={{ textAlign: "right" }}>
                {ordersByMonth[month].reduce(
                  (acc, order) => calculateRewards(order.amount) + acc,
                  0
                )}
              </td>
            </tr>
          ))}
        </table>
      )}
      {data ? (
        <section className="order-container">
          {data.map((order) => {
            return (
              <article key={order.id} className="order-card">
                <header>
                  <h3>{order.id}</h3>
                  <time>{format(order.date, "do MMMM, yyyy")}</time>
                </header>
                <main>
                  <div>
                    <strong>Amount: </strong>
                    <div>{order.amount}</div>
                  </div>
                  <div>
                    <strong>Reward points: </strong>
                    <div>{calculateRewards(order.amount)}</div>
                  </div>
                </main>
              </article>
            );
          })}
        </section>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
