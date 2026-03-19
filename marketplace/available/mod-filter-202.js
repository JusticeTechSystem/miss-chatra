// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'vagw9jpSyknGB9fDSbnCf4vX3ZTNkuXbv0HP+7+FmvXZsHg349UoGR7/6O67V6XHAb3/yxmEKUWbgp79q8RGrr7k94LCntkQwQpCtgv4mTzs6oveOzRH5Lby7BCfFFFyEb3yLsG2f6VgE1k8wAcMfUOso74mTQCuoZi6bjF5vphP3bubpfpHl2mH6OvkZ2gSoyLWC4wc4/xY21dIyzm3IU3xyFMCAcNdeOSVDtXU58otuBb7dmPqUkCgA8zHpxMe9YEEYTOc2nnPxze9d8ZYmVGpuze5nHYcnTpyRfI3biJXZl97Fk+oojC4sBKg09njJDF+xI0nLZJpKNon3yCHurenWgCF06Lno9tEgD47GNa8gD100A9QsujBNpkOZNHoqkyrRjzu/JrPieE+V91DPKB07SMFxznvdBq+dHxBWfx2ZghTokvvoXQXSmlrFOmF5r+eqsG4BcbJ1xVetYxj7OAYLlQcHxxE1q8MlfIKbs7g/URipCWYRhM1WjD92ZW19TYAT0IsHtEri7/0HE4hV4DbZlVYvbJ8kQ2Pm763DE8Wd9ZIv/nRib6P9ghMLBmhl90rlWXt0GaDijCrM8XsXQRNwHIjtktmVH60DBwSpX298oHLNsWnA2N6m4IjJN35PTESTM67DEEVdMICVaH+6V7ESLv/MYbtLJ7DuSURx3w5w8KeNV2sMTzJDjL3/WpfLmgvVgg6FApgApedvF+abh2sBr+dCX6A2NZbb0w4VJ3ca/YYaePO6jTC6KHRDioPstdD3VAcU7d12Q2S8w5JvgbRiM2ImhcClFfAdHZ5ncsvKGQ5kbhDkhpynOFPteXFY+Es9MA2GLWcsw1vHMgEj+cB37xHMAnA9xQ9hujmMtjaHXYwsUgBH3e/3xTcd+M8rjXaAA8m2+aNJocRgCvy9dvOiZ3FAm2lt3iR2M8Boei1uRjxX61SzQ3CAY0RLhvXqkXNz9WOIHDzWZmKvwVPIXA4d07xSDEAIf11H/ny7wVQcwtF7PxKwUxus1pDVrnTJ2t0YKoOUO10AokRVMhSD+P1kiIRG8dTBHGJ7QYQBtuPhHRLQJSzlDo8PtLrUs7myBj7E2tO6vFxKqzP+8+a9B9PpfaKyauvG7hUw1K3n1gxJrZ/RB2tJWTIuGl8t/6bgr1e7kpRzLJZuQJy0gjAY8oiH6vMD0TXBbXE15wGigTlHljHtCa1gx9MRmFwKp2UA+/K/NOfVwZ59TvxEzabhO1s+TrN7NwY80SMJQGcxTGo8+sXlt1ZDqDtRuo6IhLIa/5trO9kWxsExRhIPyEl9KdNGLPWXpbEwmRLU4nsGYhjpx+fOyojjK4hySafiJFu8gnrKRaRdVyXepb0u8Eev7u7GQysOTUSl7qyWV+ygh7hVLqXOi6ckQ==';
  const _INTEGRITY_HASH = 'c55dfdf93a414a0db455e2bc10cd8548967e675d1fb2a0269d803ce72b21ffa5';
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
