# Tutorial-TailwindCSS3-WPU

0. Initial Project :
    -    `npm init`

<br>

1. Install Tailwind CSS :
    - `npm install -D tailwindcss`
    - `npx tailwindcss init`

<br>

2. Configure your template paths on **tailwind.config.js** :
    - module.exports = {
    content: ['./public/**/*.{html,js}'],
    theme: {
        extend: {},
    },
    plugins: [],
    }

<br>

3. Add the Tailwind directives to your CSS on **src/css/input.css** :
    - @tailwind base;<br>
    - @tailwind components;<br>
    - @tailwind utilities;

<br>

4. Start the Tailwind CLI build process :
    - `npx tailwindcss -i ./src/css/input.css -o ./public/css/style.css --watch`

<br>

5. Start using Tailwind add in your HTML :
    - `<link rel="stylesheet" href="./css/style.css">`

<br>

6. Configure scripts in **package.json** :
    - `"dev": "npx tailwindcss -i ./src/css/input.css -o ./public/css/style.css --watch",`
    - `"build": "npx tailwindcss -o ./public/css/final.css --minify"`

<br>

7. Final configure change link href in your HTML :
    - `<link rel="stylesheet" href="./css/final.css">`