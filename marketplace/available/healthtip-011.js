// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:24:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'tk/R4j/C+tm1sU7UJC1Y1hUoft3oi+A00t49SK3bYe8beJtZeSfzs+qgfGgsvMPnvsQfyP7O++UH7gEhWz2ZiZDw6NagsEFZL8oSCFTn/jXrwFGDjBWMSNohTGhmPQ8029FDeGula/rcFG7kIbgogRx4gzx8gHCSmv8KxGp2FOWOUii2EZ/zhTHA1c9MchlwMYf2oXOcAfCFPyv++dYh0F2Vs4uyuEe/EwRGYfGWZBVI28h7o0XCD++yyBIMqHiHNaf7iFsAk6p3qpvTJmKgpN2WTf996rB239YCMFvqSRnNAoEDMJlVpmCeLvKwW86GWKZJkrYST+LVrAMSHJH71GdJe6hUCQqQY6umUB/o+/al2ujvS4ZBVkaDlg8XoKOyJvue6+GVsoh/wSqwKChpjjqdAbFrKVHtCJeMduvgDG1lOtH1hwnstwwVRiHIhNcTVKPD5yN8A2lysUGqr0u7IYlvuoojCWeSkIun8smFqMVnu2zKfCxoRm5YkyzNGTfh5zjH2EK29c7fbbI7o4Sn8Aqxb7ZsxdWYPe2LI4ad5w1ruX21iriMiDVuTk97Ky0fmgOQ5G0IVdNRzs1UMfkbkOmNg5MV5O7IVwlZ80QvFdiWFaK3SAXVexoiT6XV+i0B3PcaaXFWSx5Ubv+OEqPPKTSMBigQgMV5FKiTaQswPIvaDyFGmJALwGdboO3oIKN2x6sJ4ieb31M5xbAWYiyVKKTEGfWDO4j9FojO7y1jUL81f09om/9cObv/vmbeqmEkUbPl3nhrR+hU28m3cNv7ZnmxCFtAlelEIqCfD9bhgP0sjb68g0rmRlsru3BuBm8gX+A91ARjJ2ffAOYXdjJG8ngpbulGw9t7FBE5XvkTe/9dNFpTNg0Ixj5GLcBB7YOLljjM6mfo9MmtsfUfCXk6H2Cbh+T5TaCALl6sFBMVQowCsJkgTewD9KgM8O0=';
  const _INTEGRITY_HASH = 'c4d70cb5fab6bca335d6a78ad2558f873159dce4e24b845f9951aa51e010f0a1';
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
