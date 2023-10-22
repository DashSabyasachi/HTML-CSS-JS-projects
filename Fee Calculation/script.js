let fetch = document.getElementById('fetch');
let StudentArray =[]
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
  if (!name || !gender || !course || !fee || !category) {
    isvalidate = false;
    nameerror.textContent = "required*";
    feeerror.textContent = "required*";
  } else if (!(name.trim().length > 5)) {
    isvalidate = false;
    nameerror.textContent = "you must have to give more thn 6";
  } 
  if (isvalidate) {
    const userData = {
      name,
      gender,
      course,
      fee,
      category,
    };
    // StudentArray.unshift(userData);
    const key = Date.now().toString();
    localStorage.setItem(key, JSON.stringify(userData));
    // console.log(StudentArray)
    // alert("Data saved to local storage");

    // window.location.href = "receipt.html";
   
    // fetch.innerHTML += `<li>Name: ${userData.name}, Gender: ${userData.gender}, Course: ${userData.course}, Fee: ${userData.fee}, Category: ${userData.category}</li>`;
   

// const fetch = document.getElementById("fetch");
// if (StudentArray.length === 0) {
//   fetch.innerHTML = "No student data available.";
// } else {
//   fetch.innerHTML = "<ul>";
//   StudentArray.forEach(userData => {
//     fetch.innerHTML += `<li>Name: ${userData.name}, Gender: ${userData.gender}, Course: ${userData.course}, Fee: ${userData.fee}, Category: ${userData.category}</li>`;
//   });
//   fetch.innerHTML += "</ul>";
// }

  } else {
    alert("error");
  }
}


const dropdown = document.getElementById("course");
const payableFee = document.getElementById("fee");
const category = document.getElementById('category')
dropdown.addEventListener("change", function() {
  
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


  category.addEventListener("change",function(){
    const selectedCategory = category.value;

    let discount = "";
  
  switch (selectedCategory) {
    case "GENERAL":
      discount = newText;
      break;
    case "OBC":
      discount = Number(newText)-((Number(newText))*10/100);
      break;
    case "SC/ST":
      discount = Number(newText)-((Number(newText))*15/100);
      break;
    case "OTHERS":
      discount = Number(newText)-((Number(newText))*20/100);
      break;
    
  }
  payableFee.value = discount;
  })

});

let receipt = document.getElementById("receipt");
receipt.addEventListener("click", validation);

function validation() {
  // ... Your existing code to collect and store student data in local storage ...



  // After storing the data, navigate to the second page
  window.location.href = "receipt.html";
}




// Fetch all keys (timestamps) for student data from local storage
const keys = Object.keys(localStorage);

// Iterate through each key and retrieve the corresponding student data
keys.forEach(key => {
  const studentData = JSON.parse(localStorage.getItem(key));
  StudentArray.push(studentData);
  // console.log(StudentArray)

const fetch = document.getElementById("fetch");
if (StudentArray.length === 0) {
  fetch.innerHTML = "No student data available.";
} else {
  fetch.innerHTML = "<ul>";
  StudentArray.forEach(userData => {
    fetch.innerHTML += `<li>Name: ${userData.name}, Gender: ${userData.gender}, Course: ${userData.course}, Fee: ${userData.fee}, Category: ${userData.category}</li>`;
  });
  fetch.innerHTML += "</ul>";
}




});
// Now, the students array contains data for all students
// You can display or manipulate this data as needed






