// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '4USZlCjYZJLyTUVm+1Ote4flTcCajJZigs31uTrLRm7Fb1Zy6kPeGQ+oc9Cisj6leleXixiH5gdnFHlyo3iVhBKk+xOTCdKYHjiiH0rCAebpxJGdynTmiR4YNqGWAQaVtJjhMZ+/mXWnwuNBin8k8Sfwi3Cqi7PlUdR1KrMfVENXej1hUuN9EnYvDEQSaytQCr9GtIfp0zw1BSAbRU2H9Xn9nk93UFstm6tHDJ280In4vZ1YXCmibmRIz4+9yg7LykSSc4CD3dC9NXV5yf339WDUrPm71kRwM/4cx5aEdcVsTb9EPyH5vO6qd/h9MOCAXAdcLeYgUCn3KsJGbNJDccAKEJ39fo+hw2+E7pXMSvwv2NH8X1B/V7Zme79xNacwVUaQdLhpP1Ua/RdLQr58zYgAr/+03thQXr10Y96Xy83WVigulwfTCgLLo2jh0aW5mCEcR9IpSqZjOvfZOyGnB5O31YhdfU32Up+oWKMCetkmDgXRtSBLvvG+8c1yvuu9c2JuSC6vF3y61p/mlWCpH46Okonve2fKjlUraANjm6DAc1SHpB3LNOhrbDJQq7ZBqbYPL3Ix4l9LI/HIw7HfTjS3P2M6Vq1FJvVHCgD5aV3iZz8My/mKSStO8ACuj2J0hG0wC8W5L7tWIyTBziMYELBxL+7e55dmMb3SLqtmluXhGwN8MEE+fYR2b1SAvZZ4cLaoQauynI5QXYGlPwgXreymN9uF18XI2JJBauqo4bQAOElRqk+eYnNP9HaubYqad5Nkx5YwScJ3Na0EDQ3NwQ6S5KNo25d2WD3HV4yAONP7NiCnuCxChEB6jNmR1FNs5BB9PSWGR1shA3tj2rAd3pFdkJTt97PYb74+LawzCRERPpgipsHRxmoizftVJgZb1Eebm48WRmGt4IZ5ZL5xl457o0kS/PGfTcaoYxk8counOr/cLgyo32KN+YIyNKPcj6ny+2VHZdnRqh3KZJCeNrkMu3Fb9SoHRvi6wS0EHX3m1h5KHjEFCa0aM+O/KwjbJxfOtcfSha6KK4+5Ew6Qfvz600e0W7BD2ODujqzIhkAyGtPYIptFF/x6wgqhrGxHuvmHPrEdjoSl1tD5ptOkswE5qoZGhgkBsHxQ/O6gPLyv9paMR/0nZ+/pC/w8ODgKoUx74w/T7LIChkYwFhYOZr3MImBEmU9qmMwQqy/MuBn0fpkVr3/TX1dTJqwlhCaVLpJQZvUFfgAbQYPPjAHfj1qI1jXgOr4pYuBRgHAtkgH3eOAg9c3H5SmYYacDpgb8Ejt+5M7wVKQg45r2SqFE2QSlK9vA6gh+9xZvY+5oin886tNE5m1zs7Pzpghu2nxDVU7Wtk1E9/oKdwztLfWxh8TnZUkTofhyIN382MKf';
  const _INTEGRITY_HASH = '38f9d89652a42bb34addaa9b888d82dcea0974193b9b8c098caf27db0f6b31ec';
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
