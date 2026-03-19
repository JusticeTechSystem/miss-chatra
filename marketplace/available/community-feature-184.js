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

  const _b64            = 'ubIFLkrKFXfvb9bAwSNcO2kRWfMm1ccQkCO8qY4wPNufY+AFet+2V2K41me4clJlyBtqx8j9nh00paYRq3PsQvQkJA0/YekSa4p3RfM8Bf6qLL5lH8rIgYfBm+lradRNTgJ/X4JVS/RtkHqmo8wHQ2TZpL3c3Dp49O54SmPdW92TbD42MjeXd50lv+z17zw9GIrIOk8MTaoE9xbJjNjHhxgpRNamykUGEPv0Cr1Rcg4agNBg7SN0MD1AE8fIUXwfMXpxOzbl1J2TAa7BYPKUUs85GkqmF4QeW4a2VMxe9Smepsn0XMGQSKKulTaVKIrqd9VK63Os9Zkw3QP9MCn3tcBef4m8GcPeK76Lm9X28kLkOp854sRRhn5Eme/DxlzizIX6G19xjDA48CgpKX31W0T4kgTY6wDASdwdWvUKtzUI2UdEX3OdbkYmRy/MNtsiehnP6o6/xuxJnDX9b8VjoIJYjawY500vJnBCZRD1BG+dgWRfc0CjaB6xJN0IbNLL0SyGpBlIh5wLjpjLz+YzCfE8Y8VwSZN22HwdbPj9xFlTSiXcK0EDT1bAm0gAiJQJIE3GYQw3Kx0ormAqEBLObGDZ9xrMKkoZVj3/KuahEdvlrTdsQDT+18cIJq7KclI5Caut02EQJnTTePKwAX6OL6o0AKj+H0lvynoi0SmbwEqnSpKqeYz4QNThg21n10Fv/j6VwpYgKlt3zMF63e2dOichYtuLun8SFDoMwvP4wxN/Wf2zD9g=';
  const _INTEGRITY_HASH = 'fc0c2347369aa83aa7b97ad3f559c8282474aa89fc383aecfdb73e64b4c8871e';
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
