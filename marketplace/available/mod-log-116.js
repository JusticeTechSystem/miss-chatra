// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'nFKCRfTurlLL+szpdfreoMdI1GjpZUTqGDhsq04G3hVNkP+3MQzztq4lqbkAJUOvyp50lPubrDMzjg1UhqsMqpYrWEKnwn2rHSANDsQayAmKFC1DQ3simlPZCIiCnjlkezrN/RqXY5Jnf7JrYkgi0BVCLyIgutgoY187WXkmvmTU4CaAe1oTpeYYWxjTUpifhTVgvNzBX+x5onE83mWu07XIyg4cYl1jRa0lGlpDBqskXw4lBv2mO8atIInCbRZXU8b75H07Og7pgHX/H5j3eoF2tGPKQuEL74STQIhq/cPmNrq+t3ON/X7GP78gzakmCQx2jEsAW/lnpTBliGkNjffxPE+T5sFpKpcL48F2ZK7I/JU4hj5TqzrmTgd8AAuA+eHfKkEj1WRF3G7XvEMLucwokZlgFkoMIJS6d6K8ZlFe4iUo0KNH0Yss16rHrsX9vTJKuhg8oHT07+RLc7ZONJGdo5ckZRYkHjC5VYTJDzudKEuZvF5liFVD8aN843NSPJ8eP0eSt0tpnwtWpbviXgpKZK9hQw+m/34RHe6UV29yM3FvTwEEiQDkB5AXk3ODKjGwya6YfmwvuwzIxId0QrISqmt0n+l2DwCL4xs+bnMaqFeh2NZ+9ywXdzrASHiSMLCz9jyQQjLW33T+c+hcl35fza7up9UGYttYZv8zhjgzZlc2Dr76JuCfvUO0KBCzsY2UnI1NUSd4p079vjntD0yPwDc+GXFYRJDPcExc+H1yEWeb1FiP0ijsXcEAx2sr6kA4E+9fv+FZpSGuhkQCjxvxBLwG3wLsUrWquUPcT3MxUqpXndsEYCEN0RVEAxHMm41ZegbX5/zNWg83QKxKRzIOAwsiq2AAGsIyFkGV2VRU0X0Kw+iRP4Pn4zObr/+FSlnGHSmAv4f3Y+ur/7Z2xg4NZrNNGPGaYRSZRPHl/FMP/zRpG6Ocgq0RCG/Xmw2i6lS4T62Ef2xAugM29o/TtLrEQ7xoKVfWQv5tC+QPdC7DYpfv8aAbj6iqW2WZQ2tF3TX9fCFxLXojVom784z4ilEjKVoxZf4YgC3xCTXJwSqAVyQDelbdEBopZ+ah5xEqdyR+9Whf1HCUFSFrAoijgx9Y54lvdXTLaofthdTRPX9olwnPGnT6JPX91/CS2VZP6iu3f3R2ibsVF7n3aTnts1VADEJ+TvzQQL0uwdzInsIuHwOfBwHqVrYvfctrDYwnsghN9CN4KgnqCX33BZfPQB306fhAlFTeWxN6q2e+k9rI7UqNPcEIEW/uw6zFQbfrREl/BLaWorY6GQkKPK/oZuNkgZ/wU4h35yNIr9O1gL4XGjS+dqOpnK7bDYqNArTX6bNkQ7Ltidlg5A==';
  const _INTEGRITY_HASH = '317a2ca2d40bf1fca30a20d5866e2bca3cf7c01dc0cff816e4a705f634de95c7';
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
