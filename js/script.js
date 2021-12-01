/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
Going for exceeds expectations
*/

/*initial variables*/
const itemsPerPage = 9;
const header = document.querySelector('.header');
const studentList = document.querySelector('.student-list');
const linkList = document.querySelector('.link-list');

/**
 * @param {array} list - Array of student objects
 */
 function addPagination(list) {
 	const numOfPages = Math.ceil(list.length / itemsPerPage);
 	const linkList = document.querySelector('.link-list');
 	linkList.innerHTML = "";
 	for (let i = 1; i <= numOfPages; i++) {
 		const button = `<li>
     <button type="button">${i}</button>
     </li>`;

 		linkList.insertAdjacentHTML("beforeend", button);

		const firstButton = document.querySelector('.link-list button')
			if(firstButton) {
				firstButton.className = 'active';
			}
    }

     linkList.addEventListener ('click', (e) => {
			 const targetButton = e.target;
       if (targetButton.tagName === 'BUTTON') {
         const previousButton = document.querySelector('.active');
         previousButton.className = '';
				 const newButton = e.target;
				 newButton.className = 'active';
				 
         showPage(list, newButton.textContent);
       };
     });
   }


/**
 * @param {array} list - Array of student objects
 * @param {string} page - The page number
 */
function showPage(list, page) {
  const startIndex = (page * itemsPerPage) - itemsPerPage;
  const endIndex = page * itemsPerPage;
  studentList.innerHTML = "";
  for (i=0; i<list.length; i++) {
  const name = list[i]["name"]["first"];
	const lastName = list[i]["name"]["last"];
  const email = list[i]["email"];
  const photo = list[i]["picture"]["thumbnail"];
  const join_date = list[i]["registered"]["date"];
  if (i >= startIndex && i < endIndex) {
    let listOfStudents = ('beforeend', `<li class="student-item cf">
    <div class="student-details">
      <img class="avatar" src=${photo} alt="Profile Picture">
      <h3>${name} ${lastName}</h3>
      <span class="email">${email}</span>
    </div>
    <div class="joined-details">
      <span class="date">${join_date}</span>
    </div>
    </li>`);
    studentList.insertAdjacentHTML('beforeend', listOfStudents);
    }
  }
}

/* search button generated*/
const searchButton = `
<label for="search" class="student-search">
	<span>Search by name</span>
	<input id="search" placeholder="Search by name...">
	<button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
</label>
`;
header.insertAdjacentHTML('beforeend', searchButton);

/*variables for input search*/
const searchInput = document.querySelector('.student-search');
const searchValue = document.querySelector('input');
const inputButton = document.querySelector('button');


/**
 * @param {array} list - Array of student objects
 * @param {string} searchValue.value - Text from input
 */
searchInput.addEventListener('keyup', (e) => {
inputSearch(data, searchValue.value);
});

inputButton.addEventListener('click', (e) => {
  inputSearch(data, searchValue.value);
	searchValue.value = ''
});

function inputSearch(list, search){
linkList.innerHTML = "";
	search = search.toUpperCase();
	const searchArray = [];
		for (let i=0; i<list.length; i++) {
		let fullName = `${list[i].name.first.toUpperCase()} ${list[i].name.last.toUpperCase()}`
		if (fullName.includes(search)) {
		searchArray.push(list[i]);
		if (searchArray.length > 0) {
			 showPage(searchArray, 1);
			 addPagination(searchArray);
		 	 }
		 }
			if (searchArray.length === 0) {
	    studentList.innerHTML = '<span>No results found. Please try your search again.</span>';
	 		linkList.innerHTML = '';
				}
	   	}
	  }


/* initial calls */
addPagination(data);
showPage(data, 1);
