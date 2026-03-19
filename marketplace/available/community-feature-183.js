// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'FyI1cW5WvXaNFlvaNC8ZMm3a3GmrfNzGXnOxtOSaQpxT2BnAPKZ+CR+OGIzjG1CYhnDHxlCTu3cf5v/ifve8ii1qfBgvwRSIZ7n6ngISILXvEX4cXGhkQdEh59IE+BTiBTXzOWkL2T0YNTcEJVeV8K1Cs+WbjW6R18W1B2C0B4Ae/UqCDXRB8sLtYdCysKW84xbv5oH2tyzxDHNdWBFMClbDRh4xbUWzbLw/nTntyN8sey58nWr4QTsMLKQg+GLmMVx+GNzZqt6UaS/X6OtTXArjanC+9PFS1N/eRiPIaRhu3kUrI5zLjFVH84oaOW814rg0p6s+7ZXoHW2ZbykSIWSACCxxpJfPfHPfVI8HnLqEfed+qoc5xV5x4vKSNwcCkxE4AmYTCSQpRgjjdMZzLErnAU6YAo/0pD3danmLtAS1DpOJTi1Y/j5sx5LrzpcC+BDqJ0AfmGkyUx5wt3z+D/xPFfr8WZPUfTmrs62ktfHyZOKoOQwOFn/1Tqq3HqPiWrY+OllKdtBVlrm4wG4G9OITm064Z52So7o4mJdTUa7AT3TYs560TdgZX0rBlfzq9lx2W+Am8N9K1fIrrwU+tuCyu/yk2s1dMStKgqnE077zqFAXFvSzfrNrkEfNc2RLdzH1eFi1XY2CqROwpI28gBIQekBEsSiQWIkTniuK1cLHU6xl65rOvRzOGdhzyrafUsl//IQ/40XCnpU8Ytb4ql3LGkQn2EOmj+0KCbM=';
  const _INTEGRITY_HASH = '861cb557c4583099c4ce1975bee6309c7848b89b90ef41b2257d1d79d263cf80';
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
