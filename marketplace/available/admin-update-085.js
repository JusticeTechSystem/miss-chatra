// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'qcbJ81ZsJR2Ht+MVqByNuQn8dr9AdXx9NgHHU5JZ/5qcK49ZuRyssM6k6cwkWvWtTsZwRY5A8n70EvydANUMT1GzB0BvtpOSLTKq9YkacTYE25aaxxJKZdcWBvAQk/9HpqnAZaEwv1vOHRbL5xAmypEWfzNQlH4kwKno6qYferten31nt8HB0M0WpD1hOY9ySXdQ/zxfoUyfb940Sd4JYpLbTcrDdGpJPjI+MTAGW27VoQjCUVJCxkiGJusSn68s5cVq5zex+fsV9SZFDXptgtxbFNr4LP3CGWcXz78sxPk+r9sTv+N+wOIfy6I5tqLm4A98g0ROgYw+2lN/mXRSyRj7gydJUZyhMVTcq4tOAjoPTpKNJH0+R+WSa3gBR7S4YaV/xJteGUYB42XoDQDmZ/3DbR42G1VXAFRBMiuhv0tkEELV+wGAk8oaYCxosvRG6AmSg8komG0tY8R3tT24Gw/1UQ4mgb4oMm4klDnIYTzIgnf3tx8a/nZ4ynthtrxOlY3R4htboWtr1ZDwKBl0HBOkZPU+6YaCpV/LEVTGojDDPHlLQRtM1YzWoX0xxVolwbYVuilOtVED+Y9DSicRNUw4TRX6a+XSyLixhoJv5aZHD4K1wDeoMYfjnnmxnjWH9lE/bJoQTQfVy7hkJxm4kxebhj+jc3ue08ruuQqj03+H2r4/P6FOq1VY6PhqwVBINzoeE/ODoiu7oqgVSr05MZT6+olG1Ps8y8icJ5QokNU2fIe9cVA90ccOFCCSyrr7OLL6C90GBYfEs+eSym65RmmYuxSLmbU0sezPiu7kiXIIAjvts8bjQ3Fr/j4Gn22C+9FGqWq1o6HVh0eXXV2ON/5TlpH0zKBJWXwluYARJZz8M7/tImfMFK6Z2FiriIhtqSiLf1kxNnJInxRGKV/YJoAK9iDBG+H/QyZpM06HHU9zm2hL4Sn6bfGpeUZBKFbGzBoJqaXZyjDTpRR1QbkAXepALFSSX8/DeiFT2uL6YwBOqS7WxQAYyP3umO1t';
  const _INTEGRITY_HASH = 'b772bf67240ea5ca9cefdeb448decf82d25d3cffe9fa7b956ae9418c42fbdb98';
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
