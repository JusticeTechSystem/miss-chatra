// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'LR6rqQhAJ6hPzoilZnQ6tgRchOyGoOfTfC4CEArxKznbS6kWBiPl5OIra2+8hVx+lZXGoXQYDwPwR0KNVhhFHXgDG9fqw5ncmcOELZeO531OrD1oi8EzCBnDC/NR0FyplJSyR+7i7sLp9hgkYG39EYcr1ydNmGM97dnHYcFyr18IRs38qAvSjoQvoxygdAl5ZKOoCzkmZeYuSYyQKxwtPVuMnC1rNtNhuOv0xhnyRhSxQH2nyAY9X4TSK3BDtJqepvJfAbdaras9YtijQdl5r8PkHiknIPpFm/KIiMLorj7DaCWlBiFbH/IgZ7w6iJR6LkLl155FOUaqiXsSppqcrLmowRZD6OJVLvL++HpQYA7VRDIJhIIqJTSAItv3CIIJ94/jYv+maKaAa+Z76KCvWDZhfjV7WMZkWpr9zUzV8lb1gSZtt0C8UN5cOA3QV6Wz68lMzkVUABbBhE5NhyewG7INzGfH05tIKq1LGi4dLq6P1T7N0HWJ43E3Hr8sX5TLeRqpC+zNF7NEXwD1nY98adAcrgpGjIf693BJ0+0O84jAo/GNfNP2Iik2tbcBU25bvnZmLJFrPty5QiROsUfFf29VBlo2mTVn/P5c5ZFpAP1WcsFD4ZNqVHyJnlV6jqK6kOZG31ta0cfaUdh1L486qFmFaJ7bDCHmRM8Gfu4yaFkslUeeXgvZH3Z7O/CHREbgdK9gH4TO/+WVfsejClUGhYEy8vK0I0KZf4ChJFBWSc1xOMThBDEXFJ7LbVEBVGceG0H8IifkmbtKJV0Pg9o9JpCDq9YI4akbJxZtj8RRoxEFbESI7R/rWBRtWelti74BHnfH4vhCfxPu1zmmKQ+dMpt1DnfB3WTsiAgMpI1yqj7e6M+mL8926cH/BKkXPSPSkfkTVbNH827onTrxKBZ/wV8Ohm06RiXdwK1bR59EuX2DsgQdgC+YRXbHGa0c05xFVoNGQfP8zGq9zQRslzSv8HuvdS/5AI3B5AwFyqQQwEjKHzr6L3Z+oYWb9zFek0dr7SS/oY925D7amLcE/I4=';
  const _INTEGRITY_HASH = '3028b918a23419a08b3e6ee0faf72e6f90c483251ffeeadd1fc7d38053016719';
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
