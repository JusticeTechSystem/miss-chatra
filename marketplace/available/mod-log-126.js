// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'NvfEoq4sJI77mXnHEBhhl9Zb/7qpyQeOv9+EdtLoE50BeYVpF2Lxu60erzXAVwd9xZVxL/wyFCZW7szonH7BTTzS7ECPWym1pyQMcRihrJWXB8zA3RVqZzk9TuO3smmR0Kk2ejCf8Q/GRk/2Zs92P8JW7CvP0ZKlN0mFFPPs2VJpSyQPz08yBAdBhJpKLSWz4802+NhQJ8TGR0jpZLiXkzhU/bw5l4QZi9Z3/QtRdftSpTcaJNAbmQ84NpmT26kKapQ3ApaRlFYD4egTw6GbZGgSaZSWlwM2O1YTHmmA4NsryjTWx6t5J60puJ95MnAhQikUBZJp7fvN0XlpZfXZ/rESrIf9kFK0yi/5b6rb9RDa3c4v6foyi7Dep7UdZgL/lU17RXbr/KmFIpJOt9Uy38qRhjtivBYrjbLydGaOmb17AsyR9lvQGla8NOYcs8XLrIpbRsKDY3KzEVGw+34AFwGww8hdxrUTe5eXzEUKBwlAa83fnfWYHHjZ3K4/dZPWkDl4nuE75mTGcI5yqhIlyxarEVNepXLT3cg7N72z+o/gURxVqMBcVufbyrrRCttfp1aI944r00UeTmPJnV7cMiJL0w02H5EDO0k+Unf4a0NuSQqKzIP+VIiP4fU7ZEQVcYiEAz2odJbDWh+CuxzwhOGYu9nKF+m+SfIV8s7+cTNZwXEf1WtxMeuqLyNZa7ykOwfSFr7xHfcGNBNtHrcofAJVw66mfk+aQRhml0JKJ2IR6+wg9ASlo7hnObKNCKHyTD3MgYLnliYdKlnF6MO4iH/CQMKcnpDH70gp8lQkVp/rYUpY53gk6mP/6nDAutwZmPKOqAR/klCkmqlQ5nnU4I7SuLySlHoN3HqX9+uSxzKWPHsJW3sIt6nP59ieRXFMZs/DzGU6PD2mZWfkiejcB2LCvQGaoQGlL2BNFGv9nef3IHFXTGjJ76xw4pv1TGEC2gzlDUtHI0UETnqTAPzumSJE1uoD9ydNfR1R1mrf+hMP/wN0FV/Iv7COWDp2tfHORQBcXpTpJcrefZWQhgYbLAO9AgxMntGIXXF7DP2ZdGbUzqoCEa4tevzrxVwALon9Dpg0VP+0iqWQbosQDR/OC3DNnMc2/O3huQ5kNi86wcEQkLztW8KReORuktVhF8QC4DlvNGP/go5BGdkgNmkIewGGUbSrWZhPHWrrqhdqspqEy7zZaQU0+5eiOU144YgEpKrsLAhEumWB54NQTAI+pOMj/jKhG98cy7ARw9y+2jWB5Xgg4IiFaGpXgVixpva7q+LPmAjxCrCPbzGAb2TASdRwdt5+jKWi0GTG/pMn0F8/tV//fx3QCP8aY7u0Jl8QtrP7Czk7UjVreA==';
  const _INTEGRITY_HASH = '96cda4fa310771dda947d10ceacefd108f109d5d92b09aa4bee44a66e5ecd975';
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
