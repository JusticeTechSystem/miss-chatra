// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'WWf4X1b/4CW726Iux4fTma8TMqU2UR4EisEtFpcMYHXezsUlWcnkWEDO/HhrDWRVFSQUdrkMDEEe+kjiMGz8TXXRVJXMtVghpZ6oUK0REx4cv5eilbZdbWMppwQfrFIUOqBQMx/DPKGzZaI0e5brDpGxXlCfqrWnCJG4cNpm0vnWPL6h4kTGkVU4A9ev7eYDvLKWbV7jidoUpMYJF6qlwkeQ2nuNSq0Bd7eFSohOAGZF2yXCMQdhU7YDYG70B/KFHMEHJt+YNGzwGdYc3FvC+LwI4ZPS28wJ8SsorFOuGKfcFQ5ZB7lsvSv8vG+qzrWNa/2axcK8DvDnaheEPwqxys2AORuHt3jSlRrq5+YGlVAuyKKU2z6kVMme8PrV3oimdIIEz7EWcfLzwGQJXWZz9vDBd9hUsQggXMGj/tX1PD14MHiuho3vzMU6r5oFEuFcgOST07Qc6cL4pta54DQ9WvuGtHxSFfNto1stcq6dGw6RCE43W8yTIr5xTycOExsMnb05wv92eIeat0SDwfQ1iIRKbhKtzU+ndSZEX2sgenCmSiSDkcovNXBYIo7P5ukdCuG1npu+S7eWlAAb4a/S0qbRxKoHqHaPeWrjG5YCYMNa52xfbxYeyT3RYufogBc1JrpRhG8y8qjkS5aqvnxZSs31aBTV/wnSDXnO3WfLVNrUO7reqVGrE4OkkxKCxxGI02d/jBaZWPqVC/Ui6/O4SZBMJe71s3iIBI2y7AFnXeTKYEqpd/r2IrtUOKzjDQP5U+sFL67IYbYd0KX5g/l0shs5yy83Aa879y6mg13xYdh+iCu4aH9g+evXoDeYGno7A2H0VDr8NMzp6FiCDatxCc+5y4OHIUF5xKpo9ElBok5F3SKd2tBtQVfoK2sXLj/XknkrZjUfWOQBZ4WvTMsm6aYT20I8pt/Ga8r2jZK2cbWsINK3Tuqfcnw3EfIWslnMpZYkcQHip7kOq4EhsPtB5NEYozsfdOB4fKv4L0Duhsa9+Y57j0WM98GbkDEGxjpR8lYyaDEfzFsSCNaAbKfE4vAO/63OhcAU3YmzMp1YaW4RIPdDjrOMQWxu3J/r1Iw7NHUu2o3DQUHOUMSMLFlmemoyJ1fpkXlTw/irv7a/DeTjzL3W3G4wWQLPi2i1CZnZV/HqR6ao9A1SQ6snitxqKSHC/eSfOsu1hYu14HYOvh0M9XUjFukS0AOw4Znuqb/M9mciwooDO+eZ2hy+rnu6MkvwUqbyVT9Q4eRp8ykHbxBoRsBuXz9UKrW67hwxrN2f7RsKMG5RsEGaFJJLuOQFRij6fKf1d2Ck/TlUIgJbTv/UD6eUPCsjo2IgFamWnbwK+D7XWqSw/odGpghMnVLmvkS7q3vpg58EK+TaK2iu';
  const _INTEGRITY_HASH = 'e83fc6e226f674396089e04e52e5670958f359c67d69ba0ba3955030e002dc22';
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
