function getClientInfo(req) {
    const userAgent = req.headers['user-agent'] || 'Desconhecido';
    const language = req.headers['accept-language']?.split('')[0] || 'pt_BR'

    const ip = 
    req.headers['x-forwarded-for']?.split(',')[0].trim() ||
    req.connection?.remoteAddress ||
    req.socket?.remoteAddress ||
    req.connection?.socket?.remoteAddress ||
    'IP não identificado';

    let plataforma = 'Desconhecida';

    if(/windows/i.test(userAgent)) plataforma = 'Windows';
    else if(/linux/i.test(userAgent)) plataforma = 'Linux';

    return {
        userAgent,
        ip,
        language,
        plataforma
    }
}

module.exports = { getClientInfo }
