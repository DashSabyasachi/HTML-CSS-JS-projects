let fetch = document.getElementById('fetch');
let StudentArray =[]
let btn = document.getElementById("btn");
btn.addEventListener("click", validation)
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
  const key = Date.now().toString();
  const serializedData = encodeURIComponent(JSON.stringify(studentData))
    // localStorage.setItem(key, JSON.stringify(userData));
    // console.log(StudentArray)
    // alert("Data saved to local storage");
    window.location.href = `receipt.html?data=${serializedData}`;
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





