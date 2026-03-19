// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'GHn7I+Hadw1yBdaIQ0Qa4Q6TDvTxhM/3TDGJkGT2OCZUj9ql7AZoNmbw7AVGX8blnG02jDZLFrlbi/9vadn0K/uHUqhjSqrt4pN8dlHQDqI5arpCUOO6V91ao9YUPP1tXnkWNRc4rXKRYNI9TVKxdZrRAiMNSC9OyFCM5BTZdowlPHXnDwHypgkQGhLcQ3Qd17akuFL8iTei+UDbwoPq5q3jwmbze2oN8FX8xhUbx/32zfzWRUi/OR4laLBTVhxOeMrDdGFmqXvzsvp+p7uwU51fdQC5UBTLe9xRs9Ji69dKIFNBRR2uIWD89ZnTt71rtHVl26Fb9D7XjnxTkaWrKOe/bxjxKb+rUumcQMLaeY+9jy4OCrmf7GgicpaOs+hHk9g8xlYTXe72XPrQ2869twsWOsZJsOtOpZeUQTgJrbeH/U8osVe1D8Txccey9/sJYIr0Z/V8x8ekzJsPbPTkJj2K58pb1hhGffuGztE6lEli6ANYCu7aT4w+j/JEoLtWqQG3kpsL/UH86UW9Yght6CTIivF0ffe9jW40cG7DVfJ0EiDj1twm9dlFL6ensZdDPgCm548Hw8T0E7BNqlhgRa1PijGz0uf9b9rsm/cSBR2Mxeib35hfweYB7Z+cBp6WbDtLZoW67B98mVvB0MSEBtAduN8maC1SSBqZjtu6XwF18OIxabYBFsrTlO3C1+gG1zp89GKZoPmeNUQSpKVphhXzMHNzgvOs2a8X4zbWpmAQ5jHXKUVV2iLPrXKD2D1U76fOtW1ETpUS7bkp0mN/Xt2a61YSFeWZ3ljd+fs7K967M+/ArlmJB/RSN0/b1iSZGupv6zmlfqGym8zR+5EJ5Z3U1Ldn0PPMtQpkIuGPa6XW8JGYivfcDxSjA+QAdkl50rNPgXm9n1gfd7VvpQOMNK5+BJwRRea5pK2yWN7YNk2LtDAPoWmdwTFlNx9CD0GFCwbKmsbXyt0j4VFYhfrKSnhO/vRS0B0qJ9hbcmSMPsCE800PlX0y5ca6bygs4uH3Hw==';
  const _INTEGRITY_HASH = 'bc45ac4b7d8e1af5d5ac27c555ffe9d5d1f85d7d1d093b185e148c90c1c1d8b7';
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
