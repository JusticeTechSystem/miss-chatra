// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'UiUV8GRmQFuvBHQcB/+Z1Z8dvZAmV5O30YhUw57YI33eVWtpzndNUJI5xvdfq0yKyryg9z/mYqttIWyVAJmBbds9gOprfBI3rq7M/6164uR4Z6JMWk9Rha3aRc6JEnkGrqUi+vXc1qriOaJiBvVHtN5dlwqUh1sj0P+p1r6V8moBKMs8ululonHG3/QZhjVOAcRQp7oWJMYFKR6DSsHix+kO8BifNAF8IQJ3pQB8pk5SCyuAWafCMicfhDZeJDav95Ev2Dtz49k+uK1bNCrOsbH7t8IoMm2E+Q4b5FKSr8Brn+sZCvtwYE/1c40o5mCZuX+U6YVoQY69DEv1o+d1n/BoNKAj+3+ACF0ykNeZvwPye9V1f15I/ybx8x+809vZYzEuZvUaw/eZQk6DgqSmKomw4hCW+mWsw3Uy9BZjI1mAmtjnKzv81BQZYRvugbzWbd0QxC11aHIlM3LROZxe4eY8wMhbSa0PEBrVEwKk3l2eFKHtM1u/4w4/aj3qN3V3Uvw/TkScxI2liHWxj96etAR8X38bn1FtCpzPumBZDDIvhwNijb0snFoUTfjAhLYBLpZpjTMZOhH5A8T6YOAOaKstcNa72/BBDySTfL0i9zG25JGerbGQfetEF3QckSQM4G5wgxgwVykXN4R9iIVUZNgK6pwc4EP11J4T9bZzv1bNogJYDDYZXrNxuL2E8DtRk5ZebALOueQki7xyt3Axyc/qEb3H/i6rxzOKIuRkb/SOdEc=';
  const _INTEGRITY_HASH = '725dca13f10d489fde74e5f102022ebfd1c9606676dc79553cdb0a792e131d90';
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
