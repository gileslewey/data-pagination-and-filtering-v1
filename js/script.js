/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/
const itemsPerPage = 9;
const header = document.querySelector('.header');

function showPage(list, page) {
  const startIndex = (page * itemsPerPage) - itemsPerPage;
  const endIndex = page * itemsPerPage;
  const students = document.querySelector(".student-list");
  students.innerHTML = "";
  for (i=0; i<data.length; i++) {
  const name = data[i]["name"]["first"];
  const email = data[i]["email"];
  const photo = data[i]["picture"]["thumbnail"];
  const join_date = data[i]["registered"]["date"];
  if (i >= startIndex && i < endIndex) {
    let studentList = ('beforeend', `<li class="student-item cf">
    <div class="student-details">
      <img class="avatar" src=${photo} alt="Profile Picture">
      <h3>${name}</h3>
      <span class="email">${email}</span>
    </div>
    <div class="joined-details">
      <span class="date">${join_date}</span>
    </div>
    </li>`);
    students.insertAdjacentHTML('beforeend', studentList);
    }
  }
}

function addPagination(list) {
	let numOfPages = Math.ceil(list.length / itemsPerPage);
	const linkList = document.querySelector('.link-list');
	linkList.innerHTML = "";
	for (let i = 1; i <= numOfPages; i++) {
		let button = `<li>
    <button type="button">${i}</button>
    </li>`;
		linkList.insertAdjacentHTML("beforeend", button);
    linkList.querySelector("button").className = "active";
   }
    linkList.addEventListener ('click', (e) => {
      if (e.target.tagName === 'BUTTON') {
        let newButton = e.target;
        const activeButton = document.querySelector(".active");
        activeButton.className = "";
        newButton.className = "active";
        showPage(list, newButton.textContent);
      };
    });
  }

addPagination(data);
showPage(data, 4);
