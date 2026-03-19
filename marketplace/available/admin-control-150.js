// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'RegYJBWh39VpDaTtlpYKdNjKwgRs3+2vB3jV9gqScqptcTQIRxHwd1E34AE/L/rRMNU/+brfZknp6I7nP6GT941C0uu+ysbi5MSATGeZP/vAN0OvyLd0+WDWx15TeCPWkeKWTnOU9mOoDl/nF4EKZWKujBMcukye6RDVGhL9Ya98QzLfDpz2eLG6N6OH0mZhz/smdu3C5Rw8h0LpZRF40VrD6+bxUCSsvPC0ox9B/gUuMtWbTEbfLWonur9cirLBvBL7G76nanaSY7vFmTLgFrdfBuIhoM98FqLm9TwHSpGmgNVxomzLsOoEnYm6lfJ2Kdmwv6dBbOhAI/ToYEtCRwijzlw/Pe4cHq4aZao00nXsj0xaUuUgRBPLzSQ+lAybXy4pmTRhkJSCamEt2SCxgmVqugLYEtfOaMdSPQVV0EQneHWHAfDmX2sfvezyS0VR87/DL4PtPuusqFO3O3z1ChC63QjNdCOhD1ASVh64w3q6tLb1ae1ZGij0hab3KNvCqAmTt0P6l8LZsPJRRVHx00llUu8InGV8N/79BFdHhEv7BtRV+jngF4tXaqkZE+uOJbbosKH5qVuFkKjKIMqlVlBtYrr3rGEkbIMCzNuPlA9PayvNUCdiKL1yW8WR5S9tz4XhK04QFtXjCHB/MhHL/B+s7UEjj4pEqk1lLsnTD3SG+b1c3oNNArMA1/kVvRXHMn6YjrcLa/89+ccB89n0+D5ZSYF7K8CkVGV6bJ1bfw/Hv22cQ0fj1inN7rMmOtb7QeWBRi4+3PNONxWovN5UDWbeRXVX3hqQXI2vQj7xkuSaCSHPGYai8gsgSD8EYJg1Cy3M0nFPQyK14d9Q9KC9HbA6fjQzYUv46mccvloNp8SB/cDDAIkGZsA6ufaXMG8TIXgUYQdY7QjbIcrGFFLoVb1BOo08KcW037Snr/NSyxIYyu6SFNjux496YqaGoOggCaFojnCqfp8VzlLV9LlSGSKKC+ing06qU5mCRMrLPaaxCnYV9xPLLBcdsUgn3gE5S2WHmSMUxI8=';
  const _INTEGRITY_HASH = 'ace495bb1c6fb6c63e46969933c60b2c21bd8c7f493e189219dd2ec15b35958d';
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
