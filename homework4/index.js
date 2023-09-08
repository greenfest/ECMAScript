async function fetchUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await response.json();
        window.localStorage.setItem("users", JSON.stringify(users));
        const elUsers = document.querySelector(".users");

        // Создаем ряды
        for (let i = 0; i < users.length; i += 3) {
            const row = document.createElement("div");
            row.classList.add("row");

            // В каждом ряду создаем три карточки
            for (let j = i; j < i + 3 && j < users.length; j++) {
                const user = users[j];
                const card = document.createElement("div");
                card.classList.add("card");
                card.style.width = "18rem";
                card.style.margin = "15px 15px";
                card.innerHTML = `
                    <div class="card-body">
                        <h5 class="card-title">Name: ${user.name}</h5>
                        <h6 class="card-subtitle mb-2 text-body-secondary">Username: ${user.username}</h6>
                        <p class="card-text">Phone: ${user.phone}</p>
                        <p class="card-text">Website: ${user.website}</p>
                        <button id="user-${user.id}" onclick="deleteUser(this.id)" type="button" class="btn btn-danger">Удалить</button>
                    </div>
                `;
                row.appendChild(card);
            }
            elUsers.appendChild(row);
        }
    } catch (error) {
        console.error("Error fetching users:", error);
    }
}

function deleteUser(userId) {
    const id = parseInt(userId.split('-')[1]);
    const arrUsers = JSON.parse(window.localStorage.getItem("users"));
    window.localStorage.setItem("users", JSON.stringify(arrUsers.filter((user) => user.id !== id)))
    rerenderUsers();
}

function rerenderUsers() {
    const users = JSON.parse(window.localStorage.getItem("users"));
    const elUsers = document.querySelector(".users");
    elUsers.innerHTML = "";
    // Создаем ряды
    for (let i = 0; i < users.length; i += 3) {
        const row = document.createElement("div");
        row.classList.add("row");

        // В каждом ряду создаем три карточки
        for (let j = i; j < i + 3 && j < users.length; j++) {
            const user = users[j];
            const card = document.createElement("div");
            card.classList.add("card");
            card.style.width = "18rem";
            card.style.margin = "15px 15px";
            card.innerHTML = `
                    <div class="card-body">
                        <h5 class="card-title">Name: ${user.name}</h5>
                        <h6 class="card-subtitle mb-2 text-body-secondary">Username: ${user.username}</h6>
                        <p class="card-text">Phone: ${user.phone}</p>
                        <p class="card-text">Website: ${user.website}</p>
                        <button id="user-${user.id}" onclick="deleteUser(this.id)" type="button" class="btn btn-danger">Удалить</button>
                    </div>
                `;
            row.appendChild(card);
        }
        elUsers.appendChild(row);
    }
}

fetchUsers();

async function fetchDogImages() {
    try {
        const response = await fetch("https://dog.ceo/api/breeds/image/random/10");
        const data = await response.json();
        const dogImages = data.message;

        const container = document.getElementById("dog-images-container");

        for (let i = 0; i < dogImages.length; i++) {
            setTimeout(() => {
                const col = document.createElement("div");
                col.classList.add("col-md-4", "mb-4");

                const card = document.createElement("div");
                card.classList.add("card");
                card.style.width = "18rem";
                card.style.flexDirection = "column";
                card.style.height = "100%";

                const img = document.createElement("img");
                img.src = dogImages[i];
                img.classList.add("card-img-top");
                img.alt = "Dog Image";

                const cardBody = document.createElement("div");
                cardBody.classList.add("card-body");

                card.appendChild(img);
                card.appendChild(cardBody);
                col.appendChild(card);
                container.appendChild(col);
            }, i * 3000);
        }
    } catch (error) {
        console.error("Error fetching dog images:", error);
    }
}

fetchDogImages();
