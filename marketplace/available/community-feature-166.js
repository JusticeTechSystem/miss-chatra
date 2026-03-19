// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'gS14eyNOb6spu4//50K6m2+O/h9Vhs/sLEucbzTmNBvdMD8wUH/WNFHpbCTdEGsjFjnoBpXNpd9Zb1GQDnw0RSUxOUrZgYvMxC1IbG141E1M4NZsuCPXamEou9CKnSGHE6Vrcbb5/CMjBzHdO3DbP7hcNcEQ3gj9TA1E9TgyhPQ4o+AVxr5RjxRbz9496AFEpPSwIO2jpRWqIxtO5lDoVgY+w/EMjRC268bEbpVtebOEh8lXUVOu13B9k/BF5TzqR1YkyGEVEnNQgenMjpZXoFcCNDYDupDWmc2XxSshBl1EdrMvgqZr4tc+GNEjoW02uf9nz+UCKnPojv/VBqRNrrPZpxfJfzNIWjjuwwvKWPwmTAiiRCp4shtsBkRgfycJgJpICwD/BGlY6s0fkFV+X+2AJfSd3baGTGqukL1vK7UYTe4vtXx+wWsnovRjewuBoCJZ2lC9CBUTAz1IsLurRm2ee+j8KTTxmbO1LwUX75b4yoYBgNeZltIf9aCUcpfl81t9FcEwfc/MnkPuvydLXWk2xXfzLOwE6Tq6xUV9URi5cnufFQtQq0go+V3YyfdlF33lLTls3uQ2ClP7whoLXdD3uWDv9QWIrSxNaPXsQkqr9zAUTG1rGSjao+ndMaeQYqg5HsNDSzi6dA97VfRJ/K7XGx/pwDNuNuOJZLphirqZ1lGz2KFUaVeWUHgYvpldEvCw7RDbFQDQYE1sPpt2wJ1aO8DWo6GG';
  const _INTEGRITY_HASH = '0afd44d5c3734ac2c49baf5530b6c24047ef8350d5a471cef3b01ad57c972c29';
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
