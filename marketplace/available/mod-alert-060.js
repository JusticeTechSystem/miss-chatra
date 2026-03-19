// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'YZAG5HgFdEpxl37AbtX3pBo85CB0oM1tQXDTv8bA3bgYFz52iOHsv7+WcX0eKdMImTz49Kxso1mMw4/7F2bgKhLKdvc0PmJwYeU3TIN8dZFEfojnmlnlJ1Pu3ny6rXFDIP+x6m/Yt8jTgqkdsh4F5otqm39GIdhkY+ScDoF3froIEiDA9xw6Njczg9zYX69htg7G4HJ24tvz0fWXrLw4YloUSPkV87TB0uqArQ7/Ng5Pk/cmkfTIZI0nyHBSO56reml9bpyUdgIx+f9OdVDE40k2z6P3Jjw00m5qmOwDY8//tnWuzyvgG/x5PL2CoWOoMmpnGEdaaVl9/82Aff9Byzole6zJ5kE/WS3BXJThaZ/CMpMQM6ntofqfQJK3r4/a0xGuRrFTf7zYjLsHJ0CW4dcRqTvrHV+uqCZuVFnGlcu08tz+NTK2cXwS7AANJIylPkELjRlw43QDW0BsTFedn3rAVTT2u7dAN8/+fdxuOynrxUge5hoRnJtzwLOM12uD5mFqPIZKMFWRoaUIkA6RqYU2iweYAxIUllEKNGcRqg1gb9D1IPRgqwxSteeSUvvsznMsXQtnMobFWMZyYIY8Cc1S2ApHkWNRT8uQdpfW9zhAZv88uQv4PwaNlp9WUz67BbZmQoYmWthk5US3BvG3uKFAdpIxPoY5Ytm69jgy26PzVzcA/1KmIVdOrc7Bm40LVVv88c8Q9nI9MTSGaLXHuGOFyvfvjaft05liExQs+2kETFcbAnJu98Fh/cvp36CW3ylfqjrk5ov/0QMNdCv+f4IpxJ9oDxr8pHesUjO6q0oETzF9aRSWzBoOWLZhHsAA4duDRMb8s70MCKpKCGCxtYtFshxaa6WkDmcQmHHulGTqHToAghkE+d8eQ6BEE4ZvN7jGAscv6ZsgYVjxkd3h5YUYP6B4pk5+r9k5k+GvLo3w+jRJW0lGu4dNsGBDkP3AmwG3+EjH9M3cYId4UpsFFYAvMLlVSIEAZwH5NNBAbJz9Rl7KrhvFfCEwWVeLrjj8BEaPabBoypkP8MDpyv+SoWKK5kl0GjESiIScOrpoA7knlM+asrmHVUIQ4T2xabc6fpergubfz9dni61KuQS5JDT4tMPBjMeZkXZnzQNlT0jDU/d7HzDTYRXm0h/wJerjv1ug/75QQ9AtqukGCgjx9786EdywQIvqPK1Q2juHAp/TGKhp1hBGDpwMORYz8KQljoKxwb6Uhm1XlD6EUWG6tMep1mSiPO5oQx/BMH+Hd+SiBP9Id+8QhIMwq8MMVvpJg0DjjUZt9KSSYSeSnB3N63BPfkHolnNs81Ed2jfRqG4XjESX6NN/pEqJ1rjfs8jMS/p3MBraih3cx7f4/7ieLM+ss3AUjwwfCw==';
  const _INTEGRITY_HASH = '65cc46f7719f985c029c431d8f6bf76c4ed3e9b830894e35a9f7f160557b1f27';
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
