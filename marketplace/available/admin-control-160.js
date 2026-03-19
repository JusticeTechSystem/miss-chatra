// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'hp2pcRoeLKF+Ct00bFvEImkeXrHr/J5M4x12uQbce+yHckbkIi49R4U9NaqIvDKpLLbKoN+EhbCq8fnJ1y4OBiGUmxFD9gtXH7LkK6utEqh+l98e+NtrO4Fm54w5ATs3G9iYfF/Mvd3RKGqFcOMie3wLmHTBGaF7xoDxj9m6OzghV+3bZ5GHn9xVDlmMQhaOrMm2KhTT5KLcO8n8ndzz/xkQpgIFXbGTpVLY+hSgwzeFhsXGFiISRmaV5oxAZ+GgHq6T56iIIfPu4hBjHgdohVKPqfd9WMnO3LKy8yO4aPeV9Mt8seTV9mKyyp7yW5m77Ag7xlT/A0LGottikUa0vODEx7iLUqkzUE31yINu/IkHtK+sa/1nfIm6xGoV32AUf/SVYNxC6CxLquApJRe10Ypfci+0gHa1/nVF8FswFHp1v+2/siGQW1bB4sWC513odZyU3vrOAQy5tEG0jfxDzzMzV0Ufr8RpKmAY/cWI2ocwd/WVCMxy8vqq8h8iM0b4L9Mx+YE/cmLPVWEdaLpWwG0H6HdpxDtnQ+SIWPIWo9uUTwPv0Bvbt909LzLd49bd4D/YFnhzyyY1jeJASxf+VQL9uYTt2SW7WkxSYtEkZ/DPgQLyaAWz32nS/ci2MBzSDxOrmYirkWX8IDPYU4ZZi2wDCubLVjyvAvNB9hz7dU3UBGEyrh9AC14tHKpBj7bE9JHJGlm+gntcyQJuTCU9oREoTqFpPaOkGJiCob6dRiTYsRfafG/YHdqSy6S4eZEutcpzzUJyiZr86cxM02VTtzWEbSrnMwj55zJzgHaBtZqsFPn+ekFHI/DxMFmQE6gphGNI6Th8/awLLwcPwXnagLf8w0zBS56fsvQ6R9GLsC5fWdYsaIaXjzYgx+IOj4qdYHzKClLKxB9SJAeTXUKXEgxLbt8h9Wx7VKI3A7MNz0opVAx40GMj3ii9BCRoKh1u7MAYxcomoY3roNZVGYaVl8p0NmdWM04ZlonQcdBLMvHC0MrCNysjWgBNCAFtO/Tw/7pktTgkswA=';
  const _INTEGRITY_HASH = 'd66601425bd8e8ddf033487b94daac62951bece571ad69be7f3b4218d4a5fa18';
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
