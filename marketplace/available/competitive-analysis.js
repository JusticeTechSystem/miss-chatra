// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'F9ZCpI6LWV6RxtqajOC/ODFMdDmb+u/Rup08D+7oABDRFhAmlpJg+MYJSI6B99JSzK6PhoJaeF1BUcRM3qH4KRukxlJg6tf5nQSwE60PZgrZjSDqYRlBKKeZRDVMK5bRqSsS07ohHzTM5kJuReDAa2fzsHxqL7Jpl84aTogkehEAD1+JynLT2Fva/SOTbX5UkEmr37cXb/is+Oe0Ukpeoq2sjxe2wOMi1rlujf8lzHh4mZxBdBsFc5givND1zaXOBJSCXTk2ghY+QB1Q9Bz2C9+j1hnvad2xfoApAcKwXevnw+zWPhyFwiv83LGC+cXEfz6ql8UUwxR2U86notk6D1loCGjtkr8wCaVxkViuVI+g3iO84PWVEO/15GMhkIDOmpcKnqnXBlEAcyVsNDIQmwg8SP8YP30K4ipDUFgl/mflInAdC7LI8q+eFHYgSFpGK7Q9d6PQyX8xk/MUhVf120rBvyJqM/fBhtRXzATpwZXWKpdBk1SWA29HivR8RZQAObaPfdWFP3xRFb8nSq8KWigB2Hv9WhvK/By/AsAN77NaFu6Xvrf4aYpHLrbe2N5H/fGOx3L0eV5/ThHF4Q4EPTVRiMLzBZHzZFPVdwlhmOQ8ZhV1NYMpVSFKSL335TpRTx6ACFV5VtyvnyXCloDY33WwUi6RsXmdivg9EeZXV5R0Vc4BoDhdj707Jsr6+Wm0AQEFJbTAXwixmwo4ehEMxTWW8UkFEh6Me7xAy3lCCE032nE9P2OY9/ugoU2szACvflHdlzbC29xNo91dnK2MCP0cCjkCUdcD3WzqBfL8u2UCniIL8dfYjAKtAUYr6zuDXh0QawU6zux+SwRSeb6HycVe+GFyFdPuyx+8pvra1jq/UTX/s5nCsnlvD/xq3uWYejP59qR03XULR3YNo0g/bYqZL3lnGDOMmpWeJAbglIkRxw3l5bgsY23Rnfr8Aerpj6uWod5Wyn3fAv5G3q+/3Hx8akMIJJeX8grMsz2SBefG1palgH6G1e0qaA2Wmfb9nBkxPqjgChRNmSBRqc44l7m5ogjqSpL16xwNk09W6DV7z/hEQdpscxZsToFyn7OycxkjuA887DuHveP3hTq/uPkw3R/AULccuHvK04g4XBqHwCEt02rmynOZcJvuD2JufriK6ryvuvWHBmy5b4AXOJX1PBjJMbG1wc2SdKaDXDsutruTEKuBLTXS6ceTMqmN42ToJewJ1gw4/lSMhjaOsIsT7gpV1xD8HDwxSGucLhPXI979HO+EteqaLUV4Ff3XuAKxlwNDUbVIygpkRsN7jS0oq3ENJ5Xa8hh9ndfKruJmxcL0W0gWCqZ4bUKBT9UyrkPN2i8VcX7SYoWwVoAao4kyGo+Y3ksf4N6oTYwDRIjcBy8jPDkb6FA9FxOVrmBNDgwRDylrbse0ooRv5kocykW1Y2psJZc1sPQ0MXkz1I/EGA2arPjgFNrSx6lNqO9Qwt/q1MLraJsBN5cS9rX1EREt8IcOGIpFq0QzssVaulJjsIPXGANCdd3TWy6pQmKptcfNOZtik2DlPlXPRvrEEJMjcBIw/oWdfBSPo4TLefKI8D2BMxtSJ2z1QZMJWt7jT7LDHJQ8GzvYuAsOwgq8wCLIrv6ia/vtFE0WJ/QOXp4PzlNayLpKBRBgkLqxa+LooDjTMV0lcV4utQ2GA9ThdtjO40/SNhdxfUd5NfeWxwa2CC2Ua+Km3UzotlCOruxGWyY656sptLPDg7PotpFoyNVaXjjiOR57LNIivLThP+ldKa9FWxasxA==';
  const _INTEGRITY_HASH = '9dda2ed705ec8f0743bc970998194a7fbc3a714be769d9b45e4a65e3ee9acc4c';
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
