# Eco Forum

This project is a landing page for an environmental forum in Kovdor. It is designed as a single-page website focused on visual presentation, event atmosphere, and convenient navigation between the main sections.

## About the Project

The website introduces visitors to the eco forum, its idea, and its format. The page includes the following main sections:

- hero section with a background slider;
- forum history and description;
- speakers section;
- photo gallery from previous events;
- venue map;
- registration form;
- contacts and links.

The main goal of the project is to present the event in a clear and visually attractive way so that users can quickly learn about the forum and register.

## Work Completed

As part of this work, a responsive promotional website for the event was created. The project includes:

- single-page website layout built with HTML;
- styling with CSS and Tailwind CSS;
- a JavaScript carousel for the main screen;
- decorative animations and background elements;
- embedded map and registration form using `iframe`;
- adaptation for different screen sizes;
- organized project structure for styles, animations, and images.

## Tech Stack

- HTML5
- CSS3
- JavaScript
- Tailwind CSS
- PostCSS

## Project Structure

```text
eco_forum/
├── animation/        # animations and background effects
├── img/              # project images
├── styles/           # additional styles
├── index.html        # main page
├── scripts.js        # slider logic
├── input.css         # Tailwind input file
├── styles.css        # generated CSS file
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## Run the Project

1. Install dependencies:

```bash
npm install
```

2. Start Tailwind build:

```bash
npm run build
```

3. Open `index.html` in a browser.

## README and Project Evaluation

Before this update, the project did not have a proper README file, so it lacked basic documentation explaining what the website was, which technologies were used, how to run it, and what exactly was completed in the work. The current README solves that problem and makes the project clearer for a teacher, client, or new contributor.

Project strengths:

- clear single-page website structure;
- visually strong hero section;
- interactive elements;
- logical sections for presenting the event;
- use of modern styling tools.

Possible improvements:

- add more detailed information about the speakers and program;
- replace placeholder contact information with real data;
- validate the HTML markup;
- add deployment instructions;
- move content into a structure that is easier to maintain.
