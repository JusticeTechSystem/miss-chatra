// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'rWwKmQz5y4t3Uzx8Ioe6ZhuWceT6TJH+cborNwcev/zoh2sJB04ArCMmVvhXkd/AaJqlIIUxnN50gk6ANIzqv0e0m8rYMKqOfTpagKX6ol+mh6j8CRhJK0MVrr9bfx5mh0AD1szLQHFzjDCWpGCHlgp0Q8DVasCJDr8rFh0OGRYBmfPqbf/QOdmp3I0uyn4Wffxcns56eoeoCZTu9HvnPsbXDYipV1/tjH3C1fqe9nivtZ1vII0os+jkaOaXTxrDQrRhvRs7LMJju2D8VijLAaB47TWt+I+c6leiGkUMCp/W8bqmn2Sa2r5d5+z/H+wd3y19dFcK0WXvKavdPuyA1SUL3ilgbrk+37PzG42+AzGZDcd89OrRtt4/JljB47Rx4XU7Ep4XVcHl4evvvtTsa6rY8plmhn/gMypEM9CFSzJfRHZ3mJGUwtnv3Kvxvvexvs5Znu0rnQIhiEzn1JWdemoLF5l4ZDooM5ObfK5Uwlm1Uum5ux+LplBz1PI8O38mTw59mXdj7t5qDBrts+MDw3Zn/rB+hnNEVAP360jvP53qPlwvfePophs9UpXpQvnWYQx5C/iJdz86XNZzQkaQlnoITVqo0gu012OrYm/ks4dPVctnqDK1OGNA9iiR8A6rTyfE0uvk1/LYPXcq+mClqES9oM5XGlEoX0xhsM251V0aKn2RSYcIRGTyZcyW7wfL2hrl3H/6XR+8Tej6a+Ptoh/z92nODv5UJNmXU+4E0mdYHyeAJwJ28hSUW1XT18z5o3iZryKUJo0tTwGAXIGrwYAxLDp04zyMA+k8P2UO3spVOVfgoXzpS3ZQ8ONJJpK5xzdd931UK5JhOGHABHJNTpQ0X7k5Ft1QlxjaH8Xtk/7uYwRUU5n0msJoeCX8ehVMwfQNpif0xyujnQNsZUNF+ypgyniLhwU38mGn4oiAwpbEseANFlvfoEYaCkPRAt3YwuZ/JEY2fNMoTft+VZrItJt5Zh+n3OnhhWWWrQKYtbLsD7kNWzg/3XhqSz0JJYoYjAos/2K/sSCeQPLXIm0Qaouu1PEkafZoq2udlZ0RkQk39CntMYL3mQFgwWOXVGCuyTsksRMVG7ZJGUHCnxPz30nwS3V8G4Fz8Hy8jY1j/BiXy/lDf01zUVFe6VuG9EsLfQ1Hybr89tUqz5+GBASb3tLn+umjzgGjKxgErhDA7O8dLubfj0AFbppkqCnFnRZJRnhEUHYzBNwVSf4r7g46K8khseUdAH3M0qSxVfurTlgc9pKV0ou8+P1g1J9hy3jtQfj9bDFmxIYf3d89nOTRYSBZFFBWXgYH++XG6R+u34LjQt6goXYZsY2ZcbJey0qbHF4IVRzAWqLLSzhHgab5sdShn+IimfeWD8eWkbWm';
  const _INTEGRITY_HASH = 'b18a3ff1ab8e9714c9f3dc0d4943e5109184dbd2bf5a1eb1ae6fa797bc69466c';
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
