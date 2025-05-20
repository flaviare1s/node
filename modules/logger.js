const fs = require('fs');
const path = require('path');

const LOG_FILE = path.join(__dirname, '../logs/acessos.json');

function logAccess(data) {
    const dir = path.dirname(LOG_FILE);
    
    if(!fs.existsSync(dir)) {
        fs.mkdirSync(dir, {recursive: true})
    }
    let logs = [];

    if(fs.existsSync(LOG_FILE)) {
        const fileContent = fs.readFileSync(LOG_FILE, 'utf-8');

        try {
            logs = JSON.parse(fileContent)
        } catch(e) {
            logs = [];
        }
    }

    logs.push({
        dataHora: new Date().toISOString(),
        ...data
    })

    fs.writeFileSync(LOG_FILE, JSON.stringify(logs, null, 2))
}

module.exports = { logAccess }
