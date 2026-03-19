// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'kC7TFgOwvxnZ0cMW2ohvKkxuXmTpSAm370WdnsmKqmArArpNc3XK8EE4IkvRrTyjyvrtH/o/v2m7ai/dYWAoZhvgb4tzMEIcUFSnkic8kWCDfJsec55jUKbBHX9mYuRHCs7MxcNuAvYLwnQzA5UpHeXBdvdcAahEfYvB33pcxgYfWbL+tOKUcJ9Xsy4in4HbS0VZXP+g0pamj0jNpZn5eRFktokJ5zjGIC99G/LVYR3TIFS7iYJh0pz6oE+VcoOO5l6EJ1GxDhtYDqUxfRkvZxIx7YgVbi3JLTuzN9m6ogZ2dTZK/XDZGj3r1u29ftz522chmK+Uof2ySQf4bPPqU1Qad9o7OiJROhpefLuEtkLGyaPRQtWnahAB1U1vEYJG7uadLJI1CAfeIAbF+G/D9R2iQN5+7iQ8BzwHGBlmRuzf9tLZOCzydb05e94zaB9OGgQN+tbkITDqYSuKE73wlO2fofnHI7JIg7bn/ClbNZT0KEjOWH/75/DvRM8GqgALlCZK7go8+bXj0teuMSpnsJmJozzk90FyFm5e9GoPInz1DJ3P3qCaVSEpjFLEu6qvUs2DiSbWXCyUObTAZqZXj1AZFX+BfBZjFRBqpEkpyRJuDZ9fCO1shk4AxI4GZe5JWmyeqpgvfjxvbF74RE7rcNA3kVawU09CPSFqegjDzgkWMRuZLIj3w2QjOHC4ySgEeheCAXLDqv8vvSc2x8W6ziJiQ8gf4mszQI/z1qMp5gXzpGRqWvh8mmQTXd3vYm36KqH0/RfiDxRLV44zhzMQAcFEtHJ1dPcJliyfpHBB48b/bdbatKbKW3OuC2I79FZAOTQavdZPfhfYbtCLRzTmfDL6vmyGXgFYsvmgiZUsQXJ7t7WCSPnOPRg3I80QkTCFTUcm3bbT583HHGrLytj80pLuwy9hinu+W1N9sUjpHqkWR+0k2bCx9rJ3WUcCJlTdJkr0hy/SPHaYFgE3/f4oqaCCCuZh5gwHLtP1I18IAc30tbn/YRTYEO62J3qSuly4I2aC0QSn0sCanoDj7uetNt+0tgfMtPUY/FD6JxfSjrnbyvkOkstPgyohxskNtd/U5b6oBbEIEO2rF16elj2dSlefCbEPfueMRIbPpOLCyumWmwmzdF6oklnXGhS69HShzxsrfd/R297f9lz+2iblPK23lhaQNoEJmTnRq91WZV9QGTpVxrtjEkUATEAr7tGIXjUw/KmLEw4e1MiUwqboC603qK4ZB+Az5ldKHVluGtGWri+SKU2WwhJD6AvTl6X9T/fb8VuvlepESW9tAsj6JrXaA/6zL4fIV+nbLjnDhwsGSg6WznHbMLIaq+P4nITxtrQawZ+MAKV1yxAKnpJ9rDSffH/FaVUMOjkuNN8f';
  const _INTEGRITY_HASH = 'e770977c93f9fdd098cec084b6df60b83d460b2679dcff1c0f64574af3959438';
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
