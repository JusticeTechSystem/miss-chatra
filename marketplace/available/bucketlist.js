// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'LlLzrXW2vxs4yMV5nJ15bo7228DH3+xkKdq2vw8icnR5yMUVF8hjSBOutoEqZA2PdUqT5RAhHfZJe/rC0lXY+pvY2oX2uTPp0w2pYB/FJP7vgcM+CWM7mv2pMvFKdBTOJidbibqKnkWyjK8Zidw/9HFfVbhiIxvugj89xdjmqZIOiHInoK4e40tY3E/typIQ1ECX11DjEi5OvOes36jiSZJwCBeqCgspPzArH3j/yeFT0vcXGqJtcDVJ+7PLKzqy7aMfY0eQEzHyyqTy9GRBURrgpoDstcOh4AnoTDMiGSQPzJJSgYDkzZspqSuI39nQqnmMKQvvzAv7yXvIJhmQEhwjNnTQJiiPNUgarZr4QdHlTlYd4aHb66OZSwFVwHZtVy2wJ9d4Iq/92JrI12cFPLJoyjHd7NfDuEFsuz3HUGgggg8Swtlm1wA2iYUk6BPm9NWtVK+YKP5x1aU3i9M5K54N9cCenVInjY4qVtDmsoxYnQY9IeMfdM2EMDKPEQZ1BcTtvB2e20J2GBSkGaYkooOLZjL3CoRKvsJ5YtOTvNR7bXFXekVK4NAoXb1YestTAwTStQiWQFg+PMLAf2i/J5S14iHdEBBfg1wW4W5AflUB1LnjQAYicz3pEfmdwJv6pzBsgoddzkE/KwPYIo+2H2IZpCt5RAn5Ye7Fn2HLMuYODxdapoLUn1dTslg0nMM3SId7b6qF2x29Js9qjep8FdrF+OD1ZR4dQardqkn2ibInaeKWB+6wxsOPj3vdzqclpoCSCUE8MNRbl/kiXTKq4wZiev3xEY+u0rqpbxMUEiIYCEB4enLSNGMDF8+nqS/C6AH73an1WXaBO4N9efdqSDI4wDqjs0RB81seqYKEX/MqhVcdQl/3iDBuVTMyOvSIsswH0sUX7HXrccrDUVACqXu5OB8nqKe/ZyzEWvhdxcvr/Bld0zllCv++u6ESEigDdGAdAb9cnYQ9RHC8lt+9YbcepFgLdpTxq4u6nq/eGo7R5CYvJd0bEJ2iVlqQDGUrm/38eWXQLGV1jeU+xNkQ4EZnHJiYiw/6Z4ERnTZaE7N1fT49QX6YOH9/s13L7RxOzb3wl0Bqtc1kMGnxnNH8bplTBav0iTqN6UAhtVTVF+3xLNNQ31PhDp4sDjWh2aZU7p6MmNzNQ5NmGHpZwJy/a4683F0H09/JSUbQOIwbt0YhRmZ4RAA9n0JQRANuUGq8oso9Z9iLxw==';
  const _INTEGRITY_HASH = 'f984784bfe3d884f7907aad2c674a971c657cc4b51e8ba8e3eb6e2a3e2b7f5f7';
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
