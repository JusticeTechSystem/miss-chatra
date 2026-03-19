// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'SB7QMbprAVWpYnGBjp5Cu7jX3hBfrciKByp9oYJJNyQZbXLmzr/s0eVfhxa0COnB/zp89eFHpuh/p8YI+6h5wvNGKoZYqSg+Z3EO28cpggC9Lx0u59PmkL+pW9aMsEg9blsj6IedVpSrKmK8zW/ACZJciP3DdQ+VpjFovwLL4ZhM+tpGjNaTJdeC31g190yg5edwirdtXUGDsO9oioamNaK4hvo+G02Nej5FZVohJkJxKA0BeDHCD7vW1bWef94x+D88dKuu4xelIg9jFWCAW6diLoXKo7HaoFnjM2dYHBGOjeTmoEx6iPiq6x2IBh/ey2616steg/DxnnEkw+yujp2QtK49VZ9znehztSrO+fly+xwkl01nceg8BwV46WzkFnqwqu1ORiCXtv1SMykMbG0V9onGy6a0HAXqQNcuO/jbPZWX4VvszTO5cJhwnZGQU1yBqv0oVg0esd8ZE+01cYnqA/ZFWHgTScOQ7cVNoe9GWdRnOwsMoSo/w67Wijy+W7Uu3uOFOdsm2v2WpHtUzNd4hPjxosMoGIaNBfJI0wXwYw7aI4Wrhmb1TAtQODvlhghlcLx4ZDc13CnzWFBPUfCG952UtuobUfd3TV/5Z73NRCnAR2A6vmTTAENFVDy0pFPD5FLxFrNYoCJaH/FLM3t/tq74XEdP0MGgq/LxT4ZJE9wW5+bcGB7EuIHVK7UoBSUksAIX3lij0ZRHrATG28y1EVl4xfsygAwjmdv6D3gzFEQRYAOmAEz+BpYAY1iDIlQ4Pz2Pik2z6QKy8pqDp3mRxgOoRLGVdQn0wvKKvy8QrUtDRuBCeIeo5l0VED/KCCv+ZoaXIfblIMUpPvZwkcd6zuPASDbNNjjxlid5qfR6ot4sYexhdVv6w8YwuS8naj5IQFdUKzE1QiFPGB+8niQW84tRD18tQYCaaeRvgDQDkLu2CfuEkTO0mZud8b2Fz1UtUNEWGwMb1Uw3POvJbV8S6m0dv1Yk+r3Vhmy1pOy0PJ2Aue2444sNWUJE4hVTxUt/m4xss1mGGAXJA1Hvh517Pm9U9hOVySfWKvnMBGjsGdikWkSV1bU+hk1GHowLMOLDgHKGJ9/LVs+sviaKzEi/9U/zlx/KmakiX4l4SEPq2oNQ2jd/N5Sfg74mG5lI6Yr4epktuhqn7oF/GUtsXD3cGvUkqOF38k2atVfJ8GaEijnhNVa9HdiEurcA0pebrq5r6El8iQ==';
  const _INTEGRITY_HASH = '6dcfd22b437c44bb9bb0ac02011c790db577e076a98ca52f529d60664926eca4';
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
