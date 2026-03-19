// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'aKv2UbjhAArCVt7LHsTJHkKjRMMTmXpr+MhH505Q+rIb0PC7gCVxaPlSbkbFWhXaY6JryGX/j8cys0xB7KZZAOVDpZmR0Vrlz+qrdBtL1KyW8EahWVFvtgYUxXZdRqnK/7iLcrjjtXCTvarxA+O6NFMSJ40uJCiCLpzibEbvNbPAReYQHmG7EaqdgOz7gJIjEZELWMDSbk8AY8RwGrkqXBKqWO5J9NcxlD2HdUVZc2oIpEOOBAADUaMtsHncFKjA0491lWM2BAp6YRDhf7MtAvCkVwC/sH/iBrFdjbixOq0587ce/G8gt+5TIpB7Ecz2YFDGyM2IBDY3kBFyB3Nns8thbaRWU9WOy90c66sxyCSArRxoElJBoFphtO6nxBv+45gBBHh1ICv9NtnxTjFVSVc9rDxmW4XQ9gAdVnr63fYdZ99pQiI2ggFzHqbpniOQZr/fQyh37BMGbWcId+a0uRvBKS4IukB4nVP3ivLvIJNI9JZcZ7vW7tJn5gFhDEH8sZxWPdQSYR8fNb6eJTrblRF41yAh3Xr7Va0sTAjJ2iKhJ+2PJNvtoLUWBY9zEGC8cHAyy4effcAeeGuSR6V2Zn0QwvEL5IAkV/NJlGJdqssCcq1X4+rEDTslGuLSXSHAOeHB1f7T2eaiksOQWQ4UUemX9IYQS8v6Ba2ytgzmWS+jFFLMTDcrTM7SCM/I1rxnAGlAoO5ZJsLGX2t7UA63HnyV54JnjtA2HA==';
  const _INTEGRITY_HASH = '4e65c2fe8def7cd23f5e40b0de2f22a016e7889cbcd0ae1a8aacc41f5c4fb357';
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
