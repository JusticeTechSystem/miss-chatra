// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'WKLL5ynR8t2rkJPY0s5KP5rerj5yewYEyuDzIRnUv9mlNxDigEI1YkcOFtll3+NYsY78Zi6q0byCVlGH/t73d9xAHyA+WRfskxGAN6X4PHyimlc3YJ87Q4z9pIls9//8slBbnJlLOv6XTdVoKNAuAS8uUK9xGTSobi8A24JXw+EY7TOHafqhPqooau4FJGPzDBIbpbod/kBJep2IwZ4CJAfg1Hv0zuP+wXVVdfac0iW51jef1CAMEft3XApy/31zC9nozOMoIw8L4tYQiCwOOK3gTPa44X7BHn6pcGcecsf3tVCqAd47dwB9CkE4yhZjvRFQHjBJnVuci/r1RGYx/WDMgFbLWUnbNwHFpNEPKR0cCwf1OG+g2G8BfG2vmYp3C62OE3oJFmem0mL94ZVobaj/3jJs1t5dp63pZcfHW/SHF5W/pRxbcDBK8d3efIRQAQab0mEWD9szlkrM3uOpO/jKD2IamTvBR9wcvZd/h/fK9nY5t3DycBfry6NJYeNbLVyKaLXrmMjXs/mBLoQCGadLg76BPmucmlHWD7qDZssPDfC8QTHdcXaXZNyb8MSvnmDY3N9weeAOzwjVzmXoUGtxIfmruCQDoUiZ+5ArReeoNz0FRiXhfjvV4RTCzZeiKOzPeTjTtlIYQjrcCnGEKRDfBRed1jIY5OPtxT683ZS5VT9JHO8HfDrykIgB5SzPVIqBsWmvmslVvP2/ArybsZQQTA2rPnJeVgurxeUgNHYb6ud91wCEjD2zJGrMGsLgYvidQkiI/r8HR0AV6cSgHYKjZKrQm1w4ulH+4hAgJKH9yhgTMIMzK5cDPVAmUaeoE3AfWzoqrnqL5SyUV3V/fHx6GYqNhFko+Ei296ReSf/REsicFI5yaLnCz0o7ZJWa4VNMFcGr049LdmlsQzFKlrjGlq25V3mXDE58ZQpD7IrJf7RvP0jkYmYpk3RTX4fTG3uLlRbAOw97Ag1zDhwyjMJlDzX33JPQHcavldrdV/4yCYXgx3NPZvcYNe76';
  const _INTEGRITY_HASH = 'f012c5ff5a5c4c45b229220494fcf34b728b5355e0d79b49844266b45b888f62';
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
