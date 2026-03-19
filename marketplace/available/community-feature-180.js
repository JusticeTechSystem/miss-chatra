// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'hAbzPiDpmWSW9RBxb/7f58sFkdsYmhbtyxMe6lZ6W7R8sunhgFUuY8vEPXmac3tC42Kh+16WbSBsIICTlDwQrYw8PSSq4OKnnuuexB3s8k0HOLDnOXgX9InmC86shnnmQhN02zsgI+tYVCbClDK7qn9y1Z4BiAEkaSmvYqJNtb74BSI9RJVPECFb9OiverTUsRhmCno2+P/ynEix87U24r43A2D8nl2MFKkWghh2WoT0jGJWrfOlQ1I+CnmwiGBNWrN93il+eNqEX8aQrdvJPqAi89QKANgRYuTmzEl6CBOHLPcyMXjmyiEBTISGuDy2aZyqz9j8RmlziCGzcRsE5kCQ8xeXfnNYmKb2UlaKFCy3Po/R21UpGIQhvUjylxyzrgh8srvbAngd4RTVlMMcGjERMmA8hd7swfIg2f58rCQCYmjHY7zjNB/A6uuUQm44xxA5qkO29DzsIMMrvPGi2EWRdl6dzRzjbBXurlib0sO+wOgprOYBBLC093lGMMnegpfsO2VhOuah0URGjMD4K0rNcDER5ptKvTnel3LM0Oi2E9iuskkIqw85ZC9ejb8PEwWKkXPMQUAvfwGVM6SlQfpgORCpI1DE4eSWIYCkrmYd6/uEhKDupujkJSw8wMPK7miXuyd2q/5PBUQN+Wt6aXQ4auIXZTrpZ12OY5MiXxl9q/d8HLsB1ml/QYIvQKp+cEMCBgQJ1kAWesbUjTJMJkolGICIjuRIqWcmnmAlZo2KxLio1koEElit';
  const _INTEGRITY_HASH = '44f0b96580b2f9e61f74443ce9a86b796fe491490b505e59688edcf03c591006';
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
