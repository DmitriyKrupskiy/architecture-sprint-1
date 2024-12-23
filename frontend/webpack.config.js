module.exports = {
    name: "mainApp",
    remotes: {
        "card": "card@http://localhost/card/index.spec.js",
        "profile": "profile@http://localhost/card/profile.spec.js",
        "auth": "auth@http://localhost/auth/profile.spec.js",
    },
    shared: ["react", "react-dom"]
};