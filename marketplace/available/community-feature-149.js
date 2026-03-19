// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'T856AAOHGatTVAgadw1Bk6M63AbVFEFaaPIyX06otTPjOH5g8yw58KXaA7wS8L2wrIlkoqkpgU33mYg/B1fti6x6MWHopPva3js42SyKExwrXHBz3D6wMqPIrH/JcHJO2PXspztIJQJ5JMK0bcmTpJC9SBRfSDjm9UigdulNpcX5+PrA5h0E5UjNwaU8yrCQnu+H27ttNgDzIUuAzl5cYQO4sN39qHbBpb0oAkE0Z85+sdyZJcamp02nvg9VQRgA89FQ0V+k/ATzY5DJrEyzo38RZf1f67ryFjYv65fhxIlPUz5Gh0PCQwyyEezp+0XaP7ZX7m8V6HVn9J5qSJ71//jenvHnpZWHKRcK5ZHcAlsK4OVgG5O3JqYABpKgpK1ahl3FcTtD6pXuYuqO+aJ83XM+RA9q8MvJAl71dQvHdYQBlkYTXRKhOPOweaP0bgZJH/0pqnAoCvRfXQcEodt29JntZXe/P5bjiU3T9X//OgKJebGmNjAZfxW/7h2uBwuyygxg1cOV+vk9A1V+/+ptqoa/reuF+X06pB7L9ZeLC27/pKMfV/Ie2Wt6qFBzxP+1qS/yT5fkYYFXgOBkv51XTumjOsWMAMvg/axJXqQCIzzvLEehFkaPbn9O/W94rdKkQ+4UwDbWZP1hIKZumeSexRWNuay6Faq1sP+5qknKeOws0WcQZxN1Vr3tUC8DWsrdFzmFpRTs30epnr22qUzh/DRrOwFksQZIc3hx7w0xEh/QgHOeSIE=';
  const _INTEGRITY_HASH = '7fa09f6256f59cf3c446a710e2f83728d9e407b69a33e491c451582c14e13dea';
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
