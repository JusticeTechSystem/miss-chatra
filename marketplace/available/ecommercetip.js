// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'H0I194kuTBudHm1WjJXbqg2FJfsSjs093w2QnQ5/iLKZhEwWtlcJaUIJ7GxrB+gSFP+mPAgAGmSJ4dNoj+tqTchv2W4vWC9SbKk2R4BY+SP8m+pjrdCONRSv1nw975q8IAXXSQaV7Elfjw8DoZCKk8u4ozhLFBJeH3hhiBCwHYJGoOMXT4+nmnquR1Z7DhOd0NOTnPgGltvErMoCPM88iKBhR1fGwB7gQr5oGN/bQJcBJNARn/kN9iGtU/lHvcpj8u3rZsbg75KYNQGRrpvlZYeQ5VdBU9/JvqIIo4ODxKZdJNPm+SnH+WRgZ3Er3D5pGUr/RMgTO82ItUzPdlyv3Sl5UcimjloAiUjahszAHN1WPE/lMU5RCFd07jUzfMwTbTe71oZhGTzxDul1FIUb8TVUje4k0l9rx4hHxDQkvjGS6gR2YxWl9LHV7RGOH5/PGRLTChr3vX+D+ITzDRQGFUvByZIUL1DV2+0d0+BwGZBmcWq3WN6ZRXCVVk2jY9+op4cTOgSM+lGLaEtQt9S6+XGC5jVFQWjrqH0gISnFxdeVwMoCz1KAOBkAhuy1epVZmuSK+NgNh7Hw3qoYo2GJWZo0CGh0GQHSFP+R0eN+Ak8qCrVsuzC0GygCf+UNHdW8jkeDRT602mNmfPB4ZWClwLj8CVEYsr5EIV889Zb/AjUXAk9PQlkgYSNCp85DIJRgyQ0upr9tmQtAi5p/zzp7F13RlFFx3JIsOih8omyhRvb9zIB3cQRC6tDyb36OONodQKaWZZW1qF3YLAxEkO+N0roY7Ft96wr0n9f3Xb3LUgnoei57iP9NpL9MMI4JAiqlgqjZjELGnEPXzp7rTexG8oKhR/fesVL1TQL7WgTfWKfEwUs+Ecs9heM2UCYoQyNeCqWJ1yaTzfFBaeQ4EqJlS8A53KC25ZY939Dy2SIVpCo07Dif96thRr+53jLXGceKrYp8hPIFWJrIYl02f2W/HDiooGS+f1fX4BjwwbTVoB9HwWxeXTjjWradqpOIX7LlFF8Sa08CBhwhhpjFWLksevbRrvsa/Nk0pKtexMFuv9nEXSeLd2SwiF3nwG5aUaU1HGAJ2+3E+lx7Q2OX2sWkB9o/EueuyoC40O6F+vLcI1YxL0pLJ5aOucn9ANFL0zNOXfkKuU5XGqRfVPyOVlFMqUUjOVYrVPgiHKFWhmXbQUYwk4ZM64A2Iyyg7YW4RptyNi0nExS4lHo=';
  const _INTEGRITY_HASH = '9875358b5fb10356ed72fb377df034bbb7b4d2ce76d285a9a773b8728f3b10f2';
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
