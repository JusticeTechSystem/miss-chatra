// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'TGaxnO8fi4vZUnzaMJWvUy6CpvuKOxE+bnHZsZKEOgBoNzkKWGkVhKZ41uJclM/mqdUjAyfazjmQVgfDMZ80dFVJo0ZE+QVHdZOV6MIVr9v/nwwGae5Urof6tWAmyycSzWqr4IbyNROipYOpWcjCYc2U7RSUwkCppbQnBECXwo8DSedSkyPyXf2XCyeh0cSkT0G9P9EaOTlffWH8LWg7i0D75bx+xOlHHdx48jx2o3WkhN+htF0EYcyjwWNs0Jv5DH93JPVgK2XAm2DcdYbDYeSd5qjwdYZadvwlQ3N+pZ1cRR+SVUuXxG3Zu2ozjmbO7I6YT7p0TqDrXLUIq5PDOXl3A9yErqH0en16elbsterhRT5w/CyO1kQiV010TwUmZohR4fmDBC5K3HpA9fcwocfbf+Usty+CsCDUi5P2ekqvRP6Fb5nOXhCG6mZSa0J3YrxuWk/Fa3X6aYLRnQjj79RwRQIBiN60moxIxAFeYUXfoWKBtuq94KxpsHgE3fkghBJvR0mxbdP5bcgoMR0vSdCb2Feh21sJxmtu8pBbAp+9XXV/REBV9kg5jpHnef8VVU+kopGS64HipD3cQnMQJgy5i16BsIiTB3SRlfi2TVgUDSAMZtBi/+u+a9eCDvQjlXHFIolipsud3KRvm8acoH1Ni1bZpeCA1ze6oSQo+Bkt+TTudFCgGiPO+lXjMP1kcFm9uJDcw6J/UIyS6r9bHTnQTcddrBUCnQ==';
  const _INTEGRITY_HASH = '223f24dec8d2ffd31fc3454d8fea91bd0f67c1815aa427c5bf0f7ebbad1a2697';
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
