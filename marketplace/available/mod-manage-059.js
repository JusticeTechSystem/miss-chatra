// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'FdVAZcy7UwHpXCA3UBZPez1oMudROpn4WiTSrFbNW/EOJj+IJR4DlKVur1orIww3LfSNrtCEAekk0z9iH+Xc6jzt9T/Tit62XQ7nqdQ5AYTIvBKqQK49kkknIeoRusqk1F90gUzA15RsFVMDpT5cneXgK23Wv0Z4T8nsg31w+r9vL2xdP04sxdN5fwTkOW8u9cI0rvJhQR2nvjFVZwUNFEOFs49KACs9rtDprrLGzXYjn1Wx1HziFbp2sq6ya39nL9cfi6Xrl22qkT4Ve+TcYGtEnO7/VvuBHVMUanPqmgxDgRz6fw0BkINBryRZpWQR5wgRYhIhz2pVhxWI3x3ni2A1XFyqmkroqjztQfHnA/mJlMJrshvRN00AEgk/DixJI9ROT3FaPxK9n4VfMjwnMZ90RDzXdx+JENEnM7+Tefp9N72Bdag53e6KKpo7nf/ZLc0lIxFkqmktppxK2FGKjwPfHNy5spTHeNEDbMkPHPBI9Vfqvjwxuv3dNwoVvF9PvyXid0U4KtNJzSi8RIC53Ar7h9gZMuiL2fOX9XKz50C1krQmEabWMY6M43Xf1eitEh6PvQO053WBeEY5yBw2wbMWX6yiqx0W6RBYHe1PLwW61mrKEy1cQmw5AeOd8S5YUD5PX7pBfyd2XFdtM4UHgIDCkjoUjLsH74rcfyt0ip/PN6eEOkDF1KVi8CSblXk3SP6yW2DzpvHq+F8Jr0YAzDRlIWYesvvxF1lqI99QKJyc+VTa8LxwQ9OItYNZXQ5SetPqNNCJF1CUFFr/2c3R/fIUx+sukgRm1aTybg/kO2ZpCp3UEDtvI36DxabMPy0K0HJoQGgma+y+Lqv9b8uZ23lVGawQ+3D/lROl+V1beUsl9xeZxYk3llJT1BQX2bzJlf2p0kYP3Bh1Wj+B4kyKA7LPpw5MjXMgBS3LwdM5VgjQER7ff/OKML6Sle2DQ062ZDFHgph5kih95S2huzKxqUNGNhHiC9TiHyn2GFAy+s5mV4ls+INgsHHBCh3aOHLjR7R6Ed1LHhZJzYhtrDagvf6etjj7952mFj1YaJKm+ORNjAIYR3zg/IBgLrMHdXj3bnft0AAEglCQUj27sw0nd33+48BKZ1hvmZM/aR7gDkfl/akd8vvzejnQ0/8sQF7DZy43OHVfmCCbPYeoxodWIBAsBWuMMy0fwmUfdBqkNXu6RhAhmRkDsapfZo25wQQgs+FMgECkzLKx3P7tfGDLcN2ByVXXqi03DOmbyx9A/WlhApU7vfIKBTsCVHVu7AjHQseNIwh0BZJDiuHAW+rvubQD6Es8h68ESf5xM68Unf7nXnu75Zfr0ZuGhB7Uddtm+2N6quoH8dJ70rmqeVXL/YlLRCXNefXh6kjZWysjqh2IjvY=';
  const _INTEGRITY_HASH = '90710df962e3ba06a23bea457bf53dad8ccb56e6088144a90db8e6db005ef381';
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
