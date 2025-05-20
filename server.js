const http = require("http");
const porta = 3000;

const { getSystemInfo } = require("./modules/systeminfo");
const { getClientInfo } = require("./modules/clientInfo");
const { logAccess } = require("./modules/logger");

const server = http.createServer((req, res) => {
  const systeminfo = getSystemInfo();
  const clientInfo = getClientInfo(req);

  const responseData = {
    servidor: systeminfo,
    cliente: clientInfo,
  };

  logAccess(responseData);

  res.writeHead(200, {
    "Content-Type": "text/plain",
  });
  res.end(JSON.stringify(responseData, null, 2));
});

server.listen(porta, () => {
  console.log(`Servidor rodando em http://localhost/${porta}`);
});
