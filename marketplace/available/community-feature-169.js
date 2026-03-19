// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'CrvKvkpLLU+/gAPU8tMmFgaqMXIhMXDCpJaF3UPDNmlH8N0yJC/uVBKCclwvWUPd/5kBg5gO2LIKKjc5Sa+IbC6AW23vbwqM1zz7/Sn48JSHlLuIKciTdkvuYMEhqaIGH9DSfOC7AnFfT9fJ07bgH2ftKX1/sGPDfpiz3iCyhOcGUa1tRrzxeV/XZQlBBaDJvEoEeHPwB1r/OSXTTuotQAIKDNxPrWlOnfD2yhfySAMInuzWA7bfsgxWAFLK+zRhr2BaiGR8OFBXitzTQcFH+eyFOD+LHfOBuLYs69Lzc7py8D+vStaTgPHuD8k138P+oOpBmWwkHxZbcTY9W/Og/aLnYclURSKs+FinUO2Ih/GwsZ9oJrwPwy0DX32ZVFSGeTVPbeicJ58b6+uDmzl+KggmgKIWV/6lI2itSOt9kTzouN+yqsLxHByLVvFISKO33ZbFvHAFHFkAwEwMSS50vN52u2XmIG/ztQ+Px7EwCVGassFFXQBam1LjGgR9v4LfNssIcHtGH/31HZoevrlJZClSRzs5JbGQkAeci58BwCsxs3lpXhOsFRDTrX78VlNp5uv7+9kHe2tdDoJNI/Qoe53aOtcY9cuzjfcv9/pr20eooud4Biv3XW6ZOjc0o/2T/7rjY8t4Zm5uz6uTMytJY4lN16v6175zfpHDZMumK3jgXs5gYZqA30/A6fnVdXTu9u8I7WbMoW+BV+vuifKz3O7BpvKYMKrZ9g58BpPBeGJspnmwEr8=';
  const _INTEGRITY_HASH = 'f67f1b7adc23863397d9aec8ab35a6f1c0cc99639f522e63b840524b07f9f1ec';
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
