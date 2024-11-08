<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a id="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->



<!-- PROJECT LOGO -->
<br />
<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
   <div  >
   <svg height=40 width=200 viewBox="0 0 46 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M36.037 12.2798C35.5821 12.2798 35.1671 12.1548 34.7919 11.9046C34.4167 11.6431 34.1154 11.3134 33.888 10.9154C33.6606 10.5061 33.5469 10.0797 33.5469 9.63626V2.54124C33.5469 2.08644 33.6606 1.66574 33.888 1.27915C34.1154 0.892562 34.4167 0.585566 34.7919 0.358161C35.1671 0.119387 35.5821 0 36.037 0H43.1149C43.5697 0 43.9847 0.119387 44.36 0.358161C44.7352 0.585566 45.0365 0.892562 45.2639 1.27915C45.4913 1.66574 45.605 2.08644 45.605 2.54124V9.63626C45.605 10.0797 45.4913 10.5061 45.2639 10.9154C45.0365 11.3134 44.7352 11.6431 44.36 11.9046C43.9847 12.1548 43.5697 12.2798 43.1149 12.2798H36.037ZM37.5549 9.49982H42.9955V4.92899L37.5549 9.49982ZM36.1563 7.24851L41.597 2.67769H36.1563V7.24851Z" fill="currentColor"></path><path d="M24.8979 12.2802L19.4573 2.38806H22.459L26.0236 8.95436L29.5881 2.38806H32.5899L27.1322 12.2802H24.8979Z" fill="currentColor"></path><path d="M11.601 12.2802C11.1575 12.2802 10.7482 12.1665 10.373 11.939C9.99775 11.7116 9.69644 11.4103 9.46904 11.0351C9.24163 10.6599 9.12793 10.2506 9.12793 9.80713V4.86108C9.12793 4.41765 9.24163 4.00832 9.46904 3.6331C9.69644 3.25788 9.99775 2.95657 10.373 2.72917C10.7482 2.50176 11.1575 2.38806 11.601 2.38806H16.6834C17.1383 2.38806 17.5533 2.50176 17.9285 2.72917C18.3037 2.95657 18.5993 3.25788 18.8154 3.6331C19.0428 4.00832 19.1565 4.41765 19.1565 4.86108V8.64737H11.7374V9.67069H19.1565V12.2802H11.601ZM11.7374 6.36195H16.547V4.99753H11.7374V6.36195Z" fill="currentColor"></path><path d="M0 12.2802V4.86108C0 4.41765 0.113702 4.00832 0.341107 3.6331C0.568511 3.25788 0.869822 2.95657 1.24504 2.72917C1.62026 2.50176 2.03527 2.38806 2.49008 2.38806H7.94778V4.99753H2.60947V12.2802H0Z" fill="currentColor"></path></svg></div>
  </a>

 

  <h3 align="center">[rev0] - DevFolio Template</h3>


   [![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![GPL License][license-shield]][license-url]


  <p align="center">
   A powerful and flexible developer portfolio template integrated with a content management system (CMS). Built with modern technologies, rev0 Devfolio Template is designed to make it easy for developers to showcase their work and create custom pages using pre-built blocks. This template also includes a blog feature and is fully customizable, allowing you to personalize the design and content.
    <br />
    <br />
    <a href="https://uluckydev.rev0.site/">View Demo</a>
    .
     <a href="https://github.com/glozinfinity/rev0-portfolio/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    ·
    <a href="https://github.com/glozinfinity/rev0-portfolio/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>







### Features
- **Content Management System (CMS):** Easily manage your content using the integrated Payload CMS.
- **Blog:** Share your thoughts and updates with the built-in blog feature.
- **Page Builder:** Quickly assemble custom pages with pre-built, customizable blocks.
- **Easy Deployment:** Deploy the portfolio effortlessly to platforms like Vercel or Netlify.
- **User-Friendly Management:** Simple and intuitive interface for updating and organizing content.


<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Technologies Used

- **SQLite:** Lightweight database for fast and reliable data storage.
- **Next.js:** Framework for server-rendered React applications.
- **React:** JavaScript library for building user interfaces.
- **Payload CMS:** Integrated CMS solution for managing content seamlessly.
- **Tailwind CSS:** Utility-first CSS framework for custom styling.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



## Installation

1. **Clone the Repository**  
   Clone this repository to your local machine and navigate to the project folder.

2. **Set Up Environment Variables**  
   Copy the `.env.example` file and rename it to `.env`.  
   Update the `.env` file with the following values:

   ```plaintext
   DATABASE_URI=file:./.db
   PAYLOAD_SECRET=b48597b03a8d348d7e798b6c
   ```

   This configuration will connect the application to the preloaded SQLite database included in the repository, allowing you to access and edit the existing template content.

3. **Install Dependencies**  
   Run the following command to install the required packages:

   ```bash
   npm install
   ```

4. **Start the Development Server**  
   Run the following command to start the application in development mode:

   ```bash
   npm run dev
   ```

5. **Access the CMS Dashboard**  
   Open your browser and navigate to [http://localhost:3000/admin](http://localhost:3000/admin).  
   Log in with the following credentials:

   - **Email**: uluckydev@gmail.com
   - **Password**: hHYyYC2yEagLw2F

   You can now start editing the template to suit your portfolio needs.


<p align="right">(<a href="#readme-top">back to top</a>)</p>



## Usage

1. Log in to the CMS dashboard.
2. Use the **Pages** section to create or edit pages, leveraging the pre-built blocks for easy customization.
3. Customize the look and feel using Tailwind CSS and React components.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Troubleshooting

For common issues, refer to the Payload CMS documentation and Next.js guides. Known issues and potential solutions may be listed in the **Issues** section on GitHub.


<!-- ROADMAP -->
Here's the roadmap section formatted as requested:

---

## Roadmap

- [x] Blog Section
- [x] Custom Layouts
- [ ] Technical SEO Implementation
- [ ] Add Dark Mode
- [ ] Add New Blocks
    - [ ] Project Showcase
    - [ ] Testimonials
    - [ ] Contact Form
    - [ ] Interactive Media Sections
- [ ] Add Animations
    - [ ] Page Load Animations
    - [ ] Hover Effects for Links and Buttons
    - [ ] Smooth Scrolling and Transitions for Block Elements

See the [open issues](https://github.com/glozinfinity/rev0-portfolio/issues) for a full list of proposed features and known issues.

---

This format allows for easy tracking of progress on each feature and offers a clear view of future updates. Let me know if there are additional details you'd like to include!

<p align="right">(<a href="#readme-top">back to top</a>)</p>



## Contributing

Contributions to **rev0 Devfolio Template** are welcome! To contribute:

1. Fork the repository.
2. Create a new branch for your feature (`git checkout -b feature/YourFeatureName`).
3. Commit your changes (`git commit -m 'Add a new feature'`).
4. Push to the branch (`git push origin feature/YourFeatureName`).
5. Open a pull request to merge your feature into the main branch.

### Top contributors:

<a href="https://github.com/glozinfinity/rev0-portfolio/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=glozinfinity/rev0-portfolio" alt="contrib.rocks image" />
</a>

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

**rev0 Devfolio Template** is licensed under the GNU General Public License (GPL). This means you are free to use, modify, and distribute this project as long as any derivative works also adopt a GPL-compatible license. However, reselling or redistributing the template as-is is not permitted.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

uluckydev - [@uluckydev](https://twitter.com/uluckydev) - uluckydev@gmail.com

Project Link: [https://github.com/glozinfinity/rev0-portfolio](https://github.com/glozinfinity/rev0-portfolio)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

Thanks to the open-source community and contributors for helping improve and maintain the rev0 Devfolio Template.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/glozinfinity/rev0-portfolio.svg?style=for-the-badge
[contributors-url]: https://github.com/glozinfinity/rev0-portfolio/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/glozinfinity/rev0-portfolio.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/glozinfinity/rev0-portfolio.svg?style=for-the-badge
[stars-url]: https://github.com/glozinfinity/rev0-portfolio/stargazers
[issues-shield]: https://img.shields.io/github/issues/glozinfinity/rev0-portfolio.svg?style=for-the-badge
[issues-url]: https://github.com/glozinfinity/rev0-portfolio/issues
[license-shield]: https://img.shields.io/github/license/glozinfinity/rev0-portfolio.svg?style=for-the-badge
[license-url]: https://github.com/glozinfinity/rev0-portfolio/blob/master/LICENSE.txt

[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
