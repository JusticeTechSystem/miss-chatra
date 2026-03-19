// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'jSB/hzhBxTBNqYWe3J8UIifKHTITlZC0wREyGi7kZoQzV2KlagJ+0PEAlBpfaU8kzjxxRvCneSRGKrOO6edEOoWqn5QORpbxVWKaeHfqQAjcg8hxPCn+8snqIIP5uO+/l2EMTL9bVv+o0EibrMGhdbmKigMPppK8lRBsnDl6XLX0pv6Sq9yBziNckhRT5b2Q0RvF52gv8Lrn3JaKAhHodowSevxBytoCsZPRQnZNWTvOUhh8Jhu39pfHQy5EfTeBDcSsHOdJFfl+5ChoQC6WcyzwbzNbWyGKbz4zAyC6CXfsWLsHwXISN6dB5p/Q0E5omJW3VM/9wxyTGqiZj/L51qVFFggVQ68gcu745HURlrrxN6USfVstnTjoxwpNdw48v2yiLXtcgKvY1aCw8QahL6HtEPLCve9cYI28SmKpXOKhjNVh4kUdsACZFY7wgK4KpgkzenwQIoUXTvGo5OZsOMobvpq3JNxogJBsbQUSbLsatp2wCm3jdZAbSO5WUO7zOfQpMh/XT3ryBm+ZOGJNPgJL0Apz1+n+V2DrAsotv1CXsqTBpLOLq/A7tm34LT0YR1FXklMLQYmCSdsv0unb5MQy3c1OeCoMHZq7jUc3ZUG0AhOxUbSqa1ltmN/sSbcBM0v4RpNQWfpaVi8xqaVkLHwCDtVLjKKfgeTG+fIVaAfJcTomjzkYz0+/0EvNAvqch1jFcXBNRPQTSuumgHboL/sfPknprOZdWMMhL5k3Xu/ibKHtJXq7vwaAH91fKHXAyK1dbQxqE60jDpIeuXUvW1hRqpgzez/WVRIFEvzDZgcl5Mh5HMB1NXp60MxtV7d0/Z9E78ADg3kTXRH8XcimA6rZ9NdkRmCX0+92oyrTlZFvX/RwCFz6ROwg0HONczTHSJ+Ft1PfjpHb2v+6GQxJ9Xuzz1rW5aeFZHSC3sd77Mg6ePEcqdUsxgu6nDRPycI+fsNAtcvdnKQErC/7x5GHJwfKWMR7tim0rdMt9Jw6+ut2pRbbkigE09dynL61HG6PGZJvissuw6k4gV7Ex6a2MTVVd1xndD9jcoOhuKtXTeRkyYLMFCGv2bQEj565E7Se8LOMA1INUVz/lUPdgpf79n7vv3ScwKuKSTjN6YBStgruZrXlA1qY07jcr6jtm3tvzrhZJoTUqMogNF4rfrhtfmKCS3oedb5iJHfdsDIjrfaMCVltjnRCoJSxQc+d1C1E3UE=';
  const _INTEGRITY_HASH = 'e7b1f940aa3756ab105a812431cd52ac837d1a5a6ddbcbba868e60af8a4728a8';
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
