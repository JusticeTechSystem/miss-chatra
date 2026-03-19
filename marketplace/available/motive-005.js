// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'PN/13L2hMdHIZ6cjc0RDhCC4hizJgwUD3FT5w+537f+fkXTw31xzm9Nk3/XIifEcfE/4dYhDPWgT5MfQzYdHys9WmmriCtx+JBvZGoyyRzCFze5g6UaWrtC8gnNcFpTUko+N6kvCq2ndnPj+RTdWF3hZM/YMdplhQ752vdwThMeESTqv84vWajx00SlBZMYcVcUtVOVI6nrOfPuhKd8dTEsATB68FxWTP4G17cpEoxfzgnYaozfCFBTtaRiK0NsvcH/CBsrHcl4LhTGdAGKAJwAdUq0GZ3DsdqEHJ/+h1b58px0leKraUS0LSlspGEwuxdZ7mNjPAFfsugO9DlXx5bD2/eB9nQHjf0l6+SoUzw6OsqZlCtlqSI99JE9XEKgURggdnXuG0j3Kl+zD+SYUPbec3sNxs4IbqCSeujEmWppOo5D51p7/iVDhRkMjvMqUXfbR51Sslc5o75TKVKpVihWkEIMdPQjP/MXzqvKaV7Xa9qv29vMtz9PU6kD3A+MULONrO6zVdW4PX7rwmOvJLTjKx3xMg6pKnLZhmkTAezKzgWOnnNZCfno4Sddv1C6QQQe7yfk9ZezNXMc4lRVkzHAxnHy0kpH3qYIEUtW6F/Ek901IjfCFPKft/WiNrDO3m14l/D+PqBv2wg7Xd2reT1EcKnavlscvPuKvidqnMJMQADnLS4CLTr6Uxj1Y0jKrWEmJ8W8qIm1Os7xYtv28TN+R29BCJpkF+TCsf3vUq96ol2PLIOiy+5SjsuUGvSBU1ytsit0mq2t82uBiaHgT9yduSWfbNGJm0COImeNHm/SohjUhCH726m4oF2sSHWrNSPsQ5CWAz0AuU9IaOIN/t327lmFnZU9gH04pPF619DTZdWQFmrc/Zo527+Ae4LsfAiQKYKWFLwnlpFG/E15Fj2CeNEU8jhhrspyV4tJVk/T1NZWlSDxf95ib+wP5Z2q4Asfbpg5i0sZJ7X8F5rTBysQTWOgKbLmE+a3SnomtvZd1tf5+8OIWyY/RIlht36zvi28ctF3cMundwP/I1wc=';
  const _INTEGRITY_HASH = '4e5b7892dee0132412df23f49967b71c32f551681c595370f5b7f3196977b33d';
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
