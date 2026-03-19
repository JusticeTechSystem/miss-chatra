// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'IrVmcEVA4f71RzC2D6ALeP6kwxmDH5iqtJrr0H6XwCYjTKgbC19pCKNbwivqrNoNenrrOhvUq0qmwRvczxVZKzEwYHY5Q432GcOoHuj5SZ8PivG2rY5pnS6BOgz5val+GCknJo6ocgI8HHMMJrByfof5rTIskCdTp5th/ltp/ZoAB+ld5v1G3vKUTcyF8842cS2VSiZiW9EvXcCnLE58QSDFvp0vY8p/2dyKoDxmOhV5pEtPO71XjOxOTzQrw0AU4y1JQDgH63+ZnUqTPh2aa+0rDpQ9CXKCQmCvC2o/PtZBaMx8rFcTPyGy/trlPtY6L3u45to4BRHe2AUKeErGpESmw5Z5Ie3gfayuaHSRLft6SqFp/owu83B0EDMtB0xMzBCRRPBRF8G2XxWCWL67oN/A1UmWtAf45OPC1clZUuF+arN7gdCIF2zS/wdxi+jzat0jZmYc70+EMIRLHYDz1X2kplaA6bD4CJzFGK7Fkv1mgnqlEP3Wp258JpIKu2fNvf/n0Ok4+8x7ahg7vcvyRELRtF+2zZVREKbcB1ex6kOo5hhqtO9dnabztSVmhrQeYfMrUzbDzibFeUU11Rbt97CN3Ti0eTQgDFXOJCADEIw2oBVMjzADKOWz0O9GITSL95GOFJO7xCFTRPFLV/ZAWjdrszbdu53jjA1HdVcbludnbQL0IRvzv4Hap7ivSaFdF713lVeZAha1tnSgzY/5tz6+xekvNxLaa6LEqDiLmaHq0huCv5Rz1zUK1d00gqBa7Vwvji1mnH+KDVuEobI/ReVH1v/phm4v9JD+yJ40RvBbNaUF1aghQ9MPS5H6UV/CK2CIMHY8sU3Q/JGXCwuJ/f5v7yQ2117z8HTUv8UNx2v2wA6Ebzl50r07wyUkP0RXfkpjjXgVW/k+XQVdf3aqkV1tyEknl7cZvlbLvOZXKgzu3Ait3JoNyH+Cjb0ej+hViZfywHW6PoDSjSulOzTZ/8RCvItGvDAWwzmrzHte3yMSAOrfwWlBmzNYYRkDBLhIGmuz6Y/0NR7rA7qbmgVF1/Vfb69EkPuz1+uhZmXEy6+OD9ZK2JpTI2tu9Z5QI6DO3mXSjLehVXHJFH+Ps9LEUUdu3XYaoPNjqpmemm9jWwDyI941XOsjl8F6EhJkUHWwzfZcndaT74tW1O7kL3aKHYNWyvZy9rVT3HmNEKedGIAee5FjK9Jh/iemTX4xr0S6GPjT0XCs+GD8zLELDhweRfhIITGy8bcJnWddH65QaQjzR0ezogfZHOFCg8C7dPhw9iGHL85YsnWOGF9mz7tDXsfBNLuDxhRQQtVqnSqj4Ya7KTTCTrNwM99rEI8TgSzJDV2XJGplCYY7FZPd/NAHJcEXsCF7rBgC+ZdbgeDd';
  const _INTEGRITY_HASH = '69a5e7456291aebe00ecf89bd7db502984365b9c9490a5eb9eeaf7f821ed5718';
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
