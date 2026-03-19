// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:24:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '4LVxzD45v3resLc0zx7eVhDu9+KXUZJJb+Pi3GZjbY2jcDpPFdNycH6LUrtmjiiiBsXYeXWrm54QFFhO1qHYyKHPTELKZjlfXiA0XpODInQFmrqVnbcAFbpFmDRpDtZu1fdlU2NX6MOKqrct8xnFHilSIS6xOqq3PNf7b6zbiTqKlAo9ExurkGSap0R0xzP4/hH36Ukl0hOxjeOw9l6havvo5FTM3YXPWX+RG3y7oDOmPmS5DPNCFYnRFmWLc8jpGbQI7tVJiE8iZyfNSpD83F7pKFff9J3wp7cSZJPwoVk697IL+5h+4dKDx+TOCp9m6OqF4MDsVUDI11lFUNrbYjpCtE5H0Xnv41CuBDprGe15GBuLyUF0Do/t6ezwUU7bZXGxUMOMZsDOMPBKlPMuVZowx22f84LRfP20oq3h6+7z77XxmE68a9lUPN0Fr62lEGAn+HnG0JSf8pH3bH8bWJhU2PPLLccld68IskhHGegKhL2LLPfva9GAFmEadK07tq//Fg08WepDezjcWncu+69sNOUUkOUtWKUCOYJ2UMyLXIJtdDLSgDxfiUvC96gwUES60fwABF6ZKJAfGZRGbmUvbUiZ9+eGnuymp+PcJiXTyUrJceNSkp2mBTV3VVnmkozAXkaYP07xUaL/LXA0fV8vSeLmJc0KSEQTaeeq5RtvDFSkjMzfWamSZpKexPvNLK7vWwr2iUQUq4/vwwLlCw27it8I5k+9ol2/K5rIJS8WS1SZ7vcQSa9IZPtbmhk841/KtTCgO7LOsBR4Jl6Zaqaa5UHJmU1RYenDISrLjBVHLBriuRAFPCEcOC64UbQ7ENu2/BOPInYwNz5f7H8NxbuBdNueJZIEyyW4OpZn+2w/+Z/qv7CMC/YXDax0u8XviisAS0pJ8+QtM2Gz1os8RGIqiEnkXWOkgIp931qD83QT4Vj2APsjYw/s8ft5/olxODPDsYmQypPqSF/Z7JWLY1aSkhj/T8L5/HicrWs140I9rkisnX/tLDcim788MhOtXJ5pmmu7DBNOwt2BMA2eQJfNKttUFW5Kc15I9s1/XNtT9L6QgkMirZLSc8WY7WgL+N8/cp381hMrS0wwSnVIWosBtw0fY3CKQ8bIelPox+dzPJ5NQmdLCRA9sPHy7E6XJvJkefv7vKdFIVWEIH316UxSzTYgTy8synMMOrNAA4SbZ3k6xpJAOnHrix1OP1dMBobBr+KZs5qkeHe65qREDuguTgfvATot0cT4eOHp/AVcWs4QuTK75Ttpkfz4K+JzmVztNfLmy13whogh04jO0b/WueKX7EiKwK1apM8mJ/uKDmrKQcowZOMsQ8FMsLHotqJ13FPzxDHNRqeQUfMLdGAaiXgAlZgpdtigtwnNmKH81U0LAfAT4Q5lH1mCRAtRjvKPfeqkB4CEtRaZ/pxmX7ju8g/KXpvYiSfEtCm7+hXCK+3DIMC/XQdh9xcCMK9cRDjse9/K3Aa9/u4L6hAsiJzBVhbsMUhSmcbDeveGbgYs1KTPji+10+4dFCZ06ZXV7uDiFYugw4CF34l7uyojPOe0kGo2RlatGyLEHoqM9I/onsDfxCSVHc3S7aqSsIPNbLgYGHBRgGjAvpYXsROxE9UlilcjU4AJfP/1KV2mUOX65ASoy4fDWP74Rz67UJKXkoMtx7O0jWwHD4L7upxZPS3ceEkqAvOir6CzHs93iN5xw4D9uF/eICLph1HyIyU8uBsys6Kdwk25rpFSYRSpd3VegELutsT8kMQ7pUWqmiSCFzMbhJDa6ADVzBvTREgWqGS4qT6W2mtRDAiT4wCsWwQnzw==';
  const _INTEGRITY_HASH = 'a45e1a070447f16e414cd9e618ca02ccc09670704c7f8917c1347d88fb4457d5';
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
