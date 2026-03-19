// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'k7tKQs4NemshE4INSRk8wvJr9HTwvnr0BqvUXzEjbHQZbxCyrOybje32tFP1kZoU67dp9MZ99ZESpsvtg2rXhQRG0ame88ym4p8jkWikvRZUTTsNPIujq6m00+5Oa+XX2OJsqSs0gS2QGGnE/DeFgIrh30Vl+iSr5oO6/ADwDzsIn+NeORrj9ovWwLVba7sT0TE+UqsK2ciEKoQjfG5IHnw6SaFjDbnm2wc7y0pCQe4qU38458FTZYtADwwreAoWszz5M2Zb8J7zAkhipKsxziwbf1hKNDYUQXJJ7ZM5oZqzMudhpPz8PPe+HRmJR5mdy10LTSZe/wFaAPM+KfcQAA0L/ZuGu3ourHNdvVc0xSUXv+442xfGIYA81Ub/PwuUtpbsDKqVeXj+08PHuYXDPLUzIO6N9x+7BrS9nVldCtfby21yd5RgSIH6X/jlHTxVu8oAJeyoW/mRRtnisvZIBJq52Vo9vMbciyBv32PJQyDAGyQqMMISpSiNMdaNhSPH0qOpEJBktq9erWIh83HH5XQOyeKKQouSxr1V63VjtmC9bJqNLFu5fzHy3VbdhdK3Cg39zRheH+H5bhoZgsu5JKWLEsx0+BYwjgO1R/V2uAC712gDqrCfGuSno+QZwHPkWRUzRceF52zJ7WsGDdVZAHn1OJEclziyOQL7ov+vjzpIJhiAGHnR6HI4tdH1xArVug6ofNuaVMF1D1r1ZJIa1hePJ4qMFaU0pun7csKqItecbtmpQHV97w7R2i965N6lW3XsQ/hHkas+RMSiCpQ0Aa/xJ/nOZm+zL4bIKk6hl2RDv5ObIpD0P/1Cf234why1BR789ZTkF6aBIuVKayD9Y6e/BBvKbXIWMEWSwK8ItNjmVPaionqsvEXQqAMWonMuopdVBwUvewfmatN5RjBvR5+wCExciaTnp6H16ewoDMk07484T5l54z9m5cIDq5QE56WM5kUNbF7tR5YnVeChTo2Ncpox08riYZLxkzUkmhYwrZ998koNpKQMv5kj';
  const _INTEGRITY_HASH = '2ad98751cfbcdb6b1534d623b51adb64da71356406f6c015193bbb3de9317662';
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
