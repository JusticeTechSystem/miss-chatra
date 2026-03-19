// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'fx+jc3Nc1LNIo7Qa1ewZNmBTmcSoo5j3Hrqddv3nnun/T2Dl2+AmrCBS9eHopZL/1qcBuDmYgoI6PcGkEaef2ZmwN2oMOY5Hj2XYI0a9tJ6LFmITcgeRHFXxGMgV284qwhP+iP0z52W6Pm8CYF8KUaXrSJM0DiHz8RBiUZ6wr6ng0gq/a0H8jjsJ98Z6fe6OsWm/COx0LMEjuJOTc9JxCwm118+ca41IFHGpwkJz2t/Lw9hh8IW/pL0lbd1whQxmAAisWivRpVP9wvUEPUlfJ/xG0Xaz33QY1vaFj/0MDTk9RGwx9cqHf7y07pAaKMgFGJ3ber1W027t0WyCymfFgwp1SCRN+NBgHk8ckg9L9MzfoaNR4V8PwQku7SrudjyLauvn/ryz5mOnk4P8DyPea2Bw49iEw0f3wuptQxj14VaIzboVBSBq0y99NDMO96sR5mRlrbqPvMaJx2MKgZLt6sl/PH94iFYXj1NvEYwyZPkzpFmFLWmJBaUQlIrcBETq6QpXiaV6zbia6CJT4Ezxp/aj3H3FUNIE8XO1DVJQDEkJRsIinaXYnrVQ8lawJocDVbjaDEf/zq2KLHu+nMJiXSqUI+714y/a7dBaBZolPhjvNrpV3rE/K339HYwW9RjWA9Uk9k2kxpU5uABVYKb37JfAKdsjeUZEj4wOeMKYfFl/eFLGAJ3VH6yKNXkDrcHRjrNWH5HBeKuHN+elfhfaiSPqhQhtR9sxQpSYoNCc7EcbMr74Kpo/oy07/6pngsYgZDNQytpecsE4Uh9FLZHv9888uYkDCoWvNzykpuT8Ydy6kX/BiuWhksZpor9MFOBfQzLsksupNC+VpHG7LRmrhI1gE+hmD8pDn8Nmq/1yunMKjqR53g7lprul9q9WNaqEnsrF9RrWJGiw/tgGbIwZ/kRBr0VqrHFNGSLWRSYkQot0WKnouMlp7IGM57SJXGof2CgQEvuK60MnTiWmvN4KZbEc0awRcOuZ1N8M2IZdcyNA/dIliU0=';
  const _INTEGRITY_HASH = '4e40aa71d4d63ba745c37e4dcd9efa3477ab020e76da4e781e62b2c097dcdf6d';
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
