//<!-- MOBILE Toggle -->
let Menubtn = document.getElementById("Menubtn");
Menubtn.addEventListener("click", function (e) {
  document.querySelector("body").classList.toggle("mobile-nav-active");
  this.classList.toggle("fa-times");
});

// toggle theme
let themeToggle = document.getElementById("theme-toggler");
themeToggle.addEventListener("click", function (el) {
  document.querySelector("body").classList.toggle("active");
  this.classList.toggle("fa-sun");
});

// project

const project = [
      {
    id: 33,
    name: "Xpedition",
    category: "Mern",
    image: "image/dabarcodes.png",
    links: {
      website: "https://dabarcodes-project-dabarcodes-front.vercel.app/",
      github: "https://github.com/PriyakumariYt/Dabarcodes_Project",
    },
  },
  {
    id: 32,
    name: "Xpedition",
    category: "Mern",
    image: "image/xpedition.png",
    links: {
      website: "https://xpedition.kaifoundry.com/",
      github: "https://github.com/PriyakumariYt/Xpedition-",
    },
  },
        {
    id: 34,
    name: "QuadbTech ",
    category: "Mern",
    image: "image/quadb.png",
    links: {
      website: "https://quadb-new-website.vercel.app/",
      github: "https://github.com/PriyakumariYt/Quadb_New_Website",
    },
  },

  
  {
    id: 1,
    name: "Blog App",
    category: "Mern",
    image: "image/Blog.png",
    links: {
      website: "https://blogger-app-lilac.vercel.app/",
      github: "https://github.com/PriyakumariYt/Blog_App",
    },
  },
  {
    id: 2,
    name: "Mern_Grocery App",
    category: "Mern",
    image: "image/Grocery_Mern.png",
    links: {
      website: "https://grocery-frontend-jade.vercel.app/",
      github: "https://github.com/PriyakumariYt/Mern_Grocery_Clone",
    },
  },
  {
    id: 3,
    name: "Bakery App",
    category: "Mern",
    image: "image/bakerymern.png",
    links: {
      website: "https://bakery-website-liart.vercel.app/",
      github: "https://github.com/PriyakumariYt/BakeryClone_Mern",
    },
  },
  {
    id: 4,
    name: "CodeSandBox.com",
    category: "React",
    image: "image/CodeSandBox.png",
    links: {
      website: "https://36rxm8-3000.csb.app/",
      github: "https://github.com/PriyakumariYt/Clone_CodeSandBox",
    },
  },
  {
    id: 5,
    name: "RecipeApi",
    category: "Frontend",
    image: "image/RecipeApiJs.png",
    links: {
      website: "https://priyakumariyt.github.io/RecipeApi_JavaScript/",
      github: "https://github.com/PriyakumariYt/RecipeApi_JavaScript",
    },
  },
  {
    id: 6,
    name: "Mern Podcast Website",
    category: "Mern",
    image: "image/MernPodcast.png",
    links: {
      website: "https://mern-podcast-clone.vercel.app",
      github: "https://github.com/PriyakumariYt/Mern_Podcast_Clone",
    },
  },
  {
    id: 7,
    name: "Nextjs Project",
    category: "Mern",
    image: "image/Natural_Nature.png",
    links: {
      website: "https://natural-nurture.vercel.app/",
      github: "https://github.com/PriyakumariYt/Natural-Nurture-Website",
    },
  },
  {
    id: 8,
    name: "Backend-Auth Project",
    category: "Backend",
    image: "image/expressProject.png",
    links: {
      website:
        "https://github.com/PriyakumariYt/Backend_Project_Authentication",
      github: "https://github.com/PriyakumariYt/Backend_Project_Authentication",
    },
  },
  {
    id: 9,
    name: "ReactApp.com",
    category: "React",
    image: "image/ReactWebsiteClone.png",
    links: {
      website: "https://react-website-clone-five.vercel.app/",
      github: "https://github.com/PriyakumariYt/React_Website_Clone",
    },
  },
  {
    id: 10,
    name: "MoviesApi",
    category: "Frontend",
    image: "image/MovieApi.png",
    links: {
      website: "https://priyakumariyt.github.io/SearchMovieApi_Javascript/",
      github: "https://github.com/PriyakumariYt/SearchMovieApi_Javascript",
    },
  },
  {
    id: 11,
    name: "WeatherForcast expressJs",
    category: "Backend",
    image: "image/backendhbs.png",
    links: {
      website: "https://github.com/PriyakumariYt/WeatherForcast_Nodejs",
      github: "https://github.com/PriyakumariYt/WeatherForcast_Nodejs",
    },
  },
  {
    id: 12,
    name: "NetFlix.com",
    category: "Frontend",
    image: "image/Netflix.png",
    links: {
      website: "https://roaring-shortbread-5ccd38.netlify.app/",
      github:
        "https://github.com/PriyakumariYt/Website-Clone/tree/main/Netflix",
    },
  },
  {
    id: 13,
    name: "React FoodListApi",
    category: "React",
    image: "image/FodSearchApiReact.png",
    links: {
      website: "https://vhyl2t-3000.csb.app/",
      github: "https://github.com/PriyakumariYt/React_FoodList_Api",
    },
  },
  {
    id: 14,
    name: "React_AddToCart",
    category: "React",
    image: "image/AddToCart.png",
    links: {
      website: "https://react-add-to-cart-one.vercel.app/",
      github: "https://github.com/PriyakumariYt/ReactAddToCart",
    },
  },
  {
    id: 15,
    name: "College.com",
    category: "Frontend",
    image: "image/Clg.png",
    links: {
      website: "",
      github:
        "https://github.com/PriyakumariYt/Website-Clone/tree/main/Eduford/Clone",
    },
  },
  {
    id: 16,
    name: "Beauty Salon",
    category: "Frontend",
    image: "image/Salon.png",
    links: {
      website: "",
      github: "https://github.com/PriyakumariYt/Website-Clone/tree/main/salon",
    },
  },
  {
    id: 17,
    name: "Grocery.com",
    category: "Frontend",
    image: "image/grocery.png",
    links: {
      website: "https://priyakumariyt.github.io/Grocery-website/",
      github: "https://github.com/PriyakumariYt/Grocery-website",
    },
  },
  {
    id: 18,
    name: "Bakery.com",
    category: "Frontend",
    image: "image/bakery.png",
    links: {
      website: "https://beamish-sprinkles-fdc886.netlify.app/",
      github: "https://github.com/PriyakumariYt/Website-Clone/tree/main/baker",
    },
  },
  {
    id: 19,
    name: "DarkMode Theme",
    category: "React",
    image: "image/Darkmode.jpeg",
    links: {
      website: "https://priyakumariyt.github.io/ReactThemeToggle/",
      github: "https://github.com/PriyakumariYt/ReactThemeToggle",
    },
  },
  {
    id: 20,
    name: "BootstrapApp.com",
    category: "Frontend",
    image: "image/BootstrapApp.png",
    links: {
      website:
        "https://648554f401d60159808be119--jocular-semifreddo-ff2db1.netlify.app/",
      github: "https://github.com/PriyakumariYt/WebsiteDesign_Bootstrap",
    },
  },
  {
    id: 21,
    name: "ReactCollegeWebsite.com",
    category: "React",
    image: "image/ReactClgWebsite.png",
    links: {
      website: "https://df4r8x-3000.csb.app/",
      github: "https://github.com/PriyakumariYt/ReactCollegeWebsiteClone",
    },
  },
  {
    id: 22,
    name: "Podcast Website",
    category: "React",
    image: "image/Podcast.png",
    links: {
      website: "https://priyakumariyt.github.io/React-Podcast-website-Clone/",
      github: "https://github.com/PriyakumariYt/React-Podcast-website-Clone",
    },
  },
  {
    id: 23,
    name: "Jokes Generator",
    category: "Small Project",
    image: "image/Jokes.png",
    links: {
      website: "https://priyakumariyt.github.io/JokesGeneratorApi/",
      github: "https://github.com/PriyakumariYt/JokesGeneratorApi",
    },
  },
  {
    id: 24,
    name: "Pyramid",
    category: "Small Project",
    image: "image/pyramid.png",
    links: {
      website: "https://css-animation-rose.vercel.app/",
      github: "https://github.com/PriyakumariYt/CssAnimation/tree/main/Pyramid",
    },
  },
  {
    id: 25,
    name: "Todo App",
    category: "React",
    image: "image/todo.png",
    links: {
      website: "https://priyakumariyt.github.io/TodoList_Crud_Operation/",
      github: "https://github.com/PriyakumariYt/TodoList_Crud_Operation",
    },
  },
  {
    id: 26,
    name: "Quotes Generator",
    category: "Small Project",
    image: "image/Quotes.png",
    links: {
      website: "https://priyakumariyt.github.io/QuotesGenerator/",
      github: "https://github.com/PriyakumariYt/QuotesGenerator",
    },
  },
  {
    id: 27,
    name: "Cube",
    category: "Small Project",
    image: "image/Cube.png",
    links: {
      website: "https://css-animation-3d.vercel.app/",
      github: "https://github.com/PriyakumariYt/CssAnimation/tree/main/cube",
    },
  },
  {
    id: 28,
    name: "Calculator",
    category: "Small Project",
    image: "image/Calculator.png",
    links: {
      website: "https://codepen.io/PriyakumariYt/pen/zYmMadR",
      github: "https://github.com/PriyakumariYt/calculator",
    },
  },
  {
    id: 29,
    name: "Job Applied App",
    category: "Frontend",
    image: "image/Job Applied.png",
    links: {
      website: "https://priyakumariyt.github.io/JobApplied_App/",
      github: "https://github.com/PriyakumariYt/JobApplied_App",
    },
  },
  {
    id: 30,
    name: "Weather App",
    category: "React",
    image: "image/Weatherapp.png",
    links: {
      website: "https://weather-app-phi-mauve-30.vercel.app/",
      github: "https://github.com/PriyakumariYt/WeatherApp_Assignment",
    },
  },
  {
    id: 31,
    name: "Image Uploader",
    category: "React",
    image: "image/imageUploader.png",
    links: {
      website: "https://lunacal-assignment-ivory.vercel.app/",
      github: "https://github.com/PriyakumariYt/Lunacal_assignment",
    },
  },
];

