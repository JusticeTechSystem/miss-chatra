// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'RWzC4KccGJbpcV52t4UAi8NydehXTz1sR3++tl/zK1oDXUNvaF84aCXCI1/C5R6PO1ZwP4lKJvxwalYP9VI9DA9t/BZhtk8MbhX/ngeoxGSB+KkMqrIgJvMcB8pWtiAbGuf091sGV+zaAMcjWLl6WL2wDg++oFkvN8VwEr/z82ZTOYglFdsfwbzGVd5Uj1A1/jWE3GV0wpdX5zDjZ7p50FzO9QhnfG/y3nO8Ujc9XZXwr4/mj22pP3XIQYe1BRiH5b6tx91/fUHvg+vb4l2G0fKOxyO3iXwU/QYTu9o/qrAMa7OQNcKS1+DzAkitr19CZkwIl2XBqEf1fmRRK4dOv3l9yDuq37FPWmlt5M4gGQxWhOkiIvr7xSsd0aapLc0Bmu8bowZPxoemoxgtL9+UvbCM3SAJYEqW0WUE9ZDi4egPr7DYr1HrEW1sSzCGMuZ5Bavxa4fYA+fW0gS2uow/uXHCblZfhhsNJ51AtYOCcRYdPSJPcU3uboZZfPM+MwCvoEF3BJ8mxQ13BocHI9E9Mt0AeDUl4kxstbVK5Wd7K7mfhwLNTv9PeYO5ZkrAVF+9bvBLb02EGbFA6Mexxmfa8oCBnuF6HLYFr0gi65FyU4CsDYO4DXT/eR6L+upwc3OHOsEdDM803y97jDKTteYAEbM1J+4UHemgDcckCijUx6sVCgcEKtyaI6ZoDDabHa51rRhK8+XueyuN9cjmbXydp2MSe04UEkUGAwd/bnFUeDTKNnZDZ0n88QJoMK1I/bhPruC4ZdgowQVbflxehcIEK9ffzjujxNj0IS/JQBiCJfbmeZiFhCKeKu6IjVOcJo7+L80rZape+mR9eijHex1fsGTDiHtUcehjpdE1w2P/xRmWCgC80Q4eifKjttoUi9+BtQSvqHs8iqvEoTT2dQDOxBzHGsUS2X2T4Zk9oXqAg3CpiK+Z01WCUBRjwAYKZsAoghN/cx7aRM9HVcjR6jVH1OVg/nCfURdJ5UyW52d2bcLD03GxedrLNFm8S5iCaKLjcVaviRFXkFVCjz7c6EBlISXC1lPyLTbLStfXZLk0zUuSRN8aMWbiLWkYlSGAk7rus6rIjqyKTUdhCFvAi3Midj1M+5C1YgzpzTOTdSNtWju1ScCQ6qfyref8JS5bqaM9BZewkqpfyGsfszYuPCU87C5M6CTyYFQ58jZnk7yxVBhwjDesRYXgNxA+j765/7owyZdu57gp4bQq8l8C80o16YiOCmqJox4Qq/e2lUhcg/ufkYj8ijGdU8pxwohNOfmiVziwfQwxxP0XUs2ZpYkYgnZCMdTcZUUI4/u619HAwmHl18EGn5VnVuVMaj9NM7U17l/lrYQ5CsOWJPjAxsfY6SU3zwlJVMl1N+j53yhDsQCJQPU=';
  const _INTEGRITY_HASH = 'db4f58b673f7fe65587307bf0f97d8a5cbf6df6bb88a0df0463a16a9d55b5de1';
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
