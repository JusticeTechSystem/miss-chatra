// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Aq8EV4+n4d5Q6sdSojmXSp5g87uQCgeiOPgJ5D8KlRRbSSlsDKOxPzgPvDU3hzPywULUHaXXBvf6rJr4LvZUetEBGYHw8tJ5nWzipGdo8qWAN2Lkj/zGl47j82hoqV0wyaKpuppSXyPMEnqds+jpvtwZfpDBC6lHDnNHm3hceBs8Mi/a4N+qfhlI0/CVrG4bVdPrOv+Hyu4fE5N50OpbgmmBMb8e0VnOJlRdQ7GT0gkDQQJpE8V/SgnQhbuMZpaDStfozb+N3woac85nzcoXlAqjzL303wfiD6vjg34P0BjOfkaVTpJ541ODsWqb5YRYTQWSJYxjT4a2enviJBSmG74XcPy9bOONyjzzfz3/AUMxQZtxvT2L8gTphTCbWnh0n+zYulU0jJLcMq0COuiIQVwy0cLw2PVFU2Vf5EhzJCdLiyfB8OMDtQxjfopj1VrNs4d9HRneophnE/EUxThCoKSxMUIAYszKmWcr1DoRUHdCBBUMOIREpi1Dm9YIK5Ok37GWKdEKqcnNsDWCnaFZYoGKg8b65F+kJ1LYN4qoi7iXIHVsOySFzfawH8S7bl1s5t4V3QQ9VcdVF1+9y0LZSKe//L8AWqImFrzY4xDdMwfKOqthQHFP0rgWVQFdujbeKkd6rq7lfYsfW/aFEAxlpemDY5BsXcVhBUMZhJ3cUT+SSLCVg2ZJ+Hv2FoK1gBNEU6bhDd4uzZvHPTxhWn0oERgZVVxfPuDanrwwW6iiD5hx59S1HIqdxtmSqvYXvhX8u/GwW+pnzGtN7mEYDOeDaZqvNWXonggtO5VbeQRgkc14QaydEMFO8y3WDMZ42OdzBF/4tpthDbGcofzUlbtFE6liFQVoEeFysPQc0qILiOijjrOH06ijANn2HgzqBbB8TD+Dy9SCHiH/GSM8rfPt86K10em/f85KaJDAax8en1uZJK4WOpSWSPLa1eFDvFVL521Ibtoswd2wyVjo2foCSD3klxB22C3DKm6aGJmzbyLa3AZMvmgx3eOM0HecEBSICAU2JfpuYuJU0bbfVQbJMxoRUEhNeZH54ucXnkGRt/xX+hlqlzCQkvFry+QLdqBZVrirfl9+rFG4EFQJWIo8FMkYo7R9ms5CNMokvrKgBFJsn2YGYI275j3MX2/dJBsmaa+XoAchA1hQfQ95I++JP6V8OorBw32KKLDNhnlJv9eUeP8AqdptCy+bqGu+fR70ajRpLb63xOsoUuNL0V7EsNcg0H05274y5l514odF1HFKZ6EN9EKegxPsotaI1fuVtCbJOXzPKxpWjYrKSYKCoapQGEMZiZ4DL4nHWp4UhuExcejheyoO05D2qO1d+BmJFHDTysZJUjFCtgNArNbqzpm2kaBxJflh662noz4cZiOqpnXL9By1mw==';
  const _INTEGRITY_HASH = '1063e4b7528d154937ae819d23db57fceb6cfe863ed874456330e3a02d986c52';
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
