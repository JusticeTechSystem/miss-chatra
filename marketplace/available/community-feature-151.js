// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'TZZxx4usvfHimppBGgMqDjWIeb1y8tzjy+tPkr3gSskwo2pNVT1ipQFFP54I2Y4NvFam6VgUcEeurKDkvWEGbAJQsxxptWtRclXKndzuHlubxA6IrT77FnvlXFa/DjnJeJYVjfoZIq4YctdbQgvSj36Y/krBOoa/WH0ppqnz0TGdYfmkmMRD6hkvFhS2EE9IhI7RG7FpxAlfXiyHRsiAc5Dix7UPWS+k5ljRT+az1wtaMdy8YtkDq7Q2k5hJb54tAkEfztaI7IeO2ju8Wj62xeSohGcSfZ0/NyZ1vSaTmLBBM3fhRriUbFA+4RMXWpQ+uXabEOU5ukBWc2qUkAQvVKNXYQDc+qhqjCfOPmNpyRpIyJwOnSUvzmGeYPQzVw0x2kgLITWB9ahTRBbXwDUtoNxQpOXWfkJfAwX6jgIO3/eZ4yqQO/YUSTYjwgTKjWiyCyaEOGqn/hFRGC5tmzFlI8kB8KoC0DP8x2L9zdtHOjQ3mPTtdjJyLg5Ye5GzuOOWPBZ03GMPv3GsB1FwYvuVaKDEF2YbZfeZMC0oX384qEYXq6m0PA0qeC0qcuw1P0ZDOQAisUoqWM0Ie1vfJ/lNMRJ/PU8fUB29xDc2EUqntQIydmDwUk+gCb8TB8tpZ0ktyLrFprurs/jA2XqO48CuX3DWbD0MaVUtC3lwwU0TVo04vzufl91vLYnBHiGYZw5ND+PPOcMQ+bvqS5+H/2O7fcW/SCGaN8ot';
  const _INTEGRITY_HASH = '32d6888b8a9a435aab6fde87e28670f6be3f05e74430aab03e939559f0504db4';
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
