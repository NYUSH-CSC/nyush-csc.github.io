// let name = "Alex";
// const age = 20;

// function sayHello(){
//     console.log("Hello!");
// }

// sayHello();

// document.getElementById("btn").addEventListener("click", () => {
//     alert("Button clicked!");
// })

// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//   res.send("Hello from backend!");
// });

// app.listen(3000);

document.addEventListener("DOMContentLoaded", () => {

    const fileInput = document.getElementById("file-input");
    const fileInfo = document.getElementById("file-info");
    const uploadResult = document.getElementById("upload-result");

    if (!fileInput) return;

    fileInput.addEventListener("change", function () {
        const file = fileInput.files[0];
        if (!file) return;

        // Display file information
        fileInfo.innerHTML = `
            <p><strong>File Name:</strong> ${file.name}</p>
            <p><strong>Size:</strong> ${Math.round(file.size / 1024)} KB</p>
            <p><strong>Type:</strong> ${file.type || "Unknown"}</p>
        `;

        // Show preview if image
        if (file.type.startsWith("image/")) {
            const reader = new FileReader();
            reader.onload = e => {
                fileInfo.innerHTML += `<img src="${e.target.result}" style="max-width:200px; margin-top:10px;">`;
            };
            reader.readAsDataURL(file);
        }

        // Fake upload success message
        uploadResult.innerHTML = `
            <p style="color: green; font-weight: bold;">
                ✔ File processed successfully (not actually uploaded)
            </p>
        `;
    });

});
