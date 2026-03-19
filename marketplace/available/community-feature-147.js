// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'eyRVkyq3qHWfGrlo4jDwwfwU6bjO3dYppkvQGmcEOgc6SIDTZv8C48WalBQtQnXsL9hA3qvEL+s/jrsLsVuXIhY3IyCIH9+qtJtJ8F3yTGO8WdDg6zTXbUPqSkXUYtoLiDe66Y8jpEf2JwtURJHQ9B6D5GPAlxs8Ww1QU2cnEbCJjhCPmuUA6d8e1WaazxWAGUtZuMlpVcBAgStpD1NbDsip2m3f8ZHObbq30kxCOkpUOQzqB0RMbEV80HxdzzgPYbKgOvDuySizo+X7aVoToNlcbJmdH2uzuXpBBz1OSz8+MoK7bDZNIYkmeBH8rvreA/gUIKBHu+WHoYNZ022FTPDlLljMwebkDoGmjVIQ+wXQf3Tt69P8S8h8vodItFA30WIaajbyoei4dwpSZ4W8/GPGvbNEK2EaiRUdE3QhehLoeceyJdLgieBt7zzIVo/taAwIjLLD6zCIxztqnGRctxuVWObpFug9eV3V+9k0I2FXFcXYn4iNy+5X3Ntk34Id4vjbwX+wD1nJ4wD9woSCmXcXgBIzWkIVZTPHqdtgXQVDyXyzBqNNyNorGOM815BT5S3niFEkvh6Bt3iuxn7c6MhI1j2aVq0Nq62Me2RI1VN/uQ/6xHJfD4FJvSKr9swnrUJk7DieqYVZMUI333RvUNfjH6bz5eacbf6/GXp3ZtamsifnwvshHEaTKjnkxfc01jgQB0+NTLWYqep1H4knVpxnryN16LxjhGAyPVGnxMRanS0=';
  const _INTEGRITY_HASH = 'a89a779e2d8d808617284d78b5fdc5a7e5c2a5e1e083a21387f40bb33d53607b';
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
