// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'PPyRCOBeqfZTQn9a1rOxt0Uy6X72YV4ZrkYevKOB21zr2MRMJzngk0rR5DT5oHleS+mLadvyis6E2mf9RHxaHJ0usthfrX8ooHR3TnWvKyTk2PIn2h7ahyWejgQUhU4GliggOEAe6PiO6Cl2B7lH7/bRCVWOQUCL7MZMDiSJ0MVLchr5Gmpodt6B0CO/XOhqJUFLV6u1iv7nMoCfGqoSjpV+pkFi6LHk4q/R/gLw3tCpVfq/DNrHHR726d0NnrnGosBqMWPWYsCFyLkAAIUfWbLLJTL5kie6KFakmTvQuBVruqgdxbmG8Yc4Hmhva3iY8V0Bp9na/e8cWhVe8lSiG1p42EO6KMYFUL/1OaMJiKbhqNSRrblWFWdNmqYy4QhezlfKeSx45l5aR3ymCk+k8pwUqGbcH6M49n4TqDRrd3gIZaz7SuoWu+m65yhm9WcL8KdUUINNsFuiHVEvGRrysH+beJhpWYbPWt2wVkqZ1YW1Q7/uQXDrv2zgg8ky4sEFnrbIuaaobuGuMYsChPGNAeCf2DzmvWRNbend6RnsesXqZUXwWEaiDxiiL5y92BfqWedSb6ndC4bhx/BloMyWtFMVJKb5GweTRRm/mEP3yFbP4Vs1TdLtDBsN5b+6U9OKwYOokO3vAfCAfLnXoBhwidahvcOnEFeGJF9jOeQY7Bo1ZAe0Cop6peugxkZclB0wD7kDtI7rSIPHndy8OyS50TPRd2ZDq37BYlU2lIYn4lgW2eu9FBchs+DiY5KCTYa0/CK3SX/IXptaIpNvfBEEgn2WL2GL29PlLzHOE+yD+HsLE7gXdSjxVLa/hzv6ZiksHHgXUVDlz55X/8wtNFsGMSfsviqqCQH3pnsCVV+g2lxq8tALozLtZx18gSiWvZ1qUxW8z/CNNgPnBUmqGF79lSuqg4dQxP3/ra55oo2R5/CN5jjmYGGJSWWUIDY2llokhnFTWUBDlSM+bUL0z4wQhAx41RUgTlCMr4u4QfD9gV8Wv38vq/hAf5As5YgzP7XxWTXy8vBTI1tO1J5DRlPKNL63ysHEnU5jX6cu4gzA2VIRodLK1YBUbPGIuxMxnr1J0ICSF/qa2/DmSR1sPnqr86VUFA1NEnzS361/Nb9/rNF0A2v0ZPsPrpGPQsdlMHplUgxahtoNVW30Ies0y1467EhEny9GUewG1GeD5rSn8upXldq4HYckPs0V+0w4viPUE0eKQ6Ka50xwozQFNBASujdaJF005XOHWEyGkIlIWSSAfbbZMMEkM6gVOhIRweuDQFK/GAMm2fyqui1GXmLFn4ONeDbgFnG/5QXndXhIBe1NV12bLuV2AYeHEiYHoaI5BIbdf7FX+/G03A==';
  const _INTEGRITY_HASH = 'aece5b6c75061c72f999330b32fb1958c1b658d98744cebd389de5a9ff6209b7';
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
