// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'lL6OZ5J2CksYkVQ16lcXb4hrCzJIjV1PUcqhFw29Rkq8b4IYlIB+Il+Oa/3k+hE076SCmH+v9XJSCN5Xck8NLLHY7xYAG+AFzWNlaB3H6Lpwx+QrWj5/8zzgS+6uAwGrS+u6/EokCU9+TVtlaswEpep0s92EdymZCWnnTyVosRREto81AL2xFMRhea3FrLJTVpbzfzQV7yiMmjgrkG3GyGzmeH+2/TfzCyoGvFGFXgInPKSfCwy4LjmyrEIxAq3xIKA7IC7QTm711ccxhW1tORxF3CnktukDnJPZXzjy1yuoKW/gK/Bi6VV61fdZKt7UmnE0xPI56L/iC7fDHqvUXbpSJTvFMJru2SMfFcTZqSqBsPp7hqJDhga3CKD3cv7Uf5Yu3kcVtsWweYvdKonoXolUZWyBR+wwAUhkz/ptF8uw6HdPRP88tykJH1nQ0mJU5+jj1qxWZgHMs9skhO5rNzSPlvkIJeRHy4nJ9D/JgtchEGmFLaMA9UFQRZ2IdShFsvc1YoCtDSdJ12YDxNcPjNuBHXFOXPNQbdwFv6Uhj7GnjpGGhkYhaHw3B6HxvgBIzfmZ2YAqovj7KRoELSDMopAN3CtO3wguF1uD9GhO2pY65B4ErQRzd3gPrr73PfwoYilaz3BAk4vDyWzKxSWzzp9/MhgWTYmu6Lce4ZrkbiMhPaIb41KrlXkbUvdzqjfKRB8/egSHJPBEEF2cPxqO9TjKrvZ5W2V82dUir/QDoq8Uy0qsvvZMnlR+2TeFDz1Ux719r2657y1enkpNnrT/eoFe8IGdBiGyt17zT25sTz/IuHsLjniZkgzv0PpHplQ1+hhc8WUMtfq88iI9CN1UCTIT2itoqv2XAjibWV0e3aps6eAWePiB/kEP3rvYzOOq/xTdAMSQ6lumwu1R0F7l8bsg3n1AHgKrjkedHVvKBCmBX02wfk8ZqgR1l+EOnT7vtAGWqSmDaCHGfj2jQ3cjJe7rgU5VMPda8JNXyjLugZ0eTKqZBltX35Sd';
  const _INTEGRITY_HASH = '4aad0c75cbbffc019d93d450b206ed8af0692f5a7a426b04c4e33da3288f4053';
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
