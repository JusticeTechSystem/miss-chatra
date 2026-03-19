// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 't+WUlbQguTIGFEHWDFNJ3BfjbSFW5sVWa86yesVOLkoOg1F69idc5OUjbR1MO6zZnWXoCo2/FMgTqweRiGJ+qpifjXMjnKWPX9JCgmAfrW3Uj4ZD9M/Bcg0fVmgATnkUOuEaWFDjxUZIPxEbX+x5qH7sH3suV7fjvXb7LlLP/gfMDEF6oGkUIB0kuOKEYpWjo2/7+i3CngzSiFBGgo04KKAx1cUducpe4/6yAbNq8w7fjaPskT5BTVJPk8HWHwpFosGFIPwV/9Z16Bzg6n001/VYxLRj69wiy+ci7D+cSiKdVKYwB9iebU6hbaDeguuf+jBF/ii0TjVBIDQGDnDmZI2B3gjuvyykkqUDcE6GUdCIqVGosSrohdasSLD7ZtboQ8d15Y8WBjXcya6bX1wK3KogRfVG0Xc7jVcfjt2cjE3eQERA73jvAMi/Z92USyB4QS8TndbWaAAIrTEfOcntl1WvPwUrisB+EjJQEXj17rjm2+Fjj05H1JNLcbcxhG5O6vQDRfcuEXYZQPWq+BWjK1/UyF2YQkCORgmWrYJZTip3iV8/VkbXS5zvFGNkWMBj/duP8OKSdvETrlkobRgv9Q1YoAlJROo83ijnmP8gZe6+CoA05p2hwI8mURiiHGNm0XRxL5yRExCSdzwERZv3JhS9ftW+wr3GD7tWVa1PnpwSSXgPuwkiAKGqs1RXaJY8lISCQGsOIphqg9DQffQgn3uY48LVqvqtZP8EOdSYkqVH1AlKt4KQ582K43BBcGyPzF1qwcHmxaDly+/HS25ZzGPLdBHbycp7sMVgS8a86cPQ5wfzQ8xXSAflrbcj7Tq/+iCK/ZkwT8bL2FM17EbKhCxZwEGJKxmY70J39MLRCb1WQ6fwnVBapLbHEWcHeBKkUKIm1SX3GMgF8J8HoxDKt2SWirZSfJOTqUbqwM6nzNQqxEk/k52xmWW6KAmJYS4u3hiTV1QFNgwb8nllRy8FP8rLx6MCEI59JV9s0EJF5ONtGOs6sd9SiR0AXmm3pZFZAehRifEA3uVLHVFZZq7Y+tWTRNuaWAf6w7ka3xMU3HvIzbiv1NpvHcAaVn8V9cj11SMLSSACqCVPsY73MaH/gyW/RsCNrdjwoSLJm1XhFuYIgwprROE939B9jxhR/LPMdHdQ86BIdUXljrNMLJqmJ4qJwLeaJNS0YFVgfKoP1k+5H0LZFn4JFom42fnl0bsfq4MOkJ/ckEi3VruSP9zErCgxt05OJHbQX7HXW+hVciHMHeSJXUZrYzWf8WWsT6Zui4EbbYBX50nIK7z89iCpr2JWOG/sBTuFVxRhqAO/Q9SSnZlw2/fE3TQLYRI0dI+RZ7kfGQ9Csvu4k+DgcehRWYrU0O0zgQvtqb0K36uaUHtk6JBBvRcWGosxGul5aIMp2cwTexfM79R8814S+PLzR4pGBUp1ARwi5FxcmjJ9IsaRMexVzB3Gfjm6G71YZrGPOJSCdkUgD45u9NB8eG8KyTtX1I3Wk5T0KiTcn1ilDrwfFtgGfnOa84zWs90FORpDyG3W/we3zWKXYtW2FGhe8GBmYHetq0ShL7KInkf1qoykW2yHyGvymbqOXDoYkopIn9SGFpl4VvdRT8KWTJgdFrK6nc/DE2KOJohFQEqIKkhU4vXAFvndl+jphniKR5dd8TdLDaTsYUQR19KwQhL1CI3jZltCECb1+BHrej5w4w+GlbF8Zym+nw/xvjKK3pmMxVe5FENvwSN8psOFedsLj2KfTc/ylA9wxR4I7iK0Zf/cQTmHtQGi7qR+POOSfs+2mxkVKRtBXew9pFrLir3FB8uUzFc2rz8A0hqx3BiH1hx9601fRxuq+w91USv5+iLzh2nIsu2eAPDlXIP2ie7DEYTor569wvs=';
  const _INTEGRITY_HASH = 'c11518acf9e3c9bfbd5e4843b7b0f7ea5e57c7e7386dce9472c2b40d73eb66ab';
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
