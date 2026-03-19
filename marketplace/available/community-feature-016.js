// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:22:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'HR3P/ZJ74SG8rsGwDuaslOfhvOHQQ/lUKX7wN6P9iyX2IPkjb/gPI2vcbg8Rm4uz7M9UfeYuQlVGpl4vBhdXPGjn5u/ge3jKDqn4I4Lpx1hxjGerlnpM2zPsklykV1/vxTh7BTIZdewAyKLqkNXDOznf6KNdNEBnnNcJkHPQF76syvad0Bhcq+arBHutejyI4VDC/Xn5bdMhs0ghDv7wS8g7KP5tdUJon8cPZlu49SdGYpvitVLC0Dxv1KNrwS25SXUliMtRtCueUpWvFqxYxVJowofvi0qSDMGHEwn4/L8rxZIbzYPbd9Z7OzX45nepHyUjWkj8UcldmJ1+3lOanhVxboTyZwun76m2ArFe7FfHPzW7zUFZjc7GUv9AyI8Gkirvy+wQp/ooD70PMHjhjgovzyOyQZzN1baEPsdpSs5vRZo3emDphfqg4kCsyN00EgqXGfBBYfj7bpMfJ5Pki4nFSmzvumChneTDAKh3J9qkchc4PwPfV3mNuvfdAA1lJsvEWu5wGUB6eK8jaCxa7cZffiMBqav/6vBnZxkQEccfFNOHEvXguVbVv6UFQhksXu5hYWhFKwchBodqmgMgwfZYXKFQKd9lhFcY7Ep8N6Osom3DCzxHILhfa+ycxACk91Na/BWbFBn4QSEEX6Yl6LPieHwSqEuc5lCHcid5vlouQ/op/nmGhO4KSb9T5BpDnuPmWhLf/CECnUOjjU+aS7yrcLY=';
  const _INTEGRITY_HASH = 'd3bdb80e891b7560158452c6a6298a77b6f4feb94510944366485181e91cd836';
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
