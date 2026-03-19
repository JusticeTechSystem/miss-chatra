// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:22:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'sKnZn6BuzA8c14DAOfb8Up5InUYYgcRdoxfPTP8kggFdy6xsICZYLeP1NMzB4oAnGIzeyp4LCrQD4RfWu6bx8V9uu6Mln9QI77tXi7jtlmRQ9V/Cnfa8+VXmOIqoysG5MX37kPFb+vAi9KeGUVuxTTY7iPcwZZNn+0JOS0t5KAAt6EAKr72hq/IZW2sVznJ8NZZuSho+ABz7DtWpUfnBMMl5fHlPG/BzcaTuDlJhfO+OgrcOVfmmIvLhu1ieD2ni2DxFiuJEZk9Dj3NpuIG0hwCAAnQdQXcIfkD0LfqENdFxHPfA5OzphNRjjzd9wtzMIg5WxuQ38/ab83/7UQLxKQSPbL+YhQBFNx9dUln+drjLMYkx0jagN9OY2xH6LXCbeV56pRG53Qj/2vPIc/BdGQn/BIRCwg4KHpclJBPPgwdBf6ML7Cezjb66vJ3l9/JJTl4YQZ9avWIRnfwedQLOTrqGxfmN95cv0M/35AUKZmoIaCON2iuG3Wj+/uQ1RZAQwcVL1sN1yejpP5Jxp1g/HWldGAKHQ0MZQad3wYY6K5f/l1axXB22smubCz38p3KlyXfAadRwrQ2nZTQHVMODaCxYfZIIUUZaDC79Y6xtDV2gwXiTRlCUxIEynUR/6irsvz478683eLFAjv5bb3HrhhDb3jwbOyp/hJU5/wXEYtgpD+81lZ+lb7dPseFs2M+29mnHDgDdB175maTW1N9aKsmCos0=';
  const _INTEGRITY_HASH = '10706224474ff230ac2baa0e8af755fa27b0c6b5abb71834fbd5ebcaecab59c8';
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
