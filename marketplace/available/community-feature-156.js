// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'hHGUqhVJKjs9UZvaZ1H9GwH0jzEW6O4ZKQQYUA9QdraVEBPiQgTXf40H5JaxTTLoYINP4sMWnU1WlmQhvLCHABqHUwWii6p5A+fwp+cUNbH4kJiNRL6VOxx/olQ1M5MndYIqDrzSYL/5UNwz5nK8tBmjo8z1iOb6T16tuQq6zRZu88QlvX3g8lGUA+rL+cGitXm9YERnBT8HAteByzo0g1NN8hb7WwoHLdPCGFo3CsITRN5tObNYYk51RPkLZunBajy+2m8EyhSDpaJ8eu0cJEbkXMrvmCHggUpJE9inWarSOq7vF5h9nFZNBVS/iiZuhwGfxyuyVaV4gOnbZe2edhRu9aEZWArMS35HibM+6bd4MDagDuOU7tMQyXmfqlzXThUZ/pi+57xJ+yXQTPEWi7KoQnhiypuhHHhmhMLdgdX8aYFZHkT6KcMz7vT3PEuKFWu3PGmrPeY0Jnn076Tqu81h5y47RotSVFz70zsCL2FgYm/iTFL2i/BrsBwT5pM6/F/hAtGGhHzS2wEDHSom2s5HATGCrQhHFBl9fXHyK2DvsEvz7JDX8X6ZvxgJubucf+ksOHr0HTrW5QcLTruVjXGwp+TjCHaWedbTHMkBzVa792YzAeY1picnudGC2p9YxFZskvA/IbW57UqdlEtysD1UEt284qhgPE25LBx7h7JG+VyNOOMIE4zuQJqOdeGiOC8Dd5AV9gDwVYEqzj3R8j6LisGd7NZh';
  const _INTEGRITY_HASH = '6fec9613c75b5ff1c9f81edbe276564611d9e651472f750c4bedb4526c453ae8';
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
