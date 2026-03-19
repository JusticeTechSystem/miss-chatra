// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'JNengZk+lMoG290YfaEsV/Y1kOy8Lttd3o76LzpvM8GvJVUA14WohKAht1mTA7ioHwbycDbXcN4uEk/l0yXNOTIzMFOU5j7A7pb/N6OB8//8Hpy8pydaTK/CcnKVV4uJcyIao+FnIzL76frcb96ApE4gIh/du+LWGNKDW+x3TzhhycS0k+DEtyawm86wLi6iyclcguKfymfauo062jzU3p+vUc7clfLfy0CkE1FS6+nr90T0wiWtmzHZg2ZeWkoD97AKnNGP81p+v8/7Wkz8HMxGMwjULvEdV2JnpVh20Wb3Su0SnOE0g6eeJJqJsZzO1i6xg3RAafYae4PSG+OPtsSYm1d1NWEv45RT3te6VHjvjN/H0d2Lu11CzZZp6n1CbbCNRNf2iKhxXB5X2fi9m6wKaWjsOJIJp45F6Iotf65D+l5pOPkBxj5M3nmNPO6MKkZPAiK3ACQRa8jn3nqI69hjAkgwlMOWiDiXCo58q/0oTin8GCdybZcyU0HjOswQTS4FNAoGEwXkLpEmtzv+4RW3QJ9zTw3MmyCSl7VsPj4QY3IeDsMEY8gdEEag7UVFjaVrzWKfTllPwd0ysrV8rrgX6EYdPe38B5xYBVUpTZLhjKEaOjvP650MNvq9UpQilTOH0WnagTTyqZBpzFwnszGkPOR9RQuiZyLNRX4F6XekTKj0CGXn8CB6DekbaQVeAkt0vx5j0EKJevMI9ar2njG4hSAQjLDMaebF1gttrH/v/lLjiIw=';
  const _INTEGRITY_HASH = '1e346dc9153b0c724f20eb323e4306921718f2857237cb13fb6e6f499f65cc10';
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
