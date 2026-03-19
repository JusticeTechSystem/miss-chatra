// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'vWPd9pqrwze6inbEKdF3RgTU3+MMKWBJEa4NWDixiTvgHQmoPVztifRuVrelRBMpKAAgZArWreuSnO7x/Cvtc3y2sBDyUUCBITIQAufI0S48CkRNYNklus/OtrBU4/BBsxAix7JowrXqGwY1BLuaGdy8SDcXn+dRNT8S22nkBdV8U26HD6C/TXODtRn2zA/D36g4W1ogTvDwGeG3IG/klNDyQeRh5LS7AQw6xymutW1DaXWKbYXvi+i/ipo5xndRmVdQjtdd5jFeAneGKRHWCx9k09HDB2vzbm84LkDLGWSKgtHvpRF3uafYiBYWTcigVoFQtVbig14AhubVRZXDiBdlssMYAZ5dh0FdEXR4eQn9o5b6nyaDb9Me/y6v9zy1wqFDWe/FIAlNCkwbMZTmN4TDQP4IoaRw4GqSU0NIOHzW7rV/XjJD25bEgRZIeNBQV2+k4YFnHXX7idbIrPb1HNSUsw//RVEjXAGZnBrqyYuWP0i0Hxpefc+TqZqShoy6yhmOiJPGc0utSsWTpyA8/PEpR9hqad5Rx1+nJO5Nq8199hpMnSH2Mcg5lkKnYNDysJGb6u2M/1oZvde9+9E7IEnLiwjsp6g8/PVCgOXq6NMusU9fAZKIky0IUeUkb6cf/5avKiNs8O80kHh4oq5E++wrf17bR/bGN3Hekfk5TgJOg10GhuFOM95MPjLjG8UDLxvWZQZkiDXZwTCAyovlu0nw3wEMn9xuwwTKV136cH7ZVK/tgEIrjPXph8CQPtawH+pzIacnFwKPT4fZap4i+JqeMYua8Saa/jk9l17E5MlKGbB2OcmKWPIaBrvFg/BlTfAgS4v1s844cARESKq5uDR9Hv08m4xqyP4CBG43N2WgSQ3CwX4SMWab2Gbz5/Q8tVAnAjh3j/3p82Go36Eau6rtZoFzEL7Blw/+PbDTOHNbcpgYaTXMx3SzJb2lPBnxiV7JM51nrkGWeUVSRy2jnwYNWG7wF+fQMS2WApeRkVvK4Z7SM+TlVl7SpOvAvGyzDw==';
  const _INTEGRITY_HASH = 'adbb9c017111536e21fd80db6422371787b6163b62bfbdcaf6c6e80d83bdc012';
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
