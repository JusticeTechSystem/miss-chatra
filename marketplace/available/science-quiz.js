// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:27:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'EkURK1PYsqa1kErPM0oMrFv4wHofnsaUDbXT8ewLfWS89sQxWBL8qSWQNqgguQYCEx3B/VagC+BfIfL6PZjhXfNpWthUp+FBzBq3vQvRyWJ1hTFUD9wyMnWD7fqz3u0hPQ86hurLioZcCldnFHmlh6lcXVjrr8xajLELeO8oJVoCeFC9rveQRTSFjo5seV3E/QnunT+MP4B+13m8t7lhOgwVuu1UqbvM+wUQK0cLFWwWv91wKWQb5YBb0iSyXPfqIyMQVgTu7zuGfm5cB2rbDAADxpiaOqK3yUPQyiO8aQueAHrgyIGTDDYzO/rE1977Suw6MW6KXWu8+1943Qr97rvlmsrgbvKKJVs/Li2gP2lfF+3APeFk1TBvAB0Gm+SWejT6+Id69pKLt3v/89iugNgeBuMvSFG+Oc1jYD1yxovg2Ewy7OcWFzlvHJ+tnr7uz7Nr3B2SMEHCwOEVwiVfkRQHLbmk9U/tdcUJbd4sgdW6EdhWxNZIgmTyqGT0vFUxLqjOO8n/s1KUd2orYXIpMwDgZO192zLn1xSBgGJb+mJjQ2RZL0MYZ0TSnjJomBoO6OWMzPUtk0aTezRgdBnq6xo3ScbeAZN6xJdnVdFkT8TEdpWZWxZvIi0DwhvFSkpvD0N2A9A/NKJHb95FSgdpLWRh4CfVCBe0twSBCSpMDrWVY94LVahaGgzGvFgsVjhUe1Ox9CQ9bN3plQTZ6CYylPJLX/XyPRs8t+i7o8XvQnd90ayYjEC3ZcHRcKqCBzR9+Udk75m8YqEcDDNZO3cebhTQxSEGMsU1BuQCTE7GkojhE9IfUGjWaom5ygsQOGzm6n0dUhiXB+XZiZf7vahqcfPG2uwzuxyuMu0RPkbn2mUAznxYTAraKsw2nSZ5L7bnEugAARXJzXr3scCWpnO1mhyxZ5u/mq7ZDyHpCza2JAQU6HkmyyYx3k+MM78sslQC5aVzczuT9t40OAWO6xArm3Gutfy3B0ukm467wwdnROnxjXiBtVf8KaMQTyh35c5DddNnOw5H5ddzAu+Y5waM4rD4i14l/pDo8QcFBbIXdQOWe8LAWR/qP7GyuFDIiSZuN5o230Y1IMGuPba9UQTR5tN+QYxlcFe6m5sSz3NfHwGSQ+iCHEWuZIW9fs+L2inOCrI4zYgUXb7TXRW3Q/9JssBjCC266uZrPkwytW2LAAXs3mQnZXVqF4KzF0bPA6Wfqq/Us4UhxyOP4TSKfnh6aPxyrs/+BI5MOvbydN22FeNuIojx3fJJHeaBYEWup8eu6P7k/TcEdTxIsQRnrIwFFJlsTO7FJys5C+HNnyj+35Oux9/GSnPFItfyBaL3PHw96igUvZoXWzne3JhHDzuxUWw6Sst2T0AYBIbQyGnHsxOXHVGu2RBVUGOtnAaAkaKm3EY0RJM/mrj9O/0XqgWcM3x+juUJKOV4MBWDQc6e4w==';
  const _INTEGRITY_HASH = 'e8d9f5c989fa89f420889bb956939ce0bf5f03378f2ba740a34b2b689014aa57';
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
