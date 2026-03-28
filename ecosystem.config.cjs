module.exports = {
  apps: [
    {
      name: "eduacesso-api",
      script: "src/main.js",
      instances: 1,
      exec_mode: "fork",
      env: {
        NODE_ENV: "production"
      }
    }
  ]
};
