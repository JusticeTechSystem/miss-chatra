// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'CuRnu68YkhQnQpoXQtsary81l6ZkxGK2FHClSuRGxnGwtQLWAgh6DAn2jedjVtZ2UNHZss1WH4iZ8JQhZ2qu3s16Fif5BcnIxZXixutB/gGP0U0PyHyFyelzuh0dE2+ZzAn2HG7fa6H5KkN8YuYjvAmQBzth5TBUpWgghO6MBvBl61NOMSBqHEWPoAdWDBouSu4cg2/L6vzvAwEO0xOvWmhFOM7FnqQ6TD7yxjwSPoZe1KCaSHkdkwLQcJeEDjbI20bJoqhqI8+ODGN5wLDS9eaI04md2AzY/lNe7juA08ksweiBVd0mI9pbFAJ2NlzzqtYrzRogBccvUfYnJSeAXeXiecFZ3LiEwbs1TUQnyx5Dval4K+OTY+Yf3u+P3huJIJikzgzt5bJb6GxOIWo3gDaxGJTKNqNJ3yi+aLZ5c2LRY175pNy9GhYfWGbe5DYWoBleyLNsdq/lRGv0hsU1nE9rqjddQnIMKArVedPM4qPSZlFJbarlGRHeiTWBztiurBwgp/Y0eJ16K98VJB7WBZSxb37yAe9OxE1eNFlgPtW5pybTqMdbcNlKVtK0CmbgpVv2W9sZzKGmh0/nQCpxoBZSNXpV0gNjBxFxzGBO6FPQdiyqRZoETH/AizPz8mdzvfsJY0ww6vJyqzAS6UhBuf/i/XYcOBBWv5vhCpcjMg1ok9RRcNTJOMQMPqls5AYU0QPI82NXRSLF0YuaSNin7D1JFgCr8/KP8IcF4p3OC8BTOHWt3MKbW04dyK1fTvVl5b9qEkPzbBDofn7Vxq6teIc+bO9+MP+cL7+BVVI6NSzd33qq/QiyC1a3ZgkqGENEtUknYR7056l+Pg8mUUxoR9qNkSOJj02tr0kIuZW14S7HwtDgstdsbJU2v2gfAqvhOUJhfMVFCeCyLmM7dx3pjzNpCjfEKi8vI9yCauDWMPck2LUt3R6YjQedqmOGBEpemgzuOKw74IMjSY9zZtcrZjfdkeVTDguO9Bg20i5IdCnbVQg9r5ZhuWljPIMl3DmOdgvk0ZX8U/o=';
  const _INTEGRITY_HASH = 'ba9545b9d27cc595286a5e449b652fd130861bd4334ebe7b39ba21d7f78e7309';
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
