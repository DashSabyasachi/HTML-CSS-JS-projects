let dbtable = document.getElementById('tbl-body');
let studentList = document.getElementById("student-list");
let StudentArray = JSON.parse(localStorage.getItem("students")) || [];
let btn = document.getElementById("btn");
btn.addEventListener("click", validation);
function validation() {
  let name = document.getElementById("name").value;
  let gender = document.querySelector('input[class="gender"]:checked').value;
  let course = document.getElementById("course").value;
  let fee = document.getElementById("fee").value;
  let category = document.getElementById("category").value;

  let nameerror = document.getElementById("nameerror");
  let feeerror = document.getElementById("feeerror");

  let isvalidate = true;
  if (
    !name ||
    !gender ||
    course === "Choose any course here" ||
    !fee ||
    category === "Choose your Category here"
  ) {
    isvalidate = false;
    nameerror.textContent = "required*";
    feeerror.textContent = "required*";
  } else if (!(name.trim().length > 5)) {
    isvalidate = false;
    nameerror.textContent = "Name should be at least 6 characters long";
  }
  if (isvalidate) {
    const StudentData = {
      name,
      gender,
      course,
      fee,
      category,
    };
    StudentArray.push(StudentData);
    localStorage.setItem("students", JSON.stringify(StudentArray));

    document.getElementById("name").value = "";
    document.querySelector('input[class="gender"]:checked').checked = false;
    document.getElementById("course").value = "Choose any course here";
    document.getElementById("fee").value = "";
    document.getElementById("category").value = "Choose your Category here";

    displayStudentList();
    table();

    nameerror.textContent = "";
    feeerror.textContent = "";
  } else {
    alert("Error: Please check the form and try again.");
  }
}

const dropdown = document.getElementById("course");
const payableFee = document.getElementById("fee");
const category = document.getElementById("category");
dropdown.addEventListener("change", function () {
  const selectedOption = dropdown.value;

  let newText = "";

  switch (selectedOption) {
    case "MERN":
      newText = "35000";
      break;
    case "JAVA":
      newText = "30000";
      break;
    case "PYTHON":
      newText = "25000";
      break;
  }
  payableFee.value = newText;

  category.addEventListener("change", function () {
    const selectedCategory = category.value;

    let discount = "";

    switch (selectedCategory) {
      case "GENERAL":
        discount = newText;
        break;
      case "OBC":
        discount = Number(newText) - (Number(newText) * 10) / 100;
        break;
      case "SC/ST":
        discount = Number(newText) - (Number(newText) * 15) / 100;
        break;
      case "OTHERS":
        discount = Number(newText) - (Number(newText) * 20) / 100;
        break;
    }
    payableFee.value = discount;
  });
});

function displayStudentList() {
  studentList.innerHTML = "";

  StudentArray.forEach((student) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
      <span><b>Name:</b> ${student.name}</span><br>
      <span><b>Gender:</b> ${student.gender}</span><br>
      <span><b>Course:</b> ${student.course}</span><br>
      <span><b>Paid Fee:</b> ${student.fee}</span><br>
      <span><b>Category:</b> ${student.category}</span><br>`;
    
    studentList.appendChild(listItem);
  });
}

function table(){
  dbtable.innerHTML="";
  StudentArray.forEach((student, index) => {
    const datarow = document.createElement("tr")
    datarow.innerHTML = `
    <tr id="tdr" >
    <td>${student.name}</td>
    <td>${student.gender}</td>
    <td>${student.course}</td>
    <td>${student.fee}</td>
    <td>${student.category}</td>
    <td><button   class="btn btn-danger" onclick="deleteStudent(${index})">Delete</button></td>
    </tr>
    <hr>
    `;
    dbtable.appendChild(datarow);
  })
}

function deleteStudent(index) {
  StudentArray.splice(index, 1);
  localStorage.setItem("students", JSON.stringify(StudentArray));
  displayStudentList();
  table()
}

displayStudentList();
table()