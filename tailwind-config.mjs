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