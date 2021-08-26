In this project, I built a **Planets App** by using React Slick . https://react-slick.neostack.com/

**Live Link** https://planetsslider.ccbp.tech/

### Here is the Output:

<br/>

<div style="text-align: center;">
  <video style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12);outline:none;" loop="true" autoplay="autoplay" controls="controls" muted>
    <source src="https://assets.ccbp.in/frontend/content/react-js/planets-app-output.mp4" type="video/mp4">
  </video>
</div>


### Set Up Instructions

<details>
<summary>Click to view</summary>

- Download dependencies by running `npm install`
- Start up the app using `npm start`
</details>

### Completion Instructions

<details>
<summary>Functionality that are added</summary>
<br/>

The app have the following functionalities

- `planetsList` be displayed using **React Slick**
- The `PlanetSlider` component is provided with `planetsList`. It consists of a list of planet item objects with the following properties in each planet item object

  | Key         | Data Type |
  | ----------- | --------- |
  | id          | String    |
  | name        | String    |
  | imageUrl    | String    |
  | description | String    |

- When the next button is clicked on the page, the next planet item details in the planetsList be displayed
- When the previous button is clicked on the page, the previous planet item details in the planetsList be displayed <br/>

<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/planets-app-keys-breakdown.png" alt="planets keys breakdown" style="max-width:100%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

</details>

<details>
<summary>Components Structure</summary>

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/planets-app-component-structure-breakdown.png" alt="component structure breakdown" style="max-width:100%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

</details>

<details>
<summary>Implemented Files</summary>
<br/>

Used these files for the implementation:

- `src/components/PlanetsSlider/index.js`
- `src/components/PlanetsSlider/styledComponents.js`
- `src/components/PlanetItem/index.js`
- `src/components/PlanetItem/styledComponents.js`

</details>


### Resources

<details>
<summary>Image URLs</summary>

- [https://assets.ccbp.in/frontend/react-js/planets-app/planets-bg-img.png](https://assets.ccbp.in/frontend/react-js/planets-app/planets-bg-img.png) Planets background image

</details>

<details>
<summary>Colors</summary>

<br/>

<div style="background-color: #f8fafc; width: 150px; padding: 10px; color: black">Hex: #f8fafc</div>
<div style="background-color: #f1f5f9; width: 150px; padding: 10px; color: black">Hex: #f1f5f9</div>
<div style="background-color: #05acff; width: 150px; padding: 10px; color: black">Hex: #05acff</div>

</details>

<details>
<summary>Font-families</summary>

- Roboto

</details>
