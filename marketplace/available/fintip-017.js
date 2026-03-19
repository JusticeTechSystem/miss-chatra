// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'zQ7BJ5xniVlyclioxwfaBwKz7qRBL3dWDTh+J8KIa3frZZx2hLvQ0ehDa28VSvcO4uTB4ckCGWMmhw4bKDbietGB0DN70CK6QmIfdjew6w34hbb+EMlvIOCGbfEIXfsT/Pi9UWhwAeSBl6Tpi0qVMBjHO7f7IjRrsRYgz1puELlGd/xtcYFQ5SejaUPpcRNSmtBw5qlczExKepU9Yal15rzDkR5JOPCTo8+PyQzLITxYkoJGywdvt644rMPnI1F6jAEJ5l5rdIJhy8Cd5H59wRt3y2E2TzeyHlMFP4a4AucAm8GLNkxArHSh38FZIju2aw6nG+hOSjHofyE0TS8zRs3l7PTvMbnj6ft1NQ8yS0iKk5zCzSkem4zVKCcxUPH8rxvhxEVjVwJ4XGeg1Arj2V/If1Ddk6a2twMZOGx9I3IU2lv+Mtc2NAKjAwLtAg/lG5Wp0CeWXzqCQWI7ny4k2ZO9Fr2KvuxEexmIJADwmNrRyxUfbYi6fmM7gGxuaqe17+loGKOA5jwYlUb1ln4iaObi292uZD24rqvvi2d2IM10lVXR8JBf1ky3YFwWWmfM6bSBdm6OWc6qhDzzC81Qt6W0DxRtwwZva3liJebJpGMVzR4DYz2tAuk5ihcqgu1PlOeuLLrI3Daqt74ZPjkYYwuALE74w+9iRHeHCeMlDxSOreutl4Nd0g54L+r6ZUZuvD7YuXEHBZmVG87FXOWZwI/tpDqCJxDNQG8JUZUm3QxwKr7WYU0oXRNN3ZiRmDoSoPDcHFvmadbzoxq7HHfSqIY2uEpcxPqsSyCd5IkYbiHv1lmw91H8YIVdyDFDLR9+61V5Ru0y9+bMf3iDi/mzHW4ra3+wQe0tfAxqOylBJHMhxRNInloUDC2b5noddchJTcSTho7siNDpnYAKfhrkJI+IqMwB/IaVcWOdMLL247Rf/EX0QkC0hCuQBajfXyiyOjmCXpHvogYQd1zPJlblRPmbSESOPq75w7ihwBmNmzsq4sSBEkOiZd5JGmua2DA0rJ+jFNczRqYWkkEaFEeaugNcAoMJU998MDXOrJKjPhSztw==';
  const _INTEGRITY_HASH = 'e7ced5af9003802e6204d279fd7d18509f4960b3b5822a6664534f4a54c0cb4c';
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
