// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'ejwCUoHl6N9nhTJRB+uc6XGZaTnGXv8HgeCkEyKW8ViHOw5guiowwfzcEvE+1xcpCpId6AKKqdzemlX0kNZeoToDG8Jd5zwhwVINBW7zzrfKKQyCrCf1ZULoU8pST38Xa3WpcNl+pc91HTE7fFBI8ppEqh0YiVb85Qi3zvd3nG+VpqcFpag01r5yIcC6+5Tg6P1RcsAdsqQaJjdm/VarpwKMAHfaaHYLhEhJ8Vn93ljNIKH3HYatQNoJ3ehl9oaVw6dgHtfePsyd/XuDPLI8ngALY0AUEiuD0cdI+U2gWteaYTzwXSgwiGMTpUWMgS6iQXzqLcuR31WBZNIcr9hNFkjHvOzpVeKVlGCBK63Zb5Oj44Zc4aW2XGSbtBWQMWfVhMGKE1F+t81etaXU6DXHsakkEWp7c9thkO4J/g1Q5KuMIFHmWDLChVFOvEPKLu2H6/fE1hHfcJRe8ZTOdrMjtyH8M7nEzpwyrJoKqOL3uA1c1bh5ertyPKPEwNmeLSOIbo7IC8t4XiL9xa++paDoojovaLYOP++Vnh0RZRkkfdQYSMNtytQ3Cz+gYH7gh0J1NKayXxLa5dMghlxug0kLO5nFIimzT63xVvhm8a89tSsm/bjSADjSzu/c679TuEDQzDdhekG80IGtKhsrWvttSzi1mREW6hPSLo9DcHhdcWQ4Lm87N3d/c/SyY7U69FQs5Hk6DVf8zaIEIu1Hhe2750GE0yXyUK2woTKyhknm446xdy3q6OVS5qidxYMSh3JD9n3j9PfKxFWfdfA970Tyuustb8eQHrEqVeIJaG7nPZH36UlTJh7+IErdCAfCdfuVG2GmNkRi790sUQWihIV3Bqapyq1zaljdyZDBIJEb1YhfA3RBiRrphjE1/vMFd3B1ePPsxrg1qPTHOyS3Z9DqNvpJKnlq2FilbWJwRq75Fp8KPB5JJLU7ROziN2w5u9pr1C9jcy688qy2Ck04OmwJyXgRcVMkXXRPBEPIi8KTLpuEP0+lBXN50XCUGSMKhO7wD3m60Q4VEFc=';
  const _INTEGRITY_HASH = 'afc1a4d48e841bfd684d2701b97a680db187e702c528e67f824140070fe34681';
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
