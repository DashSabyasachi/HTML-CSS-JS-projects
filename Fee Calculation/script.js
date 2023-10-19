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
    alert("done");
  } else {
    alert("error");
  }
}
