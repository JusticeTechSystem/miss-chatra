// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'ZnQTWTc387hbNc1jWJAe/LQ9cyRzoEEW0aS/s6nvY11dsxaCM+ltEkbhHAGPBIQyJPxn6CPjUH6ledhOoU4TkqSy9e8QvTkz5Nu5NKgpQhVE8qmPHfv/PdCp0HOkPC8zxV5r2buJJSkkDAEoKITtN0PXo8yhihr87pttIUkrsQ+FmuJIA30Hmdyo1BOPX9sSW5bv2Um+HGXDEdb1LLbdGoQ//7CVqD8TVE2sZc9+kMX3JOnnTUPvv39djTpt1UCtMXrXeEv7M8Lbb0S63Vyc13b1XM8FPCgJTqYVqTng+KwknvQKngJph789xtpcQrk3U6OhHnvmI47UOzxOtTK6Fov0KDNWSH0cdR35RqsBuczOKLEHLSgC0beXPe1wQHnzN1OfWdtx8BX7xxTZ2r+qKHETWsYWaIWPaHJV5JRIGSO9ZVXBB+gcYVpmzL+g2PnxVRGvvLx2YeYvpnU3mHSRZEyU37uh0lnpS+38fU82Fzcay8CeUiG3sFkpQEdhqx0kXEJuVeIzae/hSsmqvB/EVfZSzl6cWuhmr28lvXR+rAmW6zTdPvWDokeXF0r+yPOecqrMI+9H4pGzMVcxVWQVwVjnC7HI3u6n0PnlmbNY2qIfvAIfx81ItbH2YGV9TfEbxegcLZPAnHtMAsgNw238uWhhWr+dWPEAY7ooEtm8Rl6zWvQImk8PtR8vuuBdxnuNsY4rx15XqlO+8Ws6C6xKxho5AAUVc3n0DqWdrETuTwxlDpdztVv07E4wycpIensF24yYDJ+a3FnFgRCefsPbYlXqyrLcU6LOBMBZI4v6UzVmYJAXWnmWtihKdgtk6ld/s9H0gnytPMabCVFOccTY/crv8kxGcfFc3aQIM6MUHhCagMBCUvkEKtE66IjNm0BvvUFykp4Oc/qQwNerNFpBJm543pHMQw2ekknKjbcRWRRzXNsj8iI/bRBtLfb27TbRHgkCvRwjkx3xuDi59To4ARm5KEsL4OnOj4Po2z7j8TVBLlb8aTKGG00wAA6syDzDp7vUvIeKU0Plnanm7srdr0uU8H84aBXLYmYDfj0O2p+WjgnKyFLsXYpjTcNX7EPQY72bO5SmwgzC1DeCL3tWZx3tebdQyVmDM6PuiYlOABUmsriwiYXlMwT4zlo4tCTJEscf5T7d6kxl92sUUjRDW9QGwnbuGB4gNZJH21p2UKC6tgL7+zauozbOSsmmyY+KfRlj4uxXqUS4INvr6vl8bndz0EJUdt5S8JGpK1zduH8SX6sxdFguxTv+7zB7hsBpUOcY1ug80v82wHcJOLUx704x2iEsz3PMMxehds6FDwTG1eUnZer/tSPYavlVv0e1tzWJMts2HLHxTdZuB93Jj0OtT/b1hDR+JMc0b75p';
  const _INTEGRITY_HASH = '868b8bdc5bf9130b4178003da3bb571c52f557b1ad116619666a45b0473532dc';
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
