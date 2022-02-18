function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomDate(start, end) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}

const data = [...Array(50).keys()]
  .map((i) => ({
    id: `order-${i}`,
    amount: getRandomInt(10, 500),
    date: randomDate(new Date(2021, 5, 1), new Date())
  }))
  .sort((a, b) => a.date.getTime() - b.date.getTime());

export function fetchOrders() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 3000);
  });
}
