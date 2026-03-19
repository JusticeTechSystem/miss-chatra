// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:27:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'VXzGjrihfjgVtzfN2UcDLT+qmB6GDOIviXByrzGafdIqgE8OA8KVb/FbFQLwx4ocs0oACaoy7USuVDFIJfq8JuF5bRurPoPvGRVrShaNt9djPOVvReySnoyX6fgsa7RF8tTSL6vA40VFA2HANI07EkWgblAVCHNw54OPM/ShvSBD5SIpa985uOlws2rvg2INjFmCqWfS/e2ZB3nHD7OIR7HM6c9eI6bSlSGdZJ68QMHGmR0t8oQleNXMG76ed93XOj/kfxikXvlNCGmgam4oZl31vr7bcS0Zr/Jwd6fi/N7mZ6qp6gqtCc5sbRdFBEPKuYE5jsUTD1sxC/xsLCLhfINiaJeD1GbdIeUkOsvJHSV8MnEscf8fXklorpxg/30FVn7pscM7KQCXFQS0tD71qg6+ptSyeywVjBHGr9G+91Lo4LzubgjAIitjOPWMnUZLvzAby0Zj26QgU7CnkPP3IJ75BvJdNUt2muZQ14NrANq2VVh7cMXmmtEde4JWJC8kGjfk20If0gUskxNG85v7JgRRrpL+mQyogh2d4IuholET9EKdQ82Wm4DUQfoN0WIGR+QB11xbizzQpDkzEs1ARqXPKrCCUNJinWROxdIIFFwGtKfY6XYWI5zeVkD+a/OuIMYMXgK3Zuhq7B9i6XWPoQLngyxPLsTMTc8CcTVp8ovwrVKp+XFOiLVZH/mnPw3NfjMpbpeMrJuTFYK5AXmXrskeIFNM57XqB29SZy7G2olN0uc1O1KqxfC5x73i/0J4AcOSQJYCZUUeK556KFd9GupvTBIsFdXBxncsXB6iMWi4dPud2qCe1rtGJys0zQmhcY5bgwjF29yglLd0RYJLMioa/i6twhLk3TO+8niQZF6LpRKn6NRTn6MkvVhRNtBJRbKnCKWkjeLhaqnsKS0cmTQ3K9eHhQdHWycHTqecvoP6SKOsxzr3zUQeKMswJPbqwaaeSKybQb7p+1GxuIRiYUbaHssCDOksLEQFERAasmLj/LT+L3AGiDWJd513VIU82/iQZLIYLs8x75l21LfxBjLSK65aWpIVpb0994t0rX9/DUrDX5JjptvNzmUmji9OjW1Ak0fTt6I/1ZTqQpaiZnTGXSF27il3uLD0AjBs8fETyzy9w03TAxH76VeJ68p86eumEgkIyLvcviGjBFlXbbDdBZ3t5iAHLnuKUTkyvlWYDmuhkywoaEdmr0xLpQ==';
  const _INTEGRITY_HASH = 'e7455cc41ea1f14817ce7a4c9258a47ca7d1630f6d1a20dc41af10a60a4ec816';
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
