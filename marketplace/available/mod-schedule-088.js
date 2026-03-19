// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'bNmTp3DTKS+JhRqa4JEoai2vW0KFwjdiyFWgqWEGTQ73lKRDQnV1k/9DcOS46qhnKgzfY0jgd7AansamUi2s5+T7U6eCc7FnRVuC9mW+6qIMVakNnLxKcDLq+r8JLGO7bFK0a3XDVDNZkrAOXhaPHZ4agUafkeNq08Djg2D5uYfHGboiGgjUulEuU+WFTG4H8ClUyC4bgP7Vuo+SojcvAGkB0oTUHmYyIjOCER5mh7CB/65vzFCxx+Bv+9+TsSAGv9R0AV2nNo+ISajSK9NEh9E9+ZfGuayhEMq2BUiD2+sHDRIiFt61z+Hu9MizrC90eOTR1audDAJ4hipc/SMG4pxFg6sndiynoz3uPp/lsE4RtzzQMr/9ZF4sTGoojwPfrEM25+Tj3QWNCv4X9+vABggTjtMB4VxIHlUNeFzp2NpqbjIc1Ax4wvc3Cu5DWUfHhw4yykuPBFwVEswVb6zD2qkT5n/zZ5QkPH8ehX8yzj73yJ9WPCR6y0wnPjvFskEFF4CFtiCGSy1jLLdVzKEgeKmyoGrI5YnU2RWr7mK6rZBycxNPZSgQWMhZddh6xvzI+3wxEzrhYKQXHRnAEUgZR4npRCmuUhNiN+0IZl5cHXauKvTityRGnN3YtGu1PG7xaW4aZzVF9r6MQrR+dm4kKqyNp3YTjJx+CC+9NdI6ZAmKbV4htrscyw3fZuoCA/yhg2U2QMKvdaBe+kkAVUmFTrxgAHQRIA1U4NpyLJgKi3b9EyWUArhWaDByGuiZ7v7qS2CH0Fou/VjyQX/l3aRsYAA+/rrCypKMw1OA2Ukyqmatl4fAZL6A5Q/ueLLi8bEk/XQTNkkiaBR/nWhTvwRPEml1IfDcHkAwzjQJexLeiuycreY7A1IQhIJKfjvdi/F7PtsCzTzT6oaOPfgfei4SUGFSVDaeOkLzLDW8XHzVxX2csLFeGkkf1UcAy1nGpjupOtyRVjD8TAckIwih6Un7sG76JuoI0O22rrQSIB3V/s/Kw0PP4RLNGQpqfKgEnCJj2qJPDUfKoJr09g/Y6VUUYwtbP3OM3tyzFVL3e41FMjgPVHWOXMlCtwFEXchScKs1zsjXkwgQ4/CxpC0HsXNv6oBgO27FQwLY02nsDGBj/FZKyAWZTCKSjP8jQYJSbJbq4FSphkYZ/UUEHLtd3sWSQqjI2DNjJcWT19NWhMC/Ix5l0KMcUiO9XbhZG3db1TcZPCb+uFumenGASYZ6i1KjDmdQDhQu/lWR6Fp+6v5bsOREvMMUrSyA2bDR5kJVA3eMk0RWpQFk6RCanmgl6k42xKV18zuFMA8H9WZW3b/56b2x7CBhLclsQYNRG8WMsz2gYbs6Xpcv5S0CJ+RE1IF0Fw6i3Oov3Mw2DGVbA+6zirQEmI0krxTqh95+TpuIewM0v4JouNVF6A==';
  const _INTEGRITY_HASH = 'b17ff22a3c69738ebe7e969b1ab19a68a7d998b5b011a62b9dc4f529620b443c';
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
