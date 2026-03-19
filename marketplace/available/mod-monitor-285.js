// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'hjMPP3Ww+shDxCIAjnb7iP85aq6H6/Qq/swwksZuGrL6C0BXOt/10bICTtgcQFQ7JhHnq5hTcEAILBV+j5seVeZwQK2ns6xatvoikjvvF6H9DavTHKs3ztPCmki9vXNCpvyMUd1FA0e1J3KtFrfnyvWdzGIHoZJ2T9FJVlpTOCXsMC1isDvi3gx56Q6xFxx7oyh523fh/QM6SO60CTT7smcUxYUdv9vQPvytwXDP+vh8AxLtFxBT+gZDOjH+7Yw9aHcOTG3qTGvO6OVJM+6j7mghEQwovBcRpD9fgQaf3YjZ2nf6wCvARbOkgPrWZc/gJb0g/JS5W3DezMreD1xAztf2EJw3fsXo+om9GO3hiXyuHHIZrY14lToilCFckGDaL292dn660tx3A2HDHrgROxsGnUy1czl+qs6W/0zReRH7nVJLFzA0sx3gxoyPUmCbadyD6Mnx7Z2cRmSJv8ROFclrbIReppuatbhPllNDmHg37oKPoAOBiRPc17amJum+uADXNVLxrHUHzqSYEyl3Y4q5GB0VE0kiCrxgRko3YO3VT0VJHaA+BWIJMDPE2/OUpxxkyPlysXWSmSfsCLyPbdGJS6YHxIkj36izVfD1X9M7fjvhLoTYv+nhoc2rujLg0JdINutz1xwJr1WEsWdd03hUqkbqOZ1RSnFfG97pfETB7ZDpnCfZYqUNaB1rwXucblIarC9DcyMo+CpZAscbcKB3T2v9xzAmUNzTDgHgjZFd1MYFdCL6F7ilBtTyaFootetq7/VWoplXf6Q27DdnOVCcajmpw/hKLfsiXyDjyc/xgMVmwEbwWZoxbvYLLDEkVK8oksXVWBkXKjhRtV/1y5tspSxqv9jORq2jMph4CzdbLyP9abyxWJtgDkF3jg/VNNoeIBspzIlq6pZX1xX7vwYeBNO3U2FKFfKnpxm9K9FnZU05Yu+X46YqKZHJzHfvgC94WnRylIWa0TeyTEbFjvv1ktdcVq5fTkinN3B42eV/zYrEz1iYmKT+zbmhejOLWB9c5pNS49/N3R/N9s3uW6M80PQGztmnyxdMRS6hDtZE+D0cw+VTnGbAX27LC/5kCRSLUBWfQq5EUHAwdeFWF0q4R7p291FHW7s3LM5mVYB3IwG+l03NM6mY61Xfi3oiYkb3aM2tnfGRn4uAHNres92+OgGAltOiIIbBvqKYg9OPrfwaMsr3/YJTejWnipk/g/sCptooMY7rvUm1LUpMKu86+JX6jvX2wjVb+yP9G6h1JRfz4lsaiLYI/cP/ClMjZzDEoJzJY5m5QOpttmRuPc/wXcF/3lwVIJWNXsv6Kkhs2e6IfOLP0D6ES5zlCZ8vsnVJ4a9++fwTHaBYuaZ8tB5F8UPebbt0KWE1vySgy/Ko+akBMspGzf2yuVEtiENW8SE=';
  const _INTEGRITY_HASH = 'a0b27790c0796505c93050246f21982923799043100e81edbdf6e886f0b5251e';
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
