// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Uh3DU6odj+aIHm6dOqPj+Lulzj7z9QlifYRJuZrTbh1Muh6Hw66ZmAowp4l2O/kPNLtasY8CItbbqwFuXJLuniANqA7yWcbGHWG+uqg+TRl06TZP9eEo2aL7GRQOcqk4/QJut+vGEL9BxbGeUJJUgAALDrXRtmPKzQGWCLlQ3YNNX4pIwVpEFDcP3nFB93l2E7bPNBRx4tY/+GVsmSBJT+Rd/Ot7JnW4ThUdZVxAJq1GCR3Y5PRE+46DuFbnIqgx2rLd/ofGbOB3a33voZn7N6cUrdbQqSu+0w05Qc4VHzud0uHRr+hnGadY7/4/QML8I9nwWECh2/g9zo57wLOaJ5PNu1VcEaBlwUG13vOxjV2tkLScSPk9sLZQkQ+wy4kvOfgdEdGPpqAlrzKwDQCC01mXfCRJPwGq9TLDFUz9QQpmI6cnyPEr2KPj6ZO+XGqHTdQ4hathmvUWpeSflRq6PzWAwCzqBpFw/RFvPV+Z7H2PX6WNt2HMyf4QZl9Osn/MRJA9ZqwjTtB+Zh97IHB6PwMAUUDX5ySytaMiW6tcrJyBGvaYtzb42bFmMfdAbPRDZ5pRdE/W6PTO0YavNR4XkvTYv6hRZ/ie/myY9qCPqayrJvBNknsESLwGWRTZeytcIbal5Z75tQSoqSs5zjrvD2DdHfK6Hm/6QfiKZpCr7z8aQ7pffGoBxqAkdt+PUjiRUPxrcRdAT95yWva+tYZrz4kBgTg7+sb1AIE+';
  const _INTEGRITY_HASH = '31a00a2e02dc704e63da85860eee8d9e15e98a286ec68740e1c4921b15290886';
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
