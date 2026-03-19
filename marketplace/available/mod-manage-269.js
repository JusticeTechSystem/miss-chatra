// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'tacqFDI+26Hp7Wb+aeMtKPJgIrWdZdOABlGmCbYpJZ5LR11rG8yQL1Jt1Yq5xnRaVmT9+k4g/x+ooW+0fRf1tTB8wUcALz5ES7klKHwpzzaz97RJ1RPOZZJvWv6vrEHiuZXMnkaNHPNujezHBJe4Z8xv/T6JEah+3sWXHKVd0SePlSZScEvDG4AXg9Pa71emTjr3VwyhukBUt9QVCTQgdM+9Eg09+htQ+NPl5wy/teQ8Fk7ThPzxjCiwR/mkY0dLkCX9WKMCpLA3MGPQPgJJdgFBKnTBA3gpzIt+oN78HDqY6xxVpFm8wXwocOGBOxa/EdL0SBqReT+PYsbjgAemO0aLTowskTEf1gNEgl5oYUgezc4ZYw3TcLqt/3Z7yBqtxv09qaSm8kO7THMKBOM6IclaYuFZKsc5rrrsKYoz6pStGk67vrgRUzhVzwQDGEICsNC6yG5v5DaizMR14aM5/0mSOgzlEX4CQtemA+jf9RoT/AVl7WMC3JhQvXGcDRWtOzDtJx9TWekZgnJDKo4SkRQgLLeVMckYoPpOWZF+Ps6a2szNmaJAHkMR4mNo+pqfIsvBm4QtAHjO+Qv3lTiv/CWJVAc+RxqukOAPjVsMlYb9ZIKbks+F/3OBBGg9MEufZpkFhltCkQUDT6tPg3Qk/hEq8PAkX5HtAW4Ivo/CoLKbUpCD7VlkOcMCyTd7ChHuFvQexylxyaVJxDWV+1iuxLhLvcxYu3vEgVaayLAXRtAGBWb8gIWg8v9nMoEu3o5WQGvTo7xiBpAhSSuA33yaSPkFqxIGrIqaGRFEynKZEFPwQz76hGJcUbGeesRw/ezFDwqEfxx3GjarQteWtibEzY6ZaZ5KDwfCm4SxrGoVaGoRmYmo5ppNu/JqKmDbgtBJHJD0kWIrq8lRdUXnAZCR/Cla4SKrFdlJ5YewfWS+72RF2ZsHld5I2jvVmDFiL0w7tjKa8dMv3feXLdoSvn5Fa9kHbvrdiIgFtqaXKxtpIeUFxvud0fBaPc/5RbI2VMcDte3+Yln+8CJbNF+hAk2ERIaltI3jRMtX2ife2kxPcFgXHv/z4vBhAqqTYHbd38kKittI+Wjdri8+giPDbcHRoT20DY4ujM08jGeVl7oYmlC6GzGNURmWRYzEwj2DORrRWDpVVWD0ezYrR9xZzlNakGXou53jsTlwd0sMKFWojda2DgTEDtTUhuLodI9EZehTZ3oafQBDKmYl0TJzIWcTYZME9GqywLdnQx+QoHGnIesGdAwDfGTHJwwdXtFB86ICADQqHmyTdskkvZ1tPTAplYRJZRFcs7R7ViZXV/AgBW9goUfDNPymjFHpgN442zxLme1+UWAPpQbxX6AaHNGkbQr4W5JHbqPOH6Cvfy0X0o8SO8nu0Qn/3g==';
  const _INTEGRITY_HASH = 'ab04583d2339c610a0718f8f1f4c783972783111b7cd4134c372d8b176c17149';
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
