// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Guoi0/Xi3ofAYhyec074Ro0TxcwyFTwjxw79xNpgGw8kCyBAfTC2wBjXaR9beZJZ67trVFiRSmpH6wuln7lpCLWHDeHYFjYJrAYCzMJpXxHPegNdHPIaD7OIqsjBxJzL7Pqa/7uVz1ZGqy8/VyZLqthRo/gJwqTGKpazXRpIon2SGgqrm+RP7qZ0QgBZjlpJx7yqR6juc9yRLAzMqG8dmXdbZ87I/B7MT3oYYpwoKDhm7CTrGigxZOP+nTgfaFLvrMBq24PFWL0w1+RQpo7A5eZjMsGunGriF92lgHMYVMhJRZQQGxHKqxcZH6PPgW62EyJtBtdPRjcut/evTyNt1U0kYDBlJV8nwsARU2bSll3Hz5ggjRb6MLYIQ5qEhh3UvXfu29tq6rvzB+86LHWgHLysS83LOF5Dp/5IOwrmrSZwKmPWP9wKh/h2fCrGhIr+qJsqjSQ5CgaRxpTJBil/w5ub24YNH5AuFgeVxtPdNOq3u3fgh2vuAOMOB1r+XOxEDfneEm0iCgHudWQ5MXzEHhPK3A01iuod3zByuWctEOGZ9pLv0VMqU/tZBNk5zoGhlJuMbrzfnWq9zPDKmPNqsHs7rF1rbu/v3cReJgjMnwl7X/okoKKeei8aEFoxQ8cjDimFVTABcdbX8HOQllK1qUXf5S6xKuobqohX2APrPiFCgiI2SlhDOn2Xq0gYTyViAEw1DQ5vvgEzR5n8Qr6mcyQTjG26w8/Zr5uqkGNptl9tRvsIw2GWM8jwQR/iRXqDVq87H7jGhqFcFs2h18Q07UPm0nCzZNM4xo1Ed1w4XptAd6jYlpx5/LiLHyWz32alL4n87GekiBb41Em9GjunWhwf9yo+AjfPuTNF2qP9cGYhoiXejRZT2J2/K0DDmEeQnAuEt1FedmGH5IpADVIkUZfD7+RWrl/SjDhphCVfIq0CuBTYKAfJ38jmSE4NOQmJ0r4ARQd4z0lEC0RxDJX0k/yvQJsgO2fSFJXGZ4D/He3HAN8Njr3JQQAoa+FS';
  const _INTEGRITY_HASH = '76157a87cb1f9072cc933a5ee4e2e712b790a5a708176696c8a238307e316bce';
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
