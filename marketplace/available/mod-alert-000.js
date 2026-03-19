// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'NR3FdYjfkqqygvL/9Py4mk69fCMpYmB+xMzC1IQoBdxuRDq84Ilt7qQeryaFLHvn5NH8n9JABsh+ixz2D8dm+K7KYkpEJMZwVyB36LSiUfLVazKA3td5ihJbCBuFw0Y8dKRPXXrKBFrSGGoc7/x0wpx6NZxuXeW8lKtcBIMKT6hsxf8ffmr84VB9q1ZR+7OHwtCeXkq5ysGi6V1VzgPGU5qCZLS5aXxD+8F/HiyIqtHVa6oX7ydKkbQ6QxIUd7pMeW3ZZ9Q12jz9I7bRgh9YMecHU5XOhy9Ika7HTy5wKBD4336rgfEwy1CA3XUOi2VCgxrSOpmabYm00HaccGkWDO6LFrM7tsIIE4RFyEgM4ONE0wDmf0XQRvRkJEYX69Cj6xekNHAbGYFpcjKIkjLEHVcoN2jWVu07nkWemMzsiZppg9tY0boYkyMNPjrzIL++8qd58dKiHbJiBBcJRrBVHQDDict1CyACmpMPrQmYOPMV5lizeFWtKhG+4oUS7T/y1iM5U3Kju5+pA4hrWL/YWCdCzU5ttDHKH7SjcGBKTuN9HPWJaO/FMyRTpXVWM0BibogWsNnY3qBnkXM8xfb/804iOiOUyvknfCgw4gZ8HVFYDnuPld8QJQYiIF9qc9asK+cQH9QHUHEDWVNSP0xo2nkfvCO/ibIPCYFGnlzBgeJRs8tmdN+pKyW+xhlhG0SyAbU+GcwE0V1qhZ8PvxXxcp2lyKH3zWhLyuxjXbsMje0t4YKBiBVPEpcW8ThCqs8BHN8NfDt5ipiqQn8ifXW6+JTSTG6AeSfXzHj7FxPj0l4itRNX1XxDUUMDZ8y3GaZwyTpgjiM1p4VR4h6hqIvZ+eDUShBFN1bKQwk9puvWzdrwXYyBAUWJA1S9feBfsvlC/ZqAFTCdLJZHEbxLkh6bkHFQkUxI8ZsbljU+Wp1wN+Hw38maJ6CIaLrFfsaT7kWJp9ABaQM6NBtmJRikrGV/2gqfetBtegNgbayU9kLQf2v+/NYBDTf4L2sHjT2trLeEi63FGWSj1PVLTb3WXchisFKncfbWaOcDwDwuYQccUQD+A/fqtJAH7g1AicAAbQkHZbh/5mVTwU0JK2Azn0ht8kTmsbIpLe/eobtqgAsi/359JU5I+JrQqsCU/4FyaT3/X06uWd/d3L8aYRgxoak6hFCA4/hz87oOGt9EojFePcBTB2CpI+cwytzJTQlclac1euVUZ9p69Su158+pT6+zop5sE63AwPYZ/ZUPjcbc72pBHb2Mb+pUTJohc3FvZoTnnvav/+Rfi8A1DlpaChS8GyeDDgJlZFTtNKA9rhKlueKE91NAzxYl4lHuB1EYlB3Bx6v1S3EVDAw23EpzaTC2eUAQw+Y=';
  const _INTEGRITY_HASH = '6bfdd35c1c0e375c41402002da30b4820e5b7b762ec22c70fdfe02efe8ee4931';
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
