// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '2TTtP4DR/JT1bVh+SnoREG7PIoOiEQCze2sZhvKLCBzOLFQ+fZuV930sZGR3k6uS6Vk8rG/8QeW9us+7dQgyMh+8/D9tuY5OaB59BFSW3mHtCxwkFly1hadUfxctKqrDvdzpr6zOe6nIzJpYTjLsu2riufF+4cAu4ylgaWNX50WFpdCxkQQQ7OCx7VIY+2dw0JOcX1TzkM3TmLJUmxH6PLHier7sNaCXJfVUHoX7DHN+wYbBFkZcUIxwdpRcKmZe6+rtm5u50DILxRT/eW1mu969kKpZ8aKeTsgjoGDnOi6oPPJ3bR8weqgKLbeNdbP8ZFdnIpgipLWJF2LyP63UW9haT2x1rdpc9te/uvdrfazg71php/uD/vyDtNmnnuJpGUyk37i44RTnoexOVUfhC10A2EXYoN4dhqjVWbPlmiaq1e6jISwjwgPEbQh2UsPknJ1rYzelHJF5yFD/rZsLB36W+l6Ky5/Z0Hya92MjgIGMMnGOtwgbcvljwrPuk4zOfJq/OjmNMVabxs3J3CikqjLZX4gcuNUv1BRphsYUWQEvZe0IgmZ7WapZhxpJUC2aAdJY/laFK+lJOklW15gdOO3E49g4D+kEQKDlFj1ib78Zpg7HSOg7ylKm7mDQWFAiau3ozeM3SpY75hU1KdaCu98gK95iHKLB2l/lH1e/uK00eymDSXmkhVHlZhhPOI79ON4omHZlNbn3nKfnBeioT7fi/UFDoigdW9eFn170kfiANcJdfOyN0x0uVsPNGlVO8ZkyLAqLBzeTCyVaKqvWoQJG5QLka3Tp4haP6CAbv2fbpa2eRMm2jCbLsWPnlip/wtZRSoJU9LRfscQ0GThYto6O0ZZFZ4GPnOsCgRRNi+tQGhHI8RyyN1Z2b0LKiPGFzsolb2xDStzM9aML5SoeM7XPHatLhyS1B2e9xGQ1BbpIVngzHt1y8ceCBBo0nZhkKnrbFQ1MXH2FbieJeyPxEsHUK6a73nEoi8kwDw0zgXRbDxbDmS5xW3g+NHyZ1IyXQqhcQY/+Dvh3LTUIuxO+DSgqdxmFrbAWC1x9+ftDOQ5wzsF+6pwnX4I6qHN7Qfcb8Yt8In4Cclcn5S/CVLotqYXvn6lLqr5DuiruqDui861lDSh6R4Exv6JmGee4gMIGQghKdijHTAlkA3BExEYin5n5uWcdHQqbOilW/K5ZSKwu3oFkE1BYv6IH0RkhQRTfykrBfe5QzAm+xU+VHoUGK1T1Ycbi4rO+GxflHW5WX0bT/6kcpJIYewW31/C6LywdIId1NUbPNeIf+leElbGT468fam52l0OdgLxIo2/5FlfmE7GqrqE41yIbf4m6yeH87DyGhBjsXv6dKK7+FDOf049iC8q7mt/BHPwK0V2d';
  const _INTEGRITY_HASH = 'ff41f80b49923234ed38a003076f2c79d6176022bbb7e7f84d6279b9f7b24a82';
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
