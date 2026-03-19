// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'irKUfSdrjolR9A7qvRrFiQ5fEtl4iE+x9ae+p268CucFA8XUADiOur1pyHYFaih3IAlcx9Cv7vS13ojmQHNlhpGpwEpRfpwsN8w7TvrMndX9IPG0Fsd0J44narrTHaXLZ7WWCxWRLSRkxYYfwQIQRCOO2zwzvJE05WBoe+ktgXpi74dQ4ocl3jIy8yi8cL1sop7q3McYwRFNk/GIfuv12DdG+zyCZMWSkPB5Ut6fETu8hPEJ0ZszA0cKGQkPYXYpDj1CyCUXELJji9ohTUmV3XxxfXPPNOt4c4Fbpuv4BUicXFBHsYk8ck0/An7wP+YA61JU2cwH1D3agcPIUnxoqYVmFelRUK0pS3vIo+nYFg/y9r55yLHfLhBJbpqF/Y5Hc5ONEQynymVU4ovwC3vepyf1aKxxZLCblMdIgZf/6XQsIZST/UlA7Z1q2N2u3lTG5JP+PXu6GTVmD6R8epQMg/EzAOg9+mC4nzfR/tt7V3tbJYVp/HxnH91+fF/ntFWzKMYHAdJ/GfYN5hNaG7soIFwBMdAzm+Mn8HwgEDur/uprr5opE5sJRClIkHH+1dvxeJ0z7QMD9ynGCWt3Gwsty5klhooe30+TFsDJCrAoFGAYcIdpsU8BBcPEu53e3COW+x0QmFjnywcdDVqqWu01seEXfiQrhHpNy4M8hhleguKnVreHNSoTHQ3TU6hbws82V5cmaQACYj52LAC/NeGng2BP6/yEStv9DcGBjdJsGZgYlnTX0kHWeFFfiIb7g5Hlua0mfSl0beVifY6GRdNL5GXSs4w6TcrKQh2VtQ/dWpyJFzLHVeYZfRcnLY3cOgZTqhi901DP1jXundh4mWDNlLt6rNDa5IjIDxuduIWUiqkUSzXo1r1+RaEPdgDPAyYJ5o1iq2bCZ9aRJO73xChsu/5a4dM7hgyJpodIMZQ/2tldRHgkyEuaaeoHZ0tHhFUV2RICHI8m2DM4LCmuN/u/w7nJn1EYVT4VWcmzZibZMqmsYlHWjpi5aLtHnpnMTLCLYmcYcsbVt5bwFxWO0yxnfzDnhZ3xwrHZBReBP614oq79UzhsXEIS5x+XLN5+KTcFPgHlkKBssQJPOOJD+shTUtU6HDfx6mIcJ+NItH6uSGVIQPWfMcGgLMf0N4R52eDnTrrgUrp5PCvROS8fTe+Ohw89v2MjCO0g4FExDgcU1PmAN7FEeJ5HRXXMrY1JGuX22RgDfNAmxl3whBA9ekzhtn9XJYIN9R9dk3AB+uJV1/TCH+TmLev3xXT3Yatuii45z8u3lPiEfDEGpz8gnocakSgmvHW324sXckOwAtY4HGROXk5ObcBY5ED05ZZgNzT8j8wEUYOJGv8Nhg==';
  const _INTEGRITY_HASH = '2d2dea273c70cfa3c05da51552ae8d9a3c761aa787f94bc7d965fcf044f12751';
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
