// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'wBbINxMCTc2NJFwxE2yGrt8JphhOdY7RZ+XymTB9oCDAOUfCktA4k84pLtHUP3okGL5gkBisvTidpkp+C8IYNY9rZfynyQ+0nVJ1IEt98hty1q1iqrWLpJcAeY2bo2Hwgk14uGgiisHY8QpD/vMKTOeur5CJZFFeF+l4ddfUbDoEgn+hQxEfz1A4N74XMzqkB0nrGhCbKtHzBfJKHmXt+gWYpuu4Lsssyxn5bQrI93KnyF0Qxn3zKofYa7+QRAtFllQgT99pQ+CTlBMm099OekhAzoJB2eD8R8Yy/gc6B89WNjIQgAeQ2+Equ3lLtOv+2P48s50IpQ0uVOI77yF87H3oCm4UPJsYhfkp7LrwIBO+8SD1zLNtkC8DzAHKZr32mlC4/HP0XQPXEu8/+z2MvE/PCeYHa45oGciEkpCYomGg8pnUr6BmoudZGFoJ+MqkSrbiLIxVUHOUUcfOd4EqWQ5wVXDVOpDBhB7J8uw67VD+CEMSUbQWzJ2evyq+YAz3oen0zeMD+exXj/RPzD2Om2eN+nFuoggg6qc3/z2VBYfEMiscNrowBH6atsoLGeMnFjJ9MVi4Zk5fFNCVUWNejhArxtIZGOXv6V3FJCQITOoBQzSK6paga05kG05Wmv1sR298HguMPcIdu2Er25pWpdKwwn18GiBooeP3MKZcJ1tQ/k9i4Nh/DldKtQDJuaigH7MOWKZJZLoOCa7wkEnZR67JqBJIocxF+hIgvRa+ALmpuVTQe10FfhhBYP7MsuJiom4cK1vB9zlDGxIr0WuwCeTUVcgMPkQSkN2AHD7OhPxsjMNfuJ+CP2ZW4Dlsnz+tUqRR/fxOM5YZCAUzj1e+tpbQuMM38Gy+cy2Uw/X06RShtTvgS3oXzvWOAgdLBV/cIeF7CfKk6YSYEYKh1bWOy+yZ+qnV/lsQOQ+FMFFickR/e9M1mkRRNiXw0UqCsB7O+SGJMblb2U4BRow8FPFQby5O88B/nbuXpw0JHUeO8PbtA0IAYmUgxQAooAe+GZH91aVGa7NncJi/nUbq1vc=';
  const _INTEGRITY_HASH = 'd225089a5da9ee5184e77418bea3d9fb39781d986502f6932d733cb9c59f0349';
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
