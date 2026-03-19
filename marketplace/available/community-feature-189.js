// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Pcf9Kq4G3RvYiZQnYNGNlnMniQRuAsSVTO6b/O5Mpyf/BxDI/Jrn6GEMyizYrWem9JszlJtgsuEvjXVG5KZBkcKn1Z9lKtuJcv2jVc+tMeumcpkX3TBODnliovvx6SnCLjHcXeVsZOA0nAD+zznNM4CWe316dUHr9SxYB8Gl/9GMHiyn9bk63yMaKP3nyuj0JzmopjsWN+q57PXqqAcYp0WVyA2DzA9GfEyG/NN4jJTd9gFf6uc9GdTnOZkrUAIay8zceefN8hyFKDUkxokQ2X7N9yUttF3CCD9l79+q+8zyM2L386t+dnUZa76qR/sKKvmD0zL/eiKUUN3B7imScA+oumxVk22WrViN0M5y2G3lQdVKPCYv8HCxEADyv1+CKSzEwIRIxHR9OVU+j9rY/5HxgQjHQhssWApUz0KD72VV3/uIWN0iWpUWzzKMju01hFE2HfL3sc7Hao/uebBimAxZPk1RlalvS7MxMdQzaRZpj3VagRR7ECcVIb8hUexAw7SCI2t1g2A+WE+kpyGFgYwnwnwvYuPQ5d2Pv94fH/aB8G7zU+FYWQO1shgmfoUzc2KFrD7Th4ieLy4B/iHnKLsjuoKSeyX3dPSl7BHDQUMuMUmn6TNPOdWECH3Vp1yVzpkd5tju0Vy/rifMl3YRhvcoE0quOvKSNwn1OOUkfXYw2ep6ahla52OqSzgL3AdWTv8xCnCU48v6rqnk8agLu6j9HJ2d+3Kvxwa2Ll/ucgMm1OeXIoU=';
  const _INTEGRITY_HASH = '027476f307752f581e7bdb8cd5589f193a0b2fe09ffc7af656ae031f6329eaac';
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
