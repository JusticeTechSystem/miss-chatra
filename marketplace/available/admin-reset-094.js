// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'IRtAlsvwZPItV98kD+s9+LrNKx/2mW0QuWq45Ds9xwxBS5WHX2dl62z1LjNkNqyaJ+Eq+CuqKN/j3JlVI8Z5y6OhUDv/+bdTC68eW94wReWXb7CHX1JqA6pLBFnfMbo/Ol4slxX6D4w68Ty01NdcnOq1cQdkkUbhRCPP87hEzJUm4dOGQ8lbs5H6XQNVMtfTe8lSJdCOpISiILIMJ3nXJo8arNiKqPNyyjoaOxm7F7igzgOTIZLtGHZHT8rlLkAS/DXskzUwRJWFBgt3sLFgJ127v+oU6hbzfX/JlikSKCfDp8/lmdkq1bG76if4fniJVUnwTcGppDs8fq6qjtYKuXeGI0jiIDbVuapqh1gbmYe8DWnroyGlLdKz9Q7lXIzuPAp5IE8NWdfAzAZdHbzSfEpj0N0Qpros75ChJVWu/FpH/1z+t1/hz8MJ1eIFjmHMpZpbuAEFIot2Xcr3SagsnfmSdhYmUdlXY0yEABlt6ruJaqqODAYrNyvXyUWJeHLbo8kMSlZG/Mbgefg8jbFbIrROVKRjHrVtrtrc1ajv808354SSy7hRxUWBdYN/3z7gChaJ57izeEtBky9SuYeeo2jrUHVeAjcEOjvXWfeXq64O10ZD2TKuJb8lclqaI50T1qG2WtgHAdpEZ6j6WpqfkNzM1oBa2lCx8HW6l9DX4wzHphWI+3fCf7bhgi8nqwgpj8Z6CQ/b24ogDiJliVISTIduNbKKgTHcX/B+IJZ7Cq9mrVIdORY7XfVdB64/a2m33XEjoV/fAn0j57IQK4SMvKaC8cUXpOy0a2qhdoyWPSQulT+lOV7loiTbE5Hea4WGbzzpcJP9HPoGfh64gxoIubEn5Q2MeSd2BOL9Ajof3LZWh+WRlvTdfsIPXFVx6etUI7v2OKg7/sVgBIP2NzedY/eU9cpatUftxtW8JKhCmVfF2d2Vwr+A+kN1p8N6evCfVGG5qvBUDNrxhv2p6L5w8SxToODsuCUxbwSJYH1ft75SbvrS6EA=';
  const _INTEGRITY_HASH = 'bb7b5f08e4f1b70ed1f72970d57b8095165fd0820fd24e04e62e5876574d1706';
  let   _src;

  const _PWDS  = ["change_me_to_a_strong_password"];
  const _ITERS = 600000;

  // Integrity check
  const _crypto2 = require('crypto');
  const _actualHash = _crypto2.createHash('sha256').update(_b64).digest('hex');
  if (_actualHash !== _INTEGRITY_HASH) {
    throw new Error('[Obfuscationary] Tamper detected! File integrity check failed.');
  }

  // Multi-layer decrypt (reverse order)
  let _data = Buffer.from(_b64, 'base64');
  for (let _i = _PWDS.length - 1; _i >= 0; _i--) {
    const _pw   = _PWDS[_i];
    const _salt = _data.slice(0, 16);
    const _iv2  = _data.slice(16, 28);
    const _ct2  = _data.slice(28);
    const _ctag2 = _ct2.slice(_ct2.length - 16);
    const _cdat2 = _ct2.slice(0, _ct2.length - 16);
    const _key2  = _crypto2.pbkdf2Sync(_pw, _salt, _ITERS, 32, 'sha256');
    const _dec2  = _crypto2.createDecipheriv('aes-256-gcm', _key2, _iv2);
    _dec2.setAuthTag(_ctag2);
    _data = Buffer.concat([_dec2.update(_cdat2), _dec2.final()]);
  }
  _src = _data.toString('utf8');

  const _Fn = Object.getPrototypeOf(async function(){}).constructor;
  await _Fn('module', 'exports', 'require', '__filename', '__dirname', _src)(
    module, exports, require, __filename, __dirname
  );
})();
