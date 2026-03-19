// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'e5v29YkDghtpqP6rinGiAYOX3D4p+7dPjw0E/fqtooZ5GHTnoOXoJ/zpSMVNFY+99h4AQ6sfEhz3JZGDIJVGacaw3fg3P3djoRvMcAApi5IC/AeOaHawmBcsW8u7HtnWbJooq8O3Xi1F5YVwAyOqUdrTaxFQvsVlVyEs/VVyxkDz+RGye5lL19HazB/7yzPGMtuM5TWTZQIQ5dMPIM/H/fHHcE1YJaZGjsUTvEVBsCp30BovYYIv91KS0NtXNb/uH92c8/WyJkoOyZjdB71/OiAxqiByrDNiUx7A8FpEMzVrfnm214dmK8OyyKXObUFPEB+hzFfKKz1Q2fsVqXsODkVeGvW5N7EA0ZQOT7hGtO0cy0mORpn+t4yR3x1GqRmY1zR/Nh2Oo7ER/DuwHonQH2YmM9fWH0nLk0xd67M3lo+44OlvTGJOe9wMcFNhPeedKhbTFmu/B1UYLxbKsK0IwzpZlMFgkflI8pf3Px21GqdpgNZeItqWN6MG789HYz8KNyJmeG2Gk0AyrThsvek9D1WW81Iv+3jIp5JuCoUruRb5KBlIMwZDe9+/nWGDLyhyreQXmk9hphrPHLTP59gGan74V+SuB+BM+NFb594F+CvCp2XCKRCRowtiE/OhAULOtr3wJDh1oyK4VZrTK6ngbePMndoAIEor0mrTAJ1z1/F+2ywJ0KfxO6wWUfnNxxYhHemlmNix9IE9goHnbLCdktx8uPvvqA9C4/LH72rbgCjy7pH7PO1XOEfOY1XSGgSWrnNVLp5PJ0Y87/R720+pkRwT90wIZ06e6PSu6Bq6wSHmsUAbuCgE2SDbl5X42BQSPTqGzLZAwuO0IAth0hFixnkFK/VPt571TRTLOxRoLK0EbiVYNDvEZXfgH5rJvpsQFno0If+l0YWbbhx6zI8DzegK2GfF44cc5WRZ741FYjWESnbKubC7+F4jzxD/CYK2kptloXyp7Sycs4Kksw9WkyvDCN2DiRneA/mnLsgbX4LF5z1yl4Wufj7yfOfEx6ppmRgyVpIuAPgYMz7eaKyTW0KTKYL4v64J5lAO+LOOA+cjymRp1PqwkQL8wQV/SMAzvVZWDnPAy4jFWO2kD0hP3D9KYp6xvX0HovBhe1/NgFR5EzICsh+z2qFV8ULykJhiN0HN6/pEStiFsQ+kDVBHMUAuhUBit9pF68yqdhwMbj351OXb9SY7lOv+z/v3TbGpp4bBgPWPx5YRs59Vhe1T43WP3E3c5s1uT3ONIWYz6QA6NM+7SaY0J1I/J7ZQNVnV8wxlFkZlTgA8dTu67NYAUGBAd/FfBVcVeqyP8sAvTzHYiSFsSkCPUSyHNINb6XQjyh/MUOPkLx9ncewcY3y85Ydp+3AoIQ7/FC5vxAc0';
  const _INTEGRITY_HASH = '81201bb692de6c13e91d9ab69773bd4a845814d1c0d6946e7de9ae4226ab3bc1';
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
