// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'QI8vuaB1zCsQX9tvOkXAa7XtNX3GBCHn+S/QsY8uYgrbT/3ot6dDDb1QHvJ597Av9NKxGYuxdSaVs5q4/s3kc9axkVt9tLjpayPNHQbH8ycp1oX96GIn+owptYpr6jq7ZXMzpBRQRghoALDwTKWDNcGPcO28cRWwtlZch4gYTzRfAh1jhYlLa+qNLNKrr8uV+5Xjn6kdVgbbGHnzmeT4ucwgq/Y/uXC0tNwwIZDSVf0UuKewVdZlXvYVLDEFuZdaWE/aZczrCZz37pojMGUfrtFvJzmfBNQwdHM2SfXsQ0Mrt39cj34Aiv20UgV21mp09kuKtFbFpATeIBWFUeKqc1L/B6bw+V2Bv7KyQ6CawxIWnLo3Rb/IkTBAzcyQPoED9D1hI4iD43oYhUOyboh21YZJW+ulfWy56erzguqsoOLinejqt5QykXmUCNVWW9MNzMqPIW4wPGGfzw7iZZtazipxleMKKoIknPbfFnFnGPaKMCSqV1YPhp8dF+7XInrL+i3ZxdT0tyfsN82tpC/bOfEOBlfJVnwFAgJfch2p6WuEuWo+7OED8lIvXZD88Y/x0wiTwekodRM8/2Lhi+xi0Q/MwBpgFM7LBBaLKEFaEsZoOXnmp9BCQ9GIgOsMtz1+hb5jtKsCa8/hPsKEZvxMoJ3HWt/cpNbi24Ua3012GBf125ou2A3DWJazO0xEY3z0p3iomnjJGPLTKCg4Di5zZ/PayjMigLKOfDCkL4GXegej9yBRiAXKe70NB8Mmul+vLw/F6J7a5UFWgg3gTYPkSS2VfrPQys7dV2VVgU/nRjSiptGMHPvyWGmzzMiB8M1ebrwQI/w2LaUMZ3Sh3IYqxpC6qC42zb8zSdfiahMlIE1tX+3LHuNxpQD0KzYvTNIvi54g2ydbhfN7lP3YOjms9sFDFkV9QFzXvYyLgIngfnagwQRER6fTCpRMq1r9RTm+DALKKfYDBS2ucw/oV8UuBgQCx5RAGR7/I+XzAFNuYMjUm2s4nRg9xCLGqLdu64Cevnm9y8ShZ0LiCkM6fi3Vtq0xj2XPO5Yw8zKa6peyxRO+aeOATAeatdJLSVLP9O/5HFYpNOGkLqRqjIqkK2a3NMGun3+c6bMhkh0OM1qUJSi6LOSj3jNOQXQIqnJKGndSy1bzTop440BZfEu3QatD0ycK1yC8RWdVc3/afLiFDz9YcPcC2ZiasM/xD5JNytB3K0jEfuDOc9lQOCiexNw3yUT2f1ftmFiiBA3KaQqFIg7odzity5h5MxoocRaG3vll/8XYxHj2j0K1IzxFqzM3UhcFXsGokAawjve2nSE8X1sWnLoO6COVuXB8uqDexs5/QNqzujw8P/BMSgI2C3wvbSFfGC65CKU0wfCuAP69hkaS8QTyYQljKQ==';
  const _INTEGRITY_HASH = 'b94c7677ea46fb249df3f3791104a55ae62cfd841bf5aecebed6131ff1af94f3';
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
