// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'oV3URZsZuVpDTtMRcdiRLutOfEcWByFOK4Lw2GekNI5frQHNR56l+ePToaWe0/bnivppd6ULzNCjEmRglFvsl2j1ivc5ceEc7MaiZhdUpyX875vlHdn3uV1ocaDlvtxLfDiulaCeCbCg2r/5gQNf8aRdtEEn1R1uARBpHTaDXvMRHCx1ntnDTAhes9vwYCevkPX2Oae7pocC7jGrTl0J7haETbVCILXxCJePZ8MM4M7W6qzUc8tYqVYZbGbH23PFpz0S9nd/VM64cbVaTFVuqUAVDMXCcucbwNaopXrBYFID8o4kjjXRfnvM7/KhDDfFS7MFuDskdukPj7ktKRZRaCY6kaUg3gxykveFVY+Fj1CrcxAjqL3it3gsGgcuJb8iStxjlkw1r+tWf4XI3X6vJ6BDhSJq6lAX7y6JTQiG/ywEShRPlZw5pWux7qRxjrk4FeThSDvlSyNysoXw+ovyR0u9V2YdqpCJom/zQoSGyaNy45Fxms45Bvvc3prjwXvtqAm6/KuEGJhZaOXkEaYmWStzMvwEC5BknKtFoJ4h7gCO6SsdHL+/9YoLzuIKPsfTyIbUDp1jrEouYTmT6djvXr6SKxU0BF4/psMwdyTPXo0CDTpJyaf+fmRG/3ic1utQFenrj7VebKGZaMfWwFaCx+VK3eSHi49wm9l0pYMuoBXYYs7To1H4FWT1qW74pxdH+tdzg4muYt5dXV3bjJFMZqGm062ljYcrD4fOJuC+kEhqNa1wIaQQF6BjYZC4+ARtxcdR8+flblTUH4/cvwpyo+jlcB04zt//vlJROx0LhmLHz8WtA6pK+UN+n6gn5zrnAz0soa/AGdOqa7cRzdvthGgTdQ4QzajBQD4Ogwt+GqalbtplTvEKFnwetMohfI+0SL5k+8eoQRrJpDDp/j3qU3wwHSTktad2buHHtZH4RMEkhxcI+qAe9lNvOLX4qJGYBcPGBV2cjUG/e0grUYIkXpskW0Up85aJVEj7gPhAw/4Imhvj38kW/eo3S78WgkLVswUH7meR28nf0r9WAlqVCwdQkGFO5pF1fSwCEpotb49EuamtTggdjWghlM7PgSPAK9AZ3IuGDSJWkIr2rWVW9mSCo5MIr96jaf9pQgMl10js5zFrO48aza4dGIjVJC60OV+NakA7eCGbjepd+7lsAM2wKmGu/M3aiy9CfnqOivUz8fi1L+AjeBFmGmd4pWc78CfUoQg1FOURA/pIwqsIgaMTAgztBvY35k48mxJuu+zFZw1+G+Txsiz6+cd1YuYY/SsZ4llyaz1GMixTC3euVEEol/BvxCUqNojABL3P0tSVGy6mpsLhnVn60TJT/XT6ovN8pT2BW/n2Y9tX+OspQHedSJZ+aXceiFSsAAcS';
  const _INTEGRITY_HASH = 'fda6233259fc55ccb92d9dcc3929ba015fa4dcaf622305ad38888365aed18d92';
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
