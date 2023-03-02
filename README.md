# Team-Profiles-Generator ![MIT license](https://img.shields.io/badge/License-MIT-blue.svg) ![Project Package Badge](https://img.shields.io/badge/package-Inquirer-informational)

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=black)

## Table of Contents

* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Features](#features)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
* [License](#license)
* [Credits](#credits)

## Description

  A Node.js command-line application that takes in information about employees on a software engineering team and generates an HTML webpage that displays information for each person.

## Installation

Follow these steps to install the necessities for the app

1. Make sure to have [Node.js](https://nodejs.org/en/download/) installed.

    * If you do not have Node.js installed follow [these instructions](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

2. To use this program you need to clone this repository using the following command:

    ```
    git clone git@github.com:victorlmorales/Team-Profiles-Generator.git
    ```

3. Then you have to install all the dependencies.

    ```
    npm i
    ```

    * This will install the [Inquirer Package](https://www.npmjs.com/package/inquirer) and the [Jest Package](https://www.npmjs.com/package/jest)

## Usage

Follow these steps to use the app

1. After downloading everything run the follwing command:

    ```
    npm start
    ```

* This will prompt you to answer some questions about your team.

* Once you answer all questions your `team.html` file will be created in the `/dist` folder

## Features

* Accepts User Input

* When the user is finished creating the team then the completed team will be rendered in the `/dist` folder.

* The Github username can be clicked and will open the profile in another tab.

* When the user clicks on the email address the default mail program will open.

* All the employees can have the following information:

    * Name

    * Employee ID

    * Email Address

* Managers can have their office number entered and rendered

* Engineers can have their github username entered and rendered

* Interns can have their school entered and rendered

## Contributing

  N/A

## Tests

* In order to test this program you have to run the following command:

    ```
    npm test
    ```

## Questions

  Have questions about this project?  
  GitHub: <https://github.com/victorlmorales>  
  Email: victor.l.morales2020@gmail.com

## Links

  [Demonstration Video](<https://drive.google.com/file/d/1qOr_XzjAASFFHlpzQ_ew63aTNcQB1xj1/view?usp=sharing>)

## License

    This project is licensed under the MIT license.

## Credits

  Victor Morales
