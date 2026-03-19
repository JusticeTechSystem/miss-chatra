// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'g7CqM4xck8E+SWJqE6MpVXiK9y0uPo2Zs1dYsLY8IIUDfZBGe+8ktuYhJud88ziSKfvrEhVLD3lHkvm3A6JICcvfPsKt2bSWYlSDJ6doKComvxuKAJxcNwdaF/lAnO/+MM2l/fzMVRnmobSb5fbWgcCnUzey97cuCaquU/UnAXdIcJgdLTZ4YeTEvOOQu9BVuAhLg4PWdzTAP2bxqUaXiiPt5nySTJXYvPAAdvWRNvxmkQAUPM/UNxkyubEGtuHMZOHbo7R/6jQwMmVzOWX810W/vHuImYdJaSkuDI61YHJCkogXHbQ1DaAWAwdJqm06XD+S8SbrazuqFgAxLfwJjPTVcZerpzhNW9Li6YAoS0SoVi789IVdiGyipdd2p2Gw1lEF6b1lXKDYI0PKX+9Or4XFMnze/3IOT65rlEixXInvEtiZSZhvVDlbXltLwHQMvw/pmKoRiLmwKNETdCV32syXwXMZNn9vHIfakQVqh96tMDwU+0XElaThT3T4AsH50YudeZIiyHaKPn/VUvlY8mcU5Ud1eghoXQmNLqGz5FouonV4sRC5uhEZ4DEmG3HRkrqtJXi3VKfDA6/6tzmHMULGAOAjfXs8Gk4TJ+5/v34rx6sqIVrYzIfw16ymMcfjXD3w/NzL3CEzEc39DliREE3CvYh5jD9uKPWNUWs2f0b3WMQaU8uLXRIhDkqgtgD/ynVU0cVIeDXXnzsPVUboNLUYGnilVZWklg6F49rjLsU2t+I3qLSTeV6VU9DSgetAM0EiKdSBFyR4b06yCL9tJXPP+PxTCVY0bI2q7xMqWZO+t6m4v2JlRIueMIX0H0z9etzBak0NJg9u1sFos1TeqttKyH09UMaDiWdU4FT30w8pwe+NsHIQ/r2VVNxU6jt6DBufg89J0O7nR2i3OWvkzdu0FBMQin/QZLB1bC7TO+B0vjWvFLWbfIGgEDKOSrYk9mVewDEER6olB76szkC52VJaLaFf3U+Vwuoy4sDnAGa4UZOq4KFgR7PwYT087r/3cdjcRHDtpQqySAW8CDl2/U43iSuh4KwBMr07o2wvFSsdZDv36JVuXkxD6xfIV/RHmUWY89d87FnQL92yIRlS5n96c3CBOlB/zvtSv0cL6/FENhLIQr92ft+PrDebD4vzKRFrrtrgT3DNBS2WKLbjK8ryOMxsuniEY8DOWj2Ksgk44Jixzha6BGYbqrXs3E8f5GCnFqa8/b8NiICG+RwvRYWKRtmXjE54kmbdPLaIDOsJuz8fqVjvHNyUsh2u7Oe1bUNWN9SAIXqd1gBhD/prFw7cr3+Sk6efCKbGg4rKH29TRv8SDhV58zecPOM9Z6xNF5T3i8hCBL7+zdJR8KiusU/XME4T6wysv7N/79luLM+jaC18mdl+BCGViWoK+d3OM9A=';
  const _INTEGRITY_HASH = '0696e5d6bcafa5d255cbb7d3ed68d71e27dd5d21886e889ce1480df3bfc07450';
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
