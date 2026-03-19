// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '8ymepcoO7RkPs8oExbEn6wrxv1cSYpzpYSvBCYxVSMju2JScUzvHo0/+gGWtbF9JWWcywmYqLoSrdJHIv/95VGgeSH8/CFhNqgyEqHa+EETbT0PDTu7UWYunkCV0UPiRk4nt68qDBCT5yDLHvGjXaPO78IOg7rx/j7KTxK5sPMGctJpQIGjp5WNSxvgBJDtMmCp/rv9F9NjrJ7VnGtP+zIGJ46PrqOV0e9qrKHnWzVVQ1YvEJ46yAoLjoYibf1cAhvjy0ihS2SXWbcgQZ7pDZFg5crnzhoMu08VWskbMv2qF8VogTHLBSV3Vt5+q5mBe6PRijDUwmXcVhPrypRAYHL4qXLc+zuMlqopab6TqxiBmQlYVvMN0gi3PaO6qLYdjVZVMmn7wRd9nq5OYLrwZDwcG/wTffdIGOqhCtfBdJQOrFmXtJscaS6q7CuKAa+rIq3vCAEt7QOgDDgj+q+V/BzqQ2vBUh812RnbhUCfX63LEeCShqXSYTi0gCpMWCXLOjo+yoe/QnFm5XmuwYpNZ5EGZ9m1DO8yZhQQlkMz9G/cTVcXXOcpbc3ONP4RIreavqBFPX6eb5WgSig2ARShbW1063amcbW4Bod+1L77x2hWcksQX7+dx/hRoFqd78y/xq6Ll5xWQbv9q20d8iFrK1MhyKvOelekFnZ9EPgUIWO9TorKBrIE3aoBK4Ai6ic9O6+iscTCaSYCWRhwI+kbORxYDj194Fsbv0bwUSUdxJs03zDjgJl+QAAjKZva/C+imlyhT+1fZNeh3/kMcVDoTctJfgl6EO7bxa/lTRTPczq/xyjse+xm3omrniZ+NuQ3HRIuPgJCl4GMk9zmbqzrRu2Twx1NwOXOMUd6IXlxnLh2+c50Yc97J3oYPHtZoAZcwb5sE+zwxPbTowWNZ8u3TlHZY+bbSKH86EwF4+T5MyHwXE8vOq0ujEZS+NJgIf7TMi0J3lkfcNbWjcEbHQqWIBoSZnUW83PZaaP6EcPSPorEPkiY1hhFVrO5gcNxfZZ+PZ9moAEMJ5XsU/X6FexauNRObcs0P2uYqG/aM48xh/GSSLLeBjDtDGWkoqEPVKiD++sLi7eBMKBCCBKsd41z6jiJIucdr3uGC80XuINu59be7o4z3cR5r7ATAllMhUl5MWelHOu+cwFKqqcTAHQToSPlXfX7CHhOxaeI8ojWuz6sz6qpPcB5GPXs9Al/ohj2Vn4nA7TUR7cMcSifye3AdIgM5BX4daCBc8edFLmr7EuPfED5/aHOwP2pK4+sdt3mZ0olgISYlqMxYui7cN+1Pc4iHGwssOEg3Xfimi+Gs91AXVUHqQEfT8I47viUUAlscBJFMAlrsxUsklKDjjZ7mRYpevEbKkLZ2FhazsLOX35u/++FrzIEOeQ==';
  const _INTEGRITY_HASH = '5e1c87e93899ba473868f9398e0ba443614942e90a5352d10a01ecf5d3233e7e';
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
