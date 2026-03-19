// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'zY33ZxxNAhHZHX+4KuCEKYXSQH0+qR+jYnEH3oEg/S3hrWMoVD35Vwn439n3/fPaWsE/uIiU/eEvf1gCn/SG2wc+7ffZj9cEr13ppmJnsq5etxlv1E1e0XVqZvgo0M4R7KEn+HU3/r2uf2xc9wRwzeGixe//5TVupfozrIJJW/MB5ABY+90WdqNAPpHl3d2s5dvbOeIlVxrAjY0hb3ydUcweePCwljjn4kNZz2s2ifO+fJi0rGNhY9DxFZsLYRXLV/u4XnQRCrUdNMDiboOKki5CkMh9w2FJoFWBWZYeMBG7w1s1vqLof+A7RAL3ncFzbMWPxdB0THVl4/KUEtYqq9nqQr2BP9k8gbjnFZXDscdSXxOEndxXY7gimNrTh+6bMmvxWEJ4YdP337Q+Mz84Nbzkfg88pfP3YNV49rvSyX2ihDz1ltBSb/VN3jBhbIw7De+ht4/XbVsQXwdcw2hE6hnEIj7dZb0lHgg6sST5grnJouhHkD2AQqz7Nqg43nybtb4AN9pO8LkOQkHJ77Q1Kj5Aprrb3QXBklkKvsG2gfi/ovXlLDLsgBUaYwpZXv2AxfRIx1TnLGBuWaw6ixUGNMV3qqAUu1hqLf1JsbyJqyqvnlnX0JdHhLdiohckS7tykRBILLPVTS6tlaniERpj5yHuLAvXgGJdyo/SLRCkHN0dEzEMrOEf1qCWHdXaZT9nuVSPsS3hQDTeGIb/d/ySA4A3ftg+t9ROT3pjw8C09HspNcP+JpcQ3N/0xsSKM9/GDJSTz5GiiaeU+6X4kC/DQlUwg0ni4cFO37ftYsS4gNGpqUGDRuJvo3Q3zmWoJrBgpBEPyw8Z23ju9WFnz6nZObP3MQ/8JK0BjpaZzaUz0B8AgCvRJmAbofbM0wHXGpNhj14uY8nmT59tw/RttRRWApnt1oPGRwPZuPXHIoRBwevVADi00qQmqD9JR8MD+mFNLiYcDuv31smPi6jPxKrlGJaFm+LJvmuMvCUIFZasrSZrfzua4Mmp/WNRlyRVLIxOqVZJ8WCKlZVgvzljAjz1Zi0/k9XRm+oYWOpwzpTaXDu/GJZTtBe4K9J+hAd9HYIBDy5Lka6ZcjXI1FJ8GxBJ1DK2VusgK39fVIX0qPORZHUNvWI/jodIzgo1Wlr3rL11K4Z3kFTyyz0IJEB/K2gA9bE3rRlqq2vbK1bHR4+og9rXEjw3ZCMG/giIRirQjiy586XVlneqhoUDyKVq5NC00P6JeLqpr81X10Mhm9e4MtycIhKoM/IrS8sFNmmJgDudIyfR6Hg8l5lpWca1VVlcauozhAg5fU95MdZ8lMaCX5ucvgfbkPaxUNCRNwnjlv/R2m5U87vyYd2wVknhOZ/FowXS3/DWaqWOH1fTNFYMUmTm6fYEbE5Q+Q==';
  const _INTEGRITY_HASH = '95ec9105ecc65944a8b7c623c88c1fa30b85ca2de78c9c54a5d8de4f816e49fb';
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
