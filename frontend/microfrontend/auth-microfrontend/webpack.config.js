module.exports = {
    name: "auth",
    filename: "index.spec.js",
    exposes: {
        './auth': './src/index.js',
    },
    shared: ["react", "react-dom"]
};