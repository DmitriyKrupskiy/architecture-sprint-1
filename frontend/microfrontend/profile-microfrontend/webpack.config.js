module.exports = {
    name: "profile",
    filename: "index.spec.js",
    exposes: {
        './profile': './src/index.js',
    },
    shared: ["react", "react-dom"]
};