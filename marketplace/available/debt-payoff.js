// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'L17iC5nhNgN6qi1VAMBPt8GlFBdyUnLcaQnm70z3LY4yGF1NisInXtDpT1hEwJGOfnjutzMjO0/wmilquOejyl5JKUnYh/2+YQnyxbSk9oCO+T6XPF2yJsgHpmhw118KMYE0iLaOnl6LMEU1QbT/iX0B/YHaqioFc2SUB8ke9DGHTB7uM+gdGvjjEvaH+YNSHl+dnUyt0m1KxyTRxovqQNlB4Bz5HWEphO/urNaQa3SR7alQPCVAJWXDBchrzHnLuZ8zKYArzfSySiNhtZL8QOjQwPcT3sh3oKuktCTaWTNovX23uH4qxOhupYNqjB3EE3bH7Q/jdVfZFrcjnChC4ThV+WFcbCWnrwiVYw4pO733QMHq79gomDYllhj87oOTvfMTLKv0dAjKhQOTp890F2Z9F9sJZI+YlzYb6YU2u/QABAJMTN9bqO7fxIz3LKJe5BdQTJAVgEXeUlwYj243Aq91Sax7uff8tM4/52pssQBowLZIjEg8n36hYSr2gTZrn5yl5fBvpZnCuTdkcZ7qhePSHqXMIfuMgLKmVMpuVapNZIsuhhKl+UGmLP/lsPpNnpfCTGL4gIyBNgApeiPjeQhDjLRrrmZ2VIKXBXTjMZ1KxG6Lbm6ZsSl41K0iVwfbeffzQAO6dYj4kV6g30v60ZIX6CxQ7bPpzMHMlwexBXKDcQikv32FElwLqdsI1uZ5ekIjVom7pB1zuslbpUFk+KCGviYTRpYW4ZrNQBqWHYFmGTxjSGS2LDM6JuwvTiG1fAzu6Mc4MHih6Wep1odYempPNyKxfuXamQxVtG15t9bJkJ1AGUlj53lK/CeQfqH1cqNaMqsi1Tbms7ipPvb9zhi6Xy9JBMtC8GlcJDWyddmyns5qCssQlQYw/aK1nu1pBWPywAsokXtQRyJIyWn+8vNtbSYgjR+NQmjOoCj6MAV/pxwZp4+vV/U3L/xlhQ6Q8+nwD7Zr0N3kClK9Dl6L+qQeAZpbRrG1hUZyliL3NDT+3TKq/P/qSpTiWmlxHIXTUnlBJPcIvmzElIMZjOcWGDOiB7iErbNlUKH4kVRUE7aibDXXq3JaRs8TEHaxjqbrcRl6rVMSd26jo2PsztZzPjUuTSReke67vuCZmeGjP3EctIbd7SOvB1SMG2pY4ig1uBsk3cZA1KaHjvD0KyDvPqfnKO/HEaKAVXJdfWxH4qxbdNmtcKj+Lt2t62pBiRm1ze25qLdRGaN68lmIRIopDxf4MQvAuiJ0lcTN9dM2h6vt3md9ujtB9cZXJq9Cv9UUWMwmxJU9wiN0A7IoyXxUctG6rbOU27Nbbkat+vyczZn/EAJ5jrot9r8/LNJIy6aDGusLsWoKYc+QYJO4vC+OBwatW0tNBv6C+QdxZ/Rt2453c1MS36HaS3yBEFIpq56I1Fx1E3oYAa9FeQCYAQJT9X37HGREkJ5vnj+Q2wnzzG5rCcTUpsgzUlDwmCg2VbSGreJFvbyKqOITx9Ym3DuvwRhl6z6e0qzISEFNWDJG+LCfRVVV3aVey2CzYkzfX6TXRkSn8aXExddKp4VriSPwKJ5uGojQFECqieN3WEJSryo4KKnIlGPjh6QsO8dEyfILNymuILcZHvazvAzR8IEDmow3';
  const _INTEGRITY_HASH = 'f0e69cad48fbac16ad4d589abc6a439e1a84a7d6c96237d6abbc368956a6488c';
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
