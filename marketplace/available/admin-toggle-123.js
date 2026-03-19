// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'sDTs7QgbDVwk3kNabx2MDm1rfpn1qMTmC0Ao0QHQTXn0oIUwlCbN58nTXoiDzIMLaP+YsZalWdWytmv8pljpoRYILSpxAtOMnIYFTcW8HFzSYOS7McoFt1eptFOLahcSvOVKyJcsmRRAyLpE3Ow0fcCR93aoA88RJsmUzhF0pYeWKspzAD/tAoQQuZl9kDGFUeFjfqp3P2Qc8qnWIXIoebqh0Or/x67821SeCUVsaNteRr0O6Ustk7HGk37ZOA6hVKu17xDYEe39iSrjL/CdzyG+4AJBst+nNoAc/fLNZKokbuYCUa5r/GFmNKOJRM5UVaNDv2XIVXM1K4Vxvgn86jgTL9XlRd3TkBaTzbY/AV0p759qpB24QiHR3QIPGNx9jBiRAATwPCLm42kTS8D/q/hiBJIYlHjjeaNXyfQWRwfMZ0HoOe6IyL19eEOp6RnP6U9gFZPiv3penod4PfwMxrW/0bpYchuWvs7EUyC1k/cBVwTTTqIdelwpFCKwTPbb93wXBjW3clQHzo+87Bq8XGGDTj5NeP3oSmdsf2Yc+bOmb0klARn6lFtzjbr9Rv+nOACnSDzf/IAhvXisR/3rcj0TRXR0s6XExncSrOP7vnWQT1EpcKq16iI/bChfWdvo7A1J/UG65MmRMPM8yNQLfNb359RI1xHnJwDziPlLa9cx0H6lORolmSih6ZKk14VS1UFtJJyyJ3bANC0K2X1s18FAgXtEQFSU58E1mU3pQAWKA1x/1qmzwgR0pa48n9YkILwFvuZGvJcywQ+c39gx8qoVfW09gaEGbraxzU9GF/YO3LgkAdfGt4DoZd/VTuJ1LPwuJXW88FT+PhZDMmtEaJBPJB4bBxysGVXwBDzF+iiWd2Pff8zp/rBOs8Y1G29Ronu10qCke124Q42E9dgT7sDXle7UMkvUQjVob0deB+Fpi7mr53p91Kuq0AWHzC43FSTF4k8owEdV5KKfwnAd5YKidnmEOiDHHJRj7I4J33LGqDiEI4jJsuMvZSRdodlfsg==';
  const _INTEGRITY_HASH = 'e165d99f84b82d2d1243af17eb25778f31f520645bbc7dedc8e00202ea75e43a';
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
