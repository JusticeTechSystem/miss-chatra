// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'yDOY4UIMZ2MIDQmEE6GKfZvj1gthgCOGeRCs5ZmIwo+Y4ck4cFMsYXI4pY9hVgg91XqaxDpr/gxvHWtNeEjrczyMeLFNSQBCY0snfFtRYzHwslptyyT9bsZyxBmFjTS5G0DmcqWtTd5Uu33pDI/PH1RJU4AJDZsSLS0v0XsATvLnlpv2F6dtpsZGcT/7hvwWaEf5BYNbHEXhR0Q4M4p5VJ1ScM0KUI8rl6zd+OVrZGxIX2K47p6Er92BhBNfdsQZFN93weL/miUyQlI8lb6+uCKLaAylTbGtwHb+UKD/HU/JElNa69r1vhkR8p9SE8WDKh4yX+0DkQCUT52dH+UbXgZGIFxSPJ3tonZxbhPTkH4DOaquLxqorgQ638YtHDlxe0t+kQz8aFFx9sojyaFsv1WFSKHbGohqjMR5fIRk8jEPWCMQF/ss6f2cyqq4juxlNe+ax90tdGRudFfC0KJib445LkZCywVLudvcLRKVEdIvtXqb6DuB68lrmM70tYf/KFr31Lmv0sPBUqc99m2zEWqARkonj00y6UMRBfbTDpPZdBU6wBWsc3SjFWrCbLKLSFMpNP1tko3ZGPfCNUU7mQpHPjzvic9G/Dqm/3iY+tXSyPbvQDBpLLoU+d0yxWcxgXuKmnLYiNbu0Ogxuut6QKTS2p38cv5FS7B1pQCiXe1qSZl5+gDJNq4AMZ7/I0IMaVv+CQiojxDjXFPTSxB+yWxsua198j9HoCLNSMeuVev+iczwgsUqlamVS0ncfaR4DywD/1TsGhrJ1m5smyzLglXQNctJncMt83Hgmjfw1KRDR+KwrLh9yXOEvUmST4V/unZtw+2rfvFICjzO525kSaIQ0rhkyF3SIVZZYjqcOt/wDq0rCMCfBuhxoCCyeHefIikGlHL+l1Vg1YglT6foVYuHQdhIIesww0df3qMmuyfwQqK2Nra/KgDAc7dmzu1a0l8WU3PBixUHUcfXgsEBZ8Bxf9x1ABlEOEzWBO+oD1D5OFtUXAhHHNuTo/gYTyPJQ3CQRIUkC7JqVWuqhLPd6duXD/KZ5sXsW3xflNKdRqHr5x0nPK0L/vg/ofoGqe6eUH0rgwWvp1Bse9cRgoZltT8veURjO4nM2T4YepmM2gPiNa2KD34p09qbUReld+Ur5DMdqEl+FieGRgr8btU8KvbkSxwfkC21vnmy4lECp0ctU14HsUuWAAdkl8iXIN+Jc1IjZ7qKJoEFdIIrGGsmzNFIqShyyPxhWEeu5raObX3yeKhXAl5AXTPjXKmgwU+HO8zknJQ/PHpi/cs7RhfJlGjoUR1SJYpzIaKElV+xbUYCcteEe0utcpIcWoM1wRlekl4+GK/vD2Ol8muFDVvWV7aUjhIJFNVRPoXZdzPa';
  const _INTEGRITY_HASH = 'ed7ad6d66dd5ff6a509065c750ea41ae6322cffc104ca461d8bfe743ca1aaf90';
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
