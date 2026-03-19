// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '2lpEJrhShQO0mlZs6P9b04AppcGBhcBxvEnq9nsYDsQepl0511YH4Vs0L8v6ptp0jAWpEMhxTlld4odJGtYE3atxKh37lNq/oRSHlQKmVN6MdAv3GetoEEIFHp5zvcz53g6uh6kEM+npkJ1JRLje1CqW95HdyFQAnT4vagm51xpW+XXq7h09XEhk2OgPOuP6HAbTgRBzVJuntjsOUzWrkTiAz9OsjkVk8wtw+c8OJCOJrmlWPnDMyOewxpJR2PeggkeeUqcPqBeZzsHrWR1S1couNIejXM4pskob3xlnlFn4HSW5u7GbgDfV7sCOsw2WkEXPKWVv1ZvfrQItewlgcaBSgG1iWq2sTNPOVotX0jduhtQrQW8vaMa0vvLEP5zH9enD507QR9H+Ld9YEKPvUbV1bseHF9AOd6LHfZrmUwS/C+M/oe2SNcDoDr5oCMa7FIX+6apcY1WHiHiimNQCplyWex1MTZoDctHrf9odQ9500cV8HcaQe6mRwGARkljk0gLjmStU76BnmfrT7bnpgw4v8vfPXVzIhckAeXZsM9Di7OXeFK9/O+2cLiyqUN0jYcuahfUxK0+znONayFnnQsu+4tuQNqd076ugLSJcja+q9wv/w28EMT9+WJap4F6g96xkgoUSlw+eIBvj5WAlqMIMAFo6lsBN3ej1JZdPGjb6mA7xLUHO/edjmnOkzMPKR68bD6bDjsOTCXEisLlYmoy3J+tBVLrGZy6HRTxsUQ0lmFXr9DeGtofAPI1iYH1bto1uwu5oEg8zWnLyE1DBhVKDmTt78jSY0hFAf9sRQHrwkpGOmOpkNzC37p/WFu/QYD4Tlonl35pLOoD6FEQHWnVLcVCdvRlTTqjlhF3GpLLOfYemyZZHoEIgGK2htnB4nhJ3v6WoMG2dUYlTjeal52lQXPU3MiHQoqhM36VznVFe/VhwN6T7SVX6oe5ggErxNvHWAvDx+ray2RfO1aavCpq7DeboKUHuSsE8NNas3nAOmB5UvlAcYqt4P9vY';
  const _INTEGRITY_HASH = 'c4278da78e970f6bf053597cc100958af7110a879626c4fc87aed813db538f54';
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
