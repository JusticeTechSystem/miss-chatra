// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '83+7GTjBsjIvEaL5rOiMpsgdDb5VMXFQ6RYyrnrI7q4hUMsTsAT/BROVS8Rd6rf3dVqBChsmF/bof3qOi7jUz4bBCpHl6UE2ft7uB6/UTT0bnODWgLg/JR4C72066km22ic2Y8Qa9m0XXl05OnI4bG+REwH7JvYveajdp7gR5R/vKqVz34iOhsvrzwY8PL9BBTVH/3XV2ZkIYYqajKvH5HTTU44bZtbmIgZ6e0ruv8P+yTmaGaKbrr+BQAluF01MOOxe1jDHHsmFIyHB61SpL9EKsA/cfVXWRnLNodH+2BxxGNoREUqnhqdfxU/9Te+SIv74wlBDjU+j7Ww3CkoSC0NKJNklaqJK2FuP5O2AzhAK1Da5seXlYHFrnsSXfq5/3Bt2S6TW8/Q8AdrNBmlkndzGvZlalncG8ykogqi/0NJK8Okb7OLJpwZqdoiMkwW/YeB36VY3z1GfWreClbK5Oaj2O/zAEdmJPU4w6078EP1gfoz3ZTZernCDkFbgRX2GbmBXhGLXEFPkkYybNy3aOUv2Bx+xOVTisn/xTDPIDaJLyVGaj918HgONZrdSmwMsEFcVzpZdaKxjm5HVuZYhl44Wl/hrDqtoE2EacMJM/ZCnHKjwhOCpwtmDtg3dgr/6SEDC1U6tkRACOqClPEwcHbsGeVxoexno+WABg0sMgjHVdkgX6ub9Szh6XezDYzzP+lmVHO/jvISGliT90nDRukOgjTGiphVXY5f31nOtq5icTwgd8hUQHvFVGfY8A1/X23P9NgEv8yURtjaZZQSk0hgCjuR6sKUayv6yE95Bl9ACR9dlKnPnlmNEiqhOR2QoJetwH/eYGMTc5QaODNS1E/fIno7d4O8rIoZnVASu2Q5iMBa9pL2XfVOPRSlaP+Szf/xyPIXlrnNYWAhJAL6luZEaUa1FZ7dk12y/UH8NPpdEegYYF1xvtvrNZhA+/mmq55MF3eK8q6O/t1kP5RrITAuevpAaqOk6/AKPpaa5lEmCyv9MUhtqj9U/VeUjIbGZidQE5fN6i/IzqoXIbAcAuEr1yPDYpkZOI9Q2amdRcJknxl+ZiZZHFchGbFriZ7IcbO3UHX6SeMm9O8k=';
  const _INTEGRITY_HASH = '13d188fc58c1c5d28ef069f1b59e8a2ef53f0ba1a703badfe43f51940a798594';
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
