// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:11:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'CCU/t/foVg6/t2nZ7r6VInbgFY9MiBd8sj+0mvFD173Iu2wQJrnBWb+HKdNBR4quCta5+U0c1SRU4SODf5uBXcuCmm4zjyg+EJ5PWjJk8ULJkn+zY28bWuHm59nKz7YH4YcYhvAZQweU4bmjXXiZdpR5HXlAwgOwXDuD9ylN6Sml/7PnsjCB0quJ3azQNMAPSf2PqMu0MjjG/jn5qkmx/9X7gw+1fzpHYkewgi8/NbZMWiZKhz18JUYSsdW7CuQBGopQXOT3g2ETEOSrMxkHGTDSGnYp3Y3g5VOwewv15JhC+5fiSgXnICG2ewj4XW00So2Ge6OiTBiV9uolUVTxuthTcM3w3cT21Z62bxLlf87rTDqSdS7n0JkbYF3texAjzGaPmusvFk17bzN4ZbDq8UjLQNdY+Qe6YmsJtbzlCjzD9HrtTP5Xovc8jbvYSc4Z3VqZ1xkJkPvEqi3sZo57AMeW6Je+C6c5soK5c0gaV8thzn1/aaWRWjY6/Yws1ftL17Al1pqgwqDuXKR0XrNT2T2YuytvL6+yhGcUydKFAyrGHe4E24TJTuG5cuT1L9/SCuHSHYJ19muJTHNGgiOgm2ymTdPedA7bk7UpvGwZBSSes2vqRwYkd1WybTf/6CUUy3Y=';
  const _INTEGRITY_HASH = '7b3a7dbace6895817beecce02610d152308234a46284f6a021603a80967c7a40';
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
