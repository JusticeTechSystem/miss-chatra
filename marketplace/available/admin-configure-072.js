// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'azZoNLW0rixJ0oM174neMmboyphehHD3PwwVx9lmGKMan1ncfJnFiJ5fCANTWftgBuDerTneuQDE7eSml4eeQ1wLmC5MW/B6Pl+NW/PRWzbujtBAb5d9qXUSWGrG/pWlpzHuRAV0Pq6b9mjyjyg0tN1pOEIztPR4RtE0+lM1TLdJmb9fipJUVFozaUZFdDWYqq4rUUu6G8ImLPdXTcUurgFEfsVxooCd3XeRkbCagzby5rugfisy7pWDPT74u9ofeAoXGkoDoRreIMXwb9FspiNpwjhiTAKeyHBOOJdOTTfTmr+1fvp+SH+N1J/XyJGM3dRCmSZb8l+MxqcJ8SvNPR2WVIzcNB62ad+PvPqjvGeyZCwn76H31yZJdVfHNAmkEgxNFAdnypUga1mEjFtmghKhZhNtmlRm3XlI+XWUHuuXH3unZwp1eqx6Agzh3PvNxCal0Vw6tjw+Kj/Wu+9KewOkj3hKGJdO706QYT3e187iPLIi4EkN+QndjvGskmVxmM7OwNv3Hn1vT84p/OOLLs8ucizO7yHuxjDI5bwI/rmCNntsfn0M9JSn7SAWOzjcaIO0IzDXh+E8oSCnWzlzxinUG21It246Otz6SS8FwJNla3O6extIiSe3V4JxECj2wSD76WHV61RdMYg0DvyDxmeWvVYD/3tYigndhwqXV5CLJAHHqR5LZplurGERl1wQQ/MM3oV+K5KmMYqXgx5IPV8vl5X4pqT2fJr8mxlcvpl0XAjooI2XFF152xFpm5hqolkojs1Gkw4i5fA3HHFFrlqGxwTalgCDHg8Dke6KUWtzwUGiGQZHtyMTFrbJLyDCxtbsOTOeZ/7BEFnj+MnDNOy9zULn6Wh/6bn0JApRaw8ibFCldqEDNf9XRCM7qodt0ik0kDQ2MXWt6IABmQTrKtyULznHLbKDwBVEbI5CRNM1E5BzYLtkesIw9gGBXHjO0+xktiA4KL3W7oztpPQImMz2UsTPpYNUbL5VDJnlYOrjIWhCvbeQ7pr1WJIPCked0iMxcPojoq4BLyGvbvphHY/I';
  const _INTEGRITY_HASH = 'c87d1262ea4738061b4f19aab6e51a2cadd8d248ca7459459bdb13f7ef438e88';
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
