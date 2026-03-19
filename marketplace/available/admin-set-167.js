// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'mn77e7bGrapqtZJCvPT/YEn3GscBT+fHhLGgL+LWKxw8MaLQ0vszkSwrOPBBPZNhvALBKKZFeilOMeuKQSpLxsF0R+r/tvQGNaw3xdoe9BeKO70NZw/2g+44BaRpWNFChEMV+ijFTck93T6PVRFI1A67h/G9pPak/fgHluZNPEb/9j1GNhkBydGKzzVTSGXUwiU4Sst6MDzQ8XG9QjFvjs3/NJWg08xZ/5q/WEyWuwi7fIcsnf7s6vcvAD+R17lBmL+VXFzkY1mTdGhHeRURSw0V8F9pb9/HvkgxFb3KHF5wAde9vYG7TXY9T4xu7xfHoch7TvpHpwDJrj2Gr4wg1Kp5on7GXGzG1wpouaYmHBKNp1VYPnXYOFCNK2Aa/cYOXQg2x6XCwsAx7GQpX/qgs+0838eDV8lR9vRr9Q++dTSCQ9zjMzNAtZFJ4UTMRy4KQi8UgtG1K6oH05YbPojRMnXCZUj5l4HfODymXF7QS2/lYTnpWPUmKXvJKSeUB3cFkRvIdFiyoh7gIhUwZ7ngHRG0e0tFD+hUFWq7OiddL9sdV2pKH8GtWY/ypSRc89BEhTneP4yTQUl9+3mN8PQwHm06UiJHujNICeycGOpGr/6fbbMIwbL6tu2K7X3Ys1DgYhADSfaVEdY22hwneRANK6xpWYlcqx/CZufjv1mBth3tg7s/CT5Ax35vVGHfWqrkxT0gtDPqPBpD4oRSuCbWGvvvIZ0ql65H1iJ8LeZCRlxcR4x770dKggYyalu7tpG1nbO+dxDHC/C7ko7FIjWGlIzIm67ua6k7jdmXcMejv0F4KWjt7Y8S+c/I044xdh1FAljThn86T1iY+betAimc/nDWyK1z5CQD8bwu35d/r/iSJTLMrviQSSvSdHXXEJYviPPpjuNJEmsoMUt4bR1LbFO53jJf7ZDWsMj4B4Bfyg+Av531O1FXpmdbe4/MRKU7Qc0Uq3W1qGY0zjgFK04eBvv2Y6FNXbfo7fm5WA==';
  const _INTEGRITY_HASH = 'b58ce15ebf049286374f9d3a29bc042755d00af51aee7b2ae2be30e2b18f4e8f';
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
