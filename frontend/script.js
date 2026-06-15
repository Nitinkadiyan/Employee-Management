const API_URL = "http://localhost:5000/api/employees";
const tableBody = document.getElementById("employeeTableBody");
let editEmployeeId =null;
const form = document.getElementById("employeeForm");
form.addEventListener("submit", addEmployee);
async function addEmployee(e) {
    e.preventDefault();

    const employee = {
        name: document.getElementById("name").value,
        department: document.getElementById("department").value,
        role: document.getElementById("role").value,
        salary: document.getElementById("salary").value,
        joinDate: document.getElementById("joinDate").value
    };

    if (editEmployeeId) {

        await fetch(`${API_URL}/${editEmployeeId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(employee)
        });

    } else {

        await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(employee)
        });

    }

    editEmployeeId = null;

    document.querySelector(".add-btn").textContent =
        "Add Employee";

    form.reset();

    fetchEmployees();
}
async function fetchEmployees() {
  try {
    const response = await fetch(API_URL);
    const result = await response.json();
    displayEmployees(result.data);
  } catch (error) {
    console.log(error);
  }
}
async function editEmployee(id){
    try{
        
        const response = await fetch(`${API_URL}/${id}`);
        const result = await response.json();
         const employee = result.data;
         document.getElementById("name").value =employee.name;
         document.getElementById("department").value =employee.department;
         document.getElementById("role").value =employee.role;
         document.getElementById("salary").value =employee.salary;
         document.getElementById("joinDate").value =employee.joinDate.split("T")[0];

         editEmployeeId = employee._id;
        
         document.querySelector(".add-btn").textContent="Update Employee";
      
         fetchEmployees();
    }
    catch(err){
        console.log(err);
    }
}
async function deleteEmployee(id) {
    console.log("done");
    console.log(id);
    try{
       const response =  await fetch(`${API_URL}/${id}`,
            {method:"DELETE"}
        )
        console.log(response);
       fetchEmployees();
    }
    catch(err){
        console.log(err);
    }
    console.log("nikku");
}



function displayEmployees(employees) {
  tableBody.innerHTML = "";
  employees.forEach((employee) => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${employee.name}</td>
          <td>${employee.department}</td>  
          <td>${employee.role}</td> 
           <td>${employee.salary}</td>
             <td>${employee.joinDate.split("T")[0]}</td>
              
             <td>
                <button class="edit-btn"onClick="editEmployee('${employee._id}')">Edit</button>
                <button class="delete-btn" onClick ="deleteEmployee('${employee._id}')">Delete</button>;
                </td>
                `;
    tableBody.appendChild(row);
  });
}
fetchEmployees();
