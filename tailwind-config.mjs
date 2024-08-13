import { execa } from "execa";
import fs from "fs";

export const setupReact = async () => {
	console.log("Setting up Tailwind CSS for React...");

	await execa("npm", ["install", "tailwindcss", "postcss", "autoprefixer"], {
		stdio: "inherit",
	});

	// Initialize Tailwind CSS
	await execa("npx", ["tailwindcss", "init"], { stdio: "inherit" });

	// Create postcss.config.js
	fs.writeFileSync(
		"postcss.config.js",
		`
    module.exports = {
      plugins: [
        require('postcss-import'),
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    }
  `
	);

	// Update tailwind.config.js
	fs.writeFileSync(
		"tailwind.config.js",
		`
    module.exports = {
      content: ["./src/**/*.{js,jsx,ts,tsx}"],
      theme: {
        extend: {},
      },
      plugins: [],
    }
  `
	);

	// Update src/index.css
	fs.writeFileSync(
		"src/index.css",
		`
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
  `
	);

	console.log("Tailwind CSS has been set up for React.");
};

export const setupVite = async () => {
	console.log("Setting up Tailwind CSS for Vite...");

	await execa("npm", ["install", "tailwindcss", "postcss", "autoprefixer"], {
		stdio: "inherit",
	});

	// Initialize Tailwind CSS
	await execa("npx", ["tailwindcss", "init"], { stdio: "inherit" });

	// Create postcss.config.js
	fs.writeFileSync(
		"postcss.config.js",
		`
    module.exports = {
      plugins: [
        require('postcss-import'),
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    }
  `
	);

	// Update tailwind.config.js
	fs.writeFileSync(
		"tailwind.config.js",
		`
    module.exports = {
      content: ["./src/**/*.{js,jsx,ts,tsx}"],
      theme: {
        extend: {},
      },
      plugins: [],
    }
  `
	);

	// Update src/index.css
	fs.writeFileSync(
		"src/index.css",
		`
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
  `
	);

	console.log("Tailwind CSS has been set up for Vite.");
};

export const setupAngular = async () => {
	console.log("Setting up Tailwind CSS for Angular...");

	await execa("npm", ["install", "tailwindcss", "postcss", "autoprefixer"], {
		stdio: "inherit",
	});

	// Initialize Tailwind CSS
	await execa("npx", ["tailwindcss", "init"], { stdio: "inherit" });

	// Update angular.json
	const angularJson = JSON.parse(fs.readFileSync("angular.json", "utf-8"));
	angularJson.projects.app.architect.build.options.styles.push(
		"src/styles.css"
	);
	fs.writeFileSync("angular.json", JSON.stringify(angularJson, null, 2));

	// Update tailwind.config.js
	fs.writeFileSync(
		"tailwind.config.js",
		`
    module.exports = {
      content: ["./src/**/*.{html,ts}"],
      theme: {
        extend: {},
      },
      plugins: [],
    }
  `
	);

	// Update src/styles.css
	fs.writeFileSync(
		"src/styles.css",
		`
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
  `
	);

	console.log("Tailwind CSS has been set up for Angular.");
};

export const setupVue = async () => {
	console.log("Setting up Tailwind CSS for Vue...");

	await execa("npm", ["install", "tailwindcss", "postcss", "autoprefixer"], {
		stdio: "inherit",
	});

	// Initialize Tailwind CSS
	await execa("npx", ["tailwindcss", "init"], { stdio: "inherit" });

	// Create postcss.config.js
	fs.writeFileSync(
		"postcss.config.js",
		`
    module.exports = {
      plugins: [
        require('postcss-import'),
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    }
  `
	);

	// Update tailwind.config.js
	fs.writeFileSync(
		"tailwind.config.js",
		`
    module.exports = {
      content: ["./src/**/*.{vue,js,ts,jsx,tsx}"],
      theme: {
        extend: {},
      },
      plugins: [],
    }
  `
	);

	// Update src/assets/styles.css
	fs.writeFileSync(
		"src/assets/styles.css",
		`
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
  `
	);

	console.log("Tailwind CSS has been set up for Vue.");
};

export const setupSvelte = async () => {
	console.log("Setting up Tailwind CSS for Svelte...");

	await execa("npm", ["install", "tailwindcss", "postcss", "autoprefixer"], {
		stdio: "inherit",
	});

	// Initialize Tailwind CSS
	await execa("npx", ["tailwindcss", "init"], { stdio: "inherit" });

	// Create postcss.config.js
	fs.writeFileSync(
		"postcss.config.js",
		`
    module.exports = {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    }
  `
	);

	// Update tailwind.config.js
	fs.writeFileSync(
		"tailwind.config.js",
		`
    module.exports = {
      content: ["./src/**/*.{html,js,svelte}"],
      theme: {
        extend: {},
      },
      plugins: [],
    }
  `
	);

	// Update src/app.css
	fs.writeFileSync(
		"src/app.css",
		`
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
  `
	);

	console.log("Tailwind CSS has been set up for Svelte.");
};
