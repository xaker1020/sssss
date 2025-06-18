const dark = document.getElementById("dark");
const moon = document.getElementById("moon");
const sun = document.getElementById("sun");
const ota = document.getElementById("ota");
dark.addEventListener("click", () => {
    if (document.body.classList.length > 0) {
        document.body.classList.remove("dark");
        sun.style.display = "none";
        moon.style.display = "inline-block";
    } else {
        document.body.classList.add("dark");
        sun.style.display = "inline-block";
        moon.style.display = "none";
    }
});
let users = [];
fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => {
        chizish(data);
        users = data;
    });

function chizish(odamlar) {
    ota.innerHTML = "";
    odamlar.map(o => {
        const div = document.createElement("div");
        div.classList.add("card");
        div.innerHTML = `
 <img src="https://www.transparentpng.com/thumb/user/gray-user-profile-icon-png-fP8Q1P.png" alt="cx">
 <h2>${o.name}</h2>
 <p><i class="fa-solid fa-square-envelope"></i>${o.email}</p>
 <p><i class="fa-solid fa-phone"></i>${o.phone}</p>
 <p><i class="fa-solid fa-house"></i> ${o.address.street}</p>
`

        ota.appendChild(div);

    })
}   