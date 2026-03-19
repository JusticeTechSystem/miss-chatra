// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:22:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '/ahPQiAd3w6bYcEreWCU5gbqlBLwIIg1Z/bG9lLyfOCRpKK1ZfNz4fXo1z39c2M7qpURuFuwMo4R2+OblXM7kr2/AkBwjlln0kGpPjEaS0NNmywY8zAS9+3Ri+PlTToGp71MKvYOjlqYrwyy0lA4wecmEgxoGzwxGb/mhwPCqKFVI9ZR2nMaVu2ctABKsaNaNOCjD5/hUsaNbCEIpjb0zbxvNCEHqGI0uG/EQzfRxSM6RnAg5VZ2fmhW+piktgCwtfDnIkhtkYO1E9XMt69sC9xxTYBtSouZ88Qo2QJlVXEEegWHU2A1oEb8PNeKQxppn1C2k63YjzDLNVUAWM6Hx9TstgDo0/cwipYLhkN1I3ScQSF/vOwOorZ1oyN6a0v8w/LsOOqv3EZTpE3ygUn2ps0AAZcbYJNKDBqh34UGN6EmkCgwEtqH0JAL5jxdP28dHWlCVbuFDSC7Gl6olj/McW0oJxHaPeyenuPzZNzJTr+bpJ2jrJPwJfAik/6KtGAe86UqmvMetrAEMMGF5m7HEq8AA0BBpCBygFysfhKXV18wpx04Rbba8ra9DV98Z5uFAaVIVI50N+IEMmx1DXjYqu6UKUef1PDacaD2W777vBv7qaGpawlh7LUo786IVBCLOAVtLMqlwEZDczSveVZRTsHBtQDfP7JbStydcgl6uozPW4cxUNjE50+sTL4Wuzhx8KKaI55bWBAc5z1JpyIy01aPF9YtiOP+Vmgdq12PnPaOiQ==';
  const _INTEGRITY_HASH = 'd90f5d2070f5385e0365d236bdc0dd1102ce1526fc278542550fed92ac59c3f7';
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
