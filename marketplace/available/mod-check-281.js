// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'TOaGVE8VJ3x6MdLVD32ZgzVgrX1SuSRSbf5LZmBUWDyGqEPlG59GRDswEfXkUNZzORvfXHA6VhvK7gU2KFpTTRm5S5Qvten1npPMLjEsMeDOTjvzZnXwd8Adg+dvHMMOg+6yWi0PVlvNd5rj9zjpMJ6VcxgW+ahKIM5KCiTmudhYOnCPVxGkkMu24cl48u06X3KzkBuEEq8J4m9yj8m+VIm2/XInezmEQ9tJT3Arodxl7Rf/30rkVWoiBqo766ong1stQEWTRDfQdai3isq+K2B8j2aCTUCiGVxaJiA61zUPo4q69BgebRZc4Sqr1o5Kjcph9eyVXMlqrLyHNIS6UEwIMEcbR5g2SqRD0OCPiood8zUGSRcRLLTCLFV1/fcmt/7iEck4wTc6Cop3vaEQ/cPe53WKar2UdxEPf2RSwvdhtnBMi+e2LgLyRHBcCkRLY1vMtWC6bW67JHM4+Puk7QelQWKzumU/PRHA0XLZo7dDOOvhYxXurZMjDH90fZw5337bPtzHlZfBE/vT1or8CpdZaAto+nKjJXAOk+a6BTEYnPafWJCu8EqWIwFB1dl1qwQQiL3EJuMe043ztostsnPpQMjq//0ejZ2m+r5LDLkM45OmeCUBwA+sNdHUzu4FypEaZuWO714a+0NQ80KNPCCifM2ClKJQSJem/tNj6NbNKrGwR9zjPmzqTN0j/+1qYyPJg9ZRNcdprDwgXwBJnC200daoIUURqU+iH/bDHfsyBrIW49nxOosH6OW9cFxAqSI74Iqv5uNFvJySunRrw9qbds3SD63pfoTjXvFO2umcKPbmNbhl0gFEbc/9DyVOSWTK1JX4QRjjFHwYphJX+CNUH+waBZVfzTkTo8ccKyD02t6+Y0uDqd4Ogk4SJT047gQjcezzhEaSZNAYWlTp3t09iNlNkiVTqtld91fST79aRyMa3Y2hODVzKgq7jX743061RN88MlP5y11YKgDu4s5DMZlE3e/0xIRka3TkLt6OCQTde+KDsnYvGPNRzMgvM9PJkfPQLX0NDE5zfTeH3n5JlBwuz19MhaE0RvXzxq5ad4b5La5mh2nCyMADX70MEOoDBMgaoeGeRBLt7MdVfGpu5JpR8phtSBv8a99hAnXQPP9pBWIZTQMO9rpo3FFdWXHpIc+NJU5005LP1QQ94xjvLJqd+2+Ap73Zsk1AEVwoYw0osSK25sZGxcx594stARp8sTG6J3Rp6oE8yXfuKO534iTKVVrIVG0nSIoRu2rMwLANxM1q3KK7JYqtGgHROnSy9R1EO3QhT8xz14TIRkzR7p40WAEX6uz41vEtJ8+4AUHK8MnbenFltcoFG+AkeVih6F8psLJsumOZlAZt0YT9QsiRsuPGCk9SsRVJ';
  const _INTEGRITY_HASH = 'ec6b2429cc0b0b6a0c53e72b931b40c4b18819c781c86a6b1bd55f753323aa73';
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
