// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Q0Q9FTo9B8VzeCAkfCFvjh3IRDXLzz3BmbZ3JZraK2Aa84l+HDH51Y1TeCrkbZmBb2jh1gRl7MHHIMmAjBtmh9429XR63+rzHRbRKR4Ncv2QRP1IXu9m32cfR5V22StL3mde0CTRL3LQnXb9rP7cEager/wRJtlM6dM+tPQ1NECDzWpyr6d9epQ0vok+OtvU2WhiVY3vYb1rapJeZHShfc1NzoyiKXDwhwOBfTLmgDO+RJZnu3WnOvV14JDgKIMI4cSlOPENI7UIFUJoB2w08RvIah1DED2cfcE/o/fHXQQV2xQxAHaekBv0m+vZUhzJnZ22U+SemvuayYahs4AzDj4o8Wv0fJs+Tu4cvcrRGPahcmXDcGFsJVLnOjT6rxkUuIUxXY26+Wu5bvdTlzAmGH+6BqzyTKGe+aveDZ1goJqO+imj4x09Uv2zmiWuWSVYwMjbs1CKYsB0hwbfN7y+RkjpfvX4v9YPnbtWhlli9F8M+q5CmMovVKa1zJvpMr6CkeJYVg+TgNc7uS2LEtCVHqK0gvngkFUTQJjzpOOF+J/Z9dRo2IZV6euFtI3uIxDZHgx+mYhMCUyA8BmpCKiPNHMcfBM1aDyr/rwzjq8kXv8pVFvDhqwIRUWKngxOUCg18+RJJSLHjvsaH46P3jpQdozn68o6sBi4fyDrg/SqLqntTmVAmeCKY4A0WtbPOjCzWAhab+geWGAmgG/DfvbilzPorh7AoxOwgrx9JRBD+SzuYINKHzvloYvg12mWvkqM3uKmEMVz6ZwwFbZXyJfOP4aVUWtKy8N+7H5prrzmrsQNIKf4mBuF/b+9l/HDxLNWiY1W5FecpDz6tPA4XXkTSRpvuHoM/pP7OwsRSC0KshadnYROH3rQU4LsdMfVUrpBYdKk9pudVHZbnpHCJHMv3RKSC1fwpNNZcEnSEwehKPdgw86+ZYTgb7cOO2sKU0kzI2KKb5+yaxfZ8N4BhSL5A28LZ1OuBTUG6kuAp+YQb5DxcdIW7J06wuQaRjXZBMy6m9X0NLuUatVmpCBpUMeRby+b8MkasR6NT8uyy7bcdTIL8RDX7opufDWw2uOp+nM4hpJAStXvYnt3KMRPvzaoKR1rQmGbh3NGFMgTMVYOUNnJjTJ16j/ebfYp5b6nL6IeHs2oczpS6FNk/S/5hjVwj07ubsdGJtV5cd2Dyn/Mh9yTvPXTuwR/43j8qotWeJJTM5W5dB0P4qv5KWDy9ttv19x1ZxspACd2pzIaKMsPhdD0jVD9re4KxZtXHPh64iUlVtSy+J+hlCEN5JjOdbZ/+gYJ66oKaEH8TRmLM1NEjgQka6XKjSkeQF/onzrMKriO4mijqTA0R3mbLr3aoP5NQ+U+MODQjuQYN6GecpDCNZK5JrKrd5is4Q==';
  const _INTEGRITY_HASH = '5e83456137fcffbcc85de4e40d6fffb5380f3808a7b2bbdd825160754632c169';
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