document.addEventListener("DOMContentLoaded", function () {
  const projectContainer = document.getElementById("projectContainer");
  const navbarMenuItems = document.querySelectorAll(".navbar-menu-item");
  const loadMoreButton = document.getElementById("loadMoreButton");

  let projectsToShow = 6; // Number of projects initially to show
  let projects = project.slice(0, projectsToShow); // Slice the projects array to get the initial set of projects

  // Function to display projects based on category
  function filterAndDisplayProjects(projects, category) {
    projectContainer.innerHTML = "";

    // Filter projects based on category
    const filteredProjects = projects.filter(
      (project) => project.category === category
    );

    // Display filtered projects
    displayProjects(filteredProjects);

    if (category === "All") {
      loadMoreButton.style.display = "block";
    } else {
      loadMoreButton.style.display = "none";
    }
  }

  // Add click event listeners to navbar menu items
  navbarMenuItems.forEach((item) => {
    item.addEventListener("click", function () {
      navbarMenuItems.forEach((navItem) => navItem.classList.remove("active"));

      // Add the 'active' class to the clicked navbar item
      this.classList.add("active");
      const category = this.textContent.trim();
      if (category === "All") {
        displayProjects(project); // Display all projects if "All" is clicked
      } else {
        filterAndDisplayProjects(project, category); // Otherwise, filter projects based on category
      }
    });
  });

  // Function to display projects
  function displayProjects(projectsToDisplay) {
    // Clear previous projects from container
    projectContainer.innerHTML = "";

    // Display projects
    projectsToDisplay.forEach((project) => {
      const {name, image, links} = project;
      const projectCard = createProjectCard(
        name,
        image,
        links.website,
        links.github
      );
      projectContainer.appendChild(projectCard);
    });
  }

  // Function to create a project card
  function createProjectCard(name, imageSrc, websiteLink, githubLink) {
    const projectCard = document.createElement("div");
    projectCard.classList.add("project");

    projectCard.innerHTML = `
          <div class="project-image">
              <img src="${imageSrc}" alt="${name}" />
              <div class="overlay"></div>
              <div class="layer">
                  <h3>${name}<hr />
                      <div class="link-icon">
                          <a href="${websiteLink}" target="_blank"><i class="fas fa-link"></i></a>
                          <a href="${githubLink}" target="_blank"><i class="fab fa-github"></i></a>
                      </div>
                  </h3>
              </div>
          </div>
      `;
    return projectCard;
  }

  // Initially display the first set of projects
  displayProjects(projects);

  // Load more button click event
  loadMoreButton.addEventListener("click", function () {
    projectsToShow += 6;
    projects = project.slice(0, projectsToShow);
    displayProjects(projects);
  });
});
