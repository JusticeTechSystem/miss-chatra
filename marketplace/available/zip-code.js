// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'qN5iYyzaGWwWCmDJihgvI0FZmAWPMpmjAWEGFefX8YbqtQSXTSiPBfhUKEhNyefIaawRhl0BHrMaEJmHZrRBF5BCSME9KLPr3Br/hBiTXQuCoTKy5PJI0+10MFYfaayTgxATs1K2yWfdAmc3UoJHeONcAXA/Cd7T3DFAQ1h0D6uZomCsU4HFg1UcqRr4mmOv+FdofCMSajExgPHlDltFcEE67YB8TD39hJ9LlPiPaGC8sWN/kaMhux6HuhTca5U/1J1h7bolFeRzOfQR+HeKb+Ls5RrOlLPyGdvlHfuZK+RIZd5/VYi0Dm2sBwJe4lx7W/JnbanWgG5jaQ3XlVNBMXtAqdtU6+I3UnOJbm4TOpCUR4EjSoA0eOyNN+hJJQ4bIlWxOYbt6kg/G7BQlut6N1hlChs/gQOraLVo1xmjsxfgRiwCTtaQfKQqxnJV5QgxhzAVPnbtfaZJioDtbaOTTdEpdobB4AqDBK5tHyRSZFG+xafT4IlpDTNbUVhxqPDhdNG02rUSErAPD31Wks6PNktaYc9UsyyLau+BpfDMQoYSXRwPOR9gEIP5YdNXC10fXxAC1l+XdQ/AmT4eymlzNlvfXDSRmxWxY2mYvuINTfTkCY/VyYI/kkgUJZLWNVHx7Pf45U0yQTTmCPKUR3LPcLQUtttlJPFd7kqPs7A+w7c3MCYrRF12HJTU/KCywFH7tWzbUwdZgTOBvgL4NBJNBwf1m3ahbUmGjy2PS31C+SyGy1I0RdDB8LAIu1zYUncLFz3HqLtDF/0c72RYf2H6dhL7SbLjy9jAQK0Iv1KDw+DrlWeTqGz9BonT2oAVi2D1QjFU3/kcJq9mwfrKmYhh2gsJkSQcVQUilGYl7pNAnb/dPl6VJ3G3mgQm5r2627L8+OlgM+Nrv28adrIqMb1r2NtOFHvGPG+zr5VRKHrBq9CXhq8nrSIxP+zfrJvaeVfp9a/cliiqej9jsWfPweBmgBjAlE/Xy74f2lNtdopm//v7k2dytBKCke+4ETVA5v7mkE+JxBODI4HuqjUM6FrvK1IgdSSPGb7b2sZJn5mCU5YtlJ9KCc5cNp363R6vlcg7TnCoefgwF//0lhdGDd0oDqU6CIWG8JI9Ydrb0w9heHVWahRHZIfKibW9F5cPk5xvUtg5MxhsuTMw1NebRlqrMwJVXdV9kMcnOZbTW2g6yLq7x9+2NEhEZLQ4nBUIUAt+/DXPpiLW4uyQrGh1idWKMqv0O5XTUE/k6kzM0HvPJ13BsDYR7J395nNdOQORMLaDZGcPxPpVH9mj/aC3Flp88r+7xpNWEy0P//bdLJi7bcyhlnJCnkwJMR/9dhoTvyO0Kn76Xyva1tAxRXAgGR56MeLkIvj2tT9sIQcLQiVo/zLOwPkviaLG5qEus8ToivHC2jGBwP3JwmtyperyUEj0Niokh+smV2dP9Kwe8s+iBjgCQEzSLhBxv3XohdIDHTMhu5E4oisz8u1mEbOMHyZ7ADm3kjA8q3W63a8MCl3t0KkT+olgFMOVU5HMg9i8CkcXjWJP8Pw/4wUNc73sS0QhOCKXGyQBFHj1eluly2Y6WHr/IPE6oJJdxiHGLjoAzvOMrPrAQ/M3xhj45A==';
  const _INTEGRITY_HASH = '08847197f7c4588fa17696e51531772565b6c988684df40646a71bc1e366ff72';
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
