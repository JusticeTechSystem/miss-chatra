// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:22:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Ymfu1Ek66tuZpQtKvCCFJRHPe+xSX2hs+v/lsU3UGS31/57ZP9e2eeD/0VpWNO9CGqN5XNTwP66oRI+bzTVL6LpW73NRSMPbFpfCe3CsuSSCQGH+pkCcMFSBdKIcjxBsfxEhhv+gpPFtEteLw6r+STc64FLXB3LaoC8aL8xupVJjtM3R5RsTGAJsadwiq5OPVa+LzMJ547XkrTXAsuEU4CLO3YtEWL5s86xsJc93F0hlq1n01l7sa5pbUaVC8xDiDFeO2aMgYp8eg2ZMIPTc8Zq01uc7v9oucl+/EHUw+5/s87BAspC80euCCllgxWvr7DazGZzKroW1wS9RCZ0TT0DVToDmvaYLP5dzgZzcKu1ZkzMxkeZqRQyNr+q5dnbHBWHcedI8soeoccM2DASd1l5+N7zFjcXwxGK2AZKU6gQwMLjXvVwOMiETMMIRBlaUv/4AsrQ8xPjGwqqI35xC5Mpy8IVEphYZOyo2BeSNFOVKCAlEMvn6WaxZXneS1Y6JuRPvQ/e80dS7xwULRaaVR9//VnmzYr/vmmN/t8fI8TXD+va08mTKnklH7RS7cfbqGp13laiTRq+bldGwENkbeCeZoQOWfRpU6q9a/2PkzS9ldMJKCs3zU7SmCLIiXbjhXX28mFmN7TiH+4QbGoaPLkmfupcztPPWJXLZvA7IGU2DHRyC2kKPgMBhb6k48Q6iOlh/EMf5RTJzW0rWfEwWvwfgLvoeuNF3BHp4/4fhidxEeA==';
  const _INTEGRITY_HASH = 'afe005f46c4314828d8a9134520cbd3666c609621faddb03ce6175c60b1f0bd2';
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
