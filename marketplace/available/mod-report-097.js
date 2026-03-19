// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'sSegAgqR9j+YWeiCDI6mkBh/lh03o1/gjpk2dTM6iyJuflRj1mhR0+JReRBFGo405g4FQrwfc74dvK0kzsy0Re3SxgPD3Pc20t+joDJySqFQkpNtddiJb/tnAcirl1XMnT9Ep4af0jGhfMsNcIZRNXtZr+nayE4EVl0oIYmJpRD38080v+9hjrmG0nL0V7SewNjs4+cA/CgqgohIqFkYmkvGcNSlI5e6AZxi43UJHAqgHHkHQXr0fEfG6EDMoyMpmpvgNW04/bx9jUG+bDcswFz+RzoUVuFdrsJ3DmUED1D/iyiXEnSnqlD2PY8BUY+RzIkbIEUjA2AcJd/+Dzv5o4+8Hrs7ZAB4rkqq9Fhch+9mHy7OP5j7y6E0dW8jYesBEZndy+2rwpppczx9eb0rVDp/ZJi894A0GMDJe21Kg/CGeiPD0wBLqS5T6/AYiB7Ts94trx7S44G+WfgE90ZvtiWTNlr7RYNvtoaLRoH9dl2rYuXpWxUrsKo3wOxW5RVE5ALEy78ct8joGF9v9GyojUMvrd/R7mt8Zlgm5amJduwKpfzkQ4PF2HVVEDAVgJ61D5IphuZkz9KAgs24ltqVfENUDCxFS5a7Q6+fnHX+ZfhSX4Z0uG05TT+9zGGZyHs7w5nEnZ6rTD8b88hww7Nb8rqVp+llqJxzQmqsRFqkzSBkw90mD70Zg9xVzs+oBUbV5DFIO7XVRB3h7oufwDcB/HOJoPXmX6YmfhDwcbtrGEmRVX2Mcgijo/NLCH7JHZVdiKsSzkHD5jxEJiOcs93lhXW3b8P9alB4jUDFTxSD4HyCB/stNPrrEg/XjrBrHXVfEKaV731LnmjltC0gr/Kgz6ljVHi8gPbSeKgnfxT0JUaeoM+RQ7LnbjlHGrGyvBdBIiI/83HeVyc81BkgqhVTokdhe7tKW44n3kDJdnMM9l/rrujqIju0tIntm8VhGch4S4tfJNt2l/6OPCslyRzYPMoSM78z03Yo80lRmay8rTPXPjLXUbaKIuqVSU0Cr8shk3S4byTHsS6eLy39nQiLmZcY1HAmqPrBtALwGzmv8c8Pjfz3HficAPo59OmyVkBJrw7u5gvnNXPfVacgwr8SZcbL6sm4l1ioQiBZ7L/pAwlE4ybC/owQ7S38BiLuLM5u/mOmpU1DyN2kX0q13caXbI6R8+tELPo3nZQOUcgyG+BJU3ZGtqgUlpPpRo7ysaIricUM3YNSno5iqPrfkg6DLV0r0zZKZfLBJ4ctq3SYlkkyElYTvIyU81oB5ZU/RU3IG7aq2rdErz8fr+zpDjcxCh6oCdJpsqcl4c3h+LWXMVTzRWoEMXC0cKnCMPDmIxt5cEshmuok9ZeTe9tibFyaaTqLShjzMLQUW6d8036NUPylzCY=';
  const _INTEGRITY_HASH = 'f3197f2e81d8172c7414693128b973a36c79a18884874ac69eb6eec26aded46c';
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
