const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

menuToggle.addEventListener("click", function () {
  mobileMenu.classList.toggle("show");
});

// Fetching mentor data
fetch("db.json")
  .then((response) => response.json())
  .then((data) => {
    // id fetch
    const mentorDataContainer = document.getElementById(
      "mentor-data-container"
    );

    // data fetch
    const mentorData = data.mentor_ListData;

    // mentor data html
    mentorData.forEach((mentor) => {
      const card = document.createElement("div");
      card.classList.add("card");

      card.innerHTML = `
        <img src="${mentor.image}" alt="${mentor.name}" class="card--image" />
        <div class="card--content">
          <div class="profile">
            <span>${mentor.name}</span>
            <span>${mentor.position}</span>
          </div>
          <a class="view--btn" style="text-decoration:none" href="${mentor.linkToViewPage}">View</a>
        </div>`;
        

      mentorDataContainer.appendChild(card);
    });

  })
  .catch((error) => console.error("Error fetching mentor data:", error));
