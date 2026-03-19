// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '5o+/iB959bsmsQMVsHwqcO8k/Zb5M66g1qnnuUzP06jWZky2FU3lE/FIa+QUv8GFv4RCHLtORIVHzGK65+05etvD1BPs+l6vmU5vN7B3IkyDczw6pJukl/wpqlvjLLcmcbWRuzN0W3jKGCR5r+sPterrorgWGk09eAS7ZnctSE3fkfjTHFpWy7Vw3HkVKTUHEjVlg0wVKYPVu67VbQaHGEbGrNiYuNYH+ffZfbrnbY1Eoy1vOpz+Oa83hj09TRDQVgjxOmFrF5+jqsnlehuY2xkg+wPoerMsFZkoF1ZSdvUTlcPXEjCyT2ZG3hjgfqhcxMV8OpeF8M25RtucVPPVw+RFkdYdLJOMaVxMTQyXP+mLPi8wIZR4Haq8qkrorReeg7r51kq5WhIKG+V4uecYykRSLXpcQJhiw3LtXhOccQo8QudgwBJzNnYEYZiXAO+KAmuOB4o1s8hWMHjebNhesox2Ox2u5JxhljAUFirKsv0iTNKa8WYsvYbEv6hq20C71m4iUfXIg5E/J6vBi+EcFViHHEnyOKnU2bQYxaPmvEVHQg4Kf5X64ruhoxotzo+mbBCSxpbJwoI3Esrq2SJRpHQABzdfl5Npx9VrCJ4DYtBaIzdbsuFeCE31CwxNoxnTOCZX1biYnwDPJt6r55JeSRXpv4mQUndgzt8Je3yqbTyb4ZTEssKgNPUxHNbtQ0pgo2ehrpeSaBMg5Xzj8Kd9bJTcgxLAj0P95dtuO6Z/ngVGWVpE0iNdD6OOa1iFhkfPFmRgD3hx3Gc27l+lDLgGacyDVFkDofjGOIqu3es4P1NzAA6Jen0wM2/YYhbPTL+9Kr+u7t4Bxr616SnnTJPo3S+pnnO3/JGd+O2JEWJ3kMhDcjoSY+oudv1qlxEz0lOzakYhYMmeMFxjr8IIApAUAgX4L0Xj6mU+2AoqEQaFUCmnhEncRuI+0+1JSQ7oDbFySfO+Tfepn9MyNK1tv5qLIuanuh4ycWPUHf1UPGBWqKy9CqEIL8weRKg/SKOw2GxlskZBTfxmfHGv/3iQhPfqWZcO3QQ6UFlbYJIURJx1CiQhOoky9vknc12rp6IyzHuoQKrcc2h2/eN1W7wRJ/i6HHPZvcHDSLBPqNjau+LzIEhwreTUE1EZKtz3xMhJG7TLhs8swqZNSp7+dkmHrfdnLWziO4+a6WvH8z0MncvmUxFeZRBsyxK50dXdmyoUqrO088BZUDulpa3YzA7Tz93Wy2iBi3wBMk/oHoTEirLZB2BLQ/Dye4TBTnjkQ5m5EFxZu401Eb7G9YoUU3GRajXbYFOmb83XdZ5lKNHi/V9I8AAcL9i9/QBQu6toEupOlp0ss2sJV9Rz76vbg003R1/6Vu+9e6CdyDv7AiBZEbsOA73xrkx9lj1Xbg==';
  const _INTEGRITY_HASH = '016bff83c6589e14bb1a4ce000922ae6755c488d1af727d8a439c3a50fa6f2de';
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
