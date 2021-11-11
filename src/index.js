console.log("firest step!!");

const { setupServer } = require("./server");

const server = setupServer();
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log("===============================");
    console.log("baby diary API server started");
    console.log("===============================");
});