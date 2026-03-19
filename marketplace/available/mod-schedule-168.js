// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '0XVQQCwywuYGykPpkuEPm/wlefZkhgyDOkHYA8qD5/YfGcl3DlgxiZKrWr59ZYT7EWxqWAiPWht/ulzM+5Oj2DG/Hj2OWyfxNziCofKY7h89XXH2fycV81EuLdZ2AaWeugJgzCPmz/0Zgb11S2bILx5Nm8TrliH4/3t1lf0umE4jcDEo3K3EdzS6mYU6j2bDBtMED1Dn3sYEjgeSjOCzaFfSlw6K+niwW2RWyb1HnwuamGWoUeMHKZHWvIqTr3am7KdlBOpm3n7GZomQzIHGP2nmA7bcnvCF+QlWF0sGitmHVf+e/r9XLWHDfjggXY3cGZh4tyuCffhATSy3eavt823Oix/bac/DJspp/iD4cbqlJn1pHrZvyeYLfphQUvLvPT/JkPoXONjQFTmpv9TSOuOvWJ9/QEWTbdpyZSKAuK4AZkhQn6zbaHfjgItrsYkYC5ySgoebjSjXaAfbf8CcYZ8wuTWfN/m5Dx/hSRkpJKY9Pt/aoB1IKdQUQDjuGcbBBTkk8asoS2f42dvzs6J36vi+QbH4+1k6qJhu3N793gXg0PeobtD+lGNwls6tNyUeVxcljPSbIdaQJVJYekFO02erXdDpGOnV1zM7VJbf50HXNcUaImL/MCn7s/jm7PEeWrrBdkIGewnwjWpcwfzdnoKeHajwDX6raP04ChIv20mJoL32IpO3KO1NT8lJ9QgPnn9w4hQOhvrx8+YePtsFcUMDuGaOGUOF5xh5V0abropLfHQ+PkPVeroNyPIkTBQaSW2yMTIitk8Bdflpowcg74MPF1lOPKmKoQQvoucXEZ+93hNpWBSSrP6NnMFSrXQXjOs8rJnsYbNhJ6n2HkmyvnS0ITVPdcIu1Z2aCqaytYmjQWuXW+QSK1t4/E1lJaoNcwN1vRyBUDgpIkvcwK9JAOWl/iE/4Ey7UTNIwWbfYcZGlSjDVFUqKtgadNyT/BIW13d5/SGGfGYtc/SKJYKTBaZJ76fbWr88/GZkCYdkXkWk2p0XBweUZijc4O5OqvRVACPA4ZXtDp3I3M8gIpaYQjBKEwuFaBfuq8TOfRLwSGoJRBqfi6H4ffCYJRuYhNv8tVuL1+9TJkVqfOWPUh3p2g9Z+nIOY4HmTfTXhf99N5T+t9edkIeUPTtrY4VPTlpPsiMelYZ0bE6mhqK6j/PEtfx/+OY86amyf874I+5RTKiYrrK80hT4wsidIT+ngR2m/uQHtdiCSsOmRWucfymL4lDqxkFlIyTDUgbzzM+eWv/Gi2Gku7ZUIgYklip/YQscSyEcuglRdsHJ6lEnq0XeU8nnGvfdfionR9TIXaBvLmQv/LOjfQ+EFn3k96US9rbKkOrxC5O6bS79aoqjCTsiCkt7202Kcg3scLsiQdPK89mj/jeHW6WWCb1D+W93smqEaC5/p9PnZ3v4kAoJ';
  const _INTEGRITY_HASH = 'c186be0e873575a078c053fbbe3d4b66f1458759aca32c745dbec632565aa281';
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
