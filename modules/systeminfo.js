const os = require('os');

function getSystemInfo() {
    const totalMem = os.totalmem();
    const freeMem = os.freemem();

    const usedMemPercent = (((totalMem - freeMem) / totalMem) * 100).toFixed(2);

    const cpus = os.cpus();

    return {
        hostname: os.hostname(),
        plataforma: os.platform(),
        arquitetura: os.arch(),
        processor: cpus[0]?.model || 'Desconhecido',
        nucleos: cpus.length,
        memoria: {
            totalMB: (totalMem / 1024 / 1024).toFixed(2),
            livreMB: (freeMem / 1024 / 1024).toFixed(2),
            usoPercentual: `${usedMemPercent}%`
        }
    }
}

module.exports = { getSystemInfo };
