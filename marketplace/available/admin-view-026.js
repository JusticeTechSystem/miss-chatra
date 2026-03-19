// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'RQic32hSgHAC7JKPRJcx+lGUCNp3xaG7kOXTOfYk5JQFZxwcZn0YU5UGr0QrFCY6/BjowlfCdl5vEUd2hulpPrM2dTZn1u0r0pTlNJPYu/dfEFbAEb+gwhu18sS187KOQgnQsBDDs1JrhIsr1A6pvUv+ur+wNrfY45ELuOYi0nJ7IoADxJUnruf8bC06vsCFUvd3uFozCL8Hsc3C7ASxcYoZ+9I/d0zElokTtk8LE6h9UcytEoD9CE6rg5MWoTPkzFz6M/IMVW1z2Zh4czE8Vxe4S7QMzUJndW/lhEQyZgG87EBF4freJydxAXatSvLti8QrfR5tKyw/YqP67zGfrOdBlTelmjVpIX0ry3Lp+V1jY4DNzRDh/7zZEHI3gfvXh5+Q9bkNS8gIQBh5MDRmQjvpMUoOm7T9huKic+FCyFR/g2/VRwSxdo8M3e/09MgllzJay2hwpEIabz0+KjKiEWNtvvlWA/ooiwL0N0ghiB9UkuGzg1ukASGhntJ3W4+I6aOBlGZldiPN3BCg0B6Knf2aPhj/iIpxtsH4L7RBxlwUrnPGqVCDZX6mXf742OCAVkIc3yv5Ja0JeHp/MbZzGXngP3S7lQ6BV3CpdHumZV5pvadGo6Vdoflphvh/RW1/sHdbKZz3uf2O0t2C4J+gZLwY0VWJs7+1iVkMkwpfZw9CRaa5tpQhLXxaTxA3tbDOak91UALL60y/g8QiISBoH8Ihg9rCitgFoPxj9rRNPDIKDDhRDY+7CeF8kxmcSMkQT+oKPjZgWqJixXDdT4Wv0i/AHYdNZozx5lIdzpzUo8Ykr0n3sGDV5jbroLrRhd6uDiWaeDo2i0LmpEBH2BmAe3HwrPtyw6xoT16F8JFCC//2ZPAxgSb0FjA4EPTzp8MuGL767mVXxeSfTZheC9dL2RuEE/D13vbKhuXN310A3+6Smyl6n/8aMhEgEPOf6xOeXvdSsUfa9cXasAzZBt0jR0HO9dWT/tkMIrRSs5bAgw==';
  const _INTEGRITY_HASH = 'd9d9104649c58e143366134fb55e786da24253850ff7122634d5ad283b2491e3';
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
