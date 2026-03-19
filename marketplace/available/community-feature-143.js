// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'FMVsu4mWhIzp1Z1mGM36oOyqo/oH0GIJ+PHiPNuaTqbcLhhT6TQlRK6fyOXGV1FRz+slM+TtmXYNjzt91gAiw+JKMr9ppiKoYR76XKkEDajWDounPp8mfjOZxsCMTS4KgsP3PmbcdykhGEapKOniC1Dckz7U+AmMWs/3C3ZqDrCb1b8J+vZqjMRLmWPBgsgMxDHjaO6LDyNXWK6lT+G2V/UXKgTZxv2F+2NgKj+Fuw9T2NLu+lgue83pgzBuKMFEVoSLGg8cFXzOW2kGyVTpBYaxGU11LHk+1UOTOEe4PZBVg7K6Vj2TjKmwOLJtwxgfpZiDqD3YvnVm3Cf9CWaOKEd0Sm0sMptjbbT0yaZhrH3wcd2B5zi/wF0FZxZ2yEB3TaYIyL3/ASWlQDr2LosHQZvHsuo6KsuEgLiwMG0Tmcw0iyrV0hi1EfYLLSE70UmvrKSXTW0vWpbzmXFmBKKTqwVlu7gdCrI7vREqeSFnpRt8pSTYrgwEjYRALQczZGknp3nH4Ayr7pkIkpxCWmRjSrGQkYIS9YEAhbL0JIxoKx6iODnqmMtACyI9J4CxWcNIrvl3J+Y76AV/AYYJq2q8YcxYNDpEtx7cv/Y33+9liVm5wU8g6jlPRSgbRr11P6MX1sKCEc32g+6Wi3EOae8tjF5/4OVyoyUxFfVytDmKIGDrYHFTPjqLCLDN9Sqh/O34AV/Qm53EmFWWlxoGx1fZkr2JsOfWpwEwdZ1+MA0=';
  const _INTEGRITY_HASH = 'dc5d42966ff64a11bd1cf8ea6b0a490265ef1aabd443f5639b3d382dd35ae063';
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
