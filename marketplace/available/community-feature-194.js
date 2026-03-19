// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'DM5tx0pEoa06BsuUCRdbaRJeGQOYwhuPOHghGvZD/rg00YjCZsmuVuryHjNUPsy9FRxsstEU8YsTE1p+9BAcIWM4/4kh0/RwndmrvL4J0JTqMoEuG5iA6FH60F21qsb4KSsmbyx5BR2Oks1BTBW8V6wrHTw3K8cS8Lg38jUd6FtyAMk+hOH7yZBm2VNURIxl8ntRPTsUSfKMGzQ+IwDdluqi+38SH0LUYlcKFR2UqgEyOn/+g69aTaghF/gFBbDy/OATfnaNEQxH5yRU6Hs0NsgqeNnaR95KqmyN+ImOniq5kuBQ7ZAV6KiVJelq7JqX+vp1kxaMhBfz6GWbHsRPsHKobJ7U/w1TnDwSuc/6al5cBSZVm4etqbiGwb1LGafHctPhXtSXIcMxmHZno79SdRnxFppkd2hBMJK96Nr56LR7660pEV/2HfPyMx8sgSo5RBf3/aLypec2yY/B99ZiDjoGckYp033i3ltH/PPjp6XfnOPVxjghvF/I3WeSzEDrovijgBD1PKRRpKbaurwit0/pQjy7vOqSpRBksk1kekDJktbtZl0V5AfSrGgcEHsutAo/NNdu3TDFv0frocZpYnH4Y1RgjX4mnoefwYkv30KIfi6PCFAOswn401Eumwr9DgK448M+ssfKIJav2Kh+VtlDrFWCqgc2Iuprvr7CC7h+AuHVy03vGvx1VDbJckFIRZrZJSmtYOI0nn3Jfnj3JpMPJWYQbMuGn9eAkMvr7uW4ShfLwRQ=';
  const _INTEGRITY_HASH = '3df1d76e5c27102f05ce4380b9d31e65321564782789761207b1b4a8cbb23746';
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
