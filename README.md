## ORCA Website

This repository contains the codebase for the **ORCA** clothing brand website, built using **Node.js**, **Express**, and some custom JavaScript and CSS files. The project includes a functional shop page, cart, and other essential features.

### Prerequisites

Before you can run the project, make sure you have the following installed on your system:

- **Node.js** (v14.x or higher)
- **npm** (Node Package Manager, which comes with Node.js)

### Getting Started

1. **Clone the Repository**

   First, clone the repository to your local machine:

   ```bash
   git clone <repository-url>
   ```

2. **Navigate to the Project Directory**

   Once the repo is cloned, navigate to the root project directory:

   ```bash
   cd orca-website
   ```

3. **Install Dependencies**

   Since the `node_modules` directory is ignored in `.gitignore`, you’ll need to install the required dependencies yourself. Run the following command:

   ```bash
   npm install
   ```

   This will install **Express** and any other packages listed in `package.json`.

### Running the Server

Once the dependencies are installed, you can start the server by running:

```bash
node server/server.js
```

By default, the server will be running on `http://localhost:3000`. If everything works properly, you should be able to access the website via your browser.

### Project Structure

The project is organized as follows:

```
orca-website/
│
├── index.html
├── shop.html
├── about.html
├── contact.html
├── blog.html
├── faq.html
├── cart.html
├── assets/
│   ├── css/
│   ├── js/
│   ├── img/
│   ├── fonts/
│   └── vendor/
├── server/
│   ├── server.js
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   └── views/
├── .gitignore
├── .env
├── package.json
└── README.md
```

### Important Notes

- **Node Modules**: The `node_modules` directory is excluded from version control. Make sure to run `npm install` to restore the necessary packages.
- **Environment Variables**: Make sure you have a `.env` file in the root directory for any sensitive configuration settings like API keys or database credentials.
