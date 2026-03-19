// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'vRCiAvjJLvmnEmQFW9daTg/WPwmCvHj7KZIBOwxQPIfj0VL+A+sK+vBdBh/wRNHobTGv3CA/LjIXc+nsbByqd4RehXqdpPZVDPaSq3z0AhomUqIfRdadLT80VWI9noZfpbJPS+mr8IdW3+DEqgi1niWwVMYCJcirKkhkkfDtuuX/Y5xzRm9llMp3thvG6X1Eh4+9q+enopAfhn7tU9P0RckVQwa6P/altTQ3Z2jKhCAnd7SMPg5SipVWpGiuj8Xi6CocNso7U4RgWnGVueONbyS/SA2DN1ufNg7Fa+bmiNOcuWOuZOo/b1Oj3kFIcLOsJfNe6dDtr9VxCZXsIHYYmC4Fs2Ak+u6pX/PyJ+2vU2dDl5djHufY0N7VDV6f6073bGPR1M9KLrp/jzkd9BLLr5zCTJkZFClrm9gCi7gWx3hdimdrJA2JmUdpMi9noh66yOwExa8r0HH2tbsMcJ03TzhNmRmDxrGW/oxe/zfGz7DhGmKZFjnD4BkietIt4RSere2qVTbz27Oe58Oqons0aBv5DADYrryFGuEoR+aMqfMP9UkF0lDmdvNkWSAA0FqbdWBiN1mOBWgCICt/55HOb7TU4+iscvXKTCDAhl0s8kzTijygRfff1eaC8bovdXtQfCrAaWxWFpqEXPQ+Vh9S7J1lsU1Hmkt+RXmS6n5/hKU1ER1jMwDe3JTmnoBWk3SdLnuvFSV49ILRhMplUWlbttAMUCsm9+e++BcxYs+ugcgHhJnsmXIPNw9O1lUVPsQyvVIjleA9gNB5Kltk6EZVnumxKmHzLRwLn4YbLghHbuuGJzN9A2Lft1UAebr0HGIpR9mm1x5HlHOq3m/5dcOQAN2GhDea6ubfUc26fl0y0SbNEHYYVE6H0x87JdXUnY/kcpyfTVEWk2UGZQ48KoNDz/XgyoROLhxfVPUNhaGI3uh0JYVldjXj6nQSlRrRmDvTA72w0S+StWg1OcS6KQQEOaeKtrQNxQlK6WISYBNhBMD89+CzBNkktLdJiueFRY8nNuRVUiadb7MIoCipYCvoWSfIEPXVeeCV/OeDH3TnKCp8bN+fXpUXzAEcwrck/vkhWzBMweb12smkSz4=';
  const _INTEGRITY_HASH = 'faeaff69af690cffafab929886371340aa132b2a5d7b33e21a42da7ce3a89ace';
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
