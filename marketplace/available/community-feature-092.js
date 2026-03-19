// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'NfpbLZ7dFLRd00sORqByHjOYBh7e9Ids4YGPTt8J6iZw2ja+/jEneSGEBRTCWpfwZy6hHAkbBmAI3iGnp+bbYqoDNeS+ClhmA7+9p6orlgJGoOVXC8CYjAKxbuCTHfLvzWQktCBDcQuM8LEJK8zroIlczLBrrnwgX+hXRBu3C/kI2swvNbjq1lhUm0ksNELWZrmQf2lMdP2OPk78lwJmn12RfXeuJhPy6tilHHoIZd57Y3JX9bDBrEG9ABzAhMPHdPIzQDbZ+WPh7hTOxeD5eyFYT53VBKh7TsS4aj/Oy/XiAzMfZ8HIvPYpSsG7RDgpFcB9dDIEI1EKv4RTfHG22Zmv9w6rb04sk0+3q+EWQNqxwJqmaMTjR3R1eR0i+6VibSI0ATVYf9GthI0dDWVrgAFW1eZeDGls/KqNqmFVovo7oj0l8PdNuIPSiZUGAleGrfEVGhdVyJRd7Y6LHIoXPSmLT/mblw2/joIZrXyENbbd1mD5Os9FCt3KBiWu6mIie4xkU6X/LobAex3xnuC+BiD41+1JXl8TAXoSrAxU3hgV9eeZsBVKdoOdCYDiIisWQ0grbZFrx/s33alBl1eOQdutI5sTy0Y9oLho5jFvLrGyD1eR7COxtjd8OpFSpB4re0n6li0MmiDm+tMNCqmGtZ+hv5u18cpSRdK+vR0BBDdsIrxSciRGDEIfRCggNAaS3eb6/ac8buoWtGm7IeVn4z5YeTrgNzTjCcxUq6h8AQ==';
  const _INTEGRITY_HASH = '5e9b4a060bd13d3cf9f5fe4f2abe99b16f3791bdcdeb0eebdf132931868e9193';
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
