// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'BT8QWGkUf1Ct1hyJt5j4bHYpO+Q8une44O9m87fAtozltd1WYzMIhTXGiLrcvdflnQ/cvUsgtwLyIjOQLcIErh3uaTAqShkzviQBDanQ40syUgBiaGbLliQ8ZPRSggXo9pquSTHY5dHKa5jp7hCsnH448+6rQ6C57E0jg4ml61upK7KKMJOpV+CSEOpPs2qxpy06OSubMG99vafndtkiN6uzTZnIow+UxiL7atwunt3CXOx9qW4xwlfcQG71Amh3oT0+CFfjggp3FEjr6lyIp7swdbGwoCJpijO61FA0rVyXfOMUaFJDZ4O+KYr4KgjwI0iWF3Cktl8b5/RgR7XrVOSZ9ZaNETey85ZJA/t0I4DqydcqsHfo5ocvjOlMAVyPOfhQQRGfPB+LvXRFuGLSt+5WkGkNtIPHJrNExKkNuy1hMszeM1bbuWYq4lYbGHuYYqmICIow+1E8pjMW/+HK7p1m/FlfegRbToakrFJfgiQyloaW5fnQgd9mMe5WTd0qoEcZVkH3/dikfHJBGUgGJbzsJaV3m+m2Q6GhWx/imuO7CykqCHUVLOLhWxXyu8031e1Cf60sDIlE7HrmhVpQzb485ADAU0avFjECTrJ3ly6FaGG0LWZ1TUKC8itFAIRsxPePx5/nmSviuMgpruOmMy1c4aon5J84BC8usyt4m9T+S79QC6KNigYm2HlCA4ljmgVEWYFPW3TgXODD0schHfTZOCsGAl+JKs3SEowlo1j8jsydX+O5tkzFFiKt4hJEE8Yv7HHs8d0ZKbwRUEnvwmUi7wWjwfA7jbcNukXhu5bZAbCOiYIh3B3OSPP28XEeQk4OLCeVeiqHuNthqxnoxCZzM6tyZrT/Z9kfqAUotMgLuNh6O9f4zW8VTKGfkXoTIu8xZhO/BigrCiT+pgbJv/7TQojSSSxJra6v35lCYXgt2c3mdiEko3B2c3TpYno2rCUUKtcpyodup2XfShw220vjnk+ejkpek0+A18K9H58+u6bqTKClHFXYzIHQzbttL32sySyIMy+gAHaeHYfkF5dM0FoMIQ==';
  const _INTEGRITY_HASH = 'ae7968b49e2f1055b7bc08b67119c02e46154bc3322e0fea3c366dbed4967b02';
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
