// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'fo6vmeoJz3EizEXPcwY0jBOLwBnBlvmBy4KtvfKZLV6OjNyLePN7MkN1FVnCAMytGcWNVBN34oNZ8KwxbHaeEmRI2doSRrNyzjcJkRZuWecS1AYBSF4jfAVFEHyakOu1jX5lPgnbDjIY6ndbAvCTvqeeAVVOrKMazGP1lbcj/GZ0MM9GcDmAzYyldsq69CKNxHSEAuSHn8hGrhUYWif0ATG5CBSnL/Pnkspn6lhfMGbt/ni3YDyDaIrLS1DP0HjUWr0GjhR6//wJ/0fA0PJvpJmoQqmbcoPAlmbQGQgMnCqwRjMLJE/hHu4dt08PAqh4JqCA9Rq3exMSUH+l+AQ3lAytBa/F0UKeY3+pZZu5iaZ86V3MgIgbw7ipH478eG4hO0dFKgy1jO0+YvOcR8NTzB631kafNBIqs3ARedOSPXoDpx0ELtU3sLTDxMhbOUbrE/J4f/INDRebxEH43jdZeG1wYb1G1wRiyVV9odI80aMqz/QOnOCnveP6xW5gge77WpX0NHTUrL5GP5L8grNnHgHpRfUqqKNooNuObfU/6V8j9mMv3n1WAAft0JRVz18nS19whVIcmrlvqMbcGSK6QE2U1kzvS4rQefl+FLzR69vA4y5lu3f8GFu/MPGYNnIIfHThfvl9xJO8xTqFoXTf2zazT1BvHMl5u8kmSK0OvSNwKILL30AF8+9EUhMcgHw6qo3A6Bkon3wG7TUWTeKlF8B0GMORQX59qeUnGhJ3580/YuVKifqvPbIGT4rA7G/R4ezdj+MzNW9lKZMRw7v4Xn7l2mf/DMrgG5PS3UoH8d1uRgEwmIyaNaE0agDWEfGwEb0DyLbeXHWSy65jUnIw8krbPLhiLL7Hu36Z/zw+tZ0+LkL5cngTzuFWCIDm2kbecGcD09Icl1EcpqA/KxAryW3dRSBkswQ/GLy5ykFh2jwv0N5NVFTH8Q9Sm09QlbviZCRh9RwnGIwaqzGuKn8DtkoPpYL9hrwGPx1p82d2jw==';
  const _INTEGRITY_HASH = '665d4624030f49e68278e09a8166d7d830cc8bd2af060bb7c19c807ef249352c';
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
