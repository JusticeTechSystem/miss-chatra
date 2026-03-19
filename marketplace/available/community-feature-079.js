// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:22:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'KYvahbCD1zLKDvDl0DtBGWqMnffbFhy6FK4/QCw66X+K+r2k+BoL8l2cmvMxiWWc+1U6u8avOnQF+AXB2Mp4hBjBoIR7A4kB5te73Fj2E5Nav8/FHVXpzqNpeq1Z9k5yo8Nmc7t421XtnJUHyak5x3C90mD2QQlastXDBm0FaKpLmSnt+yMELPzCU3luuJgDElXVw3e6RH2pP9gnLiZsrYBUkXckKm9GdsvxuRBC77MBFfSy7EJsdwfxBKmkJzzoZqHpl1kAsjCJKv2NjtK8phsnu+F9pjEp+PXCRj4E2RMJfygtN9GauDMVncTQ8CNz7/dPxAjV7LxB6KNS5fwnZSjF49iD8hs0ixRBGPe5ijZZkS8cRy8fHiJk3rXPnvc3jlbmjNaa7pMIYxD5TRaCEfEDX6nrdTDUShOOUMyoyCWjyMre3e3APbyLQ1gGtEFMcNvX+1ypTTZjCW4txedt91lNmLfpS0Hgbho50VcJmMKcMUWeswYOZmE4oFJ4qjw0Clux1e6+Xk79VaXXLYp9EnpcorxQn5j8STdxWvKrDqeLz5DYDtl7myH+DtH0YlvndYojejn0V+j86+1+oAqK2MqBE4va+oCelfA5h0fRXfw8Pxgp1a0J+lMlutuhbutcjUuvFVpia3mrRVo57v5G0yOM24Ivjp/znZre3p45gHk6401tn+yXye5TOCqAKuiHodryzwUgG9zGV+oUzfOGD+6LscLVgx1iCRkkQYF1lGjtTA==';
  const _INTEGRITY_HASH = 'fb53452e3d2e378bb9c0f03b6306e6a47ef0e64d033c4d161151e46b8b9486b1';
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
