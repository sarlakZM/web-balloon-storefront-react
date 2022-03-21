# Brief

A client named Balloons Inc has requested that we design and develop a virtual store-front for the web, that works on both mobile and desktop devices. The web app should allow users to browse through their catalog of inflatable balloon designs, and select which balloons they 
wish to purchase -- a typical shopping cart solution.

## Features && Goals

- HomePage (Navigate to http://127.0.0.1:3000/ )
- Show all the balloons
   - sortable and filterable in a simple way
   - Details of a balloon
-  A "shopping cart" to review selected balloons for purchase
- Add and remove balloon from the floating cart using json data (add a quantity of the balloon to the "shopping cart")
- CheckoutPage (Navigate to http://127.0.0.1:3000/checkout)
- Responsive design
- Using Routers


At this point, your project layout should look like the following:

```text
my-app/
├─ .gitignore
├─ node_modules/
├─ public/
├─ src/
│  └─ ...
├─ package.json
|_ jest.config.js
├─ tsconfig.json
└─ tslint.json
```

* `tsconfig.json` contains TypeScript-specific options for our project.
* `jest.config.js` makes our test buils.
* `package.json` contains our dependencies, as well as some shortcuts for commands we'd like to run for testing, previewing, and deploying our app.
* `public` contains static assets like the HTML page we're planning to deploy to, or images. You can delete any file in this folder apart from `index.html`.
* `src` contains our TypeScript and CSS code. `index.tsx` is the entry-point for our file, and is mandatory.


## Relationship between components

The following pictures display the structure and flows in project :  

![img](https://github.com/sarlakZM/web-balloon-storefront-react/blob/master/public/assets/view-project/Page-1.drawio.png)
![img](https://github.com/sarlakZM/web-balloon-storefront-react/blob/master/public/assets/view-project/Page-2.drawio.png)
![img](https://github.com/sarlakZM/web-balloon-storefront-react/blob/master/public/assets/view-project/Page-3.drawio.png)
![img](https://github.com/sarlakZM/web-balloon-storefront-react/blob/master/public/assets/view-project/Page-4.drawio.png)


