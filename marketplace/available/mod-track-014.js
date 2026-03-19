// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '1xmW8nQExCAgqBlGlS3SqABWKhuf6P54ARMXLo2X3h/DJstbi7XMRS1emr+KD+u3JWnf478Jz7jQanbIlUfbRG+46uhwlHwaB7BULisvQ+uOs91ihRTa2OgDJ+Tzx2L3FEtNCp1H8lOUvsZpKMC1WPnDKjbpI/YZgXZ161uF4PbO1yzEACUAkrUBuiFR1Ho7yHupGVMRwsNHy1LBx/Z43XFluydhazz42r8MTrMaQl8lEoq9Rz+XOCf5cFIimU+4th84Oi+w59zF1IIsYraC9+rN7VAzw7CUosGdvaEA/IqFWlL8uQmYHRIscu+2jvwB9r5FBYr4Hf7NEOp83hlycXX+2sCkoNAbRECFVd76+DNrITfwAt7OxWkQoGJHBBuORgBMB+CvQgCherKyhVgsuS8xnmjP2c2cU42J62HLzmeGLk3i4WPecmqB6qpQc9Vw1/mRvYQJ7VURznO193j+ZlcLXvdWDiSqrh/xM+qPbdqU2tcTt2nsGBWpv65fjmJC8uorPRfCCGrklsLDt71qQorr/S1LJinwG2oAPTWXP5P65SU0+PWjV1BLMUzxch9+3JKzfpFG3zqisFAzHwa/5JYE7RsrUwc8RrxO9A68B8+Z9PxpuYN2tZ3P6j9UNGooZ4g1ixOHGW8PLWTTa2nAX8PCAFZ2V2vRDoAnQFxoDNadvdrlYLXmkSTtSUvEAXxrbuwsXFUl4oa+7U4hIQ7laoIG0A13w7PoGhoFMPQQUoV/JOMqP3w7976+bgXTq8LW86XxehWpd3FQxNSvIcdKtF2UaTs1WjIy6Gd44IryWhSSKGqSE5fmvpZqTuyTqG5yaOob4shxDVFVzrM70pKvajFJVqMvZS2Vf8WWMLtpXIHY4+Az4hx+TwG3ox5CkRoUJqe29m/7xPkgOdyTepqq3aAox2pP240XqfoCQCzI/mdBrTn6GSurkKglGLtSYn3j5ScgxUVK31NG5CfKDs6Bc4WzcWpM1N/Wo8I+oLZF+TMYUt8OdDs+7NTaFBLy8NSCPsgu9tdqXBD1JFa8CduaZyjwyAE1aHHcIa+N+JBPKtJC4MxO9LDmrQFlkO2v7Nn9FKkfvc7+EZvin3gnbWJRUlllX5Y7yW80RDWd1e9mmwF7SFq8Xui6WhhaNPxIiHA22FjwFeFoGzn+wvh/9rNv8VNxJmSVTK1s7VMi4jMoFMWEZ4myqwN7CTWDCkDjp6twcMDZ3lQPtYWoZlgAQ+lbpSJNPt/fuRD9sPEutN7KNuzotee7OxNGk7C2ccQYkdxa4sk38/EmVHPOKzBj+RR9FWs/EGcqoEvjK5IjJ0tqLFrhyLEQmWDnAPhmE2PPf5Y5OZXgE9EkPi1Z83FIOFIwKzxWUevKZfUvCQ==';
  const _INTEGRITY_HASH = 'c827982c632752e10157027180267b1ef28660af7784335cb32a8041d16ff871';
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
