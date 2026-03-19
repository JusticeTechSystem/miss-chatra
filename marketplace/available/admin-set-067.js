// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'UG3CmF69cCEkuAWYoMgD6vBDlXX+5MCxMVhI+UgykAzat96FL7C5gh+HP+Z++GfwMeMJDyJFCB1UIoALbXbmGtgia9EuulwNoGpQlzJB3dk4r/K+otLCtsmcyF0XGISJmtZ08APxzGMrpRn/16gUEplFy8RiQ+mw2B1ZVxPvViI7u0+uEIP1EWEBLtueT0prjs+ug1Fa8j6M2VpI84iRy4UrzxkVAWEu+umvV3y7XVOxKPEEurH9ssR25wGzhkTPR/+qEUdVAxD+myhpL2ivnSOHhV+LPsmn5ZsF1g5Oo1asCZom9n0GZ+dh3k4ai/u8VYshpKeJuPK66ur4CffJ0/L4PEbBkdGWHO6/2FSqEFVzlSBWMKHPkksxhRw0wAUr/ldIr87YgpYP5SuZPEVnoC9pbjPrIM6geVaeMqsEpxcbgqR+Jj+nUnQflNcVwscg/p6afuJM7wQzf7nBHqhz7lyvmLTeGe5nY/oVmHBGjdtOKZPL4+zlZdoghvCmFvY2ycilM730d9pGsDzlMi1Djf8287aqnGqsQkaX3mJGi5WtN4Al+qesbI6Bdj2zIQjhhWvETX0ahzbjygzdVMhdrDdUVECv/4+4Z5ug/dIh/MaswbFyM9b6/5aWxyCNP3117iBW4V/+zanDH/pgvm0RwpaJjyuH252SGxPEXf8InwDEPUKLM9EowThzJWhptsjkNMHvXQc+VLyrTRpbb8FtxP9n8qh9C1YJ/oWLsYus59Wv0x86DFtl/dNEObSMWGXze2Fh7lDW+uS5aFViYAN+j4v2306AQeBjsWcrLEysqM8z774dQLdhJ5cOtjfhYg1Uu0x2GdfGZpgHr/acbAzBmh0Sx5suSTTOghL2hdH17GIOJLExMNSLAgm+Jc/YOtx9P1/dVk55c1YKYGdSASV3yql5cDhw6TXKVb7vWWgu1VjCSzt7H8F/lTdzzQTf511P6Sgd03HWH8RNzTuMFfknd9x5OuEjYx5i';
  const _INTEGRITY_HASH = '6a2c740a6500490343dd46119b810dc47ae87ddc76d4481ed42f648bcb826db6';
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
