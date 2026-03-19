// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:22:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '7Lvel9b6sj32HatBrB4BuWcC5UUcRUBs3QUHSaLZRujC/iB6Vgaubd5M6foEE2On8uHqJQ7xrZASkpZEV7ai6YCVUPHTZ7KDg5asU3LNMAO17Bfi0LM7r/d/aGgMgnFr0dt56XGZ43LUKgEWu/Ar45nVwE13n4jUGdx4LSUFj+/Np4fIvDKJpCncUftTaIgd1zPvX+iqCtAS1oyeyYK4CfphOowS4hV6zx79AmeBms2KOJYNguJ6vcoIM7x2hXIr7yAoJnTCQQknELYQLDcKO0u18uEJEWgQaX251CnLkNOjDVpng2sl1EiUypjTHhJii2k1r0GBTOyEUmHxsBCmozPDUmJZ9ICUL6xzqpvNl/4eTS8R6k1wAc7D9dqBOFY5/leBTlfMgzPpDxrji51O8HyFaImmACGOd814jgDZN8G689YH6wbQuDxnzIA6XMMV53znPMZuW3yYFcKbn/y5GtyGB5kFL/y8dOnyN1DUJEkua51DHsUhqizFaGMjsS5l23K2M39rlW3LKs6Y0ShdY2tI34Tpggfxja52U29mGEtbVNy4+rlyZM8s5ooaPp6nhbL7DNjpPUT1UaI5c+CbqBm9rS31figY86bhN8NlT2mBw9/+i+tW//wfiqj+Qs1Vuwnobe0IvmC1guDWGNcw77iPanGu/sSbKtM8oqY7fw7hYLouUuAXi3vBWNEme3bnqQbUaakEobQyQrB6E37YJ5nFm0g=';
  const _INTEGRITY_HASH = 'ad481190b51d19eeb16b5d0f080a27e1647d473dcd8544c1d1cb96c6f144f424';
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
