<h1 align="center">Cats Facts - Hilton Santos</h1>
<h1 align="center">Defsafe Cat Facts</h1>
<p align="center">Basic code test for DefSafe</p>
<p align="center"><a>https://cats-facts-five.vercel.app/</a></p>

# 1. Overview

The site was developed with Nuxt 3 for the basic code test by DefSafe. It can be accessed via this [link](https://cats-facts-five.vercel.app/), deployed using Vercel. The page displays a text showing a cat fact and a button that generates a new fact, with data provided by the API [meowfacts](https://meowfacts.herokuapp.com).

For more details about the test, access this [repository](https://github.com/def-safe/defsafe-developers-test/?tab=readme-ov-file) provided by DefSafe.

# 2. Application Architecture

The architecture of Cats Facts was designed to ensure that data from the API is captured and stored in a list managed by Pinia, a state manager. Whenever the user clicks the button, it advances to the next item in this list. Upon reaching the last item, the function makes a new API call to retrieve more data.

### 2.1.1. Modules

Here are the modules used in the project:

- [@nuxtjs/tailwindcss](https://nuxt.com/modules/tailwindcss)

  Tailwind module, which is a utility-first CSS framework that simplifies web development by providing predefined classes for styling.

- [@pinia](https://nuxt.com/modules/pinia)

  State management module for Vue.js.

- [@nuxtjs/google-fonts](https://nuxt.com/modules/google-fonts)

  Google Fonts module for Nuxt, used to download the Jost font.

- [@nuxt-icon](https://nuxt.com/modules/icon)

  Nuxt Icon module for the Nuxt.js framework that simplifies the integration and use of icons in Vue.js projects.

- [@nuxt/test-utils](https://nuxt.com/modules/test-utils)

  Testing utilities module for Nuxt.js projects, allowing testing of components, pages, and functionalities.

- [@nock](https://github.com/nock/nock)

  HTTP request mocking module for testing in Nuxt.js projects.

- [@vitest](https://vitest.dev/)

  Vitest module, an integration testing tool for Nuxt.js projects.

### 2.1.2. Components

Here are the components created for the test execution:

- **`ButtonGetFact`:**

	| Name          | Path                      | Params |
	|---------------|---------------------------|--------|
	| ButtonGetFact | components\ButtonGetFact  | onClick |

	**Description:** Button component with an onClick function, displaying a loading icon from Material Symbols and a text to fetch the next fact.

- **`HeaderCatFact`:**

	| Name          | Path                      | Params |
	|---------------|---------------------------|--------|
	| HeaderCatFact | components\HeaderCatFact  | -      |

	**Description:** Header displayed on the index page containing the text "The Defsafe Cat Facts Page".

- **`ImagesCats`:**

	| Name        | Path                    | Params |
	|-------------|-------------------------|--------|
	| ImagesCats  | components\ImagesCats   | -      |

	**Description:** Component that displays three images of cats in WebP format.

- **`TextFact`:**

	| Name        | Path                    | Params                   |
	|-------------|-------------------------|--------------------------|
	| TextFact    | components\TextFact     | factKey, isLoading, fact |

	**Description:** Component that displays the fact texts fetched from the API.

# 3. Features

The site has one main feature: displaying cat facts. For this, data is consumed from the [meowfacts](https://meowfacts.herokuapp.com) API.

## Feature Structure

1. **API Call:**
   - The function that makes the API call is located in `server/api/meowfacts/facts.ts`.
   - This function calls the API and retrieves cat facts data by calling the endpoint count and fetching 90 facts, the limit per call on the endpoint.

2. **Data Storage:**
   - The `fetchFacts` function, which uses Pinia for state management, is responsible for storing the data obtained from the API.
   - The data is stored in a list called `facts`.

3. **Displaying Facts:**
   - A function called `getNextIndexFact` is responsible for displaying a new fact saved in `facts` on the screen.
   - This function uses an attribute called `currentFactIndex`, which stores the current position within the `facts` list.

4. **Updating Facts:**
   - When `getNextIndexFact` reaches the end of the `facts` list, it calls the `fetchFacts` function again.
   - The `fetchFacts` function replaces the `facts` list with a new one, ensuring that new facts are always available for display.

# 4. User Interface Design

The following outlines the main aspects of the site's user interface design:

## 4.1. Prototype

This is the prototype provided in the test:

<p align="center"> <img src="https://i.postimg.cc/Px0X8Zgk/design.png" alt="image_folders"> </p>

## 4.2. Color Palette

The color palette provided for the test can be accessed through this [link](https://coolors.co/palette/22223b-4a4e69-9a8c98-c9ada7-f2e9e4).

## 4.2. Fonts

The font used in the project is [Jost](https://fonts.google.com/specimen/Jost), as specified in the test.

## 4.3. Responsiveness

The site was developed using Tailwind CSS, with three screen versions for different devices: computer, tablet, and mobile. All components, layouts, and pages were adjusted to ensure optimized display on each type of device.

## 4.4. Animations

FadeIn and fadeOut animations were applied to the fact text component, using Tailwind CSS to control these transitions.

## 4.5. Result

The result of the site looks like this:

<p align="center"> <img src="https://i.postimg.cc/RhfM1hmJ/image-teste.png)](https://postimg.cc/hQDWcSfK" alt="image_folders"> </p>

The site can be accessed via this [link](https://cats-facts-five.vercel.app/).

# 5. Testing

Tests were conducted on components, API calls on the server, and the store. These tests can be found in the `test/` folder. To run them, use the command `npm run vitest` or `yarn vitest`.

The tests include:

1. **Unit Tests for Components:**
   - Verification that the components are being rendered correctly.

2. **API Call Tests:**
   - Verification that the API endpoint is being called successfully.
   - Use of the `nock` module to mock API calls.

3. **Store Tests with Pinia:**
   - Verification that the store is being created and managed correctly with Pinia.

# 6. Installation and Setup

To start working with the project, follow the steps below:

## 6.1. Clone the Repository

The first step is to clone the project repository to your local machine. This can be done by running the following command in the terminal to clone using HTTPS:

```bash
git clone https://github.com/jhiltonsantos/cats_facts.git
```

This will create a local copy of the repository on your system, allowing you to work on the code and track project updates.

## 6.2. Navigate to the Project Root Directory

After cloning the repository, you will need to navigate to the project root directory to proceed with the installation and setup. This is necessary to access and manipulate the files and folders related to the project.

## 6.3. Install Dependencies

Before starting development, it's important to ensure that all project dependencies are installed correctly. This can be done by running the following command in the terminal, depending on your preferred package manager:

For npm:

```bash
npm install
```

Or, if you prefer to use Yarn:

```bash
yarn install
```

This command will install all dependencies listed in the project's `package.json` file, ensuring you have access to all the necessary libraries and tools for development.

## 6.4. Start the Development Server

To begin developing and testing the application, you need to start the development server. This server provides a local environment to run and test the site in real-time.

Use npm:

```bash
npm run dev
```

Or Yarn:

```bash
yarn dev
```

This will start the development server and allow you to begin accessing the local server to develop and test the project.