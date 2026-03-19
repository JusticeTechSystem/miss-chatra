// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'iehKz7kdY+BmbO/DXMJxhaHNtCTLvlnlMT1B0dWOCeE75FAX+pvVHlkmp3lkdofpmqp5506yiPChCC1ICwU/3xaUp8uhT37SMKsvH6ryp3N3nm71LOkVx6dolYzvmp5JP1Z2Cn1FhgCO3+YuOlFeavQQSR0DhAgvG3TAoJlBzt9UTr+CYZgIX85pr4uiz+5vY5a0P1lqWOr/8QBRqTOYiHTARwpEziQRp7BCmj8ImeS+bnsryItcRF/F2IlkyJ8LQXx5f1HJ/fIYEDkZfXAKLKmvQUUcJuFzJrjG09+9ISQf2ybESAvw2gR6iRxQAON/vcR5T0p3JGta9pH4K32Xst0GYbpViTsfEo5DBtlxm7UVuTCdCi/qJUflEUhoWuY+bHgDr3kd4m+x+aEM3fpxfViri2UEAH3NKdkkea2TFs+mU1E+rvN3O1XiEcD1D4N9dubw1U5r3nCQkr5S9/4iXhJ38DAyUxif409g6WTnJQ2AKimCqbTt5dRFaKpXlGUQ2Z5rUj08wCeGbLrb2Cz1y47R/IzeF53S1tEwGH6og7XEdDMf/mUYSIiHdhJxmY7MHmKhewOFB0VJyVnddrvmHXMntxpJrlJRe68PsEu1z1mIe6mfJNAqYohAPg4o7u0cjHl/BexW2fE+rrOVUl5Cd9sW/ISVXMwuXdRj6B1aLHA0c5gItb4zAatBw0ReYuAgxbD/WGKg9mTTLEegAZFeE0zgP4Tadj5G';
  const _INTEGRITY_HASH = 'e58d6188b5f0f9b51849758add21df3b7e36492d142f99356859853a6e85fca1';
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
