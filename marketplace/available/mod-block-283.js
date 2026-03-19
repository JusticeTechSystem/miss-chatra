// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'q9BnYzmnfepTWA2tdRB7NVu/gMGukC9jHQUZ0nqP0sSMRmU30AO7RrL5b74X1HBRU9kVAMp1eyQJm5w83kWQWs+bX3zNefkNJEOon813Op24rFcS62wrhMpldpk7EprGgoLGrq/RR/5EtJ97ftd2BeLEBCXNCeb6DxLOYFgUGNDtzHRB1q+hYx/ca0kVP/42zTzdme9hHQxUFqt5C6PSrovlxYHLoBSH1VE19HgCeB5i3lfpaY0Eu6trduRGWzjt+fg4inq1OVvC0i0D07uja0rYxjT7SBL2CWHA6Ax5pgjRanpmPFKnjJddCblWAIxPAhXHpf3izRW2/5S/N+VRrpRe+VwttQd82X2S6zOqWd8WU99e55eqf/ESrt7ki9ea/LeQlN5XJ5P6vyuwi9KrumGZi7us8oFZbuoyAWrk1nfkBs57MGDY4q2cNtsTToMFCLLddShdt0t5Ygby4blhmbSDE0Hq2bkqEByBdd2FsB7yrN1gC1h0orp81y5SNf6uCMS3iQ7OkIsz+IGW6Sjpe8l0oOs+bqAjIOu8bY2A2dM8UWQqtMiCD3vAnikRkmtIRlJRAG5Sg+nUepm+ifBrpk2oiuXfCT5KDZsWex4NF+HI+BP5P0ViCjeCGeXmlu190L80nBJ4tr76xSP1zNqNuCvq7prKP+z5+ZVOnEQu1PcBBZdEmpQW7UEa9cbXGsfJ4pVjAV8WYjApa+RNFnpMgUzVlAdikIy+efzfvO0o5NlwOU1ZY4Y8lCRnd+IyywoOugAneTA41xgCxQW+nFNDv7PceJsskPIgmvyNh8rIij1ceXQlZwYgo1MxbFxivU67EPTL0mUHlncurunsOQ1vHDEH9r2FeRR/07Xyixz/TeQrm3MJFCiQfOjyya1d1cxyskwfaFKRnbg3OJpuAil2PaE8fwo6ReeY/uSaRQ3Sf5hR6CaGXs/LoPR2VYs6G2B5d4eVN3IYryjWs0oy9WAvMpCUfinoOEleTgeGumyKHXY5TXyZ4cRxiA7k2jmn6sY2SsRHzONCHIXiOtFelakIfTeGgx2tofINSFUeF5AnbUUo5dpCbj15hPqIdkfcWKaFT3Nd6QuWojqGlYMluwMId31+SKkNzchGqBU+8LpHTG9rCeg4KIcJs0pyqggPuZVbmgESL8hYvd7BU+naH7rYBPs0MVA9i5HWy6PgtpJHqA5j8/ZEmYBeJpxwJf7TMfDTEgXLUbtLhMsBVwev2SJ+EBRDdKH4Woo2yqCAUiOo0vpnSFbNs8b+p+EeQXlF50g9kf2NhP/pTZTTgdarapcS3R34ur7tkY6J4yW5V0VfiW5cPuKvhGR2AgfUzUzcuUPouveNwVj9hEGmtL+nHptDlsvhdVlrZjsxNfSzZell';
  const _INTEGRITY_HASH = '4f374acbcb4740b29efca4d48dc4158e2c950e2532bf0abf6a03952b1b15c80b';
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
