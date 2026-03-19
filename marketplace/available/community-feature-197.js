// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'PICfbR95GtME3mtjCJEGf5sMu3a89tZEjD2rwjTRhJFnGUADwFpH4Y0mGFPIT1A7MGZipKVJRPhtUZVAClBDxzr7QkXuD+J/iKslRxGApIiYdEVaOYrzBNLynHtoNhQ4yELGf3KfcFpJimr6DxW+YW3Q9prkcbaQKe1URYckRmi4fY92ZZFayEDbrLV2kHYcRHXffulpy+7ZWnhldVBflPdRyjefCD8MrfRWDIqHqgn54Uab0KH/4R0QoOlnmsE3lrbCupnzxzTYYVVHh3RkIX2n7NFgrP/4W5E97Y/L0s4chVuGw/RlqtAzs2J6Ea2h4+lyUAJt56iNOV2rU3ccIzXA+pxWeRNsTvaM2vhwWXf0E57GYSCgu01GVMd9gquGFbT3IGAV1VMNGIu/NCyg7RB8GejoP2Ld2USCj5Gbrx+66Yz7ueP1QY60VIuX/aHa29A3DwTHWIoMQUIjyBfJLB49BxiRQwPb7yEgAL3gn/kcz+HLrqbCOi/b7k16DFnN9NUspUlSfMAMguKyTiktttF2cV/09oT+LvxS5SfgjOoxGikYqlRP2DR/6+FjBJQ734bPl7CSbIzTeOmzWZ36fN2zgnMj38/KVB0ng943MgcAX43kbWwnIeLmwGjV8aw5ue8JgE4c3H8iMKHgZqfX1Q//l0B4o13GkUMOL8MwEDv1OWNlE0094YqxRpabR5aJ2duhQ2FHZvjJeDDa7oSP/2c9uzifeCv1Gb/HihNFGEd4BsM=';
  const _INTEGRITY_HASH = 'a0abe18c1f99fc2d70bc718c4d0c0264d6749429bfd9821c0340fb0665b57392';
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
