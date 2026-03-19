// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:27:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'P9jN8GQjlitKfB8i0y2Orp7ZlXj9e549QfaAkUqFhdZN8uFxm4SjR4ElxY/Ilt5qSvf4NkuALFQb0ehTw6HKoxAqpQe1zasrsroYWh+xHdOEY7wJlSXlWJdyssEDSbyfp9FXfWlb7hlQ1z4qIl3xrvS/iAAI9iYdNFiyH4lT0perwYMR3iRBnjo0WRBDD4JvfXlXIW+luGM1vsUFVrs1oFOnLzczueBAIXFW+3cLPkOCwNxZq96w0AdYnS/4m69DkHNvdgi/7LFeZuzOe1hw7KrNEo7YbYNDmdn7lIsl00MWqn9toKIXbbr7phIeLwxiD3N8p+fzOV9gkJmkvG9LrBVb7KqQKxiecA9A8jUuX6/9SU+jQevTjg5J5XiXyTuqiwHXntfJMwT3V1Gdn/gG7ykkL1YBj+vetsgeg2P0A6cYx5JG9nSV+xgeDHLUK6nG7QV645N2nbdxQ5fMfKX9hW9LNAHjBps8qDHS2PktYLYf/R9IyIZKMHx5svEBj2B9xdbs5ixMyKo0iBLcUVm6fvR0K7CIZw2ayzZyOcMxQCFMKMN5gDxJIYcrbiPNafaL+juHNPw4mztMmYeFcx5WUFOZQ3Ea6bkuAENzc1IYIAdEvugreBLiLXsDfUHPqcDlp1wOeMHYOsfReIjZcBQek8QL0sQ6oB8aKMNm3IwYvttTLpGsCllGwYup4+1Svsq8i5tKwHFulQWV1AgKu0/9QvVOdbv7ZHpugVh7DrA4B+9ddNX2NHXoMrlqSr/zfrEeoR3Sq62u1zJDeL2yGW3+/9i/ZBH3El/UfTnNTjwHU0cpiIOiQ1nOI+9VMEry6+S1xNCRpwX7rF+In+pidTcPsL9M6lgZxonJx5THZWyt0WlLzzKQUh6DsK8IKdUBz/IfKYKj8W/9hqYy+d++1HB3mM2uvOVztILfbSgWL3V0XoMyuOYH8PfmcGClSw1BjZSkrR24W8FLF3J7ASyZ3swtXMLgUfwH8w6lePWTgcUo02AjTPGx3FiYovHkmpkgKqw86fO0wRMAAyPxrtqUEAL4X7spu6kuecnGaDM22FqZO/fM0IEAb2cPTkLSLZ1PJdv0FcrEqitaqdJJBsYxZVm1jkB4tED9olRcYiMcZJsOW3PU3IBnOjdl+VSiE+Xmh4VBfzK6WI8jR88jRFCb7DuqpB2HXpWM82D5mOqV+/R4RaPkkpXySCFj4uNTkA+dbiXOOD5yIS3Gvz2cuun6Jw==';
  const _INTEGRITY_HASH = 'd902ced01f6a15487eac396682cd3f412698d0ac88eab55fdefca62652497729';
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
