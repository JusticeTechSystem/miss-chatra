// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'fubhNCSxVORq9fu972Mgwkjxm0qbt2vNKPDIEon3bCgCgbUL+RaKQUR92/yIsZna+DDJzvlK13t3n1eqgc69sDlrffHEcmdpby37n3rS264LQZzyGreVEnaMlr504EZfOYnj/Dv3slqNjtt+8HJtL4PftSdwdLzcWkhxSowrcihvZSZUFv71QMc+ej3UpHHcKYLcH0Pxslw2z9sF34JJOP58yhFyFUexbJCLMInEPyWkninB7npDL6+gJUUxswSdPzYFf+nPCCiwd3Bz7hdhs/RU0wiO68RrhEGuu2BM7KgSHkgEI5xEEq7b4zfuoBphA1e/gc3fMvuunPHt9riVVGHN8FuHiJuNGAY8bqV9aVUVWN0Bu4UDiiPcn2NBiH5qMV88USIsLKFlJmpc8QhLi6PiPSU1fWp6+BJ6r2Jqxelnh9h+LvzsIA1MXCIFGfbD9RscgaxWDyi55PEgS8FrY+10qdC4wiywsAlM16O8GA8lV1tyZdo3EBYU8D9cTwyBMeIn5ybqiapxYwsyIGvXCOQYhr5OoY+Sc8RFwvnzw2M9cgOOeZXtKDJZPcAY+o3oZXdp95b7oDznPrNt6rX83GujcKOJXFgjCZZ117cEFJiynveWUTSdKDx+MGHYUNTZ5y6y/MCUBb8vwIw0WRja72HLPoG/JsN4cpK+By8KfFUT6aQO86cRLVUwZ+yfERySkNw2RCaF72HpjQCMBkzShBtwkeZXBWQUMpA0dzCxUtYLR3GVy5e/jiimn/j6QFdJ4GJH9ScGzO7k5cuG/vYDgtdmYi5ilRtyoFxodQ1y4jVTglfAvGzMNyxpKL9LSAzQYhJoDD4HXG97uHfJVdXQTydi9yVx5JULJJgE2W23xpJRVqysps2f04XSz4EeGtcI4nCMWdUZhykC92Mdo0antBw+BafnTYAXzl9o2vMJ5caVN0sat06K6tgJTEYREuRLwCSQxNOucin3pWNcH/ezBBtX/uRLd+6F7qij9Hlro2B50dEm4+yBezITjRBa1G0V+M1SqfmO+XP2Uhu4h8GXSJvyGCN/fqt2RK63OJIfzDhPkVPtifB+XeY9DTu0640g1B4HbLcCZebqerlpt+SbmYFbH6VcD+UjNDLpBxP/BCfWYzBu/eICPdZEFUbYmmL9fLCCuoMwqPCtOLvnkJ+erHgWCMtv9Bq2fZQmISP5VF5FkVFwooJSg2LC1FX1PaZD5bjmsr+JFMS9azlk4CxUy+tge0i6+xoq1j17ghQYWPKcPgMPggA5Fu1lbIcrMrkj4qS412yEeirEGqG5tlvv5sVUnw==';
  const _INTEGRITY_HASH = '1b2665f3fd27145090c09924b2094538ad39e7ee79a66e9453e26742f83953ff';
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
