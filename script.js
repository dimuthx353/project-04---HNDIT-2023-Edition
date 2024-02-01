import { members } from './members.js';

const container = document.getElementById('container');
const downBtn = document.getElementById('downBtn');
const topBtn = document.getElementById('topBtn');
const overview = document.getElementById('overview');
const newTable = document.createElement('table');

let x = 0;
let y = 0;

members.students.forEach((element) => {
  const newDiv = document.createElement('div');
  const imgEl = document.createElement('img');

  imgEl.setAttribute('src', `./images/${element.indexNumber}.jpg`);

  imgEl.addEventListener('error', function () {
    this.setAttribute('src', './images/none.jpg');
    // console.clear();
  });

  if (element.gender === 'male') {
    y++;
  } else {
    x++;
  }

  newDiv.innerHTML = `
        <div class="info">
        <p class="index" id="index"> <span>KEG/IT/2022/${element.indexNumber}</span></p>
        <p class="name" id="name"><span>${element.name}</span></p>
        <p class="gender" id="gender"><span>${element.gender}</span></p>
        </div>
    `;

  newDiv.prepend(imgEl);
  container.appendChild(newDiv);
});

newTable.innerHTML = `
        <tr>
          <td colspan="2">
            <p>total students <span> ${members.students.length}</span></p>
          </td>
        </tr>
        <tr>
          <td>
            <p>girls <span> ${x}</span></p>
          </td>
          <td>
            <p>boys <span> ${y} </span></p>
          </td>
        </tr>
  `;
overview.append(newTable);

downBtn.addEventListener('click', (e) => {
  window.scrollTo(0, document.body.scrollHeight);
});

topBtn.addEventListener('click', () => {
  window.scrollTo(0, 0);
});

function updateDateTime() {
  const now = new Date();
  const dateTimeElement = document.getElementById('dateTime');
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  };
  const formattedDateTime = now.toLocaleDateString('en-US', options);
  dateTimeElement.textContent = formattedDateTime;
}
setInterval(updateDateTime, 1000);
updateDateTime();
