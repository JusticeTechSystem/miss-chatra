// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'uAJsZiPa8FY5VaZyqZkRH9EUEcBJr5TmbXejuuV4x8nRoMnrd/8t+bpVCDlNhzhXm4wKYQ56/S2n5jZkk5iCUy5pIVetRxbfiYaDP/64+PCpTU/kCCsRSS7b1mDL7NE46pao28FLNnoaPOu9bZGiu1RkxWcnkWrQrZazmiUy0lnVkXYkAAvGdGAcDpZdwQbTUGTkqWprD4gyemwnuerJuH62oXm46oAiEC+3QwovC5zJtt1uVw4pSNkxsKe17iuWum7cnxBFEQAmfoCFXxr9c1Elo3+4Ep7dwapGNwv1kqC6VrFcFQ/2jP7DiS2f/tRE0Yh4QmXKt1hFk6EIydQh6bAUqT86d8jwZN46TqW8RuyRDL7PDYZAgff1xgKdLP80IDNdUD/vEh5MMOnNn2UkPqfJf7XdQav+hPKmpy8MGCWHPHjpEw+MAiOGgr0LBuPHQ8/hpfsG5A0t6L0f+myssthew9xXDOqnXRGNR6ZDub8RMo8W9mWyNiKjPrT/57pPkw7RvJoyLAoSwt9zCb1NR4NWr2sREOllvTZWn2vn0u6XXlY/h9VzmKGYlGq1uv98uouljxbOl6nuoch6GqV45a/t3cv7EYk1TDbZXr1TrJG8iRq3tC+lI8uLGSlnIQh6NrScCkiplqRXdQtXRO9UaskymnoL5zykHPqK1okZdrVUHhxX2eidGIAd2TbhElVUY/AYsauPbFY1DtljXSe80iZV9kNNeLz9OGPBNaaT3jSdAR8O9LOpJOKZ1uRFxnfSCwEsQtjCesjQ0T5nGNoORMzg4w2bEp/2a3XXz68NbUd+0Cklup5EyHBo3UEv25240u6va5seZOnYRDCxjtQ68fxmMTIDxEwaE5XGuudImwaD08/Qwokn5edKY7ZPY7l924JqNJ7vSOUDFJIMktkFPe678q9sNABNyAFifxAz2KMLmXwjjwLKKa0SMZJEIAL2gV/saaT4ss8rlsIXByjU53kTNRQVzaKoYPUCORQONCBwwa3o3yFHX2VVI4zISsYdkREbdQJMLMDwl7/SoYgOOcmS3N1lbihRQTSQ7Jd6gMk2tsRQtiSjKAUvoE8K/BVR9KRuMv7eRwsOvmxPHpQJSy0YNjQpD9mb3EjEcApgbie1uzHqA/ig5q3sPd8+5tkqCxieKIuzXuHVQtb7Xu74wfqimQ+xXvb79WjpqLIuugC+Gz6Wnaatby/+Yo0YmJxLfHCI7gpS';
  const _INTEGRITY_HASH = '2b88b06542b71a6be7aa24b77197198875f4d41a93d2256f31fdd9e67b3ce23c';
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
