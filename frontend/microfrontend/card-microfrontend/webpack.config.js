module.exports = {
    name: "card",
    filename: "index.spec.js",
    exposes: {
        './card': './src/index.js',
    },
    shared: ["react", "react-dom"]
};