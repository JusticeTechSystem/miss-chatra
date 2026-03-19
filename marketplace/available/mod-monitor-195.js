// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'C3nyWMAcIpzKk/7qst543Rv0Uv78LBdYwg3/AHQ2l0sTHZ2Uc5XqPth8e+NwFvVdtcGrk9Qr3m8ADh5u5exLLejTLHla7qt8jJUXExLHdgRjVtqY2V/e9J8aT6f9S31jiV56hzDlc2J4ZcJpNnKM4tNoJG62sTdLyT/6iNdrETqxhdSBcumyQLkKZYeUqOyBNyQzTZP4IB5Xkj90WpldGIyREQ+QoQKQRld+cH4XG0V+isf7Wanh74os+n1CJeXYpFU4NbD/p7CM52gdMHblLC6tT+b4O1LxdSErhi2Jh3Zan2fkIyq7mvQRBhwIuqi8f3b5TiwkIZvSGhjiMoj+E/1pik4H3rw2EiMECqizMIyjBGitoS9t9uOb9jh2YqOjfiPvRrRzmxj2UWjhLB30KiXWy13RW6kwxCWSfH9cg7ltB8lVwDYSDVG1Cb5bywXSAohMAfhnb8et+hd5FrAb1IClUh4kcSnp01lH+VxfJlXbLBbqVJlItWaWCpBDIDdi5GeqHZFRqKKD5lpIh5aaQaIew+zhvlYmdM6jpNacZH4fNVphrMkqdm0SGkvzDMKwDu+VWtzC+9b4tUxovvbU4/o30SoFr5wI6RNS/yXNmGH2hUQHGzFl44zK+/6ofVAd9RL57M6EvH6vCieZ8AwVUVHJiIgIDMo0K/clnFcy3UgXwGv3VWB5jSDOVTEIWOBTnNGJZWBAk5NCo4Ti2fIEDD0MkylmjueJBVSMFU+vtq7xHXbWYLxH0PlwpTLtpfYDI13/0MWS8ynOmXKiGoAELKblAlJIO0cdl33SGTGXusC8qv1YJjo+m0o6SZBOzFUzEuRhemELT3Ze473a7kNLeS0vx54Y+Ka8Yd+a/31D+L0xm2Bstzs/I7lDTuHPB3r4ppNpuFu+Lmeidk8VF1qlE9V8Rm2q0YCxtupjNqN0o+oWSr8fAIkwMqoRb5ll4eL8GNaUjaxfyxujvSV5s21xa7WlZe5Bnr4KhwqNhRiSzgwtB6y3RieEPsitQQssb3aEYisTEnAc4hghmq28qci5+ZcoxNjtaBv3Df4mGGMFG/riAYSNmEmuzejs9RAlFeG79CAbcJDli3hyoiJZRv/4UNQkUFgZrIdLP7v4l05mHavUJFL4rRdPyqqtLDj5etpiJvQPUxRxEq+Tpl90CyBe9S0xqG5a344KQvoHzR+cmEllLLcQtUjwARdjILoA/9iKFAS9RsrF76f+2k8vSsAMWBy2Z+4RdTksInUIc+/bnLRYOhNlB6jv1y2biykJpmgyFXKYshvJkTa64cnykeqwxuO6EwmleVJQ/emIdu1kCC2yozsuOAR825X6g+zM/nip+/kLDtLAWV8CRU/vsxcjjPEMwNcEPYU3nc8p2Bof2QH0TyaGQnDqQKY2U9WmaxlNXYk=';
  const _INTEGRITY_HASH = 'cd30e0715ff3e7bc21ded5299098cb38aabfce972eb6b044d7a9f867f32c9e98';
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
