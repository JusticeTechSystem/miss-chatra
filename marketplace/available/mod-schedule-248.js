// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '5giXMdPsmJwavnK4fhoZmDLTnyvpQao0aIqpZcZnMRSFKI/DmGtnr5oxDL5Bju7dFZGnj/vGLo0SqsMag5lholR5rgdqOT3yUEIiif4ZqxIclA/O2eTXVw12tjGmhn07gCeI7XTODtT33Hz8BnsQFoygr9n408xrd7870T1XmSY0Yf//bbL6SHYeVxMNZXTmbJSmBL5DA25oWNHKAMH/A5R01xXBGIsFIAZkq6MKwg7SF7KQJ2l5EOUcGdba2l6EWrTU2PK0IrxYmL9MlsKiEZwAI2K8WcYr2EYAmII9XAlClVJZAqAlTBog1aHkyeUZdVYbL2vRBcdcThAPHPdup87BI+Y+P0Qc0aQqbnGoG5f6MmJBXn2hFMtri53Ciolm+ZEcfm44hhYOXEWQl+bJ9T5RJNzYv6pDBdlLz+c31p+oZgnUcfp7w2Vdv9VgYjrF/1A1TiFqzokwKPkFbxgm5gzsh77PNiRakNj3HwfPBsV+8GRZ/waaYOMuFIWMlv0UpygcaiiGEF3j9od6wv0VNZsSiRKzyDXXt9+5Md1yeX7/Y7pHHIT/Ju2KJVf7BJXfEEplpo1+SWleD3Q3cEbdf8f4UzLJYpzkGsQhN17Gnk6a2yfDH0ZaNL1uhPwwsu1/MBFv8pg7DgFJhF07AH1SvP+rct1eCH/ES5kRSV8Xx+HPPrbbHEC+0iQbjihBwUgt8+1STLROjNTXnRVRay/A5K37d7LHyzkoOVBjdhxiz4TUm9/HFjY2k3G5XM2p0SouwXph/dtuioROSyRj/VgGH4PnzlpeViafWgJLlzYIFBsnrc+l/o2M9k0eLc/GxYuuFUbIFYtKsG7S7/ylWiWSTHEubm0I2S9v4M8vHwZb832xm6b4W6NG4G6j2LDArex070F/rvyztrS5ayndmKH7ZgEwFWdvS+lpzcOl5HtWTjXKNGqRzqlR5T6WqrLsxGoDke+Ka8DQU2Qjmi0/jsKNOvOy4k6o/V5ZVuxfS+xbYF/8ZEiPBw53LQEB2oOGq54DuXNBK+G22GG2wvOgZXnbAeVXn44dYJP3mFUdRSD0HPqn8zk1iDWoYgyU08DEjMT/K2ox8XOBFOOGixXIkztpnf6AQn4qZKUf30ktgeceJhlvSTIuHMIgccb37LCVkjGxOYBha0SO95SBW7pKKUA6bEBA5KAWcyEhFn3w0QArSLHJVBBEH/Nlaici38zeIMw0hIblriPGJJE8tA+DxS7UCEwGbnfugBOSIPhaDPKdRJUvWmeei9/cIO+LRzRIoM8TzboKkxHZj2QkZ7MDIYaF/dmGxQ5Wr7ftDVwP6kjzluIBKgvc4oJ5eSIte+IBzEemS6gC+tDfGFRrn3QRtZg70UEtmHMunHfu+efwQowMSB+bBOaBcrLzio8Q13unoET2Gm4abo05Fe3/F2Q7';
  const _INTEGRITY_HASH = 'c8908eb21a5b249259414bbd23ffdf6f955ab46fa7d205bddc9bfb19c815054b';
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
