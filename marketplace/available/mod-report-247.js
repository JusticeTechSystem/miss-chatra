// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '3BQkr5y98RXe/qrk9OyHtHPmzGZRLSN/mrdG68nVjLdUFyPSJv8NBAiShT4yT+UfoyqWosVb7e0XeGDmc08zl4iVNSI4wsyFZbfP7eTOlJG75rRQcDRuTcakadYiSpKRlR1aeSNtoe1hA4rX1o/twb0A/OcAXhkn1SANSsSB1qK640uM5lVsU6HjJ45pUYtpwZiHHS0YUUi2H6oLG6y3S+dijVLGwOUanGYhpifXDD/Jz/MBzCC9KuAUwzX1F+e7x3FaVYpAza4VMxQjKCZqCRvZTWYEDDIVudDKKTlyiQ79fuum78HkJbX3Pow6taltXe+qLxWxCqfo1zGiVm5Qepg4G+4uZ1BCWga/2rR81EbEmyW2r0n0blLAHw52zGLNEbNVvWQbRGlNFvidRPD4x+XJmx9UohunhaMmkmrRObLHSfRT/8LbigiTTh+c4zjtydhiWPfgQwEN85FkZ+hJH+X4UfZaMhvUthDRtenp8/4+97kWmt3PLWiYkighg2hkXIDue/P8J6oVAsZIhIiY4fsSyZcvLg3lzBnO2Pu8fjUnvQ6WYXEmudSL/iGOGJ+MY8XBdfa/wMlK5OQWiD4dZxpixKy5PSzuYYLl8la49e3bCbGEF+ESRALE92CKF+167pDJwCIg/L+rw+qe0LPtBj8LFBRtKY9rVDNnWQwlLmU0rbqWFqdDKMEcWBcug7Z/mYXAHaTVmENYimQ/mtxfSBD4y70hU7VyHhBmVu4MUtXsvZ7tZNaeX+6ejcbO0KFC6QbTJFnTgCXIkNoVDhT/Zcwda2LBEpZ2lXEZOBMTRs1yiksi7++DP9k6r1nCbRfjf3qH+2FG+fbYRheJPfQFNe112DUrsZaAdwczoqRuGWjVI0J+wcwIKXDMvnqmEzorsU0x90jr+k4NzWz5S3PD3tBftMDVKMSIOmy8RR0UtUwa6FKy6JwgZ4GR5fv7f8n87RL+kSBAPCMGmRiJFFVReiLSUFSuFIoTVbAa/iEhHNsk2qYXFF8o60ULn7tslEzOFPNIiE8h2LT5Gs6eZEKmvPmQEh6ZwmAwPz1ilqflxYNjpti92uEVtdjk6sA8CdEO84Eg5RJLfnqHI3OAiSCDons8BOoSY3OqCdoVlEzjohewu5hUEEvD1I/vM5+ZxPUmk3RnZsPUAkKsPscaoZiAcKcotJENaTT5qPzq66/dVjMx+LbjE6wepgR5+ULyGDc6pt4dczBfm9Gmxd3/p1zDHOfJYpCFWeth+J9xQwhl7880yt9uzD641WqWZn4VLlMB0dhkVGHa5/BeZU82BmYyjUJAnOzJslfByiwM7dpT6iMQbzAEKUfMk517bjKAcsHRZ+II/RgxgY3gMwARdx5rYe6GLZNU3+MDHL1CXrpWtGf5+t+R994/9Q==';
  const _INTEGRITY_HASH = '6dc096c6d90736e9b6b907f7c01ce4fe530dcc5f0c9b28110969cd2a2136b860';
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
