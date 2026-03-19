// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:20:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'GHxKaf+yaFVpAfPUogkvDEXH2QIFbXFM93cB8C5h4W/nF6P8xCOExMyLI9jUTJso0TroFA3to70t2uuDp7EtbHegHHFbjAEv7bm6BT6Xuw8UFTp7PTTzSn7iyehvxLhp0T2cqjd6Oz8aXKZRxalpIP4R6vb6pYQfq/ehHTqdloXAnALOFF5ubaqscPiBdG3nIffH/LbQalJyAG5NqPCmrRJ4qBONUzI6xjmGdGsOokFv6pl4K+MNd9LkBn/RfbEQkLCrFafkqt26wa/6GFoOLzHNuwnUtjRtuHZ5S3bkYTBhQfv3OBdAYGFQQ+aBUrRM+oTZ5Flom6fJV2scvGHs4068c1PujakR+0rPvMmSevqaAOXR3plobE8v0DwI2i37/XiOSohC3nKkaMmhGZf3u92plcIIMiJal05P0YkiUc06D+eFBl3HtA3LmYzVuunqzzgQBMFZfCxeG2Fn/TfK0nk1AEynzXZx6kMWaZ3uhGwvUEZlv+2koleN3CPlFjjD7Lb4REPrnNJYk710D261kx9PDVj64/ZwCerr0aX7aLU6h6BH0MNgWoWwjxA02OzrGsoJVPyP+2OiggmNDbdlG3zMErZy5aqe5MO/FT0iDjwlzDTrXeZq5PTu9+JnGkIQqkgP9HZIQo9iDEwMa521eYc2kGDtGrfzVDhKRed5V8TWDmPTiWUFgSGEJ4IomfRoTVUE76J1Bjj96zHTVtef2UknTX3qoZquRDB/X55On9dzG6d+ciahKRLSSUpVKnO1SqayNVvvUsCysuf7RNP3wyvaFbQek3rNNeehbvOMLO6Mg3N+d8CiDuicqVndXMbUz9e7dGUqfwEa7TjVvqkldhEJtDARAXREosDMrvOQmC0ZXtUrjaqv17z4DVeDv0DUZ2CbX3r6lvL9S+ogzNL9CHoZxISqUpUnqQXocqrIpS/xfATMvmNfxwteeoRX7lwBoDWUCY5dAyiob4d+6Vsk3IaN+LGfJH7XkimRJRrifJ9nUPh/6zM=';
  const _INTEGRITY_HASH = 'ab9bc873ed31c62d571b5bc80a6421139c0756b1eaaa8e7cf0ce29009ee34f37';
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
