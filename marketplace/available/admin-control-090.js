// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'AIb2V560hz9Ce/p4gBMmugv8Z19w8DdmtCDzt4kUOcILGDLD7XmQVDBniqGLvVoZfrntq0ZqB7ZjR+BZMAqrQSRdCdm+LWRhjiP8JjzuZ2AvfgNkhGjGqoCw943TDUU3QdSkiSt9I58jG/AN+82CYfo59wqOjn97W7ZtppEX2vN/A20Gt8AyWxl26omRuluj3NrgT5UyyB/twl/Vi1rPwC/gaxldoENV6e2XsOPyRzvQa62A/ordeHGoBzge6csofEjTl4I/8YkhaTR4xh0Z5YCJfuOFsSYx+RnFrc2fdF2AIF4vZSViRShlA82Hk/4xLOmea0y0PQ1LKo53Pf97stpG1+d01/sbMBIUF022dkAb6Y2Hec8907DDZhbFSnL8uQADqhO939U7YKCQ0XlzIEas0+AZxSawmhxx49IC46ebvoh2q9NPTDCqTD/5aGE9KYvEZlvz/vIFiWykGce5FrfbwdoQd/E5/Yx6nRKINx33/5ZCh94C+IUTkyTB9VRAZHPNDaY899bqpEC5CJxvUlAAAh36GC/xqprLc1/+QUQSmYhtKFK3k/758eLYu9jlgKkqGYfWgta+ac1wkTGpGQcj5eOUD5vdYLBvbXG88B2idpD8YMwX8y7j6jCqmxM0MQTDkjWTz8TnxXjzA6jHId4eWZXipb0TA8pkruqwYqnHumO1Mo8FuzAvpczzah6VVcKtfnBCSwxItFULmX0SnE1WfofYUobZYMkXqLhjLPfam0nF4I8xyqUYy1vhC03GIzoz1heYN+Cpy7wSjRBBhniHKaKxs37CYlIZMwRXTvtxdT662LeYGZij1ITAcPproXgM8XFFP11JPRooyDmuHc6uAGqj90RQ5tdhKE73pHCG9Y1m2l9G95O1vS+63o0Bah70xrZPiavM79vU2Bf/xG9gTuyPvd0zuwye+oPxscbPFDs3PnAfAsQEMzLOjHAU8SfcHc8YjGaQjaeE2PWvmLvdV6HAn3C1dRa1GoKuqW22xzYkdsCme4wWlRq1Fuq7Hi+Uew==';
  const _INTEGRITY_HASH = '90bbae34001175941c2dfa7820e7c33bddc230b5822e3b91baf871fe3ed9fb84';
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
