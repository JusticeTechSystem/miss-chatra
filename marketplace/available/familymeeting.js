// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '+S/qWrX4If41s8QlMyzwx+x4RbmTOx/9QRW0O4xnHR83t/j+Sx5CAwL3+efsATCaRtNXNjAzMRgzQaOi5RamQ3MHrkr8TOTrQ6vWW7HQNEPH7rmM8OnZeq3cJmsFm7Wc1mgjkWFN+Dy+RyeiBUAM5qb3SEcXQjswpjo0OT8QzZd5Yttgcjdp+Vjk5jH1TdJkGixMeMIfWK3bc1pz3ZAihKptrp9NC3AKgF+SNwQrsDTovL0g9kJ03T4QKgjnT30rI707ZwXtGQcEHVM3ECXD30ayQGnzXVuryg8vj4spIWxDWZ1C5sv8aFXUa3j2A3MG8afMA2PCFJ9P4KVtmo+q5MUZEoe4OFrqASXigEqVIB6KWcqCticr86Fo+TcjAhgeJBb+OyWJKKVdhHY9zN6iAvGt23jv8SSfXzbxpij7OX6XqLDNrqwDbVzfsjQBxcr3YGyflT4AX9gV8w4QClEb04gsM7uS/z72bPzfd9G18JRN4i+FWGd1fWQ3U07e+MWY9DTm7Pdxy8TiOCPWMFtzb7ydZJhz+S0c76YdCODPYMdHKFjD+8Q5c+8ZXrcY6EM4Eb0Q+pjTgOhyw79/vGyLf07DPl+DhYzhz5I1vCAfccyN1TSi69zrCrXqclatLqTM6YjRV7uiozE17elPGdV6HS0pU6R1AL352tSCpPAem6JNEMklJzUfxYOn+BXuIeV9VK+dnJnhUPbY55mn9u5LkCgR/zUJAX2zSQ9oCqQr6CfTrgr6vEBdCXKLl0dMqNqhM94Ra2Z4IIf6LSomWRSYJHX1XGByk71lwnKl4IbJrvR1de4lWxy5pKYBp5feB+iJPzvMXdrjSQ7kMEemfRS/Vedrz6eAAPb6aIzn6Qug3VxWiz77VLwZoMvcpNIdpd2+FVEFdQ6ff1ZQojdCWm7XHg7fNTvE51WbJkjT5DuiZ/O4sDgkPL+OixAoNl/muvRXHvUdf9IsYn4rniy518IgYEAcJ3YnPaXI3KtAVXqil9+BD21dlIR5LAbu9CUfyCgmE/DLe5dloPV13btHYwoPAOLH2PW11nVsPR2bFt44w2OtIC75NAUcZEl6bYxfZ/tg/MPjv9FviAszPduuMhqgljdqYJKqCLVk9+P6n6hAC+uxch6Rcl2g2TvR1iZnbCZpKYQNVuaamTGkI25x99fOQz49ngrGb0BaYoIZxbtcxH646djuUKJNiJTZZa3ZLhMt+waKhntbqgy8zQ==';
  const _INTEGRITY_HASH = '3107e2a4c724630116308e9740082c2c8b6ea35c6e36197bb4936672a2c7f9a3';
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
