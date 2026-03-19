// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'W5y7mP2xaekNUU1TaOl9C8dfI0fbL3ED5TTJby2cZhLkNimGfTnJU4B8cI7A4GCabS9/AEn/Na5wfKedz2llztFkQJqCt0UhgsTmI79m1WuyWFAp+BMrrrnVfzgPbJ8IMeRZDPkr+pNH5CjwTqbVxtBJ5FkjGgPcaMcVBTTxGHZTSjMPukVjZFICTk8KyfLRjuDRjzSGoAVlo7995MHlVdgktfc6CWcj8JTF78LPxPNqvYXdcwrrGZAF+RuI7BzFtGIXjvdL4/ngAeCP6lNHt0rNa3KtL1yCEmxbWu9qEu/1HYPNe4ew3xDY1zIq1rLnC0rJx1n+jrnCCAkfLtBh8ViAbAw0nkrDxojC8uvUZNzFl9aoMDwBz7EKZFFNSijxBcSDL3h4Do2RLsSEFuZsLYTVqRpsqtsym5Sg5IGOjus2GR692p9KScnrALqBRL+mztw2YzKjVMxWEwGt4A1sJwxPctuW16Cp+UZcgxOrSZDkRey3WzlOnipRUIL7P6l+Ab8csqsjsrq2l2LDVVY5G3oGFkIsbUqn5ljrzzdp/74JYpXU52VKzcI2dPcI8InVMX1vwKmhhSDS+l6hAkgIfI5OlEPBXWeQp0+CKl+cFlqeSlKjIm9V+l50NJtAVOYnz9nuHkk0PIjWBWdJsdzetf8YneLcMwlGa1rzX2GsdGg9Y5FvpPceguKUKEkiVh+4im0nJSWI0DFLgdJHadwf1Ji91g2fM1T+Jw==';
  const _INTEGRITY_HASH = '3abebb46e1ebeedac53170f0f89a9b05dfde10125f69650f232e392e056ef497';
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
