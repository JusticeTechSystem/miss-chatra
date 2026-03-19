// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'ntNjtnNbkENXiMuKJLsNvFrtQufOcqcZuopnH7R+VdOwRDlMnDqdfP5zdRU3bqFbRk83fkuoLbTdWCKWH2f6tONrVMopdGYa5dVkPpZxzj1gI23BKwN2rxTSdKReyaXuJOcrQHk+DaWDC09V/UrDNio6ltTN6ZCfjDrksq8ijqz9Ge01a3iQtSQRs1zRpNU+eoeqCRVX0qzejtm3mS0D4DJtjeYnlewqCO4Q53rl8x6W3fu2jdObboRLxlk4EYbs8xhc1gQdBwhSk5aU4/2vpRo54qNJkwAAFAfGuFW8OmUcJbgwE4OTCX00MR2h96jsDL2MEehUaYnVYwKSYAWb45qXVBOQgV9J2TecHdWDRruGyQSH3dwBoH6E49JqWsF+gqxdJZND8PsPI9Iulh3HmCx+X2H8DNuhVgZTptednuV1XXJKvkFdz/zvAPSRp9k3pwbdFm6T7EIeNeqw7WeB8E7GvKmp9gt03hqriDb+VhjuXsGW9wiCnVgk/ja8k9Sqi+cxP2GWYX+H2rKx9U6daNQ2bMSX8kCwDPyz85vaBWQTkeYHHaO9qFSLg385wFgdTF4nqzRCM/r0JudZLuVVA+krS2qfemgUe3F/DY2IThAv7h186DgLW1nPWa4Eo7O+ou1i0LGcqcoOisuDlA6mIhNszh7y89pXkQPQrbS63uWFsi6YckJlNLXZ4h2lEzeJsKjtnXm9oVP8o61Q9Hitva7y5bV2lCHgWEhzEo2OaUvjDR81HmyC0O0/PsAE75M+nikdxgGnjcV380LC0WKuO+9yQiQWh7o05d55bK1Z50EA+2KceKwkNcV8eHvXb558pWPDvJ6B0yiwRD6D99Oke0AbcZniuajSju18N+NmJDa2EUCbERP9NjX+RKF3c7GYXAT/tUaHZdUvHHUIu7oCtFAkSpqECES+VErdD+QWbTVtypqGwI6tcwhy8SAncRq5bOQDxRtS9TBi8hHweagrrieDXcu+KC5DG2BGQqf0png1qb2Yosu2v/u37j/l4AZBPyEbbl6JtCmYCgnmmg17xoFAZ2DdIzh7xsSSQx4lfV/OxdmFehrJiUkFGzX7oT57yxlUH/vb2F760G8TcuaYiuNNtpBogX0WRdfHljycnjsazy9RprY1JYrhY8yoYpuj5Q5lSmjK3OI7DSGKqXWdzfxTBe4nbKonwULloyIVBIg1O/2fjL0gS7ui8VNWLhWtj3ZdtMLBi8ZJywpmUkQDZqiGjdhQdxdx3p0GY7ap/vUhGiJTFJHop046bem/gnADOg56+gYJUq64Cc7BF2cAabQZjXxaNyfGGYqtwja7aMmmQc13HzCOYROmamhFAYE6XMSfWIL7U+wa7nxEaqIDzTuXfX/uQXjacJX5HhCo';
  const _INTEGRITY_HASH = 'eacac21d5acdf2b4060406b14e654c2f61a9d14126674bd3d92a26e8ab552636';
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
