import { execa } from "execa";
import fs from "fs";

const createFile = (path, content) => {
	fs.writeFileSync(path, content, { encoding: "utf8" });
};

const updateTailwindConfig = (content) => {
	createFile("tailwind.config.js", content);
};

export const setupReact = async (isTypeScript) => {
	console.log("Setting up Tailwind CSS for React...");

	await execa("npm", ["install", "tailwindcss", "postcss", "autoprefixer"], {
		stdio: "inherit",
	});

	await execa("npx", ["tailwindcss", "init"], { stdio: "inherit" });

	createFile(
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

	updateTailwindConfig(
		`
    module.exports = {
      content: ["./src/**/*.{${isTypeScript ? "ts,tsx" : "js,jsx"}"]},
      theme: {
        extend: {},
      },
      plugins: [],
    }
  `
	);

	createFile(
		`src/index.${isTypeScript ? "ts" : "js"}`,
		`
    import './index.css';
  `
	);

	createFile(
		"src/index.css",
		`
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
  `
	);

	console.log("Tailwind CSS has been set up for React.");
};

export const setupVite = async (isTypeScript) => {
	console.log("Setting up Tailwind CSS for Vite...");

	await execa("npm", ["install", "tailwindcss", "postcss", "autoprefixer"], {
		stdio: "inherit",
	});

	await execa("npx", ["tailwindcss", "init"], { stdio: "inherit" });

	createFile(
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

	updateTailwindConfig(
		`
    module.exports = {
      content: ["./src/**/*.{${isTypeScript ? "ts,tsx" : "js,jsx"}"]},
      theme: {
        extend: {},
      },
      plugins: [],
    }
  `
	);

	createFile(
		`src/index.${isTypeScript ? "ts" : "js"}`,
		`
    import './index.css';
  `
	);

	createFile(
		"src/index.css",
		`
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
  `
	);

	console.log("Tailwind CSS has been set up for Vite.");
};

export const setupAngular = async (isTypeScript) => {
	console.log("Setting up Tailwind CSS for Angular...");

	await execa("npm", ["install", "tailwindcss", "postcss", "autoprefixer"], {
		stdio: "inherit",
	});

	await execa("npx", ["tailwindcss", "init"], { stdio: "inherit" });

	const angularJson = JSON.parse(fs.readFileSync("angular.json", "utf-8"));
	angularJson.projects.app.architect.build.options.styles.push(
		"src/styles.css"
	);
	fs.writeFileSync("angular.json", JSON.stringify(angularJson, null, 2));

	updateTailwindConfig(
		`
    module.exports = {
      content: ["./src/**/*.{${isTypeScript ? "ts" : "js"},html}"],
      theme: {
        extend: {},
      },
      plugins: [],
    }
  `
	);

	createFile(
		"src/styles.css",
		`
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
  `
	);

	console.log("Tailwind CSS has been set up for Angular.");
};

export const setupVue = async (isTypeScript) => {
	console.log("Setting up Tailwind CSS for Vue...");

	await execa("npm", ["install", "tailwindcss", "postcss", "autoprefixer"], {
		stdio: "inherit",
	});

	await execa("npx", ["tailwindcss", "init"], { stdio: "inherit" });

	createFile(
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

	updateTailwindConfig(
		`
    module.exports = {
      content: ["./src/**/*.{${isTypeScript ? "ts" : "js"},vue}"],
      theme: {
        extend: {},
      },
      plugins: [],
    }
  `
	);

	createFile(
		"src/assets/styles.css",
		`
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
  `
	);

	console.log("Tailwind CSS has been set up for Vue.");
};

export const setupSvelte = async (isTypeScript) => {
	console.log("Setting up Tailwind CSS for Svelte...");

	await execa("npm", ["install", "tailwindcss", "postcss", "autoprefixer"], {
		stdio: "inherit",
	});

	await execa("npx", ["tailwindcss", "init"], { stdio: "inherit" });

	createFile(
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

	updateTailwindConfig(
		`
    module.exports = {
      content: ["./src/**/*.{${isTypeScript ? "ts" : "js"},html,svelte}"],
      theme: {
        extend: {},
      },
      plugins: [],
    }
  `
	);

	createFile(
		`src/app.${isTypeScript ? "ts" : "js"}`,
		`
    import './app.css';
  `
	);

	createFile(
		"src/app.css",
		`
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
  `
	);

	console.log("Tailwind CSS has been set up for Svelte.");
};