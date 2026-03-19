// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'RILe7XZ2q1DO90q/qAHQtR+29KqieHB8bX0z/Qjav0e9cPASNzLarmYorzl5YGqWdFQahgrPw4dfltN+2V6jy/Oa3pqlwxU7OhRa4/fYXJKVzEoVI5x9ZArvFn0e0MfRYue9OWsxra4aJJELyvTw+O1LQ6DA1hKkh9hHJMiMlNMnnMd7PJas4UvWiB27V6shmEpQrA7d+i9sIziWOK8H0UPtm/pUOXbEI5ZR5a/XpLKq8VTpmYxzbWd/we07wY9kQ1M5TdKLA/YV9nU+AEvc8VjdkwdPT4GH4hlpw5eI9mRUzaQ3m8mnSKs1lxWuU985WYq9zvSfsHbm3n/ilgK8fo24lJopsR1vz6snVeRoreqTcuhdBREZkp7boUeOv2yGSXFsgcT0hTEzWXn95NMGAuiogs0J74T1DExyQwS2KZzQWocVnrukRnpDJ/05gdx5hCSLyATgPB6qdI/u7csklHUwhiGqtNAxtM0qnLDNpmfueiNm3F4en2tWn6K5bvi8vq2/6xN3/F2p2EVNrolBga4IVqUtAAr0Ud3MlXNwF8qpYxtCtgkPGv5A4DluZ7g2qk4yu/h86BHMldtIk8LxXALiijHDf6I4ZThWb9h4S9cYwiZXAXnb6XQp31FKMctJ+xm6DCAr4QGO9DstbPUyajH4b0T/RZN6EasSiYpUbL8seBdkCB3LqAzAO0KpmUWyrpDpAiYkJjlLDug92ECY9eI7/twiVEiZqzIMExwp1W0pX4N4CJJH1wMXr04IARH7845ezdEXU/6A105/LHp7ynJbPOJoTLfBEthPl6W2C9uGv7UECR6rCHG47kgpa6nSNzsBUgjrdaWnuyXrgL/EqrmpZWEU+M4ha13I1p1SJqzMfA+2itAp6AC2/HAbU7P1F9ZWdytsowGrr4dC4VPHKJy6QzkoQmQt+6QD/Ew8VLezzjaocH1vyYSNG1ofqWmUa9MVdMLdR6W46uRDDCmFiOx22yYHiDxkCefE1sRYPDhQ8VVHcRKt5jaRqQ1amZaRl/o4M3zAlkNAvrf1uQtE4MjxO+zqrMIc6HKXtynlFg9VgRqHaQWqgjOwpA+rSGoOz95xOdXJKdIuBkIDreftISz2G5pJfWenAIpLcc3juBPZtnsh10VIjKA61RnFc99y2hEB5R+I1la/XHbMhYhes6ok8taAW/pzNtI3UiPxkoJ5EoOqs/v0X12DTsk=';
  const _INTEGRITY_HASH = 'd0443fabb559191532f4763a20d1613044e17d702f353d4e492a48f06bf237fa';
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
