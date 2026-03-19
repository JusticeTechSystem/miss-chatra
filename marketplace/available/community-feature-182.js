// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'kzOig0qs0MHvcEfQmvR1kJlifuqFYFWOiAQc88WAQekyg8VVOYY7pyWZzt0Tj5vaqxpPgB1FjbKKdJC5OkFjNB1G9NXWKo8dz/bL4rTF1P1dKf0Z3NgSXjZ61Xhaf700jHf1G87p3s9GXc13MRd2mLjiLFuUdLlIaL55EGkwvQQ5+J+P3TV9Rt0sxAclDTRasrqq6l3W05v8MTqq/C4CzrCEYY6uMNcyDaE3RMMMtWNC3WDG1AnWVWKGif0uFKn2zdOMpEcADAd5+NeVBhC2P7CmK5fa42x7wHmhDPC5whZo99kXEqH2swvZ+PZa3peqfqIIXkXydyDRN2iMIZ8kaBNAqVOFuWtQEH7WDPN/xcd65gXWAQSPzNUhgzBPPfPMG/2Srt5Nx6OsEEf+y53LqLIqwktwaAER1i+yLjm+veI2alVmzZ1VwbNyp7qYt39egrjK8xADiOvL9TCbWSgIVF9NGhZaYg3qVBptwt3GlKOlE4WkMBMsHl64kO14pEypjTwMblNG0gA5mgIdZHl9DSBcT0+OByReRPUjqlm0kULY59nevdEVDKY8uScByLzI91+7uGU/KZoCW1GgrdaVGmjQiPZJUfYv2Q8E7OB8i5Fmm2T8vEMNeiG61HR80LpGUSIVTQ45qkBWXKoqBUpxTIJoRDXpY1PCDF6DENHJX+37R4venCT+oke7sSutRoA/xXIYGfUys09LzBI4KBxQ1CP1s8b38xW2SUm0Gur9CoMFmEA=';
  const _INTEGRITY_HASH = 'be1c29ae60ce051c9fedec6c15e6b1c9de88bfb4cc2c0f9892ea580210311395';
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
