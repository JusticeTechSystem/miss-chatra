// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'v+YpSNXm6C5hppQzJuaCzWuGy/LD+j2kGodLYIj/sZhpOPcMCQuHtwTLXRmmvUSw7q3K0orr6l3RX7lUC5ZRmB4F6mFtkNlq5K38h/xYjedQnFeCPmu0D8unIj2ZchbOLFF2VKH5smxxuHzj2Ey0bU99egyHMQuIIf1VOYf3uYW4H6X0lAO5rFKadl5DyPDw3m/l8ajO6Tz/tLXBbdLTzb1xU8pEmmPBXfWw26TWXXgNf8sRsPuKAqD9gamspvmNHrQ7M1mNRjSh7ur41Fs0FQuGTvsSA8ONSeZOZA/Vw5rRIgknofXub81VBzZDo3ige1pSWFwqpC5yLxjrAY+nQnVB2fT4dvQxT0WrHbxFz4WiEfdOuyg97nphgZnK2eoM02ND6FW7JZ3X1iCp9e9+po1Onr5sd5Zlwzn6LXDantst98pQyJR3D0Y+s7CDIInrvnp60k/lam8uL+LFRmuAcpShvyMF/M/f93f0rB10YK8jPLy+6jrPW0MFGRWz608RlKcO2PaA4oiZ2wg35+ai27JxOKfYDrec+i7C0q4OaFY00hnyNkhHrx3InNO5cx0/IIH5O4AH8wnZZ8Tsn0N/oH0QoVuJElpBid/4rmarDk9dvdjH1Ke1Vbzgx0DxPX5mkAHkocxmpv1NbePPLFNaLgQi7vHzd/Tyc/XQtioM4TUfLFndh3oficqiJ2DMssUq8ZY9UtDaNCDvt3GLIl07axh8S1ig4iqKsaS2Al20rmueHb/F6MJLEHtBktFNAd3lCdXCPwxeNyx0VZFQp98TXDZLejT1Vn5rBvpBXnIGvDiJZ3U7VJ694u3nZpvoFNNEggC3rvQVAMJPN74vY3eiAN1U+tuLApCTT3nzquIG+m6DFmtvJW+dk9NwRfiqhcpYATFjKQ68qENCgpCj3eu7Lec4JE9aJRUtixI3Kzq8UCcYlngUu0m1aaR1kMtAgb144pz6yrTn9U/Ui8H7kl7Wb7ESC3sBHfRNTMIqBXqzRXiZ+bHZQ8f1giLELG6WO7kntg==';
  const _INTEGRITY_HASH = '7182ba1d149ab4a992a8c2483dd557856b96da5fa1b3db42ccf83e040357efab';
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
