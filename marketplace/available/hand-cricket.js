// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:24:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'eegqSzC9pBOtkuttbf0wvBR0ZcTqYS6kqfqKBmONVphhhAeClAO3aWQkgej/zSbum3XYFu8H8rGlQg9uPZrldHujR7sbZuRkMNCp2QoCTrVQpgxZ+eUaDUN7SmWGwh2Y5DGsUhBoQDk6qUyBLz6iSI8LvybvO1V/fr9CxjOIk7ASXhSykzLaV80wWMSygtxLDANRN5sNSSjSIAuDtidX8br1Qb1JA/uqQS2CkwfquZ1HynDqUOhhcw+Dh8L9LLO7UyM/J+hyWTaykurAeusP+bAqFUPfh13lheYCVpOItJXAuBQMxd5t8pieUUn5HRw7TrqD40CylwJxv1kgmIqqZYnuEmWt9FDZEU9PrTDF1d9XxKicueLEwYYVb0Pl2LbhbRCF2LzeWVDiv/Q9KBTnloa+dNe4LaYbOyVw7CyBZfabqKjWgimAVc0pV/9da7TsKrxyk7zsqPdhHpNOyOKvHguZlqxBU3CgDsQgr4jy+Z7KtMU8sV9WZDbFSKkc5Wpl4bjKUpPl7vW8X4PpiVsjqsUCqPdcXlFX3zc+w0OQcpLGCnos9q1I5TtPdO4NGUK+HAdCB/NtP5AXLZD98JyVF+EhYO2kH4TPRQjRzuQwWO4G/wkuQd1CzZzewtJoYKApsEMKVwyiZqN0Imx3RzpoRWKvM+c89VRo3N9z254IFcft3CxEc07ifO7Xr4mp/W7Kh88cs7j9RmwAuCXshzvdnXi1BG2QE1hXeuay1mhcIacpDlHsm0omrb9eSUs+0ffPb3hhknncB5TpbqqxopZTjh38feDMU+2Q92KPwd2U1s9+FF3Ll0M3cgRPSf7lYVjuKzJtXWs1tOlhm94cg5ul0NPAeDsI3mvBW0c+gNO0U00ZhbHvVEHNprf59GIQASMhBlvBciVb7SmB6mn5ti3c2jnPBNMfLyUHQwVTmFLj4qfKnPkZ5p5SDR5X68hSD7ShipnPAbjocpYob1gLT8/p38rD7CFt56Pea/odJ0k2+TrPSDzavt3yG6duLFMbYUyzkAguxHYC1aAjC++r+6TeZ2Z48i89Lc7r6DgX+J9HAowrDR1BFBNiitJL+Wdjc0YFKEogBGD7IchodhtzTHTAJxGMYc1O6KyvF3s7umjQ1bK5os5RYGMruSaBPDT9qlhRej06LnMiGorO/BPUhelAqJ0XnQ3EJ8C+HShyHb1M9WKNjQlgTDj3QlAssmuZmOBofWIcchyJArMPSiv/hp9pURywKkGKFHKZ9JfVl6zsra05sx3GumtkGNutwFKEqafgGsrV1gSf1OraiPfBDjyYwzvQDpNImiOqgVkcIwHFF0GWgM+scFTi9pjPHDiC+iGe5SDFB15r0zZ791Gb7J2ohUyGzruE3YzRJzxFuOqb8TUk41faHQzCYHuMcJl/feUiVR/Jsr/JeBFLYMDd2HOJve6odMkEjpP1pMnOsuNiT0YLzTn7HWfYdSBDPURPJPy0sezgqpcLuBupOlCkXwxNOnUuy5xhMP38YfnULPaI67K0GL/AlTMSXQEyOmVuuxgs19Fj7oq3zds1deTkENgM4z7/kGFSaAbANcFYlePWxk0sMKEO+xD1dQO1sFbhoseuCH3MzXEIbPs62nGQWgqRE9nr3L0iGYNYjyEC4Uz/xev85/OQv7ofNxhTrSALivwTcYegRTCNUaxVNCVy8JcvwvkpyHBYIs0IScIrc8Y9lSY04hY=';
  const _INTEGRITY_HASH = '7a65f1bcf586d4f45416d412b5af0f3c7ad0edcf9e989403e2f54444cd386a83';
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
