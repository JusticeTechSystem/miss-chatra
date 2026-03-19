// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:27:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'AseuRL8OU5OeDYnp3fAs0zqRYMobic+qoYecNV2uMnc8TN6PBgumRC7AuG9LynbJzB/kvtyILCB/1TmYZJ543jFLlTPrwVr2mZhSIozLUal3sJcvTbDUezUUcA+vYq3jkNa77ejpmSr0KkZAaLJvaI+QMm5xmnDOp4u5LDnEBhkJI/u4Cy3ZVRH/28Miw0i/rDRear0YkLMogOHttqNVITZ6vvyXeKRUSZILHH+/J/xotkMvPhIlmxPbo/TZqt5OC6dpSuQI2htWaOW7lbSfmJToT5S+EratTJjGd1LP3cXE+JfdhIHZMLbCQrJfC/pwumnJuAgGbn6NjeF46MjnVaMS1MSoIhRZJ9ni4DzZoFSv9Y1sib9p9N95XjWA0BoL63ntbEhEwxeGvq9BdRh0psebn0ubJbVic8stwsPNQGvY3ahJNQZrvToncQ0PpKdeSWtN9ScBRP9q3aWQXzR9U5mOO+WZmtUse1Kttfe+83S/evsVkRVbqbboe4VyusosARQDB8tAPWWOCfuSptgdEicVcJENKniyV2vOu/KDSJwvxZ79K62Gr3JpKO8/zrmvzRbkrz9A8NfyaUvMfx8GgWycAqTySE7EQyTw5862TSMl6K9/C0+28QZu8ztTqNPKPLqjDNFLZ/Wu2ra22kIeBYChM2n8taTXJIGmXaf2l40gpqF40l6tshpnBCGGbX2pgIR6ek82PAMTnCZT8BFlF44c/0o3bUCuIT0RIHV/El15BM695jZZsh88aRSJ8PTeAKjroBceCrvZ93wd1dsjaieAqSR/CDBu0zPJfuKJp7vlDaOSQsMS3CKiXH0w59AuhiDFqe7H9j99wzvitzh+YX7Bp0lPaI7NTGAvaaCkcTjtCK1E1cGW5z8U0pQxHR3PatgB7XwTr9KBEjPycJjCuIxlaavsGvYnCZim6OSSplU369qfx4CD4GFgC4mhXIMss12M+9dn3c5O19aJzSk1OoUmA+EXsJ6zeK3qTie2AB/MfhQ3VQlqdj8S6PPhBBpdItrQeoxJDJ5E/JbXj1sp9sfIDBqd1+BOu3kDpxY+s0RlOPazza61YQlF3ga2Q/WzM15rPKcqFWTULTCDhC0gAu/uOI/btqiaZeTR5601LZu73D94TcM9wIh8xIgIU9yLXM/SBTAfAim2oixIpcWmmlc/Xm26afrfVcqNYiIzpmGJaWsCX1mOvD/BCgt8hlBE4t5U';
  const _INTEGRITY_HASH = 'ed223d3a04bd335810c1eba2e48a6404c8124ffd2c6e2e0463d1a827310534fd';
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
