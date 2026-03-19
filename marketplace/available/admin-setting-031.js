// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'O8OgWms5Ny4rKdDDt47P9rvk7f4fpdHx+FSSrEbF25uYXXd7U/sT6nDKHGI4VF6w/esO84wdv5/gJcsOgeQbLz6atIcCmI4zOPuXSXHJGtvn5KXT4249vVMRHi4dGyCPDD7xrPefc3h9Uc0WzEGRKdFBdQzA4HBoFYZayIZYl1x+Cr5fJTlRe0Nx4HUFSUkWBxZvnq59gcKeVbyyN2N6qOhgZ4d1Uld815WiU7BFB/bbPUxLJtlD1/Sm3LUi9KVVbWmo8GKjU8cwdKb89f0V4GERrQ6f4ZC13D3sZJTLmWBG8yGytbfyFUs525I4H23s7GcmvT4KCD/oEN/6Obv46C+kN5impsBBby7ZKrU5id93wk7j6jtD0pAl7++4so6FF/fsZm+Gq1wwjYzri29TEmpLLNACPDLqPsr+Lppsfm8gFgAvnFfFmpETuQBKk/WmSbkjEHIJ1Nxm96pU2Zn/28wRH4Bm7pS+PJDPgSumhrhqwrjS0rI9Sdad/50dP0s0HFtgb1hoMm5AFRb+U9rXY1tgFDanHpXaJYObbvR0mMd+SfRvsWUmTNa3HcJzvApjyxc3EQvCmYLt7s3dlJetRTtTRgTo8jM6qvpbDzbyRVm77qDgZ14/F2BCgn1Q6vN3mzxGKBhRiheMNNnSjnNqawPB26jqDijyaKAx4RrmQCNqUfIi61A/gzVZ5/5aXAgMEM8KZ9RalWvekRA/csGCbICEnWF2VgclrRmoGC3D3XNiJmqAXT7+CtGv7ybGnw47PdbMZUTOB8MDO/hCSfQ2OGiq3aVz1lAi5SC2phWsBTcuRfw/HRn56MxiBBFsQ0TTdgIyMkuf9pSgYnmNJ4Yi3qh5I/OwRKfbJw0geLfN1V9ShBFuQJvXNGSfQlzLGHQ99TVkORPnumHi92/AWV7bLbYUd1IgayE1GRS6dEMJ8aEKX01jIPAsKytIg5QkE218+mctKo3Id7YMD5x/H//1F9myG5vaOT8vOGZT/X7nfrdPG+ve7bPUlFTq3W6Jjfw2a530bA==';
  const _INTEGRITY_HASH = '78da06a89b63b39affe4a80e700a3026f548653cd6d23bfaec4044300765bfdb';
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
