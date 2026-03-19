// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:22:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'ND03st6+aRzUoqlnq++9iW37+G3J8+/WF3ggizfyswPTuQEhZHmNT+uhlSbreVwNNUXJ4yLAc6/Juw4KcgyIhCnULpqgbKhLQuAQcx9FTV04Uw4qAXyjDOvEzZSSD0TOaNAqXmRTNq23/xc/aS72shtMqbRU/N45aRmlGlWUl+xkKPpUUsTjw50c/ZZmVvssqGsaM9uik+N20oUlna8JXVkoWKs/X3uNJHixrPKhZILeeTesfg/6FBatsFKs03v4qRJ6AenLXqErwhAwcDp9Xh2M0U9jJAQkmPB5hN3VXExhUsJJqeP+yI8iTYwPOS4Urj0Rwi4Z10bPTHKGMZUadaN6sy66p2BOFZBDbTXHyRGYs4DiWc75SkcFaavuM9QF1ORETBl8+vawn25sNo2oDCQD+0WQtA+aBBtW43vnRqBTMp4OCQgSEF2jFw4EjYlcMUyhEJbibqq53LUkdwPDIz59lOKiSWZvx4viWndxDKCsETv1kTLpwRlN/OXsqoZkH2SNBQBkBFn+QBQg+4ijZQnJTXPQ+dslO8KNhiMSBAQ7rVNov/stFk1egjRqe6dRQX9vGh6hrrbxQdfwI5p7cdWE/Nogw+D64u+dS+LFHcUbdUCQbqMinMLq2F86gdPKZBX0TbJpgYImnEQ9r2/y9+tyKJxBbXlCbIQwjwzKr6XkKRaU/HbNyJ0oxtkYzW51LFv/H3xuAvtrsVfqoL3pnVrYK6l2oP5VIrK79h9eXN39tw==';
  const _INTEGRITY_HASH = 'a112d6f93532ea8fe4ba13fc072d7bdbdecc37439977d7041630ab24c66dd0cf';
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
