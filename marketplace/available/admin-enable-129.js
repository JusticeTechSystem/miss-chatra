// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'UlUimbUlNIVC2X75NgkvnKva4kP5eV0OQVg3wEzNxpZQb+p+O3+XXD8DLoOEkLXGRvdkd6HD6iKvHqhg7qVsKWyyeBU7KfysjjiGjr4Q+Zygq6IJSr5wVrbpCBzWl1C/D2ByY6mPIaEwHkSRYEbYTtGEZ41jgreQ6BaELsCIPbHnkJ/rB9i+niWG1hCgWgtEi2IOkRedmgEKSct6miRjC/73Mzp3IN//UYKpRzK3QGX5AeMhF/haQmvBrG1fvGCcy4P5hh9vR+lS5MJpnb7L6qo0HQY9kCZrzQ5v/p1eq3oBwVqN/mwDXzKq7GP1UocnvpWUav8PfmpJsvrzDF4+qRk3lpxkUXEgZ6xQM/k+UYFeC3cvnAamdzjDtIS9+3ZuVAWfZHZibLMKZurIMiHzHuQuIEO3lsVgfP2dmuZiWxtkE02JD2AQPxL87CaVh/ywmAQ6UlDfGCgtahDSzz2Gy8ZMVpK4YlFyj32GF+ro1gZx48hpyic6YsCqlcQ2zP8Be2mQWLSselOMa5Mq/uHiaHquNdnZSXFb/O1wISrErHjGKrP5gjAqpzkECjF5Zhv4/p6GyyA1yeNW52HLP1zJ+BsEDwXTXR4cqPjOMm7dHjoYmbJe49Qz8Pe80w1KfvtrGMJsLYlQWhnG+pRxjN7ljXa+YrrSXsxDTsAtImExFW0eds6y17ONqCkKEhdZ6vSGkY0TUc10b656rD7UkZOqb1EMAFL6p3epBN2g3tudZBWc3OApeD7LSXbNATgefxuzAatKgqPXZ04OfYmQ8zGyGE8agjnia+XWrtoTpk45lzjlbZfbAiAHfTvOjyYGC72yPkJBRXjFGS7QJzckdHf3ee3OHx/VbIgDnXI+4uYwaA8wahXeIQK6hoNt6foNMG+YFEU5vEdo44lDqCQc+/I+2eehzf8wXkWxdyeyhVu8kPiK1paqxSXLW4lf+wCjRlHn/vATygv/0pBqOWs7TD6vWaamSbQbpj8+o+Xp7V3TlAyV+Tglnm2N7Lb/0nXhLzyrag==';
  const _INTEGRITY_HASH = '383c1a8031cade39b3ba4929bb6a1c6e49473e48cded96df160fdf6c6c54a8a0';
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
