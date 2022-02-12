module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
           screens: {
               'md': '800px'
           } 
        },
    },
    plugins: [
        require('@tailwindcss/line-clamp')
    ],
   important: true,
};
