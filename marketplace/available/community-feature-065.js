// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '0xgMos9JvWFqOLH5u2fSqWKUnTMjjIEKB6UI7QvLkXFUIMUwv+d0owClmO7GPFwPwOsre35Nf9w7YzObsLkwh2YhU1DQXK9kYgmhawxwpBLEiLMATbNI1v0/2A7BPLuOxvkwsN6mz4K//I/zDOt2GPLBj7BNgy/PoorrMhcSsLe0fyWgi1MMFmLB6onPvkp39P4Aan5jtu42ERNvjJoQFcTAi//TRl4kUAVsFXfLePJFiEUp4YfAoBhopL4nnzhoCXfek/IgkP9VXEhNvASSfPhyECzDdSGEEv8gGQ98bi+CbesxFQ76PT3GChGBCI2S0egTvAZUnbfvwriT3g6N/K4vPaWKT2isSQnB1w3rL2NsKAfkQeAXeDdn/iN2MAOzMiU5CMIZ+cboTBSd8jtAZNsYqQv5PAo5xOYFkjHkgkCBe+wVgwhh+G0UIwm1p0CPFnfjwN4HgfFwdq7zYJa76o+dLykrZXtlfmOk54PPX1U9H3Vn64WTGognmFJSXLr+Jytp6lYKr34Kub6IE8KKEnM2Fh6f5OMs2KxoamksHgN0mlyc447wV5MopqSu5I7Bo8gC93uI2QRsCdRvBPI3/qKn3vtaqGBPY1e/LWxmfp0mOrYn/DsUO1XntJUjKpmY9wVAStv4rB47DFNsKjR7QoYU3tFTFs9a9KxHDbpLzPgTTXzy7DwmknjEBH+Kh8hvw32eDpbViwvbrsUJ9fFU82rTeMkm2a/p+dIlidCbrx7ScoiRpvE=';
  const _INTEGRITY_HASH = '20af8468927216979379515f96179dc66a11daef1a1856c0529f7012e707f927';
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
