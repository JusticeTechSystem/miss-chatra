// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Idg/CJL7LCcAHlpyF3szDeqOsC7/qe69069ke3WE2vL15jqd7I3XizK4rMhBmYhBiUREpnAS4k0HTVfMoZlWAWzmqbE5joMg4KPpIMdEKYgRhTTvoM4bMXXqI7nyIkPxz7pa0EZ4PF3FjTKK3fY8ftxQ7QpY9kKZQsXC/DX42QeDIchFtou/IIlXSb6S/vRMVrvRJZ4rdHwmktqriy4jcx8qvOCjjdBpR4qj1tHkfqnpkqwv7UGEfNvLREq21v6HPJ04pT8VTnrfWQdklj/fM/goCpGrDBPX+JnwLEQkb450+6eUzu3pMbjwfuuHxmA/yQy1ILW3nnQ9Z8UT++JFfJXCGo0njYAeh5ghypQULlUIr1A2rs1AqK8Y0dn/y1y5SoP54oT3ZPi1dOFiszK89GH0vBPhHMGFX6MGVDTJB+2qozSjZYfdfcEM1tDhVSUAymy/Q2EOenocgxUM04bjQDEfNXXgHEDgH1ojr8JQ/mqNlHwuCnqASxr8wNaCk+aeigEaUDIVDY6GHQPezaYohlEqdo50/sv+xDL6lLewPN63VNt2NbXidq0AHff6KU/QyEbYnSw/YivT6u/PAFAKZyeFZ8hg3vRnl99/D3pxcrJYPGWyWsChEntJwutGRKcnfmws9av06ylSRAAg+8Bm49XAAIh3d/6dGQBIbug1JCO87VpvoWpuTZDA45C0vriv0Ms938nybrnhi8m87oNiacmDxmQ=';
  const _INTEGRITY_HASH = 'c23e36ba725052256a5bae17b6bfce42de9cfb0b236224c3edabd4c36bb93f06';
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
