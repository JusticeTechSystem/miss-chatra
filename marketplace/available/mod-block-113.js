// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Ek/SJZUQHbJIg4V0g3RKXzO8m89s7260h36iTVENdP9yXZE3y+sG0TWQUV9UmVQu8yqQa9XYaIfm2RASGnGDoRuf6FPW+lETkb3UyT9Q8Ewy3trMisuCkz9mntgF1uq6/FLRYpDdvsCI9niaBgf1qQ5lndf8K6QzImIMqrdGcz5JJADPW90jw4ZJGzmBd0BoS5Vi5by2fO0YrB8jKhLvo1PeZCMWO29ggM1UMGU5DTtMo0jn9i/HIcLnuIRwKjBHXegMVyigSMFD0bDp0vPYWEF24hRJJEWyZ+z6SgmBkZGvoY47qSoRKA2lqwBy1KVQnLsO1ScjY43fkLYI+G+WYK9sAiSiVfIMGgZPfgGelgY7aMBPVf8re3fRjGhCpRWqgIeRJ6T5f/2/3jCt3ZU4ZNm2W0OiG3gjMw2fHla5EdrIq23JF1TP+jN8NhH40uKr7agWGcpFndLDXvIO3wrbx97Aubhu12ouSz+M+lkJ80+VJwS4McljDZYlKEbKBJiGhwy1bS27qMkPtfim8huTIu/TzgEZGu3e9G4iJXFTcbFiXTgXrzKZgqABrkm0ej5guGSA9cA7bvaGBp4D9FRINqg66Hv+6wggN0lqfZh+LljH9C/DitIUVdaK6u0kSs9Fg7orTKKz04Ceq4S8xs0+yn34Z+8uBTrRgO4cFdmD4rZ6Xxm+Y+3pg8eWbPjbn/1DRJbduBfwXDERBD8iE1yFr9aYNzvEE3eW08SHOoOMF5Vbyadptk/3deAMcOr5G6rl7RfGSPSqOr8VuI/uCvv+lvVsPK66CfdiMrdAxou791iwZ7Scy758H08UmAbbDsW2oPgYMpeJb3p19NEIIZgNz7noQ8iR9mKJYOi7KSQpq/mTCplFoWIDvuolbtTgrfQvuO8czKM88h9hubZAOJctSAhOo9XUsU0F4headRxJ17R6Vsv1yVzyAuyZt5Nu/ClNkK/93ydBYoQWqVPGpK9luZwEvtTEgBtFw+tioYH5fJRViXeYdMRozU8QZ2Rt3zU0BJ06ir/oDvlnA0NfEbftBHhvaLS2Yw7lTw+PqIl/aeO3morxKwGxgZofjGjbezaHJI/XR1j1Yw3NvKi6HUvqW5kp6Ez+HTy4+YsyFFNp7kvyWk0Fdx5fE1RNDdIHAM+G65yJfR5+gE/7Vuksc3mUmroyA30GHhwHSjnfu9m2lRnRY95yMG5BpnbvLXPF06nVz4GOAyLVWtkOM7E3i6t4m0mQup62u9Wvcekqr9eT8QzMfInDrJGWqFGeJLp2j85dN0wpjCBm211SxQnLNF3yT7E8vL5+QYaKAvZerRj29e/uHIjX2Xgsx6u9n/OGhacWY7lTHkI/CWiCDyStg4BbT/qqRyNAnn7hd/JfIlqU';
  const _INTEGRITY_HASH = 'd61d6566679b795bc29bcd54a66d0b17f66a8ed1c356f66bbd7f320c0c41d9af';
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
