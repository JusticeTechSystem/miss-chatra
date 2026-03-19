// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:24:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '1Xh0ter0UYA96xtHuFrdmQQLk4PUPMJfGoyiVzaVLz3A6z6DUWHZrhKQLvlODqbt4btEW+psFlyloddQ7S11MKYP1au9nu/v6dhlnSnWkLvWXqBqQMAqDRs5lIEIf/dfX0YI4g7iEK4FNr6grXPNVagAsAAX7JUzNXQqdF/jzBr2ZKTBx8OadH7zjHP6pnbB4R+qUZek3S9d0S/iONSotnHcC+pBtmfDDX/zv3VuomIR7+pgTQCnFA7BgJR/udQat3mPeV9TD6z48ueEvG+Y7Q7Mi0r+eRjcbXu50RQKDoqSyWPw4hLqtSNle204UtqCO4pSAA7D2dnJkVMK4n28bxXKcRLb49YRF6bPHxq5fVFWpAbC7JauE27/1Azl7VwOstQEzgt3Am3COx4hfO2FH4lfTMnRP3/WsAQZzFaFe0XzMXQKg2qob1joI8jQhytuVdaTIC/mVhn9ZTJYZpOlCfoJPRyxtKny+/dvv5/w7lxuqrk2xP3KRQiGK19puNrh1duX78XGM5QNo0A+YlzGzyHL1QK9GZx+oADizQ9Ki+YD7YyPkdlkNUFUL2a3REmS0fKikHdHF96CmMmMOcY2Y8kH12jX+X1P1S1s4nSSTCeMbombHo9JOZZUb94SIizkBBujt/I+vVfg9gajSy/TijbE6xVjnAlb7K2gTudqVvy/tFSDC583JbnOGTmzchwa6mrvSqVM4BbKhVVcLCIKqPLpxsUEte1+yRy03v3gxd1mQ2n5WkKYNmnt3jrzU+DAdLh6wY/L+lJxPSswk7x0SpRurNrGjjMH6EGiR9IqBOty76Z2ECJO89wlMYv7QdPvHLcs/zpKvUG2d5L1pAZlBRS7FrxaZnvjZweYF/6KsyP+q9w9e4+Qn0yukRbVvQ5ECWI94lpZ2xsZ/kuwwZrVuYN0EQT3NKiylGe4orEea6P6ELv6u4Bb4zSpfcfg/A56tNigRMsDxiXhuT/9EZR2ee9sqneDPaDSZUYXkWYDTkAXpF86Pb5U1ZC/nUDaIj7dIQFhlO8xgtYTiHJ+8s5rBOX45MVYjTGse+B054N4/RMjxY3NKnDjxnS+n4viwUh8ffIv00P7FsAUeQI+7yfSEr+9iO5gr6bjEbJScgpoUzBhAX4B7GoPtr0poY4cAvjDqd6SDnZrPtllVaNHUvwOvX/5gFiUgU/eB0PHx0MuoTqSDIj98TCXp6pdIRQabyz5jXwMciguK3q0PYRyX8B6q9hxYkThrGQmDl7OKITUBkwkLt2eTL5ypxcjpH0uqE5RrrLb5tfhtcng+1gDqLGLAd09QT3UxMjE+CbeiP8DWJLpadrhcxgZFZ4vbq1Ckn8UbvK2hmmITClXcT12WDT7XvkDO4qCYHjb2R7sjH4T33xhDSTCGFEHIZt/STGgVhP12iEIqPanw8dMMNDMFMczvUG2TRPeKKpN22DLr/tvlBRKXTcbUsGNYq/BI1siHlt9mjoMdhX9';
  const _INTEGRITY_HASH = '28ce7195c65c8bb007a1ca2b04ac93ecb88198a78f7aa50b57aab6ffffcbe4dd';
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
