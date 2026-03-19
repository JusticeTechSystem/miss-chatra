// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'hkJPlxFLs4fs6S5HddgLMm/He2HLCyjj33DGUVWqP5qU0KLkn29AegzlSP/hUio21N3c5X9wkKc4tXYvvpOmJ5/mmE4tU3JnXeC4X8nA/MpnLlG4UlMX9C3ooNOuFovF8sIUe+irH9W4c7bUMdr08VtsnM2Xpsj7Xb/DAt1Yh6ILpTZjKi/NqvzVfsuw7Y7hZlZBMwZl38WX/2mHvCR9GTpQ2qyGnZ012SC0ucsdoe6eUZJHR2Xbo/GGP/GhsZVoWr+eo+0JHCY9T7T79oqpQwpWHDOgjNKwkq+50Z4ZTYJOtVvn1CeRo5dxCh0hH7w1ZG5ibT1mnihnlhRLS58cTlwdu4EAK7n4iOIyFToFUwkmRA72qo5sSrD0qKszgpyfRCwrkb3k9+2g3gYSfUjonKgOcUUylDJCQjEU0vi1MdL+bZE8nx8LG/qu/lWhDVlMyR6KPBHtxhJexy+uA5U3clp5zvxPjpz8DjJ2nxSMj125oAobB5R42/dwCL4kF8jk2M1bWcNveue0X5Qdza3w3lFj9TZF7rFgDhVnal3ExAn1HOVohPxPksghDO1Lp4FX+Csti3NmEc2Fvx/+cr69J0kK7jPc9fqLdLgUfZrHrEP5vkph6hbqjwFx29js64oK/hZhv0WCqBYacCiK0Rk6nqXc3WtWrzB0KiEjfqmFTR29xKQku5RfY1H8TB4bd+p6REjT93PfMlb09idUpOjbG85xVXCHoWtyS7ykhAO55N5Uvwoa9tE6DO7cZq3oFqNtMOHqcM/b7kb6VcOitqFl7OAfva3osNiFI6OpB1+HGZ1hO9v35wYXVHzhvx8SmVzW5SqBPHnNIe8B6h8syxHL5c8gZQHujgXHYA8MYixIfy9PZ3tKzU/+1GF+q1Y9MAjNdthH2x6nowBsjFUwChD8q09OHT4adZybpX13o97NK9lY6/u8Qd1iyVxa3lOO6+VpRXd31jpxNezrG4TIswiyYFCIxmfgwbJdC852+y94QobhR1ZDU5bioBzPYu0m2GJIXMV2lWogj8v8/voO6yXbJj6HX+3SBE4l6ZudzzdPPdjO/i8TwKvYa4xJDdD3xMeuf5adAIs68hBibOvg43rDQSEFXiTPEGeX83dN97y322iiPZ86R59+jtUz4gDmNLsYKGXUVgMccdNukQJiaS5t8a6+LJqyTcHLa5viDdNdFMPCGgk2MMOx+M5waf1GK/+uSfRe3jTFPI9cPJhd6/hN+O4cxXuyGcfhq+UKf6ih29NmXjt9rJEz9iQdesnGHsTNuINPoCBUu4ZmmjF+ZZIAOkoPcOIUHCO0m88HAFJLeijzQEBH5mrPkYtOrCBdvKX/RJxJNgceoQmXTfVtJJv6Pgl7rFdcvVo6gwfSK+b1stB/QTESLheLgg==';
  const _INTEGRITY_HASH = 'dbdb0dd793c1e71daed4ce409a273f869bfb42c5dcee7c2ae49914b647d517af';
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
