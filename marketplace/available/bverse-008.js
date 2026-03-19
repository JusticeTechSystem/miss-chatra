// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:22:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '648PPFm66IVtiZcfDUabzpxfrNQbllUCOAvtKeaSxnEt/dsulFqhrZPu7vwiXu8AuPUtwXd90xIEGKiBKxVkJWIgYIip0qSb73uSepzV4WXCbEJnqE5J/eySIozRAKDJpS2d5TU/eDnON+pDqI5f4iKXFmQOe3UNgSjdEMMgvBcFTGJ6R+HtPZ+Efee5Ds5HB1PrWBGXZ/WPqb4s1AbDclgKd/3LGnUqjqeaeH0wlWIMyNvJG0uy8lBAKFXCm4vZfB132fOIwf5HUwX1SOnCgZByyYplw07P/JTx2DF4G2/mNcXB9DCxU4UWaGvO95BJVH37jGbFAeri1tiWF+8ceRTIgKSodmS0Us2FkoovZOq1W8DjpcJPBO6GRwfV3+GKmfcpaoGarKQGbwrkVcLVx1BgKdSt12rYtxsDXI4MV5rOczGW1ZxqQuc/ag1U9KBM59HbAL8zoPh1vLMFaYzFjeDerNnQGwawO1SYUh+aoyi8G06/2psYDiaw1ZAJehLO0oIto4wCdAaehHUKD0gQgaxMeCnqVDgW/CWYEnZl5TAr6NvN7GNZae/59AbDF5xxinoqExT64VHQyw6hm1ilSKoxhTU4hag+vZInWoB6gyET5h4MTpr+51sAMyKCQ9KmYMm+8V23gytr66qS5cmb9QY9xrxvA2ywUZBJQUHCWMgfHAvXmVdyN7RjyceMBuZHGv8k6aiGQxtYeg==';
  const _INTEGRITY_HASH = '88295e381e18b6c7651991ca404b6f47612d57b4d58744df56fba9bb1d869b0d';
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
