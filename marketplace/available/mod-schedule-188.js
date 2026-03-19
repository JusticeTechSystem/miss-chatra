// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'ug/2WFryntRP9ArS3MatsmGKuj0Iw+Q/6F95gbtKKy3NMIFUwuylIx0KMXB6rZvvQTm+aiCcvcfwROm23WQG3w1tf814K+BdeTMS6Cduw5XrOK/iMlSGP87w7qeUbHLR+yPLlutSyXMlvxzz/zx7Y/KOkW3YDIbZUVWrJ4jDY9WZ5snvs5S2MJa3umae8QS0K/vLsQn00ySMHLKfmq1eRsaoFybDJeI8aCvL6bUtSBSn8vonXe7TqrjW0TLRj3DhsDZPu+7SCF7gqvoRLWUmRRPBhQ5eapvK5WY6qziRvETX/+B77TW54uvWuNvqC3Whr6e0F6KrrQLrrmfp2lA/rpR/RyRyyzBFBaZ35AeY1e84YYxubqBPoyjPh4PIJr/hjAFPPx99P0JLix6WbfP1OMl4Xq5wehAtf9erGHK/jm0o4hDwRrQkKAkFjrk2yioXtJfAs1durlNHbJkrdtnYoDnK16kfne+mebo/AVmpJdDKXYnxpgiQ8DI5w3F5b4kx1grvogDIH29rD3rqo8YGztcwhSrra1m+940wmfx+iF1mrbz6bNlYhK9PHx9mi4d0wKZhIYL1IyBlydEeJyBfL68Kb+HU3+yLRwxSqqkLkVrtLExbnJtZsZab80dzh56a7e22WUnPPdbYR2GNQVNAHAnEsbW3dsvcQ7NfSAH2ZDwz1wUQ0BRtVBetecqastXGWVbQO1Ztm83eIMBGmfztqf7eddxlYotmvAab+6L6M65uMMGeFuJo6D61656DRUJMGKIShY3p24bPuQfn+Au7DPVq5Vc3HPu4YSxrPMFqjPQvwzUExBO+gpGseNJs9o3pHO/j+/YSBokIKoke39Y8VOz4K/1S6krQt2nHAIguR49VPHU5O28dX7Hov1JIYYmjNFB6/jT2BbdMrsfBdP7pLKNIc4mZ6LX6LOyBLhud75w81Ka0oxJSFfEEA1N5YFnR45aRbrOT7EIwq/53t7CZJmUjFt/S61z3Zp0QfXFKitg25C11SaAu0Y92P18bSgQU9n/ZACpeX3e7O4KySLI9wA54U81Lif6Bd9oAXW+kdxR7Fk8eymT/f+sp3/Pj3va5R/ln4vqvGC6Qw7d9fvlFpOmnZqJT/I5GA6+VJ4AHtkYgwx1Li2ykKACfB/+VQJB1ZM6/h3OszFhOK8vzueD23uF3M+BWWwBku4jbW7USay60vHaWChHBwvHuu5bHpE2Lwh7rDNdo88wehJgrkK9hSBHJf5ZJoVQXNqqLS86wHv65aJOuDBBf60kt880Npok04JqWvZRGNGrwlxCJElZ0EYFxEnec+7bQYhdQJUx2+n5AhNDtKhqNjgzkCZKyCCI0W61oCugyiA545dKhGCrEmz5tVV0q7uxTv6Emh2hix16rKgtsEgwMPeAe6cHUaJV4Z3i+IvJBZt3d3Yqv';
  const _INTEGRITY_HASH = '3c92b104a50270ee8349ae7666204a016b9d8a8b8ef75ffb221690174cd4540e';
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
