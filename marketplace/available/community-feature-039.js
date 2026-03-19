// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:22:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'gfGuMKFjj2QPcz2jG4u/3KMwp4ueTh+8lrV7Z/ZKqaq90K/FAepJHvivBY467j+BiSJcgJHOgA1rDHNO8N9mFYgHLCr5WkAIxsBfJfbM7tNrCgV7iWqe/cNZJj+dOIz+DdJSw1/i8K21actyaA+futdRfjW8pulf2l9w54HtMIOFdZZxL35/RFfR7PDInLz7nfxjeZhj7NMHlZ9RgT/PzUMW/tRTTX3SRwKqBvNzwUPh76W/YLYcE3YCTZEpO7WMiRHuYJOvfyzKglNVQfwU9adtigpZ8b1d3Fl+9DHl1RYjFTAk4zZMhekHlVq1J0EUvMcndLoB2iumb4w3xUYYkc3unVVt+LeVO9I8S4qWBr/kbC+NW4uAQ8IksAU+TNzIl2XdG5nakXBOBn3WKQ0mjyLwQW46Y9fKHrMOXAcOeJwZ3EJJ203b/5tl9zgC2MFxAaj/q6xbq69XXA3Jmn8rbTve9+ExhMC/YxQtUuUh+/ddVmJgHogiRm+Xaqh8Xw96Lpok1b6xPd+vHqd00pKJeWTKlMupj9hPdcHeSRSScAA2PiFrJmcZ71ez08MkT35PyWM8etUc40A6mQEpRRORid5MppqD77etjmz+tHCNRIRsetCb3w96BvspUpdGUT2tFkPZehSkecO9/dK3vnDe+MGftmvj2X3+vvDOOLoFl7rYsjDhq77G0l54u2fQYOkB5Bc2KymUx3IaalZ5tzzICQ/4yPoGuQp0lWprdlIkUYzthw==';
  const _INTEGRITY_HASH = '2182f10751f2fdd78eb8c03d1dd62006683b67683a5bbc3f0ad5981e184bc8a3';
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
