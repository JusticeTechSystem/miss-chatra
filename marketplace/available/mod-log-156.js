// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '7jzSXVuQUIuIUVnd/bzUuU0f9U9gKOVoZatsEUP5Ax/D1DZOATSWX6DT32yr1B9gBSmzt6DkTgXG4EN70SlKXrfoi6HXG86cfZp4bc8W2M02CywBuU/aWZN72QuchrL7OZzNPfqCsZNY2ozjXfBmYlsyL/SbA1xg9b8i7QJVLaqxR86WwXQ8INa1VUHxhLfiBtw7JsDEIrt3ezjCqSGMKxGkAyvCLjITOYKxP/Jcfu0A9ZNuMxT7+fi0FFP0iJYTDEpxYLWB9/5wkXVQRDiAMo5vMsKsp74maRNiB30xT77/JJ1VtwjRJ4uwksJWVFs5hI0zpUHFv8RhzNv87cnTSzlhiGgiFdpEV51cNAK2STJehv4wS47ZWC/4fjXCLp7rAYXZ66/OMON8pKepsh2O0bfoLNiQcCeSV71IX/2zL4NWYOOVp0R7ySywiUnhizX6K5ftfcums+EAVfd5f3DmUXB5o3pyBgizhGvn8kzkBAMZ7nrpklmyi/47KLP83SwcPeajXt4zqTiBFctOo2hQAIoKVrF0tWnNhmmju4Q1jCG/IKNUKdDKXVcyOpaYy6qda8Qn1nLAtOg9QspHt20gnuD8SZBuFc8yRT9rLnlxb7hG9wg12EG9e0aO0m7Yo5CO5UrrTAC50wClBMp7PtLTsFqSbj015DJ96nDlA8MVe/MhxCpJA25ddBrVWbEMY5ed8Vh8+l3tAsCo5a0BlvIDZWXm6cubq8ft5gAy09/SsP48wCtHeaPMXKYmZ/mc2c2duMXNpeAwb6y4ukshmjIZfhW1bwIQ1ge8JFwAp+RzQTXCyohXuEyv06m11CohGg2i6kmd7aNBWjDBdYAvcg1vhczwRh9BScj0UyRHPdPB9UaT9woj5K1n3XP6ICvGFX6GBVueSgM60HExKuix4/rvwCAhjqDa8RuzkwkKYEig6Tgpd+NfWTshfjNseX/q+toloXIRu3htQSLL7SvXVWXXY0jBzoiWMjZDs8/gjK3irWzfZTmTrQ4Z+6tqQR9Ual5X6kmUS7ipMX3+cIJn7ROc0kvgu8J4m4QsB69ZWeEhmC3Hb6EHdHSU8O+SaFG6tD46bbH15524WUqmJp1jqBaFFUSIhzd/1nT+s+4bu4PF5pP9qAOcHxXZndtVKrBNe2mzh+U38YfZrOT4lLF5NvHE8KX8gkDDUmYj8S9VvzD6VY1MeOtwmMLYVPZNVZuY6eoMqnA3U0xNjbpKN9VAgyu7P1GwONNx/y0jJJBdUMWtvH/CPc9m/O/51Lo97jFnipo8CcbN0Uq4NZ5sneBTfUkwPfL+4MlKP9hB4W/PNXgPyjGT/gpJ6TXyqQHlr9v+iMFMfzOvRpMTJoD+Sg==';
  const _INTEGRITY_HASH = '7ffcaf8e694078bfaf38d17ee9d145f94a2e35a0cc098f41314bd1603cefc6cc';
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
