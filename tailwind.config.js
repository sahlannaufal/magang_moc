/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/flowbite-react/**/*.js',
  ],
  plugins: [
    require("flowbite/plugin")
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      primary: '#007BFF',     
      secondary: '#6C757D',    
      success: '#28A745',      
      danger: '#DC3545',       
      warning: '#FFC107',    
      info: '#17A2B8',       
    },

  },
}
