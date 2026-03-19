// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'rflSjSO7hdHJegTHrdY5IKhIzcJRxB3UIGevp2iBZTuZzpWVfMg1EhE0eAlDJH2qWj4+Ds9/1ZoZI5jTwQyLnmFOWurT+948gUp3xjWHZ+Q5jzSx35wlxsRHLR+QELx2M23NgmdiIFbbNfh/984o2zAXke8gaB6QBdHfwDjbbJcaxAS9S3rUpo9BF+NQB3UHDLTDde1tr4n4AkufqlCPHkA6sKXZTlKggSwHBVURZ0I0rVcLE3DSYF4IhZXOKMrYJJO8u5UMvXGPfhG4JgLeb0ckX90Hwwncjk30fs3bC2HJWAl9sm7APD6en0tX2eJsoYzIwEeyhTFkfKh4/+CHxyRM6G9KGIYAv96GdppmsZWfr9vMwu6QYbG6X4tIsBZ83hdaeu2Bjnx9Tq/IRCp7tzaTsHCJV39usWJzCEhiGafipwmZxVjSnURIfZX3KBD5eFVEUHp5yjFq2S/rdobumX0r1UEN4rGOxABgsWDkfdw20QxqeGJIhcvUpHGO9u7GItWJVvdhHjKFdQ2QHrJ7zULvAWl3JfdyHnSFNM74LJ6IUfuVwIuCBjhkxq7Sf2Wgd0HOUmrQAlTz0I+7CO6wpK+bNXzlsb5wCdt2WShFxfND4/uEk01Ovx+JbpjXp5j6ZVajWmPLh6D+03AFPP4yKq8/mDopz7OvdaZ/yI8QlYvIVm/yevwlWi+OTAL6HH23S5FFFoPhC4jIUepkn44xaxgRNI1CKfeG1G5CoNrSSzY8R+kTp5YyoIPJDSJLYlYq5aJxDwhhBLQjiym0x9xv2GlGJNJJQJp/9wFzs0wKPE8ul36JqNFctL4zL654n0nek3XTjg+p2WXlLEc26g8B4thJ1zleeK/CAiWIthMkFRYAz+H5mnLBc68oLrrEvvLTHsHC9hKrGQYbcEoHd8vqFLURfIII74Mu3Qy62crW+93KMiCYnmqxqjqUb53HzK8ct+s3VVQZgwrMpe74vHdcl7X8MeYWDVsIsB8QsmajMI48uNKjG6SGRQdOQx0nqlT4URv79Q==';
  const _INTEGRITY_HASH = 'c39d363f8865558e034c41eba2cc9a2849d4de69d2fdd6e48c2109a157660a6e';
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
