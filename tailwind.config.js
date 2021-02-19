module.exports = {
    purge: ['./dist/**/*.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            width: {
                'readable': '50rem'
            }
        },
    },
    variants: {
        extend: {
            borderWidth: ['hover'],
            boxSizing: ['hover'],

        },
    },
    plugins: [],
}