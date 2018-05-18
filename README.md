# Example end of day 1
## Use your own setup
If you want to continue with the project you created yourself on Monday. At least add the following code at the end of index.js.

```javascript
if (module.hot) {
  module.hot.accept(() => {});

  module.hot.dispose(() => {
    window.location.reload();
  });
}
```
This will prevent the creation of multiple canvasses in the browser when Parcel reloads the code after saving a file.

## Installation
Below you will find the code where we left off after day 1 of the summer school.

To use this version instead of your own do the following.

Either download by using the download ZIP button on the right or clone it to your computer.

Execute the following command to clone. This will create a new directory in the current directory.

```
git clone git@github.com:metropolia-summer-ict/end-of-day-1.git
```

Then, move into the directory within your terminal window. If you cloned like above.

```
cd end-of-day-1
```

Install the necessary packages (already listed in package.json)

```
npm install
```

Run parcel.

```
npm run start
```
## References
The live demo in class yesterday borrows idea's and code from the following github repositories:

* [Phaser 3 Parcel Boilerplate by 22mahmoud](https://github.com/22mahmoud/Phaser.io-v3-Boilerplate)
* [Phaser 2 ES 6 Webpack Boilerplate by lean](https://github.com/lean/phaser-es6-webpack)

