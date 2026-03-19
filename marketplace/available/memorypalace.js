// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:24:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '5TU1RruxEUKF7inSlaxXMIOOHXwkb9oLAkWTQlinXaW27jcDSA4fi4IMgNdImAYDBN8BU4C2AvzOA+WKVt34b07YD2Jaqjl7KaZH2tTdhfli0axI4/QWxwEtpJttXOlVKPWo23ldhkh9eSic25PWqDNv33HSWbrI7k1WqfwHoVH/KfX0L+sBClttmK/vi/iAqAFpxSA6uWsnVG4VwL9DtTO54ahMQ28WTQNMXt17gPQsHjweQDbYi3JPlbgr1oFZ8u4OzIEh22np19yh3kZXCne91FNq3T4QY9QDtqg5OlVgeiL6GnzEnjotr7f6Ju0fPS2E86sIV07wdvQF3upFL3M0fTjSm6ULTii7mNc/ZEPAAAP+Ezsmd8N32aRGM6cV8rPXpZ3+9Me1thvfN3LVPP9ookA0SrK35/ZfeXX8IhrM4xuVK9nTsqtQTN+BnLR6Rr1fWvM0eMUU+mL0rHDXc2Ibq9LAinyNdW7k66rEX/BtuRgvle/1CTXbkvLH6/W9oDkPtqoqH9R8ZC4prE639U4B3j+poHhwRhi7YpI8hHP7oFSwoeiyuiZP+P92Q64BBvEU+PAxwDkBAEgBlFhn64DQ4qudvLRPcmpA6SL3qcp/w6vxlpVy4fEE4XJ5i7RKk6r7Ke9YcQud3sr4oW38/HZLNaWn8SOAEZ6C/8PhtThkHUOjplIwtHxOawRlx6hA1LsceWvMbsPM/cPEw5tdRRSKIRQ8JCk/7pxZOXtG1FNyb9HcTLk2XmHFz73qrE0wiK5oScWpDKdwbiH1Kg1AfXwCkfbiIJdMtUEmIjF6RjP+466eRqMf1y7LMJbaPZYrq7enlAv6tonZC0Zn5ud6exTMqfZimCaur6St3efii53UyC1T9uw8T0Wx4ftw8Asry/ha5jOf9jktyMWXwpNkpydnrcV3w+WGc/7fTmEMIo9fyXeMALBLDXPF6nAGm95yf2lRbLqW3xybtXoEZigNvCVN1xiCSsK2hW7u89AD213+CvazropHcP3E6tDirfyekK8Fgsw2roIGVs6ahGgQSKk3N62qCl1pKCJwG8c9D9sz0H9vFRmeRFP9hDAlyi2xpzhnWGR1lFp3vyqChZ+IJL+h8C8glcHSA+obKsrCwJ2hi+mqThxsbhfTgXU8Gde+6Xpy4Ya3hL3FFEv+mt3RuJEGc83PNdwA90SIICJlgJ4m9G8qLgdx/HJSjYO1BSZ1sOjE4KUHaR6E';
  const _INTEGRITY_HASH = 'b0269a02f411d0dde91f881f6366b43dfcae2671dc209dd9972cbe0b5af4016b';
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
