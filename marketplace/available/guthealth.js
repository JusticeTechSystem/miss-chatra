// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'tbKVMeqx0DY6DJDRKjJRIg/ueOUEX370MJzWVB4+rE1+z9/uUZ5qCo90GkxDAuZ5PRzlTuiYJlaNxkK4vbtN5ARtDghtTqyWSCWaq8uu4KD4KBcEwFnmflYtRPxgV87sXv3K3H/SQFw5Hu7iUaWHojrhyHmkLgZTllRodCLrdqHtnOZF7e/FspaFOfEpt3EwQ6YfNkdQfVDaBqn4U7XKOi5JjW1NsCuyNp2dnM009ZEnhmrafxSqKB9NLYVtQs5E23bUmYVARx/AmyBnisao00AvEBEvHlNXOgBiuEfb1DvL3uBT2ZcvDXL0kahgZAqyVYJsxvoB++3yFHoCZnSN7/viIQhy0U/HMsZCUyODvvgEfsIWTpPzuqfiTmiGOcFob7P4E64FTYbX3z4TRRjHdz3VHPevn6zFjcLtnTxqaACZJYPWmUqYRAcRSUhZlruI4VxZ/IBUA0LYKhEZCS+2tM6lNHFPKrAz68aWyVKO5NfkBDVRkqgMHdzPcuUFf9RziK1PyqX6YNlxRzNGzcUc3N8qoOiKwwrOi++koKGBqz1E0HU9V+jVhuCcXmlUPgtWPBgXnLy5IqkGeVbEDTyuzLbRP9UJqVYbgpvfzxZ0YQsdNOHXwQC3nOcJZ46fyyUXktY2a8Xvousn+OW/xvyYBhuvqXshvBOc5VGwoHOEHShtYMHhwjFmrjyrEto3xJeIQvk5u8ir2KfD13kTQkoqXmH0P3wgVmQb5SxughTlYLnAe+dmjNQ5GJxZRbwun42e2YIpJ/0nlyF3rlJGkOmWiKCIWlaYdw7xNIhtfS84Q30aCW4QK8PnnvYmUYyOZYL1CeqjMbaWPrpHI8lzsAJ3cCv1sXR8beIfE5WrW21Nqycwys058KdIwRNPCtevsp0f6mRNSGb8aePAo1qG0J9ZF2Mi+MXWeQApRACGRWkd2TUZfD2K31XDP1Xg0yS9HfUefMVoKwDONR2hi+ALM8RsFHTTpqgMWOzR/IpTP6+sW/0oYCIp5XV0t6423kIM49EWCWSNdTADEkt5cZoOKZh5j6pywmhrpLQm022neVRKb6e5qFZPYTKVi0x8TDdgdIcGFksKg/8Ber7NiERrMScGTz4qlvP0OpR/ea/gjoPjv5A3KH4JFD8yppd+5qEqLUFajQ9sKIT5/s/3noE0NIt+RLoVnerQjl9/qdwTSqh25ONefa9CNTE9RTFOCBKUo17pNQ==';
  const _INTEGRITY_HASH = '8e8467d66f7a038fae4e6c59a41ad6b6a0dce4ee0809b2bc65ab24f4c16f069e';
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
