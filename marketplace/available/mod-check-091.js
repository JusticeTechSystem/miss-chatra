// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Tiro8wGnejgEBuyB48IFhAfEvp9sih8DFo9By4sYzIwrpXrUygLg3dvVYFhck8bEhS8Q5kKeuZ4MDszNMq/CqBfgMRDeKEWtTlvS6CJX1OPx9wRgXT16vfySZ4nidtlhFwBolMXiBeknJHdKcs37kJ9NBrYdTE0LFybffvbLTxNQSNM6wovN2eL3vyxU9OgudZMlLmGDCQFImwrCNE2LE05IwWCZvA1r+zLSfztx2kwz4qphF7z3zp1Wo82ijFR+SaPIqGuaKvHOCl5mPbkTQpizjvgwvLzNPD4hp7uzPGhJdGBNYwSLVxhS8Qielz8tW58Oh/4lIDzNSlO7VtSJrdgI0nSeqBfcLJ1I/qoYMik9v/53UFOVP5IHkKczteUC+op2HKB10Lh7Bu5RtiUylE4NLD54TArh8ghKMI5kdJXW1474nZ1wI2EWcyo4S3NU4qvTLS/q4uy78RFO9P0+z1yPnquyDIVhWMho847vqsUV+8cG5vrOltmEVQ6y9WXSltwWGuAiEpWd+myPtqSsUXVw8oKrw0J4oH/0Z8qketP32dJaHn+m6Io5jIJHKFGLFldQvSy/Gua4RVWFsCZYvszGLkyr9B2gQ1fk6on/PAGGSuUH4yzSikY55W25FzC3ZXByRpzPqhORtG2u5Z6XMiO2Y6odyAjdE+o2lotcP3wu7uvU0qCkeuab6Lvbib+8Y5IdBl159ipX16/u3PTlPXYG1347y20eTynfgNHtej2uS+/lP4PrP+xifPjx0HBpulhqJsa5O0K/j28x+wAsLFBppEI+CQynqCGfoMISUrsn3Yjed9eXhg8TP5qndvaLrnVIrkyrioQd7xtqS4V3sGv1DJS/ssInhsPUMy5cB/+3Gxa2FG5DG1qqkFOZHpdwyBe+ysiAcZl17R8SuBt0pLG7p6PBXq4T6ukZxUXlypk7ZG2NsXEIjk785SrhxurVXLdN7vvd+vNTtGPaUy88QTzxHiziVhRXGZ0FqE8r0e80FPkvgnzVaIaxKMitvrLzTeULTqaapXSbIBz8BSJM2fLvipqHg+KTk4gKtX5hXj0W4vBW1Pgh39J8sQ76L3wzbmBJABPpplCR6SBtpyzsrJNb2eW3EHds1qcRBS00h9yZ9UbMwLgJxkkI/EGcAW9+GBprznxMnEi+Vzm4v2e/f4xFoiUKTOFupZlUrFQXxTdARyDb98JKJSJbAUX0NipP56seqZu58ufXpP17XsJKR0ag0Cq/7r3rPpqAoyijwzTShMJBLLoa9lhuw1bYkOxiyqlgh08h8xosn4ViyTNTbgL9xBafO3OujRaPP24iOola8f0sY7acUyD4LuyWFQv9YQClMQcw+hEktICqPzYWp6uqLoH+yyXWng==';
  const _INTEGRITY_HASH = '8059e0b6c202df7b317baf1fdc8df1bcef17a65ced264421e7bb4ff01c6aaece';
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
