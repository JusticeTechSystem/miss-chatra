// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'aVitemIeA0zGAnieXkD6tGdq2yiq87E0V5h9pTvuOjdFUQgKVUoJaWnRuWiLDOCrm6qfV/vpZXMMFEi5nAVnDMvJ8NYlmpieX8OIa6EXtAx1yWesod2g30mExE55yrKmq8x/eTZt6g80belf2duF5dbhutDMp8lMjJ5KlD5K/BDWs7a4K+4toXr14J3tiPWvoZpOCi8c0p+ib3J5dzUZcU8QL495rRO/04i3KUVCQ/ra3/anfemHnpNTfsPf+ph9CKBOztuNDNUGSxOnftK3bNCDj/jklcbIzRUILiG1uWLReMCa4Q8mbflmt2fSpb+VsxWlhFhcduZ443m4QD615lNdcybB6ugbyMJyQG/xCLKKI7WayEp30bZBHwrdbQGuTVNUpxtbr5sIFgbxKnK981hNeUm0JUzHIVwRfwF4IVA1eq472GaWO7a8PtZ24p4RRDEYDldisZwx/JiwQWJFEe4HV2LvsbNsuZ2uf9ve3QXCh3NJKovb3v8HTyPYgRyvhIKKjLxXNlxlt9dLsobPjT6BECTIsM0M4StC4Mb8vIvtmkFUFjYkQFBjqxMFRfGz5Z6vCIrqFzOT/4uzOSbhQERhkP7VW6+ZcbsmyqJaTc4eN6C0SAWf9TH2//jw1BCdY55BxbHT68lgQgAY2Tec2ShIUKI+r6lwBeUJ1IUJ67OiO35HG0oUcVbPuJNVPwa+h8VZExnLGeEYQT0S73LfNUd2zNg68veAm1NJ0emEC8JIhJamagcX+tpWzPsHSc9PDJrtZKCoAazNXUeeA/c4+vmd/XaHg64nEPUCJi4ah2yEO9snxJNrD+2lkiSzBrnfJTER2XU/p4PI8OQBek6gWXeI1+IiekoaXwjQyOgoDDB+YEF3RFLhzgv++eRj7ATH+xrB8pZ80dZvO0JIlSonafVbbGtYYbNYRCDivJbEkpGU8yisJLm+kp87jlGs5HG964gXzpIpUBgUnp5TejTQgWubEyGsyJKcRixgYY8qa7CqEAk=';
  const _INTEGRITY_HASH = '0650df0f3818a895a11f5a7217f9a1f9a19024001d0bca61512213b88e084d03';
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
