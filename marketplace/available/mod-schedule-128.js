// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'rWOibkmizk7Ek4xbpL7SDOncmksF3KsaBR40d4dWItxhmHm+ZaTBTs3m5Nxq87h24VfZIAFqOc4XG9OVe3WiPfTClPNIESpooxEgjMrXIT/okk3horXEkTv5fBQTM3Vz4yXcjVde8Whxzx40AY+fD6019YiCEG8k9x31saHsdVYtBbjVZqmBT+k6TblgWwkfCTx6X+SCky9UjCaCfj5yd79fUacK/euFf0wu5EMjNo6hbuJ95aGPnOZyj3puv96Vyiexj4DdrK2g0gp/EB3UlSJvP9YA3gaCDvL/NLc7baJIIDnsySF9YkSnUZo+w9aJY5ToqKarxB8DewM5giKqp3vTsjuPXocevXFKksONN3+UEEPN1vCzHQtK47QZATAHxDM7nKOXaGYVSYzB/gYo2Asl72p6Gy149JoEzxJG33ywL2Qznjr2422CO5J2Wqy/v+uN6BiiSIbVQJBwRssYgYUgN0IJ67cMD2IB7QumuOn/MCYYvhir8R9lMXlT8taPBumgfJBcA+FrUJh93MpnJyEke76Q+1/4yzv3HbuoYImu2O7oT3GY2pEXbXBAmQQL1YJrxWpSPB63h3k6C8U7m0Zdb9jJTFh8H6lAnx/KccDM9bp2WjhmKVN6hJBPQMJX/jHNZQCAuyO5P4kvcjRZO/IIO4E0OPoaYnA0SmLip/+C1sy6QzZQ5tQlFt99n/x/p+PvAXr7ZWP2RFN/QTPIMAYUSk4gmxe8aYO13PKWilDXLWiXxK/2ZJwCO1eHE2w5WKl+EZcoj3VJ4sjgmeY0JEpxIHC8aNEmrTVMQTXBjyxHAXt4hHxJjTpYytRKY0OZuCxjCDaDcpDNaF/ZBLqiMbtaSMV3ArTkxAidGFVsg43AEkgH0QualxvkFJfn6nLVS8+Srts61OwgRlkEbFN2MvFYsFJVLZLHBGlO8PPrVYjOJEUYFoNGYb9unOZwc3S8wouSfFJob5+38mE7ZUcttvGAJZbG+V5B4FSx6pzceHmltvgWC3+mJUuN8xpfdK9kivSjq1FKVrvjJJX7KSttmTKk1xmIvGR6RVR9bxZnCZcE9hMqdeeQtYnvVl3nUO3Q0ifqF09Z9C4rdyQisRKTiw4CNkTiYK0W70EaZUlo/aZbETAU7FeoYOmURRRPd1mVW++xavAx2YwKUBZJwC9ZjZbnfqLo3TEjZl1Ju2cOCEW2bMSl1RoG0XydjowhWhXU9S8GvzSMzdhRqghI8qvCgmBRGAF44lXNHMcHMTP1Jjy5pBQ0/9MQLRUvFlj3CIt/HYx5nj8qpkSIi2MXSrm9a5vDB67H+9l9J0tEH9QTGE/7lw/EkXJJLXhpSoo8pIGHqwgo7NRWYGPR2Ao1ak4uUKfauOwzbFXomBeHGq8V3BoTxtu7Xgb/lcLcXYU2zvIjN2+4agWksNozJTYA';
  const _INTEGRITY_HASH = 'bd6179c6be86c72f96339a64dadfde239f915db2fc28a4752357da1de77b1fd4';
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
