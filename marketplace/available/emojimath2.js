// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'D2g9HYVHWBKsqPjPvOT9kumIXT6TxQAS5BAu526F9cvKZ0vpIBhUDYPhH/Kh3kYkJcY30qTdc0KYmOsvbOMf+Fd5ybRttDSknBe87koLwPPI8HuofLR0sLJ4d3bTUFme6oa0J6nkMDWmDuTx1fqypI82WFYzFb2um6piNUG3cknfnnOZyF5DRM23iSaniGuuyK1f7GxjfNnEQEgRaLIgLJbCmuCDK7Et5z8LN19KFMUgy+qrIIvyCzecAOoyuCyE+9zkbYHzxmI9uGuLhjthrWUks7/zH1oTmTT2m+PO7AURWG+fOouRbaVQ7RnGJqhFu5FmtvwYhMNtSQCvVHZhMJtcz5jN1PPhPVdEctGkKQYko/M9Bab78fuzQkVRRUl4Z/CO4nxoriWB5KQE3Ha0EgMbnF2CKQchqI/WtPUgqkZ3y7yzdFTIjZqsGbjo5lyWC9P++NoESTo0fIScTd3D/clABYijqe5quCHquFc/b3fCeN8XE88DUFoq/9fH4LREqj1UfD8x8frdF75x8Kt6FBSyEwzdGleyGt6jVgzIZd9NNtqcneta4Af0yQJh6AHSqAJ5jfJpmv5rXF7iwmwSnLCHIE/315TFSWiu0W23PgTxeU53l3q537HJDART9ZN0ZCsUTYQCeVAAdhG6SbeWtWE+wWbogV5KPHBQDkzQhpc0LUxdSx23PoqUIvTV/xsmYcWIGl6dNI6wcDFCHidrT7hZVIV8jNAwhNxIl8FmYXxhNoNjswg+hqBM1iT/VayJ60ExA9PVuPmyThgNKckVEg6wDkamYAPOc81T04B7exUsOnLIC+E558+T31wHQQsKmdOCj/4Km4tGg7Uw0vwx1k1wG+QaSy18yf/rCMyV/gP2oadd8OXWKUw6oXynvnHWDGxlg1DbAn+u5Umhx91nbn5tjV5p/XPLn0V4UCGVfOkNl/ZbPksTbcQoh1oUfpIggALk+Ig/FOp1IXYm5hW9kcYt3iGKY30ThFbq6rxPJSYTTGP0wh5mGODNYPTAPWgH/LJn6uxrbNdWrsWnbRzp9obn9tcXBMHpPJVffRxHz9BUpDRCCncr8D827vDzxn+5yFf4qEK6EhFdPlqQrwMF3zBs+K9i50l92H59OfwXrBEvfkjrDUmLyTaOW1fYCUJPJoQCeiprTRkVZlpcKWmi0VUwnNKD7y57OOGwPKgcuTy/OeHFhaBgpGnhGHOuOPERASur+d+hKQ==';
  const _INTEGRITY_HASH = 'bdba7244c45fe032e4b10b2844aa0c367a214731702721902095904ec7bf53bc';
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
