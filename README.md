# Tailwind CSS Installer

A CLI tool designed to simplify the setup of Tailwind CSS in various frontend frameworks. With just a few commands, you can configure Tailwind CSS for your React, Vite, or other supported projects.

## Features

-   Seamless setup of Tailwind CSS for popular frameworks such as React and Vite.
-   Automatic configuration of essential files (`tailwind.config.js`, `postcss.config.js`, and CSS entry files).
-   Interactive CLI for an easy setup process.

## Installation

You can install **Tailwind CSS Installer** either globally or locally in your project.

### Global Installation

To install **Tailwind CSS Installer** globally, run the following command:

```bash
npm install -g tailwind-css-installer
```

This allows you to use the `tailwind-css-installer` command from anywhere on your system.
With just a single command tailwind css install in your project, within your project's directory just run :

```bash
tailwind-css-installer
```

### Local Installation

To install **Tailwind Installer** locally in your project, run:

```bash
npm install --save-dev tailwind-css-installer
```

Or

```bash
npm install -D tailwind-css-installer
```

After installing locally, you can run the CLI tool using `npx`:

```bash
npx tailwind-css-installer
```

## Usage

After installation, you can use the `tailwind-css-installer` command to set up Tailwind CSS in your project.

### Running the Installer

To start the setup process, run:

```bash
tailwind-installer
```

or, if installed locally:

```bash
npx tailwind-installer
```

### Configuration

The CLI tool will guide you through the configuration process, including:

1. **Choosing a Framework**: Select from supported frameworks like React or Vite.
2. **Installing Dependencies**: Automatically installs Tailwind CSS and related dependencies.
3. **Configuring Files**: Creates and configures `tailwind.config.js`, `postcss.config.js`, and updates your CSS files.

## Options

**Tailwind Installer** supports the following frameworks:

### React

When setting up Tailwind CSS for React:

-   Installs Tailwind CSS and its dependencies.
-   Creates and configures `tailwind.config.js` and `postcss.config.js`.
-   Updates `src/index.css` with Tailwind CSS imports.

### Vite

When setting up Tailwind CSS for Vite:

-   Installs Tailwind CSS and its dependencies.
-   Creates and configures `tailwind.config.js` and `postcss.config.js`.
-   Updates `src/index.css` with Tailwind CSS imports.

## Examples

### React Project Setup

1. Navigate to your React project directory.
2. Run the installer:

    ```bash
    tailwind-css-installer
    ```

    or, if installed locally:

    ```bash
    npx tailwind-css-installer
    ```

3. Select **React** from the prompts.

This will:

-   Install Tailwind CSS and its dependencies.
-   Create and configure `tailwind.config.js` and `postcss.config.js`.
-   Add Tailwind CSS imports to `src/index.css`.

### Vite Project Setup

1. Navigate to your Vite project directory.
2. Run the installer:

    ```bash
    tailwind-css-installer
    ```

    or, if installed locally:

    ```bash
    npx tailwind-css-installer
    ```

3. Select **Vite** from the prompts.

This will:

-   Install Tailwind CSS and its dependencies.
-   Create and configure `tailwind.config.js` and `postcss.config.js`.
-   Add Tailwind CSS imports to `src/index.css`.

## Contributing

We welcome contributions to improve **Tailwind CSS Installer**. To contribute:

1. Fork the repository on GitHub.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Create a Pull Request on GitHub with a description of your changes.

### Key Points Covered:

-   **Features**: Overview of what the package does.
-   **Installation**: Instructions for global and local installation.
-   **Usage**: How to run and use the installer.
-   **Configuration**: Details on what happens during the setup process.
-   **Options**: Specifics on framework support.
-   **Examples**: Step-by-step guides for setting up with React and Vite.
-   **Contributing**: How to contribute to the project.
-   **License**: Licensing information.
-   **Changelog**: Where to find information on changes.

Feel free to modify or add any additional information specific to your package.