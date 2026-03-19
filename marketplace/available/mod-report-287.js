// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'IL8UVVN4qg3cey3K1C34J3STu+tHYHdiZcfO8kJTHGg78i6W0vY6M0JswO4J4U10JwPi8PKlmqzPobZoOfsAjBrSFnzqgX0R9ssMQtgEB8+2a3TLdNt/gO/UtmtZTwvTTjWz661PhHfxqtPEBiGyQTKmtb2UoHabjiMiII56mCl31ew24izWixf6yyfhbViWBeQFUJm+o2dBRP+oym2ftT47v9fIXRNQ8R1Lh2r9Q9h6bKWUqkkwAcimgrBkSFJTigapcyX38X6SmTA/Yn+U9XVxsQzdreOURbamVNXK1zQ+PhssHR+1QH4XfxE89ZtWac1flJkHb/3Q2BzaF1JRWe4rPpAWNHAGULgJagccKQQjSIfGjD0fah8BptIL8sxTOtyU/HGIx/nTRwbZ+93qnSujOTiDJWDfYNB83EmEpsM//Z7KjaEQZzTH7ZbJ/h9d9Qq3ksCoLm7j5EdUKwftoqR0PsC7qslEsQ86yBqH99drIvtQMr8WP/tmvZlWnn+j25BUa/97Q8REmAtlteT2gZ5TilSOC0i8DmpnkRwPuOnaqXs6Bl2oe7qh/x5+e67THDfGIDHN1ngedrv7tOErIJgiWPOaRuMv4oEJOFkRPGnI0AHF4vXPHT/zAKdvnST7EKY68TUX25czA9uhdKWAkCDmv+6AGpZlkc4PNTePzX3sv+LQ1QkD5hFJS6y82Ys6lDaGpynhd02utm3/IB9T59ksZjf7eX+TsXPfDdejHZ/fKcgrXZpYwYhCaX9TfhgDmgjMswElF2YO64MhtXPYHq013dcT0elEWG8b1k7BGrf+A2STpoSJq7FXW2R3k8IAPh+jC5oEfknU3ul2c8+bH7Veye2dUSCmsJXYp2nZDhiDTy0mojis0AlPIPIiGG1/vKllGciQq8LzLA25NChLUOL6q024t3Z52xtIIlnWo9T68rGE8FP3L3R50a/I2WFwZWOiJsiADFKAsAyYhUL5uFhArzOBnjx/PlqHycYLk1FDJz/fNtrCbaK4OmmjeMAUaX67z9/2rPQh8Sef5tN5gpCu+9uAzb+A6v5jXD+y6hWEM6WfJSNxQf46ILKumLcmDTV9kuHdXPYfIaGrG3XsimhV2MCBI5UC13CAmjluAjn4a2ZE86NtMivOcQS/1PP2FaO7AvMturuH9wkfE9S3HV5yI31LN5B4j6d4nQ5ZVz2klWXsyIIZe+nc+dm5QahTb6P28aMenlL8kOvcl9er5A1P2U8TSwfdrgk/7DesG7tTRu4E9XcUBc4iypxqdVzZ6Od1YNuQcruzFlJS7h20kTIgD8RYumB75Qji1bz+YxsQPIyqduKa5NXLXcVUBzYQkbRi341Kx4Y5a5X2KwJrVB1dAqa8+TPDi95kgHmXK8bx8W4U7noOvw==';
  const _INTEGRITY_HASH = '56a52df7baff8d11ddaca6e9b96e94d0674ded7aedd89b597d6bd4749379772c';
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
