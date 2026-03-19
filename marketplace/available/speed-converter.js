// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'KY3cJbk8lRx5X/v11C+E3DVBOct5GTlfNxkLpan8l9e06F2cvi4z9jVb+ofmzbvtepCQNvYqLP3Un5ydo0CjSZRf4D+/o59m9dmK3ouWkx+tN7InSn2XosyY/iHncUwS+TCST/6nvAATU3PeQBCl38nTxZ0/JYB3innQRarPKuLZO0iXpBSL22Vnfs2aATbLP6hrsZVS/nKNkzB/o5bo1+lBcLv+dsUQ7uOB7HHyQI5jL7eyIjUvUntO0Un8K9aqvrrpvKBJBqu4JZ7a3bmRk3VwZmhyh73zChM2liPPlMU+nDyJNQXAX1m3lECxrLm5BoTkVnCfc4FVfWYZujCe2/rBziovCUkhSIJ/qrLPCiRTtTwlGZWduOeUues9K0vyhVkQofGTNCsk2n2ywNio5msOp1rmrL0jw4twzD1sBajpIV0Ypk0UxdPogbWg0c3SkdR+9GZmKWB4hvHLJ2hMjwWiGgMFXJppxNat8e2UbetWCQ0ydTVZo+FaFYpHrjfWjth0Jowb1SCvNCBlfvzcD2MyRHlfM5h02NBJPwSJVEJVPJkVZOepEsMgW6AQClCLQtmu2esUOOgPIATIzd3l0/8aynn7GJG5yzZyUqE2QRarm9u0hUZVENg9Ipb6BhewkBjF2/b/71Ht7LAB2mTyv45nT/VAjt9VXucLDG+ThD2uKfyje7PiPXm5qJIQHshvX7lLzzHIjhIEEK60CnmLAZ/vp9y231wJ6/I6OdEvYbsu7woRpG+9tkVlhLgY8GAR1/o4bn6XDov73jDE/gMKg8BIUjQ1OZluvvZG8i768FWsKZpdQgoNlgOKnRlCdAQbxuAYA6ErxQzqYJpoe4akTwSE40MZ0+clWeN28p7OBXvHV1Jt+z9hH348j/6spXAcAbcexujPVoTAiTqI10QemTDZS2btxg6IdsPDhKl2eAbwvdKFd+A+CtObiRbbV3NdLtPUnVlga7pCVvWfLxM6Tzo6XAwaB7qKNYGl3BJ9ChZtnoaKrCbIOp7Rb5nxdY7g5W6Jlya4SpCFuCvk6lkArQiDnYKLOZlsNB4W8wt8PpGrUiAEkBy6jb3QMvOU7Rl1ZMIcszYVoAFwc60R+4OVcXUN+7wEcOl1/5rt7N/H6A4ItzeGXX/QjH8veJftvLnMZjY5SCt2zWUO3Y+8IAU8UDn3rd7Sxp0Utc+voeJhBKkSk4D2IFnpPDg8PF6k8zQsDaC22EAGxL9acqKk9vPmppocxk8Eisi7MYvy0WDabbcD8Tmew6HTjF/nh/S97ssc8Snl+tJtUEUZbM0VNZA+1l/X87gtD+SmSTQxf+Wc72+eZ5OtzdgQj5mTnOlntSbzTewkZg/WISR09MT4zl2IE/JOL1SmhoVCd6N4ndY6/+pWcrs9qWvZtCvPugT86LIUuferRSKjVek1GJ//d1DTmB2TGa7CMdcgb0gE2+bm7FRAmyNygoydJRmmD2w59HzS5lraCbYqYRDlB6mJZxLY5XeNBhSgeC0MwmAdkXms19Kk7USOtS9vUn3Bgw4mdNwOsUtDA6Q+FAdXEP+njKD21/xoupVbuwT/kpir95oqH8vf+ig6lEsdtKac6U1Ui+lnhtTaSJQQ+ZfRVHtYPucTMrW5co30qHy/LKkH/cv6u5unxSDSk0QyHsELWS6Y+xSYnuN7E2wHqBZwr8xT3mQPG3gJCXHGcFApbURMU1BdoxIgGUbzmP3TVvcXqg==';
  const _INTEGRITY_HASH = '301ce048ab54b83f260210dc3706d14d24049fbc9189331a648b2d46f51813b0';
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
