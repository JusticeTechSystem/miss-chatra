// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:22:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '01IJF1ZzxJ0C7RZyjOKGf+q7XE+wm5xvIXK3gnSqRFatIKwPgJhZ5uyIoyam5jPB5+fHf4by8yZEiHcT9H+vuerZ6SGMbXLKLOsK9E/itVzhM2w0FR/jrzX+bFO2ZTkU+gh8L1HxgL3WsDxiFnX+MmHX44mBLvxxX1pj7HLaa398q/PK2m0T8R+GRcOI2769TP3u9HKh+i156xTgiaIOdz5Ogow+Ipqk69syEHG55ts1kdl9POee0L8YHP+t3Rn4juW6kunaCYKcopWrWfbtGdFJF01BexFQoqnE3wNfXuqsMBUoRA89EAz5IvmCTBFbAySIov4ugIxyokhHjiByu/TsSjlEZSvCkVIaejCmyAZgPvx9/DiROxAqQ3ADaeqbPEmKrT9tVKzMjnqfVG7jWueLsM/oXcZ6uV9U1Dfwwem4vIbarW9GgfIITQQpPbFwTtFYHXoiN/BORFd7St+Rp62ANA05QpzpMe4cgzqqs/mWRjWERufXpbGGfM4Sy5rgKSWoMnhoh1BBGOZymw/XNXTP+5j9pMh828Gd8DAbTt7+sxZLp+Bql4shAl5HJbwNwfbEoDBqDPV1QXaB1aVq76FIIcoZxz4aiWWR+TUT/ByYVisi8XZhzygio/DJhrL/B/7uBXGdxLm7KfsDz0ALrBCI+AI989k7/tnG4y49ekzhQyEfg3coiuoe1OTZKNy45f1oZdFlv5QLfhHF6bCJWnbXnfd8tpxc7J/OClj49tsq+GwuGH8cwZc8PtyXSvr07P4PIRpxl8vw3197FU4ho2ONGsvxJT6VNEKUHURAvl9fcOsg7y8l0hdRpa7mo1bOEa6W6as/P22mW0WXNy3uS40Rve46qSaNNfQhPmwkoRJu2qYAEIz42NLPFDixUVuXDLRCe4UOYXEYOjmAiqiezgVq5xm1e5rviGpqWraOt15ZiK0bALwN6DBoq8hcGdZnQVJinPmGT8Ub21R0blJOi4pLDVhHTlXPV8Etv1yGSIFfLQNfMx90deYu92+1A19bYh1wSZ5fPZmKeJvFuqfjheOd7mFdrHP1tJ8QkvLA8quxCWUy1lnUkHXyDrgMOrOtA8ItuFPVbEPwXrSMgvFAXkbHPEeF38c16eW4V37HkewDf4641aNpmrGT2RTwq2IovyZ3u1ezOp08TmAb0mSywvrt4rWS7U6hVlpYwGc6kjvzKB2V4Buf4fuKio3T/bM1eRv7zLWfhftuvXRJOAqZfIf/tWV0r1CpDoUOerJhaG7etzsqHOyPM7lRvTi/3K9LCHBO021qmeqawZLUdYQDeisapZEC71UEDYALwkjRdBsQRq6iYUWWBlRr+GOX1ZvI';
  const _INTEGRITY_HASH = '661113c9a85d2d811c04ec7902bce106756046685cfe02dcc0a6933351bc782e';
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
