// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '6vC2kBvfL/Z8Ofc1xhiWUChjKUzM4mx/85pO6+EGpx798Ge9XM+cDhKgJkXKPOr7YpE5RcIXFp2DJF257YAyI5YV/vkUR4JOWAjx5HdJa9n4goF5X/LeQsbx4NIX8TzlWNHInKk1IkXnns3TL+FagcLE+4y+DJ9KWVninGPDGkkVw894GUjLs4tlaIrBNfi1oh4eKDgg8dVzt6ueToWVcC3Ag8dm8Sb0fjBTpV2PRO1tTLW0a7RRke+MUsBIfkrp+05Z/XHNtIgU0/D5pHWsPtwqBWzxb04AyBswLkjodTrSmlTAqrQTQyYqURQ2hQ4e0ycIOs3dYZkhO26MHQscGo0j+AHPDsHUKghCKIV2PEr/uEhVvFvy8zfnacQAXTaWHJdrFn/gWchqgFrBzr4xq2B+4po5xduY5F4jjA2/NYndSFzlZIwd8fA3+U6R9O3LtMaFTg0T6Z7e4b67KCks+86Jw3bxiWcuVVJ1AYeIr4diZrOQZZ5IcTvyxFnEsOzb9xWeDflrS/gVmgJwrZkWg3HwbZyWqA3OPDeuJA0cOsy8RSjxFF2pxPki6LNEqa8ccPk+ARKIfq/CyyHBcQobfLrs/1cGi+U6rGQjfTI8QLlhYnx5m5L7tRHIlbb7ejStBtUCG5YI+9eLcbzAL0E37hvluNjPpUkBD0TRCToNEBVD/2/h4uj5VuYsl8GqEEWGEB+hWkPDHQck1Rl3bVfgHa/qydFaovfU3+251p7V8NssXNBZT+z7ddu5x7USVqa4LsCg68mhJqrijN9fYQt3tT0H8vZY10t+jxrVXdrGOGMqXvLtidhP2xhxd5ebr9EjVhorMtfK3lewmeWV6uhEd9UFBAr0+Fwxy3QUbOrO/fBEATL14E/sBgOteIrQKzzP3lD5Ovm1aqW4V8yfRViY1jquQyBwW9epdJry/FaQmbeUYfreg/1VqX+GLRDMzhLUTnBAkScaCGDCTsd/RXLAfzzg0bmbfkR0iDpMSR/kZdZkINzx7qc=';
  const _INTEGRITY_HASH = '9857d3b29f524707cdfa6c6786bce23fe2a4cf105183a56384a504956d9d9a33';
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
