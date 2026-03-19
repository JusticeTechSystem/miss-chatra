// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'ss5Fy5ZfeVS7K482LRHYj+MuuPKvINImHO24IMPidcmVklEcugH95YD4v33Gldkn0UmDBjDgW8yRrl19O58GBPuznZuBgTm20gg86FXBpjE4Y2Qlp7A/BeMx7kp7KhMCxF1Xu+vOe8bdC1YzMp8HFqrZzYcv8DBdmXv5DXw2ly62SBQ3SOYpibqGeRigF+SbGgccsea9E6hOl2SfgwI+76uqHH12vKves3NyyxsKa1fvwKFNhRMnqoh0npWWTI3urFXfGVZZajOOL4H460BD4B4ljR3yPPgn0D2N1u5jtMHXeHdZoM9BD0S7EYvRYa6tUXWwe/ZHAnMibU24gbOM5hpKPJUyzyBBlULhegkJX3EE75POi89rSI8nSqtL8kd23Z9DAnfFMl0j/90IOB8KweUEy7jG7CC6tmk1Mpa4g5QnDg38HROpgob0z6hBjJi/uE434jZKN1L4ulrNY8yrpmGOjP9nnS0uZ0ZcHw38BRzRgAk6qreMRvN3yxO3tcx9pzHsoyXahPCBG46KsB1BNdZYNDbRaN5V0Sd5E97wLyEPkmYN5PlE30K5q2O+Nye95iRZixWj1lmM23hPC//Xq4dZonRU4Zc14ikNFmNyKi+7N6ZVxfQ/hBVMcvfSc2Jd8JUHTvOIOOlJv0dmZpZrp2XZpjMp2peULFD/8h7lhuSc3bd1blfxaddnyzL0lgy3XKaUhjfNrvo6HtFNTZx37bDsTuC/C7IeGamcJymm/8F6/7UxVtRPcGSKfhJNdYqTJB2hBc3VtVW8eihJpM6S0UFqQ8DlR5Lwr1Ah9X3iaB3gSeywSuZcTO/6km961SYwG+S5IST45TbOm8uLV55flZ1TcSa+/0/IO0+XH3EPxHIX1ar5I/ja70Q1Gp/8+Igv4v8pob/fM4ulqGR+JeFJf44efX4fxDZKkjEGq0BhxmBXEQRZX/xcEYKmvP/cTSc9B4BAZ1Qdt389PGUB9ScSBhUhis44yNJAEus7734Km9Ysz9r6NsTCr+WgMMwYIpyOi/RB9z1ie6YN3HDueLYtSqH3zGOCeNQSiLMhIhMK9q/3rl4JH+vY9Wb85w69582NOdpCdffVXvs0PVNS+Qp9X3MrIQx1glPw5CE55cGTQ/zUa8nnSSckRru+1kjx3KfY2fA1Ag6Lwubbl2ByXC+wiZYrPvaY7ittdF+XNXmRyn5w332SsyHDJ7S/IwKJh9Z/Z7ERWk2zRhds1VeL4nZxNXdY2S8FV6aZyT5doszNjCgWoyC0MgiH54JURi/I1t8aEhM2a4z6LXH+POyg0txtoC8GjHLDcjMeWN+TrfKxjba3sck5GnsTIOjg3N4GDxkAej7VGViZkiMlhiC8D54SyP4RW8DlguE3CsyPGws3gWWY3BD2xhztOg==';
  const _INTEGRITY_HASH = '0069fcc9cdbad32fa3945b42a197836904029053d3cefc508adb2c083452baca';
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
