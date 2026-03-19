// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:24:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'QQXr6Hi078/UFDExNlk0IQs6UcsZafK/kB9ePRi2tN0mGgHWiEqhnf790zFziyNcRtb6CwfpGtdtkv++b7Urp1fEVZMbhH1fhkb0KfJk4tk2AVuvvS5TaBugNAlPOwGia9FNb7Bl94hkYbboT299LGRttf55ldVu52pXXfQIowqKiJk8aS0yu3gZ9G447Lto7s/3l6JCD3VaIMX2HKIVjqQSmAmKnKXGPciiJ9yU5/HwQCE82vHvc/L99vQT5jR6DJgBLVG3lQg+JzezASd8uiOrbMy5WLb6cz4mUr2AvImYND/T8mio/kbJAZe2/SPNTtsAdxjNw5j3xi8rPsL30YTwF+yuIqmvs2Jl+D/fAUtEimKYbH474mqyVkefL9FZAH3OslE2cEO7k4yTIG9P6//kpSsCpleADZ4KU73U+3b3+lOj5EAWyWGx3K1WKuOVZ38l6kEtwOuAL4hPgnSlzgn63ZVdd/KdiNhhpVheWXFIabWz7dv13Or6UVMbhnnAY2pSWVv4OEOVWpaLQuOMjqzIyPUpLhj4OXfckLN6y3XQVg06DxsigW6LO3614AkvsPJQ79VmWHNMA2b39SCiFUYYS102ruKUie/oMTZCDnu9by3DEY8R50dOvHF37IClf3AD8Owym7GHGB1UBGlWX+IQYvZ+JzfWpPYk+hvM/Ihm+6xrbpC8XBX5F4HXNLYmPnNs0+HuO3qJddEdRJyFCEhbmCAVBy4DpHyeXHitX1w8R1+R6yZULhG34uOBFZ9mCFWhqa5FSmC8k1Gt8+8+AbkQ7pFXrXfwN1L+i8Jax69QGfVsr+sA8b5lfvoQzi//0CBMERVcJto9RP/7n9mnDottDMcJ79o5VY+kvUgP/zJ1rXx6eEP0n3YR8c6a6AzLtgPiBgSTBojkp/jdWRc7lDsL199gz2peoprJP9wCBbbyhWC3bEFvDw==';
  const _INTEGRITY_HASH = 'c7e5ea367e75ac44562ab8b8c25a27598d6ba7eeac0a9eda3868ec15396687b0';
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
