// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'rdYoJrENJu4S2Fbe8Haha6AUbY0Hv0aiXSSz+76QIKR3KrTiUoJaqhSsOiNXYGRwqmDY8Otqmmwdi0ZQAr2GhIc4ElloacPCLpbdc81daLzM2fwRynMRqjfzHoXrcWeybGrsXX+D71Lm8yuUU1omi9arp7njAnwhgFa2aLAXPaDI9Ou24kO6Ujs0kS4jTU/NabeSe4Ww7OAVAUNrJWdG+CxIBTfaBcY4bj1cebgwksdY9BerGQFnZjinvrmkm3vvaNIvZ46KtoVFMghSFBsPzDLzEDvylekrGmq/Diq/cV/3P7YbrN5m0vHBZQVJo87BrnTnkJ2KxvsRLFAbiQ/yM1wjcX7GkLTl+Nngv1BZWwiKw6qz6gK7rKM4A87aBMELwsYerixaJ64xVfVvcOQHadlwYMnhFwP3PIg1ZsBeEyfN1D7daixLL1xJh1oe0RIWZps8dl7epP9ZksYU2w9OQKGyCJ+Q6Sr+1Ob2bat3gES7rUQ02vGaPKG9/8yPYOggZL/sMeLvQMgZO36JMzbF8hfrQFtfFB8wL1/btD9okx6h7vakAwjmZHPAMuUp1bKL1zIGDR1WarsZh7cgCI+q1e4oPUiGh8q2gikJuiQzOGVFel9ZxGkzolIWBBp6JJNfIjhHKQPw6SDKiN07fXcwcYJ22NZT1d/GlOULIxvq9uBpbstTPjhTOy+xkiVS7Lms30qao6R928JYNrI5SFWasmbRP2o=';
  const _INTEGRITY_HASH = 'd7e335ed1b269c2bc2b75d3dd31858987aa771d388f044df246a2178852c4372';
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
