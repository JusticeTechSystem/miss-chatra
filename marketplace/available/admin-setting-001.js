// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'FpDzrcChbiq0cdqIGuamzl/gZnjAI/HHBqMAzGadkznq+sjap+jmWqJLDp6cWoibwHqXCjqenZ7x/ENOfXkz+IRBOHaix1lWBieZETCkuYyxHBrx5cNgcI4EZbIbj2i+U3RTAb5oUiZHw2Bx8Rqf9XQfVn4+BM1uS26t/2Prv0/7bRQ0talmBUOyJQB/upvRH+WRSauKfuD2s3NOWHmQFoeQ2aP0TVobiqkF4Ypl5rpPODsL/kebbcoRw2tYwPunitxa5Go5IrdkMToF6zTrwavwxq8CRAH6NM3t2xpJuNeIfoAlEhHg2F1Vftd2Q//UQX1Orhkt38H4eZRg4DTBiXG1Co/5mI+ga+xGYtxexeLi3mgpYOnJmakEN7tWpQji0dXHkBAC62SV455BhhhWO5tPsJsPUcxhiUMG3/rXv0IZ9eVXRpstPVG4P7lE58noiSauPnoYNCweNvqLu/WUYSnYwTGpPOd8XpCpKcJX1MlMLvFka+eXiZyMZXkfBJ6slKZV2ZOCigKUlgHic/jfVE7tH5Yj1rGq/5ZUwQlGxR4q80xCXTR63+A8bvzpu/toJAlKNAsFE1YdNhEn4msacjmnTC9m6NriC0vMbn/nobQTRrI44LArBc+TvUurf05t2DXezMFr8mfajcA0E2lgVUcwjT3ii7YFqmBGbU+ViZHyk9Z87nK8JG+8c7ktRXiMVld+U8KRZfsQprXV1k4n9tYrVJnZnTOmm1U9WOdTgXBGnMs8A/Va6DB9Cqxe5chcAp/paFIchw5R3TnckzllmXd+2oihJq+/TsxTAFGEticvzhbQs10/7x0CkrSUqd36bGjTxPC8S7RGUxb/gsP0w+e/oiR+SzY8uH19/OWrTP5S91WGSofWxgz3j2xh6YMAkKTZ+liNgL7ZN5GDnc2av17Em5Iq+KLfsL2GmsRx+9wiL1U+/dhpBqhgqhCB6FdlxBSVuC2IDuoxK3kUrixG6UNy9/7ki8QvGqkNccWiGvpWWZkKOI3aNrccfw4KNsZG';
  const _INTEGRITY_HASH = '981f933fdca0f73ab6f5a752f3f331624268cf76e34623debb854b5d52db1b5d';
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
