
const output = document.getElementById("output");

function createPromise() {
  const time = Math.floor(Math.random() * 3) + 1;

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(time);
    }, time * 1000);
  });
}

const promises = [
  createPromise(),
  createPromise(),
  createPromise()
];

Promise.all(promises).then((results) => {
  output.innerHTML = "";

  results.forEach((time, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>Promise ${index + 1}</td>
      <td>${time.toFixed(3)}</td>
    `;

    output.appendChild(row);
  });

  const totalTime = Math.max(...results);

  const totalRow = document.createElement("tr");

  totalRow.innerHTML = `
    <td><strong>Total</strong></td>
    <td>${totalTime.toFixed(3)}</td>
  `;

  output.appendChild(totalRow);
});

