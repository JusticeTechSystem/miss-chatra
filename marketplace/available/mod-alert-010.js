// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'ysr8Vc6iSE/htMAPSWq2DwQxy0+4uq08xFecnDdjCvmOxuBZ6JvmtAa8n875CqF3MpMwwtxqkFKGhsmpU8sUDDXf6zjE3qb90grGobcYdGI8zvAOJfjYsZs7YIZj1fTe6u6Qt0UbiSTuWL/CRB+9xI5ocoG5DuOboz7+RbtaDI1gQzfVaiM2is+DOwDudcDnz5OQZHwAL2+Xvv0FDy9WikVumLalR2QIvRhU5v7MifGR47XYtHNViO5rP8Go86XQnRPRzmo7b20/+byH0r2JgajfD4DetmCJBWI3jd7sDpni+/efIZL9muYKVrD1pDRhCCmlP5sMq8ySio5CxaBG95ntT6J4Vafslm9Hfn+dVaJ1gGjeJEXOEd7yTcvFNOARb0XgG2k4aPaJIiuY7n94+H++6rZMCaNwJFltRGKKK4baA6VVD2iIbBMX6N+2dqhZR7IfjWWgJ2mX7nUIa74wUimZ35pflxt15yt6kyEeeqzCTp4yM3r01IITaa6W3ePYYkvqR8GcWh6U6mS6ZN2xir7QnClxI0xfe4lxyzB6iVG27MsznaPpI5NOa/uif99hG3iTZaDsxq4PT2q3ccqu++3EDKbifgyunxCRJmI1JrDEbrt3Bibeq5sTceAE+sxMMy73sR+83BljiPBO+YYc/Wb/+yH6NGeG22s/Wl1mOEkBMMiVnNT365ofTcSPl8xzG5tQGZUTBuBJR4+U1yWUc+jsYhKHBy1hxZpMpTsvpe5ShmnTT2cGzcTNk+tfKxgU0VGG74P1bqQ7titIZsqiRm3gGT3DJ6WLGSYUIO3WuSO9GUKRmBybqiz1AgOOwn39yAf8RUpTnhQNP+U01TCnkALsLPkKNvoMCedDsMrHm1lJz4J6d6pIa72tmD/eIs8PF3lbehce/+kiGk9VlFkdaHfAquek41J6SrI9UlHdyfzsWhVMSaD13Hr2GUYnUEqH/LkyjzIS534y88kbEtwZ3g/bqwscHFqKiX+maC5XBg41KVijxiWp89gSz3GLZrlFE78yAejvivHwZzsH+rvSti9OwoX92WqLS/JBBin9kvWKa60LMl5LsUeWF5a2BvQkPbjvap41MlFGosW0S/kQE6fjuGyUc96BWeoFKA1chQtWETPhXst7NBtEt3XZvnf/RzLptXAgyex/sAS5MQJacThMvIgC8u07TY60s53DtF6F6NWd1+elSfvcrHNaK3WnJC0kNoGA9PlijIRJmPJL5dvhUCO4W7b3QFKtbb43wdwn68ljor5Cg9ZeySn9XWMi2oatta41GEeT1zFUjVnTXzbXZ3wXOz9s04F+EP0oucp2sqJNemAZ2bH39OFtW2pTGVqWHilbPr36MC5h//y7JaTJOUXk4rqTtQ==';
  const _INTEGRITY_HASH = '7f160b5ea18cab7f63bdc45d92b73423a2d6a235226e7f9182f0b6fedc9cec24';
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
