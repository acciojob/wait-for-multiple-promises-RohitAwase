
const output = document.getElementById("output");

function createPromise() {
  const time = Math.floor(Math.random() * 3) + 1;

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(time);
    }, time * 1000);
  });
}

const startTime = Date.now();

const promises = [
  createPromise(),
  createPromise(),
  createPromise()
];

Promise.all(promises).then((results) => {
  const totalTime = (Date.now() - startTime) / 1000;

  output.innerHTML = "";

  results.forEach((time, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>Promise ${index + 1}</td>
      <td>${time.toFixed(3)}</td>
    `;

    output.appendChild(row);
  });

  const totalRow = document.createElement("tr");

  totalRow.innerHTML = `
    <td><strong>Total</strong></td>
    <td>${totalTime.toFixed(3)}</td>
  `;

  output.appendChild(totalRow);
});

