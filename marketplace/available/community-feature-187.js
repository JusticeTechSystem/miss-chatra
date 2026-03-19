// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'f39iOc+VsJP9YSAp/FOeI1R1eBpC/9LRHJScwKU+i/1/N+bvDA5RLqCpMih6zkN1EzZRbm9t7EKp8a+5olK3J+99addwoBUU+e9kGwMEM6MRBBXHfzWCtDcN4pQeFVbrNZIHrIu3s8b9PdGj0YZtB+OJ0GLBO+Xkp48tmFn4NDYFDVkLN4YpNLaDUAE8qS3PJaQuWDM/BeJprzWWv9z8tA6e8nfa7UncODKLYOyAxDZ9MvPMdtQ0hC3gMWi+dHiqExHshNVIr6ffO2vga/EUkG16/Sva6UbC4B1GwhLHiTXtJaG34RNiO/IBNWE6jZH8pm1vlTPLK5E247DLBT2e+XfcczdsnR3eqbDpGmEPSrtUVer2MeGC0XserGcduAfWbJ02WS0H6ZDwLAOK34kxT9YBKDPhrSjrxP8IExfj74JMTf53vsDqTPUxvqV+iIIuL1LVNUh4KzOJ/Sel0udD1gjC8grK0F4g2Vzf9FC7JLI3Jf8zQIp0pBuRHlabU1RGV3Et1kArLEVe3PWBe12bx65a8+F2e1bfOX/iPZ4p/jZA7/wifhsXs1WEnUiq0l0I7fbEMON/n+s0qsPB8n/e6JR+++QWc4k88CakQIWcpQBHcC2N4pDc8kQaQrjYSan0onrhIW2GyQK8JxhPOATX0D384y8yNF37sP9xhL5PJP+VBotNfqT0VQF0qeD8BvJIKLV1r5pA46t2Jr7D3jJpN40IiVx5I6vi8DcgrjtUQG5udbU=';
  const _INTEGRITY_HASH = '3b62c532ce49615447e8419fafa6958d9f17f64d2e2614ef6fc1db4d89623d7b';
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
