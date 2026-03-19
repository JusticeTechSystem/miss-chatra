// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'LU44/i0uMSJ6EOha+8aiGfv0bGR/tvpMV7Q4speF1qDTPvaEF8N/QyQ5byA9YZWaTf0EQ9fWfekQciRW3Z06Y0TFONrVMrtmpcm6CX3t5Ta2/wxJRn+zJhDkvU4HHHRL8EZlQ5nrkasfEIy3SsuW3MMOjkWGQLEkANYeC+ufm3GrrUkf8QwgTY8I2eX/RULkUpqpAfJrPBGAHJMS86gcwrnaQEFkkogZNcsMDIAdMHCFH3nkAGSwsZjjX5BR0pX38VNcVGK6qqYdz/R7RldCe75XqiRQ1NAK8hJ52zkn+r6bZz66CJjak4CdWahpNWgJ0aHCq2HUgKripEpIJLc7eW0O+RIDzr4hkPtNq3XE5hN58RA8y684Mp7QUlC/vVoat01cWS8UrG98zfuKPcbBBjGMSpKzqQPB4ykH+IR3A9bTMuXVcRqpGipqcYJHjXXbsWXFGf05ZjObZJu2Ay6QNl4kQ/qfiUiHZHpERa2ZR+8GQcdnFwtDOw0k6eWR+wzarZcovifJW54m2yt5GPq74kuuEzlBiTAlp3q48oQsYEDdbAPajoRMLU7MwgpxUu2flyyWQvI9zQzeE3Om4rk2ZEvtOqi7xavyxGIz0Kgs9dWLCiCly6/YNzg0eEp6uxo544CZlH/MsBSmVzVOzSLuxn5JSrhYFWNtqmPr3iy9De70D7F1/VU+tnn6WzpH4l/YYJel45QU9E7AwVsCZWCQECjsr+e4VltyzmoVg/FxoWF42+uowlCSNpm/KbMk1jYTKF/j5DybEoZY2jKnTm2xmfwwWGl0gf89Du/vOZLI16lZMMP/2givmR6hR5khWkjL4QnaNM40ccxcxLfVG7CadiR3BrksjfhyUC7l+OUbSSDrRyvIR5KAw/ZffTQ0Hv/i9RJiSN18GMMSn8iWTkWsCkxcOc2vXCKlIECL/FEgCtDbOzy3HEM2y2wPj5eGf4d97DDE4UYf518U8lZZCaKZEpmwGiny9OTYxkEgCMPCZMRw4q0gnjN06oSsKB7hzFDsLJDvylCLz03Nhq9VaPbMNj997OoEQ/3YMZK0xK9pn9sWLRlNPd13jhg2iNE00u/+RTgXNtydHNdVwktJiwvrdc44fX9j3lSxsum3Nxr1r5EA6Zjv+FSS5R4h55DFiRh8j9GW/XX6zR4TjcvUxtd8Hf4iLABMM9P9ZxzDu61OrBHKGfFQnKWFkOawjOCSmBSwVBRA+bMQ7DZ79ikJi+rA435+oVxsg1p2u8LqbwXVuq+zq7vGpDbFC1DRetQM0dJ12RqaCRCFQrgW/Rr0+o0N5hCiUWFqmAWMTd6/OeEDn60RDkS4NbwLPhwNgnSsK+aGf2/ECDGr583HJveSBJekKxN/BbciiXJx4g==';
  const _INTEGRITY_HASH = 'b43fc8ecd62f1a2557155f55f3d1c2923e82daba2f3714bcc75a9064f7d26542';
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
