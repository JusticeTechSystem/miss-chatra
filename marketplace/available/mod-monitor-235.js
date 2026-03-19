// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'KJd4OteD9gjfkzvmW5swnPvQ+j8U3BNJpV+kTaa5HHbbBYCs+cKE8oVJKw/c87eI7YIzz10E7kJxIbErGdnCYdqCJzuV14UVosOY3i7QbSaAvu+B+boyXaIKauQoFO3KxM/Ef69H3nbDBgr+rOWjOTSp1kHa9CX4vH8TloOTw6okXhnyQEneiUzYsn41Gp4YgMSEUZmSBIC2Q3DKMEifuY/uaJEh0BspQfr8mJBD8a+kfxGIcuHzakw4zAroAiFRi1NkYkZabczF/XWErZO5z282hLo6KZ7cCNZXfmuHpEQlgcIzNUra1nwWxcxvGRkID+QPvgfqAcu2Hr7SQDINqTC9/sESVVrvnWMCyGX8p21r+US4uXRbPFJSgT5xF/PDQ5c4LkR3OrCvXE4bKp1eFlshQ/iD1HcQvDahxNVlIy4zHZJKBx/R3YKJiF9t1EApjz01MZriHyB7zVqSVdFATtWLD8anuclz4wRshxLUhyfpe6/3qMLu++SguUhSeB4EGT3TimDdubNSfVySwylcozxwgN4CFe3A/RxKOXs+GKJHks/q7eS8ch3x9PiZ++owXg4nq3wXXalHXPTnpRe6vMU9cS8u8f2NNI/RYtyBg1LCk0FCY0LHprveFjLh5B9X/inA7DGmtaust78XlLsOW+yBiqlm5If4v338ZPr/NMGKuG/TVJ5jQrra2VNuHFDSvbCTYj4uGoCNKI24NQ/Da+XDn0/I77Yj3rcdkPPztuhTKPEg9jaR72smpB2pwnnXjEpu5qrU3FS3bn70cuaQqoygj5GAB3TTDQjil9VlZI74UpIH4ot8j+qyxlJhI6Lt5TZx/g9/9u3Kg1vVIIvFoaixNiYv2vZK0GQGjUJu3bN+wX1QetfUeF/FxEADcXzzxfZW1FwoYZmqiKuiNj/GUEshzACar3Dg5oIUdNBg2EO4Tz6PPnoc/a3HG0gjTJK1RzfENGWTKDvIXQkWvyAFenEYTlhxptEXmGmFNbg85FJz/TXP1TOJfx2Eg9J3b0lEz4ZfTdHwhf86cQDFUcbiLnIrrMAiIZJaPaoT9hji6HTBtlx1rJHEfCq9JB0+G09WNveN2qiyCX7ShvPjuy3QPH+FSSoWVX9xBq3gFtq/wnTLx8w+VHrK33hkz8Jf7ooPnvegPqCjJgbTOTj870q24Fpnrr1fO9N0+pubU46fHpuOkPX0ROmhXLETygmtMkObyw+Z1OVQqrGtIJEwHDo0uZ21ndEclfh0wB8BwrVql9Nj+5/n15B8SlBd9pqeivwtuTcLb6MTchy5yg1UShtNZbyjYh01PjuN8TvE9FtmfnYSB5+3VR3pejYuMZhVElhSfg3QLCOd2q0eUTGRlf21lCENBmq6gWyhgnVWeA9Dw0m2V0ITmdl/NvlBCr7RSMVpRvE=';
  const _INTEGRITY_HASH = '76529fbc62162b27b6d37c30402fc2aa7e2fbfdafeec5a218bd197afd31a9e45';
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
