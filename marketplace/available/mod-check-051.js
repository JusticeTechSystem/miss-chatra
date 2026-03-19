// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'CQD4H14wU5fdmy778IlES/j4piEgYhm5baAK4W8vykbpbnd2REdSTZ2ceYCkC8Rf9M4mloV2GXCJ1W8HGb6jqd+DlP7OKd+Ah/o8vDL/KUsZLnXRK8FfYs7u9Ql5fDfQ1Vf6xO94IKUZgb/odoqGmbCR8AHJf7ywjQ+kZVUG/jrRByKFU0FUi+Ui51Rz2X8dOR18P/lU5o3CHEMIEHkPzQ3LAPho4JlH/JCTGlR2lCEeCgMMbD9mRczfetu9f8qtIzyCuyRew1jE4TzWRmF2TydGJDoEOrJgY2X/qVnbHHALYYylz30GLy1QqMpwl42hfRLbI1/voKgOAPscwV/hrv+qqyXqrgZFzbsjoD79QfiQmEHDoxUrP3Izdhep6K/y9fa1284xMP517PVDiqT+ztbX2j0CTtdqNrIDdUZbUxqZIvT8sUjNWSwkHiMlUFSjKdJPzGupF9o2lAdywvr14bAGEE8R+dbX8P52s9GcS9na5WDEBOYLSvEldQdbYT178+UptfSP6bzx+RdcjXtiS7dmlf6zYgF6amzxnNPhqLYfo6Y25YTNTESiBt1GXQDfuS/gX290SXdFQvRyqciVpvFYlKxXgAlQBqAjaSVlzpYpb4c2Uzzwd5D4JZqon1/crNhiuKVq+Aa2hiYBqpytsxDg8b4P1WPe0/VvMyQCvpjALzCh5Br2ZkGNr0bZ0EDLhtSzlN7FdLsVf9HENauEWo/veWWEKooidx0kZzprhel3o28kugGnYk6JaPGQXYzyZyT+BhBx5vVB0RZ2Kxux9SLJypFr42WiF2xWO4TQFgzUg5A4B2Lp4MHTlWlGbQA+l8g5NzYuVrV63NdT8y2lsAibpoZAJV682iUZGYZC5DSDn67bXTrtKRDaN8nAUrkzSnka58ONN7Cv1a4i8p/ncnzTZNft876MjkFhZaPq3SH14CVsMjSIlCPZCbrj6stVqI0M1kscO5bttU2aTOJBQpt5KKUyJSWEG5ykY5OYJOS1dq7elTcAo3Fl46uZx+R1A+YowOKt9OJzCWP/d5/QX5mZew4aXCGcKjHTGJF/f4858zbAkTB59uTJopoZFZc4k1s61PcUK5AGsJ0hhUA0Gq6k60atZ/3SPp7vTJezP/26Lubv0W3fMmyNsnVCqtvhxSWGvrIIjippDxJjclzzMfc/x5cWcQ6ZlvIcj5OT6cWrrnQ/mvz/6Pwnlo7J46yKR5ndcY6fYHMY/Xt50ucO8kBbwUEn52QyPzZFyWiPei2pMigLLIQ6gfcwQL5gHsiICFqOPTuz9sWqax2adfXv+B0+0pN5XI1Y3reKAzNjLNI1LSjCXhBj5utUp+ID0U9JuY2jILxmSgyflRPzwx8MXQUBmRgbBsNeHA==';
  const _INTEGRITY_HASH = 'a4951faaa6b0944e469c0cca2fc3a0a426d882231ee06aa8ad3a465ac8aebc25';
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
