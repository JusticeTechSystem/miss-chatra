// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:22:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'On5u2Frh3p3Oy6p0w5ROxd9pOgCNK0r5CMleR+YOE+y8TPZ81XatjuU8T5KvzXOeerdHfvJZBWk88/NIorASdqmAlRiHzgrwKyMQcSY+T+K6QQkQ8A6UROxyOFav7NiT3Rzh51uvz4lvhoL1q0pfm4xpwjo3fIGtScJn0ogrY7on5MjKgUn4rllmc3mzESlB2fp9CW1qJSnELwcNKlehLo+1PdXWnGEf0k3at0x7lyqyZp/ef1CLvxoGS6wROluNKZMn2c6D/lOqaTb2SGgrXvEZa+iuck5qV5qxQ0F86A4uKD26fOlPguuaNXOiWx33q+KhFaof1AUpqXjpEwV5Gh7T8rOWdPXuDWr0BFgnUD6wI0fvQI0JydbzQ6STPXNnvXo7NBJMW9jQjC8kMIPWctEbJ0BB8ovqgC4hlkIP7RSuz1UOukzx0DbLnvbk/W7JtN5GeVfBCiLo1YlYXUihYBh3us0oU6OMpsRy1av0P0eOzdmrYXDz8NUlSoIhQmHGq70OkbkqXehJu8SGwzKFUHDCCEmgT4SJ+bQwCXRYoZ/39KEa5FMbN00P4HRtrJUKQUhw0Pd3VTcZgVKLgO1bMFENdbyKxFo5J4jzUcz1OF8FnLrulgyHbRwntByq9ig+iF1bxCTJ4pTkLIedBObnVxdNCEecC8s23vpD5dzgTY5zps8iLD+2omgekZNjX+9jzuFOd/be0fihu2srh1xEpJpm1DN2ZsRYMpaitZjsj668EL7nZevNO9VCGK6U6WEREUt+gdpUc4eXSvDTc0cdPE5Fzs6sHwhQxnGm/6O/5f4S+DqoSSLvtzcPmS2H8m/cK9H8I6HaNMnL0pBf4SuIMTO7bjsoZ1BY2uZJPUTEGMS1rpELAKgiJGwQZDJGcoem7l0sdWwM6k4hPl2aTYoXGvcPP5PxEMgeJH0N/2AnRZgg+fN0wi014MY7EVbys/BqKs6pVx/lOdCYbzcMujwoflB7ycNX1IzsExQtHog6bVbrx4XRSPg72TUBuCeWcnMkl/1+7d6KvpyPq+mxCMnO9YY2pYREfMqof/RcUj4iIvzmkNMvPiCw1D2tIlbkvgPM7rY64Sky5649xIDg6ZI7nH9pjgifUyqqcZVJHYDpHlOQXdjUt4k9lGOw2vR5A8N4ArIrQ0NUpQDQpSYyxGNxVvT2toJVOH387fwejRhxgpsIWyfUzWW3+y3dSPaCXKspmCfwcYDjGXQ9QstbMeoe8SGI2r3oSMVMVMoE1aASagG7BAM/E5zeI6FyctAPGbwoVmVLrCm2SpLwsK14gJEiXdyvL1c+WbixmOj2CD+z5wfaE1aoQdrsWpdoNcbs+Iktb1dzEsUIjMRXg4zf464q3zGwWA+MT6P7VVPmVF9i25lHVgBjG7medvkv+W0PggcyYAYDM8FvDrYi7Qo2wFhwMCRF2OOo/nenA4XV8BDNe+x/e7+MneARpf1+o4xMDW+BkQLWFtSBixUbKBiPoduF/soS7DrC0MQMXjkt1uWMmxpGpfxwkNSfi0icmJI1Awn/M9md9k6EFPND6ebsB9F3zFpDo+SmTQ==';
  const _INTEGRITY_HASH = '682242e40cbb27832bda3ae23feae914f9e9cf122ebb4d73c8399b35092de3a7';
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
