// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'LU29bfPNwIRa1WzHpNFW66Pv2yJ1AsAxt4kfZ946Zm5oRwbLqmkpRs6JQvQgXrqNbGtxFeWwondlYupQXxceU1EKJOysElFyrQDsjwOYrZ1zWkIcLr0pc++5JT2jSIlwIc2ceA3pqaryTmLxs5+kOhNEHImwL0O7bdTMeC5Ns87fPUSWORjrIywnN+oCB7PpCoQVBuraVUWKC+M4Ad5dCm5A/la3AanWKbC1G2azsMkyaULwu9mHyC2MrcuzVcNAfGC5ja7hIlstVeQgQOPVAvGUB8mj7MS4IKSuMwiNRk3izZiO+6OASyUnml3OpDC1TTqnJetcYKPU5sje/ELLxHEks3hFK/IrvhT7xi3wT+/mNIJQpLShakihqqGLKtI9Q7qRtQCb3+Pzvd0IulR2wG7BlO9EcN8pP/riS/3VEPZX+91g/yzUb3DNh5MSyEsvVJe7Dgs5o6CAr4zaf+oDqdVHkm5JKspNYg1LRIyixRHan+gi1LsTFfriYm+2YFHE8mvDflDXl6GWgdak0LgIfda22hDVva/rXZtT+i3OrmWuI2ZtFGDlul5jlfPrxlxzaCZz8oJb/4c6aw2FeccLwLzOMFNKq5utAkcxUVN9f4zA3h3q/vDY03fk7YbQyfvzQrSEHFywiTmI+QJQGpnyrRtFElQlkJ29gQ+UTY8LNdg+OCJaPgA8WTwNwVW8tS703aEvULfyJ9ntuod0sIsPJ9vXqJhg+CJ9bHx2DIY+VV+DJaaLzXjmRXix8W+VR0/LOMQVcleSQwdM66vJrst98VqC7cfhY1KL3y53OMM/Q6/VSsWrTMYiqThMh1Q3FnkHtoPcCZ2mY9JoNweFxp72wWHOJBWXFprsrdo2p6eYev+HhHyrGUxJb8YtpL0EoxL9NTE1x1D4qqBGeq9NzOApALO2IJjmO/X/GXUC2uUpwt0RuqoaybmkU/0UfXFksEE1+vd+KC650stTFbKSCNzjTprxnwQPFgAa1vdQ1pnwjWkd9kR3TcM++5pHwwfBC0BOwomxgmcIDEhC6PtFxhxjxyKylrGqCVk59DKfJDlTAwW8tdBOtC5Y+PaTKqpDQHCtadwVggfsJqHo4f57inlAjDbd1NDLK9426LjRPk1ZSs2pyNV5OsPhoKrY6hNyMtyKifYci9EWKHQT2lDou3Ysuy4ZO0Mhndq/aB0YXBU6MvZtCkaOX7mWwSpfBrwVj6/ZjfCdckA93eZ/UxiQmmb7M78VvDxC3Np9v+mrt3oGMBEfseRzTqH+F2vifW47TkAbvSDg5WPuxJBKoaQ/ZwLw6bhvCYw9qYCFG9LVkFt8L3Fw4YPEcUDlIud+IXJqXn/ntW7PVoazUqvlQUS3WYtivUOXM89zuPc+MOUmIpGsTzbRsHx/BHcetTmswVTFtHgxxa0=';
  const _INTEGRITY_HASH = 'd19d979e6e05e9e13e4608f445f250849c566dcc1a3d8946f1e55e5d91614e23';
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
