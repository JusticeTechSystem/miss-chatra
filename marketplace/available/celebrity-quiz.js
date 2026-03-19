// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:22:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'pGOrQwoRc7L0zEZp8u7xsHfgIBmjbM8Z+hFsLg9LqBs/8pg1X/8Z5KFH8R73kooFNwrm7/RVI97cNmNlvfs9tkrgFBPMpwAzqvALhXpMLKZaNAwd5hgAxMMVJ9RYF3uRNpAaetUycCpFkrR0wkybEHoyxcLtGPxXt9f+j55GXCF3ba4mfdg+gCTnTOjTBjg79N6/qZeGdbgYOErztaw1SOloXGdYE8T26GvgGgrfA0h5Kt7SKkK2j/B5jsakL7FlGdBH3evLK5hJz9Vg8VsJEw0pTugIZ4bBh6loix8Gk3PEBGIbEBEX4A7gr4tsjL3XZBRM0dScKfQe/AONvS5L44Ns6SDq0WV8e29auIXGfSR5CwWXfBnLxxZkNF42JZZzZ1CLyRJKmP7pY5Fzz0rp6EXMM/5+q/js513lHMTL/SaVOSAS3DD+/nJi9WDhk9X5ij8ryPjba4+vhLU9QGcpkgG2+Xi1xGMzkUnZubRHwQkou1lFv+Hr7+c7l1jOWFcRZ3xViZGxkt+xDmAvIOvYXrUP5lgOtoDyPC8J+HefWlDN1fr84sGlW+vOT1WpCQLqzTxzrB3g1XJBAdvFaVBLhm1YWef1lRmA7i1XeAnkL2HmTnJ3bazZ/6B9XapUdGZ8boAVdQMRb2EUF7pTJiGlLotnDWTLe+6er9rVhs4QJ7utJIanMWvRcfm5TB21+ujNWDmAWhsm0tgfDXmP4TdgYLTgtirhfYf1C5Xo9ATUGPxAatZK6IZOC5qOwyhcOQtP4C5/qcP/2Lg3v9k7WItzYLT9l6gLTORP5TRLmRhMsFJDapstApNYnSIOw23SPoardg4/E6TEriWgueVlNTATdOcUhvkaGrlm6rDT0l7WTl3Gy/v0kceMCIzvrikFzaikzV4gWlyM7FtKOFyWGqNFHSuiS/E9tUJZX5uinPWNSAbjLtVAdl9Ez3KkPEJ1ulbm4siO0DkRYsEAr3w59UDV4ybFxY9B5o+GlNVKu9Au57XkudkfsM8m2E7z6oTCKywBUeL+9wnKK5ukEQOK0gGlKpSdN8w6HvVOVJTKVxXrLb3GyfakUkCHQRp333o/xsQeKg8y0e+PBSeYGDohRHu2cvVw3zifS9eTW9VNbEfU80QAmj6/AvZKyVuHepBA5EpjmWBln43qNJZYQ4ayoQ3kzs1RAo3v/JOqAeLRHDjmXa0C3KqblAN/5dMdsby3sFkgmJIGXYJTVr+rLtDOxRa21LTRMhBqHR87J6JmTBnO6swBT5EfjvxPunx166Ar5fpLLE5Xsp3aVZ86jQf4eoX7tHpeporteX1gkPEfC+LLx0rs85NuFLK5TV0qlxea/bAZ5PtKCOAvu4LNO68vZlchYOsW/SvQ/OfzVeGKvzodLbMInXs14ZE0tC+l5d1WRaoVGZhjZySpwbdBsgoop9LiaMtmWeneTuZisJRM3PeO068=';
  const _INTEGRITY_HASH = 'd54552a7d7cffaee111cb23b04bb73c76d8de238151c247ddc2fb46c6095e3a1';
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
