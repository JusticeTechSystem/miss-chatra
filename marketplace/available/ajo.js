// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'h0Lf5R+3KvvDmWu+Ov5cNi3DHDjIX7j4Fbrm2BDJaraKaq2QF2PX0SdvlQKRT/7nboHyJG2YiQzOKnk6NH3QnAw+0uPne8sjd+l7bHvXx/APHrTDidvBuZnAORo/2Ki1Shm2cD91dKsykEylO8AKDNPwjfBXuMAwUqEUUGz7fABWQMW/Bg73Kpxazkwo9c5I8ELTQx0tDPSu5cgbBTu7URqQTtuW51MUpJr5dDOOBsBr7TY/ANRV836ouoSK4F8vREj/HWJJd1UtIO1ev6htd3kqFJITstD3MhxO3nd05e6PBDmq/du97aCiXHH6NSdahbsyZOU8M7hT4ihBipnEmtUr1BUIN7rpwT/4EtNgy6fHlT6QNdTWH/neXkzC8hhUZYCCeUDDolJWNA9qLiPnX7LtzTi+Fnh/pgNNLwdR6vHTaLcg9xswg2eHAFnjm7VZCmTev9aTzAZSQ72kOBquW5nP4ON1nvg5QRjFal3MQAP+UW2lLw/BUuuBlOWFUFuNBBhAMK+5ItRBzpWt83v3erI7za2tK5sQvpMzd7aUl0ZSQFoSqzf+V9SG7KphMGwFN2Vj6cn9f1uDYtX0gmFPYSuSir9LmOlty22Jo2X/uZZ/FyAbPn3unJ020ADWSAXfV09E0E+3mWR6SApPF8FygV2IgUaYaObatBCoG9j4EfhNA6m1he5j6SXxutm3EfHX4J4NYkG2lYq4ZvL5RKW/BNQ9KkHs9il/n8MHWRigk/82vzbE9y7P5QULOMA+vu45THjjz1fkmLVq6mLjsyz890w2AIvgP+JXMl0ujhD1xCVfVdC/E9omzDMjKm910nStC0wnj5FiaCiiP1caFhYQ3CsmAcC4RiRwflSd/W61gbjsb0Q2ufpFOepzV67gQltcmoOorqZyCGpesnDFPMabAvXQKJFtqu3bvNfx7C5pksEpD9qIsOHAngKO4GIGXsnKfN1+HSmiEJ9pIdVm6sO036CM/tjojGLwlnCe2aNR5iL1pYQmFy8V7YJkadlaim42B/i9ker8TFXHy+BD2AafZxdACKdD71sa4d8sH7yasr9a7Euqv9rfKmINSKllOgPMe5kF4W8EBJM6lzetB/iT+h0A1hiPF5eyeUvw8P8W55Sylkkq+xopVzwKio4dGVaiLv6/NGLnTjjgwSjIzNshNLmWX56oEYOagyAhaNQ3UmGRwUu6ziub';
  const _INTEGRITY_HASH = '546395be73ee954f5b16ed0f69aa3df94514a32a0ae7fed8e5ae9fee41df4f6f';
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
