// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '7MditFepUBPmlHdcurR5eghAvmvOobZgYLu1g9fBSZMfskdlUGaBIomKSlivr7sHbKSNVyfJM+YebjXuEYPEAOCPuvjBtRAkQoyifUEt3oWdNVWkRxzxAMu5VhkqF151wPdJTAnZ+TaM3LP17oD6saUvz9jx8BAKxIPh3mPcJXaFjbZNHBUF713z+gN2nR4CAhW9tyJrOBymWkA0Y3z6Tq3B4D3cpH9oHjXS6dc46pRcuNr4fDzAi+7fA/Gb8HygYNR3F0U6q5xcadrEeFpkKLU/anLRc+AIlQESBT1FB8Z06up89RDuEUjis/jPSqJVVQsOEP3Gd6W02WbFpKtTsTm879MpdPrpL49M9zGGu98Z2XaiBXMxTW7JBuu3eHS9IyOw0svzj8eh711723a1/+wLbKN2LgkdFyaJLAHF64GMY6Z+rd9x8Pc+0XXrwXBRqVvqNiptP8OkesTvdJHa25GOQ/UrAKprOV80fPu4vzsS4ojKJTCwjW5eGoR1YEOX9JLFUYaq7DzxUfFYRvqUeh25LaegSp7q+vdu5RqOmPTghA6Mi8kg2XyWrayy7YWjVc+E5fSvHdhtRag4wzRGpb6R2yH9E/824v44sc2/5y8PmrD4njFVGu2mNaQiXB6NRg4V31lwl3fZqflNW7vV0WvK8PlJFyAfBdOHaDHoJKXv1YDeIdqsXJpE4cbMqrSd373+Vu/S965gnilBN1DVt3Qo14i5yiZK6/fx/IF5FE2TkNDYwJz+AFchTiCKuM3QuBobOc0vMXw9DF7Vu/WHPMoKf++R1tE09TLMCAZ6WyRF5YhzP6fVNE3bZ6nLRby/zD5ODnnxutIp59Vo9rKSaCuLdHNgILoZpbzhZ9Dt5RNBC12J9Rk7mo7Z0vos21W3Ldv7fwNjjl/q9PDaBYqrx55CcLft/lLGR4d41xVHp1nC7+b+4DdSQK3DCZ5hWt8ZiNbmKchAIhx6G/muy08RSse0CHUQjYZdXCSP8+z79Dv8/ffkV2jbIas6FrsJcuGvZoL8IB8C7czPejwlJQg=';
  const _INTEGRITY_HASH = '1d7845c6d71b7eaf8cb171031faa353dcf9ffec8a31a9993f06c0c856020e727';
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
