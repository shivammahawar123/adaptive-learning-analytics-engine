/** @type {import('tailwindcss').Config} */

export default {

  content: [

    "./index.html",

    "./src/**/*.{js,ts,jsx,tsx}"
  ],

  theme: {

    extend: {

      colors: {

        primary: "#2563eb",

        dark: "#020617",

        panel: "#0f172a",

        border: "#1e293b"
      },

      fontFamily: {

        sans: [

          "Inter",
          "system-ui",
          "sans-serif"
        ]
      },

      borderRadius: {

        xl2: "1rem"
      },

      boxShadow: {

        card:
          "0 0 0 1px rgba(255,255,255,0.03), 0 10px 30px rgba(0,0,0,0.25)"
      }

    }

  },

  plugins: []
}