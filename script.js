// Fetching mentor data
fetch("db.json")
  .then((response) => response.json())
  .then((data) => {
    // id fetch
    const mentorDataContainer = document.getElementById(
      "mentor-data-container"
    );
    const mentorCategoryContainer = document.getElementById(
      "mentor-category-container"
    );

    // data fetch
    const mentorData = data.mentorData;
    const mentorCategory = data.mentorCategory;

    // mentor data html
    mentorData.forEach((mentor) => {
      const card = document.createElement("div");
      card.classList.add("card");

      card.innerHTML = `
        <img src="${mentor.image}" alt="${mentor.name}" class="card--image" />
        <div class="card--content">
          <div class="profile">
            <span>${mentor.name}</span>
            <span>${mentor.title}</span>
          </div>
          <div class="view--btn">View</div>
        </div>`;

      mentorDataContainer.appendChild(card);
    });

    mentorCategory.forEach((mentor) => {
      console.log(mentor.title);
      const card = document.createElement("div");
      card.classList.add("card");

      card.innerHTML = `
        <img src="${mentor.image}" alt="${mentor.title}" class="card--image" />
        <div class="card--content">
          <div class="profile">
            <span>${mentor.title}</span>
            <span>${mentor.booking}</span>
          </div>
          <div class="view--btn">View</div>
        </div>`;

        mentorCategoryContainer.appendChild(card);
    });
  })
  .catch((error) => console.error("Error fetching mentor data:", error));
