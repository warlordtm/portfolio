export interface Video {
  title: string;
  description: string;
  youtubeUrl: string;
  html: string;
  css: string;
  js: string;
}

export const videos: Video[] = [
  {
    title: "Building a Simple Counter Component",
    description: "Learn how to create a basic interactive counter component with HTML, CSS, and JavaScript.",
    youtubeUrl: "https://youtube.com/watch?v=example1",
    html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Counter Component</title>
  <link rel="stylesheet" href="zencode.css">
</head>
<body>
  <div class="counter">
    <h1>Counter: <span id="count">0</span></h1>
    <button id="increment">Increment</button>
    <button id="decrement">Decrement</button>
    <button id="reset">Reset</button>
  </div>
  <script src="zencode.js"></script>
</body>
</html>`,
    css: `.counter {
  text-align: center;
  margin: 50px auto;
  max-width: 400px;
  font-family: Arial, sans-serif;
}

h1 {
  color: #333;
  margin-bottom: 30px;
}

button {
  background: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  margin: 0 10px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.3s;
}

button:hover {
  background: #0056b3;
}

#count {
  font-weight: bold;
  color: #007bff;
}`,
    js: `let count = 0;
const countDisplay = document.getElementById('count');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const resetBtn = document.getElementById('reset');

function updateDisplay() {
  countDisplay.textContent = count;
}

incrementBtn.addEventListener('click', () => {
  count++;
  updateDisplay();
});

decrementBtn.addEventListener('click', () => {
  count--;
  updateDisplay();
});

resetBtn.addEventListener('click', () => {
  count = 0;
  updateDisplay();
});`
  },
  {
    title: "Responsive Navigation Menu",
    description: "Create a modern responsive navigation menu that works on all devices.",
    youtubeUrl: "https://youtube.com/watch?v=example2",
    html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Responsive Nav</title>
  <link rel="stylesheet" href="zencode.css">
</head>
<body>
  <nav class="navbar">
    <div class="nav-container">
      <div class="nav-brand">ZenCode</div>
      <div class="nav-toggle" id="nav-toggle">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul class="nav-menu" id="nav-menu">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  </nav>
  <script src="zencode.js"></script>
</body>
</html>`,
    css: `.navbar {
  background: #fff;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
}

.nav-brand {
  font-size: 24px;
  font-weight: bold;
  color: #333;
}

.nav-menu {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-menu li {
  margin: 0 15px;
}

.nav-menu a {
  color: #333;
  text-decoration: none;
  transition: color 0.3s;
}

.nav-menu a:hover {
  color: #007bff;
}

.nav-toggle {
  display: none;
  flex-direction: column;
  cursor: pointer;
}

.nav-toggle span {
  width: 25px;
  height: 3px;
  background: #333;
  margin: 3px 0;
  transition: 0.3s;
}

@media (max-width: 768px) {
  .nav-menu {
    position: fixed;
    left: -100%;
    top: 60px;
    flex-direction: column;
    background-color: white;
    width: 100%;
    text-align: center;
    transition: 0.3s;
    box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);
  }

  .nav-menu.active {
    left: 0;
  }

  .nav-menu li {
    margin: 15px 0;
  }

  .nav-toggle {
    display: flex;
  }
}`,
    js: `const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });
});`
  },
  // Add more videos as needed
];