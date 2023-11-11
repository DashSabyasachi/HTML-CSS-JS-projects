const NavLoginBtn = document.getElementById("NavLoginBtn");
const loginContainer = document.getElementById("container-login");
const btndiv = document.getElementById("btn-div");
let Inputdatafield;

btndiv.innerHTML = "";
NavLoginBtn.addEventListener("click", HaveContent);

function HaveContent(e) {
  NavLoginBtn.innerText = "Logout";
  e.preventDefault();
  btndiv.innerHTML = `<button id="ConLoginBtn"  class="btn btn-outline-warning">Login</button>`;
}

btndiv.addEventListener("click", addJSONdata);
function addJSONdata() {
  loginContainer.innerHTML = `<textarea name="" id="data-field" cols="60" rows="10"></textarea><br>
    <button id="Submit-btn"  class="btn btn-outline-info">Submit</button>
    <h5>No Data</h5>`;
  const SubmitBtn = document.getElementById("Submit-btn");
  SubmitBtn.addEventListener("click", storeData);

  Inputdatafield = document.getElementById("data-field");
}

function storeData() {
  const jsonData = Inputdatafield.value;
  if (jsonData) {
    const parsedData = JSON.parse(jsonData);
    localStorage.setItem("jsonData", JSON.stringify(parsedData));
    alert("Data stored in local storage.");
  } else {
    alert("No data to store.");
  }
  const cardContainer = document.getElementById("cards");

  let displayData = JSON.parse(localStorage.getItem("jsonData"));

  console.log(displayData);
  cardContainer.innerHTML = displayData.map((value) => {
    return `<div class="card" style="width: 18rem">
  <div class="card-body">
    <h5 class="card-title">${value.id}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${value.title}</h6>
    <p class="card-text">
    ${value.body}
    </p>
    <a href="#" class="card-link"></a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>`;
  }).join("");
}
