let insertData = document.getElementById("inputField");
let AddBtn = document.getElementById("AddBtn");
let taskField = document.getElementById("taskField");
let ClsBtn = document.getElementById("ClsBtn");
let TaskArr = [];
let data;
loadDataFromLocalStorage();
print();

AddBtn.addEventListener("click", () => {
  if (insertData.value) {
    if (data) {
      let x = TaskArr.map((item) => {
        if (data.id == item.id) {
          return (data.text = insertData.value);
        } else {
          return data;
        }
      });
      data = "";
    } else {
      let data = {
        id: Math.trunc(Math.random() * 1000),
        text: insertData.value,
      };
      TaskArr.unshift(data);
      saveDataToLocalStorage();
    //   let locStore = localStorage.setItem('todo',JSON.stringify(TaskArr))
    //   let locStoreGet = localStorage.setItem('todo',JSON.stringify(TaskArr))
      //  console.log(TaskArr)
    }

    insertData.value = "";
    print();
  } else {
    alert("Plz Enter sth. before hit the Add button");
    return;
  }
});

function print() {
  let str = "";
  if (TaskArr.length == 0) {
    str = `<h3>No data found</h3>`;
  } else {
    let x = TaskArr.map((data) => {
      // console.log('hello')

      return (str += `<div class="card">
    <div class="card-body">
        <h3>${data.text}</h3>
    </div>
    <div class="card-footer">
        <button class="edit" onclick="editf(${data.id})">Edit</button>
        <button class="del" onclick="deletef(${data.id})">Delete</button>
    </div>
</div>`);
    });
  }
  taskField.innerHTML = str;
}

function deletef(id) {
  let y = TaskArr.filter((data) => {
    return data.id !== id;
  });
  TaskArr = y;
  saveDataToLocalStorage(); 
  print();
}

function editf(id) {
  data = TaskArr.find((data) => {
    return data.id == id;
  });
  insertData.value = data.text;
  AddBtn.innerText = "Save";
 
}

ClsBtn.addEventListener("click", (id) => {
  let z = TaskArr.filter((data) => {
    return data.id == id;
  });
  TaskArr = z;
  saveDataToLocalStorage(); 
  print();
  // taskField.innerHTML = `<h3>No data found</h3>`
});

function saveDataToLocalStorage() {
    localStorage.setItem('todo', JSON.stringify(TaskArr));
  } 

  function loadDataFromLocalStorage() {
    const savedData = localStorage.getItem('todo');
    if (savedData) {
      TaskArr = JSON.parse(savedData);
    }
  }