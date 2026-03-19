// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:24:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '4FBOqiLzJSLf/o7QaG4A3DZ9K+UUEB4MFeYVnmvxctj+tXz0CaeSO23IoGUVq1KYE2gqxVR3IYad2wN9vsrKK8txwYerUwZaijHqrgRVJgCp62YrWjBdUQA6tMfoifBEsYYlrBc5s4iTn2/kLw3+4V21gcwPw0dTsiIPqGqXQBbWQ/x0t6jiA5g3gq/hBSqkQvfZ/LBsq7bH8LMB4fy+vGQ2Xk0fIGclPP2L3NFkGHMRnCyXTPHnS/tEoCQgSz33Lr8wQITU9NjD39bqM3GWRFVIFfSPiyQYXVtPLqacF9elqBUoIybq+SvDIcpNYzoPmX/w3m0uYezOU8TdL2AvyQIsmE+/ZLcJ6kFWq3iqhBG2UVaN9ZGlCVvqF7hKEeDcBnwd00zFObjid6TtaQ1mWq1fmQwf1NSMJ8l3bsxCZMFtnUpc2fglJfXFRCqR8dVkb4F48pjQJMQRrVOOm5331JuHurjevKvPYozEwTvsy5U3eLCaOS5K7BN3wleoHm98Url/1Wp4K1D8hGKatA1wBGTZA/w1yOVS+ryiKSo2Zf7hFAfx1FVi+SKONBP0rx/2gOWl8tCx0KqagX71j2od/c1H+a4F2MliEq0ncJVDGKYxlrl/Wch+NTL9Yjm56Ve85aUsBQzHBYjmOc+npMzcGcbJStSiXdxXhg9QZb0oarWRVBah71RGGM+UaK7GC5s18TD0spdh2mOA/WcpMCNpFK2lqFAf1vchPhu+fbZCwmkzz9WTZtEmjSpdRDU0V6qiEQ/5qZFg8zMCvq8ctIrpV6+LpIrALAG4cJfa+iY8Midu0yZIVCbxm1e/b0zYZp05hII+evANo+D8lndbl5T6SL6lIWIenyYcaQVw7QbNNB2Z1c2B3ITOv/kusF1SPMpeehjpCQy7HYJZDztmeq5AicAl65ILeMezPuA0FERSO8b7NR1AAclVhY7aJ7L17EFLJffDYaPJ4t91aNl7lQCNaDthpO25t2NdQdgaNFW/AZCJNcza3no9o77qCC36+pAMYcLMNxQdOLkrbzqpQPCtuVkKQ5yVRovN2LwFwMzIIk52thvLqN8ONFSr7niFAF7JR1Csqw1oE/xkrlveRGsUfZoww5GozRIVW97Db944PVhnHjHrlRXoGjhOhOutCD81i87pp5TsqwslbfFiHvDoHh/JQyMFcOo2jEL9wHyn4Y1UOHW+wvbNDxWZy+y/wKbe3hGCkuYcgb1smUAFq3RXRpzJ9aDKn+c07jaRa7xzdTmzKpOp6YNoAc3ZF6I1LQbGfTQihv6Lq0ZzU9kp5UcvMPAjGpxeGRDSffbdixuHr+2zpJin75u1QfjaPJC//zKaJGjHN5Nr/PuUCc8dQoigQ79U6aP/TNZsacgTthl1uHHgEnDM+BKq2w3IRe3K7/XWdBHMXXRnLL1MSIrB5F4IZ6GYeL6RqfEJ0+h0pWnZTy0=';
  const _INTEGRITY_HASH = 'e8318f88577e6f5dcf3f1f1494355d0d697f3b53e266768c40605095a87c5d68';
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
