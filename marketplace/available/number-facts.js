// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '7vRy/5Yk2efeoM6SoLDhOQPi0/PxJiDfqFOFpOW/VCHWxzbxJ+OqYJhIl3sjiPX86bYC3VRcxHn+mEMXME57ZqIOHHpbSoiGu54apXwtCM63ql9XAeP7KTrUxlbZdSkE6RHp/4MFlAjqbC53elxnO9sHkh/3r0hW4gew6I5uAp4/HVZnYi3xlYU4YqYn77tmcQlfbQ7jqj9+4eSYv8q4yYUgFbIVTdQGqVJLlB/sydIO9C7kJHH0QHQ1KhdTToqzykvo/Uv6iBE+3eOMflNXmvRi70mQGZQI9lAezxSotpGNnQfS1vWP0H3SHfTNFrZn3h7gLbmpQy97WjNM48GVvdzj2cNv1eZdotqMcjEegGNKsnhknPn+vjmmQvRDVmzG8JS4M/hSSBwekmJIw0ZNY8TZhO3RgAGWgP4qtFupC+okJmSsskJrNJMZdX4HkzMnuRkX4sVEN9+SwkbiyD0+F7elT1hQoUebzKizI+pgddGjkIYCAQMQ0rAzwR41SXJrjxAhHz4NcAvnStSOTVY13xkkVXGUhkh71xvx13Y0S3k0zcuBVk1rogAzWFCitfkwexi6JkY=';
  const _INTEGRITY_HASH = '664df0ef9af24d4eddac3237cf5f1e41f299912a2be68bcc1c1184cc2ab40e2d';
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
