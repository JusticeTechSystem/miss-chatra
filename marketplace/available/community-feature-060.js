// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:22:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'YzpREwdHl03FoFHO+Jh9VvcaC3jeszDUcDCaBujuUHeeY1SlDk+Isuq4+QYMFbPZYBbPhpuD6b2+1XqiGwWYm5K8j6dSCbABKc4aVph9OJc2cRkZ3gAfQZZStJdyI/vzy7Ud0luwHa7kimg7GCGX2mumML6FfAC7k/lIWQGjiClqBEPvtZMSwF7qM6gBNr+j0yDX6n9UdZozdzsFagbGQvleXRSSIJ8skvrSrh6UrHbw1zLzcvcAsUlixKM39P8xINTZNuQIpyyO0EhvJNXB/6cQ3EdYhRZwxM+a0ghv9yQHJ9B2xfj76T4Fwi8nEEzpxKgQY4sBSGStQFCBllCpxjvDs0Ge3ckAo1nlYtK46c5ASp13NNosXMSmt1YOFv1B1ydZO+Msi96FzMn9sUF3mfwYJbCvdEegy5/5Tzq/a1yd9Kp0QauOzq43jCf6OkxElLwCXIEMbDRDMZpXF2mfxFlw21Mokh5dX/8YNUY/HHOKc0INXjUZLb2LKTHlSWOuDMvm5Y/97BC+7hBEIkSx1VbZKYMJ6uEYK+uWbdoWEh2G/lLOto9KAZP4kg/cEMqNaFXo4y+ATENUYnYtLLmbRkgHTb3YsPMGaMs6WEjoFQLQJNF1XMTf0vmq8uCUALSFADJWXDC6VGcReRk0lqvPNLNxbCxVWaTetY+vbNuA6VXwfcFCRFq1eNAHZDgS7250xbbtNemFjzyFzXT3Z+Q/lEE/sF96LnOY6mjWreHuuM+mdmyXuO0=';
  const _INTEGRITY_HASH = '47c99b7ca5084f80b9e1f5678f648a038c24220df1ba45384fd79986d1c76b04';
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
