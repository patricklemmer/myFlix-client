# myFlix App
<div id="top"></div>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]](https://github.com/patricklemmer/myFlix_client/issues)
<!--[![MIT License][license-shield]][license-url]-->



<!-- PROJECT LOGO -->
<br />

<h3 align="center">myFlix App</h3>

  <p align="center">
    An app that allow its users to search, find, and store data around movies and relating topics.
    <br />
    <a href="[https://github.com/patricklemmer/myFlix_app/](https://github.com/patricklemmer/myFlix_client)"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/patricklemmer/myFlix_client/">View Project</a>
    ·
    <a href="https://github.com/patricklemmer/myFlix_client/issues">Report Bug</a>
    ·
    <a href="https://github.com/patricklemmer/myFlix_client/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents (click to expand)</summary><br>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#built-with">Built With</a></li>
    <li><a href="#key-features">Key Features</a></li>
    <li><a href="#getting-started">Getting Started</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#how-to-run-this-project">How to run this project</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

The objective for this project is, using React to build the client-side for the myFlix database based on its existing [server-side code (REST API and database)](https://github.com/patricklemmer/myFlix_app).

<p align="right">(<a href="#top">back to top</a>)</p>


## Built With

* ![](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
* ![](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
* ![](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
* ![](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)

<p align="right">(<a href="#top">back to top</a>)</p>

## Key Features

<p>The following shows a list of views, which are considered essential feature requirements for this project.</p><br>

- [ ] Main view
  - Returns a list of ALL movies to the user (each listed item with an image, title, and description)
  - Sorting and filtering
  - Ability to select a movie for more details

- [ ] Single movie view
  - Returns data (description, genre, director, image) about a single movie to the user
  - Allows users to add a movie to their list of favourites

- [ ] Login view
  - Allows users to log in with a username and password
  - Registration view
  - Allows new users to register (username, password, email, birthday)

- [ ] Genre view
  - Returns data about a genre, with a name and description
  - Displays example movies

- [ ] Director view
  - Returns data about a director (name, bio, birth year, death year)
  - Displays example movies

- [ ] Profile view
  - Allows users to update their user info (username, password, email, date of birth)
  - Allows existing users to deregister
  - Displays favourite movies
  - Allows users to remove a movie from their list of favourites



<p align="right">(<a href="#top">back to top</a>)</p>


<!-- Technical requirements -->
## Technical requirements

- The application _must_ be a single-page application (SPA)
- The application _must_ use state routing to navigate between vies and share URLs
- The application _must_ give users the option to filter movies
- The application _must_ give users the option to sort movies
- The application _must_ initially use Parcel as its build tool
- The application _must_ be written using the React library and in ES2015+
- The application _must_ be written with React Redux (hence respecting Flux pattern)
- The application _must_ use Bootstrap as a UI library for styling and responsiveness
- The application _must_ contain a mix of class components and function components
- The application _may_ be hosted online

<!--See section "Usage" below.-->

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- Project setup -->
## How to run this project

1. Install parcel locally
``
npm install parcel
``

2. Clone the repository 
````
git clone https://github.com/patricklemmer/myFlix-client.git
````

3. Install all dependencies
``
npm install
``

4. Run the app on localhost:1234
``
parcel src/index.html
``

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ROADMAP -->
## Version Roadmap (***to be updated***)

The following will be released in v.1.1.0:

[ ] Real time form validation for registration view

[ ] Actor view displaying actor related information

[ ] Additional information displayed within:
  - Movie view: 
    - List of actors per movie
  - Director view: 
    - to be evaluated

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this app better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- LICENSE -->
## License

None

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

<a href="https://twitter.com/patrick_lemmer"><img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white"></a>
<a href="https://www.linkedin.com/in/patricklemmer/"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"></a>
<a href="mailto:patricklemmersa@gmail.com"><img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white"></a>

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments (***to be updated***)

<!--
* [Pokemon icon set from GitHub, provided by @duiker101](https://github.com/duiker101/pokemon-type-svg-icons)
* [Bootstrap framework (v5.1.3) ](https://getbootstrap.com/)-->


<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/github_username/repo_name.svg?style=for-the-badge
[contributors-url]: https://github.com/github_username/repo_name/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/github_username/repo_name.svg?style=for-the-badge
[forks-url]: https://github.com/github_username/repo_name/network/members
[stars-shield]: https://img.shields.io/github/stars/github_username/repo_name.svg?style=for-the-badge
[stars-url]: https://github.com/github_username/repo_name/stargazers
[issues-shield]: https://img.shields.io/github/issues/github_username/repo_name.svg?style=for-the-badge
[issues-url]: https://github.com/github_username/repo_name/issues
[license-shield]: https://img.shields.io/github/license/github_username/repo_name.svg?style=for-the-badge
[license-url]: https://github.com/github_username/repo_name/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: images/screenshot.png

