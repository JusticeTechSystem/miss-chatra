// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '5kTckwxubf2xWRNxb9E03cNN7D/Fw8pN7IGyIIjUzi5LrXgZV0qcLlWzDRKPCEfv8guOHH0RsUwm/lnaIgoNtRsIElG4iZQagiBmujrxXhp7exZDtTZ5TjEp4GOdZ8jec3JPqljkX6d/ZCVZk6nRQc+67s8+ahs7KjsX6l+hjtzCS5CkRFmOvjtAktJY7UCqNv20dNHd964rd9dkcRCPTIqe134dXQ/YSbzFQ8MrRwsRqmnrEgYeyZwQeI488c/wZuzxssx9roM2ykhgmscApTYOPIVi3uN+Xugf0Z1c04jhMzQP2cBE0UBDVkc8LQIKIHFqTAHMk2gkvbJfWcpVubCRnGuuulbNxDiDdQqmIt8WP5IDv1ur7xiIUwWcnTX/brWnssnFO70MWRs88qOPoGpt3N3NnfFXDxMEhz5yjKH92pq75eUXqcA0h6RPGF38sKMRl3O3EmQFiZM1ke3QYxw+/yCDpTGOxcu8pADY5C8CD9DlhNHGAGggoqrDn8LqmI/wyrbFoLndtyEMLgno2dJ37Kv3pIN4uRlQtdq7rHEsshrYMChA44L2WVemG3m9OjH+GOl9wRbEzpiKqw1EbZCmaP6h/gSUsWOMVnPg373fk0NkOOuWvOAn7l1ZSZGYCcjUzmT5oFIXyJm/H6Fzv1Caf86/AkvotJYYqkDDefDisx+eszlvkdcGv+xYOsi9l+aBAZSrUOR6MzrjKDzKjCvw+mb2CBEVBy+507cG2Aixahz7f5Vhe4uSL9/TjG6dRFw10chKMmQEb4+s3eMneAFYFhUgbcIckWmdsOAGWmN2lwOwRu4SltlQNOkd9Xm1xmAJ3imy0eNO/D2LUWKHg2XoyzFulQ05sZlwmwXcogJ1+fL5S5gCi9/DYIzS6o2ftDYwNYbFaYHvye0ovJcgKA4Xri+vhoae3eTVHk1cSb0qlxcAd2WlXENLoGIGyvT5Xzr6ckF1tV/OhI6jZo6QBTiOCmb1irI7yxa92DyGvL/jH8uC8NSfXw2BYP2CvN0lNOMhPDDwIeQ=';
  const _INTEGRITY_HASH = 'cd25326ec422b211758d472bebccdf69c8e2e3bcc0fef71449afa0f01139e678';
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
