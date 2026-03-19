// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '/rN6sHqTWOxEvI7Py89bLG1Ts1tLt1F3hindBOyjuz6ITxirvB/JXl9h3gG3WDWbi2dpePVfMR7y8UnpdSd1wRhxg8y/hEyC6JsaoB9FhsZh0ZT1oDUTwMuJUpUi2nNqDJEps4x1aJynHNeNHajTwdvmonhVKtGgQ3cGZG1ncXkl9lSeo6smLbwq+EYwWoSXTch+NGpcvXtYhkTAtpDNXDNs7hsv8UTF21EViki4C3A+dyyHv68JwKqZm6LBYOj18VUNFxaG6fvBfDsck6e5yKNYXoHfBXnZecFkKBd9LeCLUb9uaLGtAMK8c5lDcmhFK32fVBw9ZKDbrMImB4iEypI9MQHrJtyP2LminCF6ozmA126L5QOvG2pD1MObAD5IIqAtnNPbV45siO5r5vpHZtOKmZYoIVzrrY5llpzLoL7TIUKwazUTNAJ4o+x+/UJS01+gFQ3pq+xarfpimrnNiMtugBQqwYmYJ4rnQTDrhO+wNsEw30OF8qUUQZrfSb1v/tsJ9GzNM6LXUpvUEvojDemvSYGWesKSiTBHn2maKwdirpbPo4dyreKtwnDIUArX579SC7DYKTS4VJlfSXwVEYU0UFpKA81pNYrzHBANwi83Nk6iGW5cJgXipHR5bWth7fKeERjD64yPnLGmim1lSnI6SgbNLyJPgc9rgt40QD46qNjQUJ1So6rd1qWgcYxt/IST1PDe8RLXc53XySIw2kO4IuQZCebauEp2www2luZwZOFKP+0bW5TfxlVOSBwbW/D+PFli2aIgYV+ptb1/ZG9k4g3uDVIHPrP27onC1HoM3bFQlFXVJYrawBbUJkl7dCen8D8hQAOzz3E+iIQUSf9Ao3NW7B6umlVmog5ixLHbe/RHQUIIUUI43YBlAA/DdKR6jaNGTWXu1YhQF10AK+v2Z5SxZqll0ZpbKfTpX2nvIBHgI/PmwAL3Kz5VnPTQm5wOqir3qVa+XXtXhBjjRFKK73a4xbdMX/Mz2g==';
  const _INTEGRITY_HASH = 'e114b454196e15bbd380bd6a123d7a6332ba5e093f5872b9ead947f8aa19df2c';
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
