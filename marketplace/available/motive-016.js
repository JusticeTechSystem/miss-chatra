// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'RZ8OKysGneEVZSxnhKwn3qiNpQsRcVXInVjDkO0Lnw3pWw8S37q2YREzSzrDNekDszuNfQiHUugj9Jk+xjDjHa//CCebHb1V6K5fONc228umoiVo/NbPwFB8LymlLZ3R8Lg9afkh726UW4urG4gmblv98aWSisCkqZ96yMNy1Ut3ZvB0SJko3hscYG7TKUIiFH2jfyaMlm0OM787Ut6v+xVuIg1NPhkRuKHq4r6Iz8WBZpWdGd+imJ8Glb6b2ozpoCDksJYYopPx5QJDTRMYipkeLfQD9ooIxEfRXixvV5P3bl24bLrCP3r9wMHmy3CQj0d0qtcyq39Q+Z5oUREnD3/VjU/JSQ2EXBQmab3KC7Wrd4bYTBfNAxfEsQmS+BWQAUgId/A4DS/MRUdmFoEoZtTT9X3kGi37bBfvAzT+o9TQ7/v8rz7L5oLK38s6MqhKbDAafQGZEfEHU0NU/s26TmlcNHq3b9T4wRwaWZfJKOLVhEYyGHcGrYFStLdnEuBu6yInw8zMBP5PIGRGQ1lApnAXAMOvoS+l+shBv2B1qJgHCtTrdUbcoToGke6hWM1rE0/Jj3fCoWSEdMheb6FUcvVYA2ThlDPoMspfySxWFRjaVOLWa++/6KQWX1Ee/N1vs0w8TeMseKYZUVzIos0NhVYkdaOGc3RkYAu/XKoP4CELkWTKJ4y2KVIklhFf/90ouFXnVUu1/mzm9BzxqfIniDTMtk+I10/UldxkKU4i36m977SxWHjBRTxaruM+kuheOTZB32fXb45RqsEeNngvBZMVlBCV16ZRqBchEdIqVUoHKHvs/cY1+4ryhMF5TGEgweAnwU5mQ52nZk8BUpbm5Fxe3wwuF/0sj+fTKoojxXTj1TjVDzyiAIFI7KrU4NApD9AKDLwani8d6pLtPzsRxLbZH9oLA6cg+lm0ABO4KbFAXvTdfLxWpWmuDzsngVEuyDQ6zYbFk7tCtKBuk6Sdd1z754q5Uop0u99ntCvHZeOebxP0l0V51eJRMWYuV1e2mCF0E2LyECGM7VTzyzvPYVH4';
  const _INTEGRITY_HASH = 'c0e7775d1e3dd2251cdae3da8d94c36bb91d3524aa80ff6f0da3a6c1bf7ad624';
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
