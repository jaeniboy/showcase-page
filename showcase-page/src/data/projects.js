export const projects = [
  {
    title: "Maze Racer",
    teaser: "Kids like mazes! So I created a maze generator in case the mood goes bad on long train rides.",
    description: "For this project, I used vanilla JavaScript — my first time experimenting with a class-based approach. I also worked on improving my test automation skills by diving into Vitest. To make it useful even when you're offline during your trips, I turned it into a Progressive Web App with offline functionality.",
    link: "project1",
    demoLink: "https://jaeniboy.github.io/my-maze-mazer",
    repoLink: "https://www.github.com",
    image: "mazer_project.PNG",
    teaserImage: "mazer_teaser_2.PNG", 
    tags: ["Vanilla JS","Vite","Vitest","DSA","PWA", "git"]
  },
  { 
    title: "Nonstop Destinations",
    teaser: "Train travel is convenient - unless changing lines with kids in tow. Check out to find destinations reachable directly!", 
    description: "One of my biggest Projects so far. I was not only checking out how to establish a frontend and a backend architecture with React and express.js. It was also my first time building a docker image and deploying it to google cloud run. Further I used two differt APIs to fetch trainline data and enhance it with spatial information from open street map. Since rate limits were strict I had to build update services and a spatial index to speed up client calls. I ended up adding zum LLM-magic to create texts based on structured data.",
    link: "project2", 
    demoLink: "https://jaeniboy.github.io/nonstop-destinations",
    repoLink: "https://www.github.com",
    image: "destinations_project.PNG",
    teaserImage: "destinations_teaser_3.png",
    tags: ["frontend","backend","React","express.js","node.js","API","Open Street Map", "leaflet", "docker", "Google Cloud Run", "spatial data", "Javascript", "git", "Vite", "LLM"] 
  },
  { 
    title: "Wiki Memo", 
    teaser: "This memo game is based on German Wikipedia articles. Have fun and gain some knowledge!",
    description: "I used this project for a first deep dive into React - and I loved it! On my learning path I improved my skills on ES6 functionality since my Javascript knowledge was basically still on a level I learned ten years before. To get the data the project was build on top of I discovered the wikimedia api. I used python scripts to fetch text information as well as beautiful pictures from this endpoint - doing some licence checks on the way. If you are interested, feel free to see my codebase in the repository or enjoy the game!", 
    link: "project3", 
    demoLink: "https://jaeniboy.github.io/wiki-memo",
    repoLink: "https://www.github.com",
    image: "memo_project.PNG",
    teaserImage: "memo_teaser_2.PNG",
    tags: ["React","Javascript","Python","API","Open Data","git"]
  },
];