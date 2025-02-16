//constants for query selector
const studentId = document.getElementById("myStudentId");
const customNumber = document.getElementById("customNumber");
const customColorBtn = document.querySelector(".custColor");
const randomColorBtn = document.querySelector(".randColor");
const imageSelect = document.getElementById("imageSelect");
const displayImage = document.getElementById("images");


// Function to change background color based on user input and display student id
function changeCustomColor() {
    const input = parseInt(customNumber.value);
    studentId.textContent = "1271389"; 
    if (input < 0 || input > 100) {
        document.body.style.backgroundColor = "red";
    } else if (input < 20) {
        document.body.style.backgroundColor = "green";
    } else if (input < 40) {
        document.body.style.backgroundColor = "blue";
    } else if (input < 60) {
        document.body.style.backgroundColor = "orange";
    } else if (input < 80) {
        document.body.style.backgroundColor = "purple";
    } else {
        document.body.style.backgroundColor = "yellow";
    }
}


// Function to change background color randomly
function changeRandomColor() {
    customNumber.value = Math.floor(Math.random() * 100) + 1;
    changeCustomColor();
}

// Function to generate options for select list
function addList() {
    const images = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"];
    if (imageSelect.length === 1) { 
        images.forEach(image => {
            const option = document.createElement("option");
            option.value = image;
            option.textContent = image;
             imageSelect.appendChild(option);
        });
    }
}

// Function to change image based on selection
function changeImage() {
     displayImage.src = "img/" + imageSelect.value;
}

//event listeners
customColorBtn.addEventListener("click", changeCustomColor);
randomColorBtn.addEventListener("click", changeRandomColor);
imageSelect.addEventListener("click", addList);
imageSelect.addEventListener("change", changeImage);
