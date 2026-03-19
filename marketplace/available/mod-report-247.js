// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'JoCiRL2on3CCPisCgJtE9PfEmhya53Cdr9/8fuEil+IUIC6dWyXYG8Q+N5BeGHy+ErAU13chMSMhJxEGs6gz8E2e6Zd7HZji1qTmYsV/grTwzDqTaHPenpv0Uv8WtCd9CX6qkrWODJKq4N8Zx/YcLX0mxl28j4DLFg08wv004eoj1VPT0WmP7DzgVEnlgFa1WZAJ5xCqn4urJDKULNqe2fqrQTwV972ZTGiYNzjV9tmPO5+2fkPUIKdk5lrxjFPTC0xmhbjy2kzaq3SUIvNaMV62FUl8/Oni9CU5UWmTvOVzBZg4RhvC8r1Q4TaFEq03zf773MBTplVqpH5UfMYqkPYIrVKBDJHVw5o7wGToQ4fdJgcJnSq8yEhlwNxa6hxr50kV1PqWlAemhpeoHHpneykCITeR/ty/Y9hDDcmbQTphz9coRch3a78xN4SPwys01NCD0TdRmGAEXanBKVNSw9QJtzL7QSsi32ZxMRb9tAJBkcpKulXL72JQgcnlNu9XufFXa8lI0DFhylcVnmxj+VUhm2Ewrd7hY/PG+HskYA+VxoBQgUe8VaXaJBWe8zzW2Jj9zRVWDfGQ+TZHngSAUkw7kcayUJW0BGwua1sRyhyBFGV47zrsFlojJD+/P1ojfhn3Gcvb738bBmt/jJZxBQDHAwpAY1/QWTU1S858xRk1LXICH1207k15HgqfcqeljF8xKQFwjfLv5LdAxAB2Sha+NqzC4PJ4zwtURjq23jqf+yugnuti5KfwQI7cBg+X/DF0AMtbpZuAVf48aOK9f6gVOqMQSa7SE5Yrl2F/O/52vJOyr2NiSlq71ofGifIboCAuY7XjrDa3dsbNM/cuIwGhD0OliepZ8eeeZefAUoJTO9PkEEnA8bdEaYRRmMP9F2Dm/hkwTCM34D32nx4BlwPi/badQFsCDYPlO4ZzaHKqN7VZ6qcjgzaHA1yoNWWsdPdrPCu1K1EOQSyqd6bh4EiSU4Vr8bRkwxxfytXeO/mNpvQeMBVL+4knN3m53jPsLgeHlO9t+XZ7kQgd/vuDr/Nkn9xK3xNP+ej99iNsGUanxiUBsvielSujqoQCQOyl56tqev8hVLAhWo1td1i8c2F2mIv4nSNgooC/DH2nqFl/mWptKtG/ZHX2mdt08fNMrFSqcvkPOAwX9CuUIiIwBLmvPRiPES6GC0vxZGJw8KkUor0BYkcNqd0BrBqEAIa0UGbZRF58LPyL+Fh3zp4F7nTEJhCVrTd9tiBZckiDd77cUvbD55ztMM63CN6wNfRMytEqx3DnARBzszdww2eag5eur5CkRG5M7OG9Dad+1oEYMUkNlFuIi5DhiH49EXpBxB2pph+OSVthSI9fw9k+S4r7IDfe/+fs2c94UkOkyTYTbdT6BDVq6A==';
  const _INTEGRITY_HASH = 'a8ee069dca2379609ef7325be979a8bdad784f4a32f3f9e354d74cd4ba50837e';
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
