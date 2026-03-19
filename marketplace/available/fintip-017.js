// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:24:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'I71y64eMRnvnL/WD9bjnomHaI6NR3CcoadKFVr1YhJE3qTNZfdkvtytmfNajtoer1uejBJVGjV6N27SVFlSgNLyv0+edgY04HJlpoa4sci9GDS95OQveDJwMtRImrlm9rCwEsAOGY/DS500wRHH63ev76vuGE3CXcfk1UbVVNRDQ4dyWUejtPFRKSiLb2QcaL86NM8Yx33xgi0eF1X25kU7uUjdeFFYJkY4HcO9IkvwUa3eTl3wSMWUhDsSQjhx+rQVxCieX8fP/NEjLQHj4o4Dcji90jgvIn7b4GrsPEPT9iDeiCmnw7OzNwWwjPRy1lVv1rw4izYsV2AA6dRGnGyhAlW8bNoCqp89C/QjYW352IVuPIli68yIvU9m9caqmD2w0xVkuI9Y+r3tLRrJaijtXx2ebwP2EgoREUDVNwqjmF9xajCiAXM8QpzQtTQzKgSbJz/lR3H4yJwcnKOvHxH1dddihyK3PrOP3xk7wVe8lfW7iTCXcLQKM0lwXsqmWijwkIC3wwTRcjosUCI/ZC6SndvYXaPiLyeiV8JahKEss4C8q8AlPsOvpanopH43wNe3IpSLW19rRwwVZTHRqpa6ITAyGwcPwpGHifmMiui9FQ+IskhMvp6zCGyHBr0kXfxwLPBAtvShv1IoHUV3axjikF83Lu6n022C5sVyBfd0H24zGnLU6ydEoJWx9uAdTkywUcst+uX+fPkl9CGEaMPFqeJ/puFXp5zlbFGUTkg+ixFthnFAK2R42kXPo7Z2NohNXuThSVEOLiER52fpEUyNfWxTu3wD64ki0fqo6PZNM9eTlW63V9S9Hbw4G/LmKq8PwfFTZmr9J6DSbqtDokThndcQE1WjwzeSquma9mZKGpr1y4Q8FTXPYypysT3bRwL01+OalbjIubziLO7DOmotcKjXsTtYM5F0NTifbsVZN07xDEWJz037bDzd3/ra1HvQOg+VmZ6vWV8wOAVwLAf5QFwlW9Oo58VcV5S3bf7QsCio8Lf1ynPJF/QFKHMuXM1YDquuF6eF0D/f5mImJOTyT/W4TOngnFzdejy8hr8l5rA==';
  const _INTEGRITY_HASH = '5f592d17171d2cab8e0f300c5be184b4d84b4f36536a0073a738dfcb693f5ef6';
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
