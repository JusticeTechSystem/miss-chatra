// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Y5dD7wVCA5gIq4c2BcYQClGxw3aLIOLrKNZ0hpXR1mqENkDzYB/zRLeyWqVBRc93BfjQPZJZQAxKJNvPv71vjXv87aiebuCjYOR4Epd6CTPfMUT5nUtFr8sd71PK8FiSmPjDrz4687Wtu4L/+Fv457pUhFJ5ztsRIAZdK8VUSw3V4Lt3sf95PDhjAPEWWVrc2loE4Jae0cqqN8YB3/ADv1tguI8bDLdxWyLGp8+2a8i7Kzn/SYk1nPPmnmr76vt/Gq1GdTFvZdOBhuME51qsyrKvF5Qyk5EGrOUkVH+CHWyw1wKv57hoarsxwDiBztzjGlaQ/YeFg7SSpyzMkfrTcSXm+sHYP53m/TUn/7oEMrMojiUffmStCUNu/rI8lbbfK46FdK2ema8o3Is4jSaMa8VPSz59EggLuxcn+gJgufjLzEHJKRy9B65MnUqg4GhyoQvujab9fHQPqdYv1aaJMr+bOkKFF1xstNG7k5snlne6kL0mmnicsSSlaIf3xERQTSjsuEjpvKVssod/E8Q+a/zHxvTNkLfgUYp63Lc6UmuW3vInPAIQSTXeWUDV5muo1S1T8a27EsKMH59c63h9+j0MLTtNLgV8eb+VJpWAFSghtS29uyYmlruhw3mUa+PMOLsdzYdoSIjBSLpO13EoOal3Ad2oKgwxjDy7YdyGuIld4IqNg1uTv1+bGddgIt2BfV++VlshHelcKnBRNqFqw2WP+h3AOl0NTb4lVAYaBMvgsOHS5rL7S7BXE2LUWn7qbNbUUlm6QcvfHWm6eCx2uTQULW64gOI5qpDS/x0PhzE0A4UluEhoJf2asNUW4H2YI0VNQHF1LxdcV3kS9yAqzlzzr7jhI/ncNv19xjdgB8kMswZKH9N1W011kQqfu9kSNIt2JhEGk9HH1m6213JDOOpQfqOMfveDdsGhxzBXKequRp0qqe7Afw==';
  const _INTEGRITY_HASH = '113fe77fc82a0959c13edc3878dd78212dccdabc0b271543cf9397aa6dce54df';
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
