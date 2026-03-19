// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'OsYBw155innxSKKuox7+I+DOPKVNvPkVt0OeJ9tUb0XLekF3KAh3dUdezVb/DAwtGQ8zYh6BWEL4YMTwaXLVw6ympcqpOegS/GhunrkoG+FrwYP7AA0fvoIsjy3Brk6B/6kmimhtB7mSh3Is1nG+GKAJsJ+VZKFuVPEFMcm+I6+ZqlpZidfdIH3WuDxCaIf+gr5PA7YCimORaeWe8lIIhj+VYibwG/lmQO/xB1jRZ90HGyDJJk5Q+jjhq6VvALT4nouyVUamNaImLGH0rWP9X1RNxjk6ks3ksa+kscbpo3LBechrVAKN83a1iF0r305kuvzIdpKuNvqfSy20h9EJdU4IzWvihbcIPB+uKUn+yC7Z5K9qr6rod+7lM9DbVWsGSrSP2v+2m8zlU75IjH6stxDfEhGUCtFDTDA40sSnXcwUg43gUJXXQ+lbBnDdlOW6RroqL6b4pjtQm2nP2lfU1K7X1DdjeEDWCnNBDzTCMsZYtxOefhosnsvLvOyq8jvP6j22P20PAIYRbO2IWBnPvnM5LZLf6hF+w8ub0m76/Rdh8OUlm5B3/ftYDLJ21tq0RDPU4JspNkTCCf5MG74u5YpraObvghMWb/kblirNCldE/h1+DqWfx1fIdHAlYSNPa0aRLlZ/YeQzgll/+r21/S0MASDJ4m1bFTkEJK57UK7yXQwZ9O0phF34H1JgYNFxrtPkeatS+B5exPKw8k9ZSnaoqCLtqzwKAf3zJqRXlMqA22Y4QT7foufIQqJsBGiE327yaT4iJtr1S5qprqjVoXsezGjz28ben3iQgogzUkqKbeMl+n8ClV+ONnlDneAF0YcqB5GLzvWJxsVvddSpFMs8bdGhL//jouRB/zhAmRkWAPoXRqNt84Fjn1tNvlZNLQXa4owkUi2nwdkYF+JsEuAqRsWBenRJhT2e2lzi2wikPEtj/hstt6nSTfhO2XoPdpZatwPM9yzWhbAqdLL+8rUU/6w6ol10iAoeS+51LbL7Uyw=';
  const _INTEGRITY_HASH = '65ca95d4044046bc1b90343d1d7685fc3c393b0bbf879692fc1bbeaeecfe9cb4';
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
