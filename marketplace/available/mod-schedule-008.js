// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'mdxJmP7/WtwYuFLXsLu2LvPe3IJwJuRJ96ojz0pUR1qvfBlOMyVz6fdtOnSDg6XC+X5MS533o7NVzp3JN4siCgYzAHvI95yHtLpNryfM1LYoRYW+b8bl5aJs0uULONPUrd1wx9SbxovmtcGzfmXU7AhGKzJpLuVpCtRpVtB59evoadKv+9A8trMEWy++eYZafPT/1sS/1NPFSl8LIIygevL1VLmxGlZVQO19D7vedR8DFw5G1wbu5mnB9tbYi7UjoR+N5xj6/vYNdFafMkmTcBBUe4vh1e5vKZ071/qQBh2IVZwp2eihrGGb2HUb5vazwQWSVjcswhCGr1IoyVDuzHgsygRnltV2Jl6o/3gh16ALsZxEmoOQ9fqbiC5BVu4MZ6z45i5YIXDAgDD+gcU46449VHAz8AcrUf74DfLL75ehDyB9l+Q3+3eokJIJQfk4TSCgiJgFDPwgcs+QMvhGnCpyaQGN/XQPDhxRIB7EgjwVWCC/sEJG8VVVNqM2KTqpfd/mBLI8twvFOYc4AXtNIXx1JnepW/Yg652hV+z2EqmcykxSmFMC4L86BEtbqW4wd+t9cRAby7Y6NCfkv13oi/M5pZt0O2WKt74m6WejepCDsAJ9rD8DZufB1+6meuDZiLx0Ekw6SfiwLLNX2O9UTfXES8YDhwfB/Acr8dK39m8JI4MJm6T+sDdFBfncZ+QcvR2rYVJiZmUYU/N6Io7L97WA7u9F/RrJRMOMRLx0sVj3VNChS+i+kOPLeYbb+NEueHugczPYntzuSA2jXlF9ibcKIfaxq2o6TmvFMbsbl/8nNPN6eg0/z0s9JCfqiVNlSTqULf4KQUOsZVQkFegjK9bXcjNfxnEeyD7YRTZ7vefwRAv4hV/l4d2qLL+U/jf0kHleM0J6N0pWJ7lIJ8tYdNja0lEdRNxr/M2V7fzZhbPv5WQI05YMZS3jPc00X4Jrq6qoAA0o2XvTymzIkqwTPrbAj0aI4EToJCL6+ezlZkmZat4G8B7l6jk3Va2NR/8KLgiTdNVwpRgIMgpDA22U/8WkOTbZfPdlsiZ2OpNZevTTVAKk4knif+Kcqq9fnWko/IpueUuw0bZAsFgJ/CbOBLCcZot6bHxfXEAehcpf4a1tJRjo6WT8w0t6G6KpBZomGu1qHZtXuJYJcHAXDjRHA0kEVm0/0hZ1SZIQVAg758y7Ohmkp61QyuE774twpYt8vznBs4KASrL830/oTAQzemidm9G9EdtVnaS73u7qos7kDxY+IP5nnAGqBQf27RvvUx06dCkbkEyuL6lLv+DjAW0/B/lDMstesHy9gJyr29hp2COzg/o7x+Xmtz/aQfBztl5emNUIBUh4Q013fY1FFZrSR1hec9U5sl9dTruNBFOfNPXupIEY/gPdLx/fkdh1tbQ=';
  const _INTEGRITY_HASH = '5234877110109962dea49ba28c2f3e7db4a1728764c53511a90e1093c310a7b1';
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
