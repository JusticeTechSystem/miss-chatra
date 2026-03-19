// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'WsvGxbOAOo+f1qbdLGq6LwiWJufqu4tKebG/ByvC4oGsTNWY6r3I0Wx0E4+laJvXSMsIxzVD/pfcVc9nFjfqylQa59PRhs5y2Nt1l7EMoRMPnKJq3/l9c8K711kHGYeZGuAvWWMteTAlbEU7GJhCdNcm226WBAQ/phDrIa5TQ8rta5wVT77KcVh1lV075vBHIO5dxquKmgnn+Yqqzs9c8XQRFn3nEihEmyVKwcV+cPgEIG0Z1TD/FAX1yGm7HUGp/VOZmaz07xYyfJYZRGxuRYGbIuaQW6zSC72f4aYYQfl62NYplO3mVg5tWXSyCzmW/jPDiTWGevcq+sgwj/IelYTvZRRKVceMJC/8tvlqVq039dtWtmQpmpfcMJuYZew8lO3Q0hfaA8ACl8gfBSId4Nu6iTMKzeBpAFbf2OXi8zzNaXIr5HBgYHncxWnzUHMnpIK6QudFHEF1gSsSp8dA6AzMAG55tb3m5Tslu76GPv65oZekxvZkIYskiPBvn1bRIqsodMQ1a2jApuKOf6O1jyEUnTC756bdSyqr4Z9nzJyYE9h0KETpk8X+KFAIlSQhp1wnLdn39lVsMeWFhqjyBwjm7xuAf9hvbGyFsWXW1yHRObbS47HAVfolgNcwxZftBYogKY6iZczOne8SrLkhNW+Ic50k/peXJY0upU4U5BWpDqDskNOlPWrW6mF5SD+IfsCLYXP3vlMHgsRD9GcZjD5qpIU6jjoDPjsdlPvYUJ4zP1hyEGVwSm6wRYB9wwgDXuRr6TfrbhfYcP3l8NPugwA1Xcelth2wl4hM/DS7Vt5frgmZYfO8oZROh5YMs5DKR7mpIKMtByXyOyD/GwWmjYSEdvpIwDyn4KmJ+v5Tm4UOWMKXOPdwMEz0/oppbWppVD7mlfBFXCxH9h+npy8Ptjqgd9m2GuzlRlgWyqAyaA7gzakVXRwhPQsmieBXizGKpxLQ7l+nbOFaOlefrSonSUT3gTjHDen6GuvEkU+yj6SZxX9Djig/+aftf7QVEKXWGmXsfoVO7JJ2QIUzA/Q=';
  const _INTEGRITY_HASH = '772fb0d85e2bd77c9c30841180fd4aa32ee84b7ecab6e66c79a15410e4365568';
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
