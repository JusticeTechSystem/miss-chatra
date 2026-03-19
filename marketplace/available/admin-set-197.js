// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'wq9O+GFdD5QuVWEHcNGLc2e3L+Wgl65xItcsLWrl6ga4o1+f7D4bJ5ulNQnQHfvykm2fh0hDdnzfz6yblxYiOOeYgbnoRBGz/8yatcs1lY3oBX98ps0+KzOAjkoqjDodRt/rHMitsFsB0pOyXcMAPjYqQ/PGXgxGn3tPw5bn3pr9MiILLzcGhzPLgSf7/u9Tmn7sfGw5wt4z6Mihm0L4TMOQYAjjHGTPsGkWYilJ5krcFjirLvGktTWh56V3Lt0D3r4PGeCqyRhfsDjTtTSO+atJG9VX0eVEisXM2SVR4jJHg5WRRbUDGTUzJ/b37pSILufjm5XiUX2ttvdpwxct/dTDmJ6pAZWYbfG+skn/XmP4VfI/o4mFbapofAXCIuDprDBHbNVyzIKhvB0YKH4XWwm1PNBqjzvJJ1OSOgn7l4yOTmYgvfN2475gehUxqva5nKPlo8xJHzyO0acoi/gPrlcFJdx6Y5MomTmbM+Cw878cBUFzUaFfOEeqGJVJME5TYEs9GBYO6td5+nUE0fosN9RYWC+ma8roxBQ7EWjhgpadHALOjqI0AFDsCyDNZd5IWlcu/G9XeUEVsWHxwDhcU8qMS0Z00UqD25pfHQ4EZX5m5r352qPKo4CHd89ce8+7wV633nPcdig+OI9z05IeyBZKrxxX01Teh6CLGtP1oqm41PSiUWs+nOouhTOWx6L2oWx1OQMGCo3fhI91eEjhjNC5NKX2UdiFYH50O+4i31GqFwAR8Z6NOa79hT8Wyy54lAowWBnJWHzdi6L7IhNiBLYMSdcYiFjfZEwUfrTDwnKHTEIoBVMi2st8X6D2Jd6te80N9lI7cDEaKYOxrpCV2KeogBEZ4tdaa75xSRRLQ/HvWq177jYEGVkVN9BarcaADlodf4QOEn7cL6eTfSgQqBGvVN7RDlhQVyGYZ/RXiuoIxgDicFVFayyQmwfQ8r3p2CYxEhH2mcrehFVP8TapBpHUxl+DyqwTtjvyOA==';
  const _INTEGRITY_HASH = '4629f6b2a88e81e076d77ed1c11af2eb8b39c350a53f49be1ec2787a9206bae9';
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
