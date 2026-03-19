// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'sp4vjUYOksT+NdIOSPPDrN6r+pkpCI9t/UBzWj8g8vl1SNzjG50IaD7ykUgoGGZmXWzpUasKEte517GSsHbpcTcGAM5yMRIptt7JIfhN40KR1k1Fd/KIgcc5qHSpLOQLl84fsrebFEhbOlH9IcsLN5RH25CrYm4pTaK0uzm22nIcUkEGhJANLU0fjadxfOl/zCA0C5gxy2pCG9HQYxvVlF3PzTMpucdAsOivr7FuZh+hJoaPoJL3ncLGqtxKpPt+fpSSmMkZaLp/kCR42lbkmx3x3AOsHdGQHf4OLrRMWbq0KHcbMzAdw40N8TKlUnNbkAeqUm+7vl5tvjIloHVnhkTYBKaRROf6iDMpzGCFMunzGG8ERzoo9TN5ez3/rJVadGfWvYgbrH250jT6i9JQPmL7L4sj8RLogcWLRJij7NFMzkRNnKkuyq1BHs1YB5ap3xFk+bfnnqis0XjXxO2MxTCG3/5OvzfJAyZH+3TN6GumMAn6oltgNrNgI0PsoteUJY+G2Ud2akPqs4kaAQXLN1Kv1b2VOznbxKKWs3U/EN86ZPpFk6OoM/JqRS1t3KumKmyVTYnGqAc1Hl7PK8PWTNmC3MQF7nISQPykIV13iCxHcZXoN3yWnGH5kO/GXlfNKphX/uaLWzyHjWlyNBjSA5hk8cze1LTA7ly5EWCgit7EFfVVQf2K17WYsVuPFBivLT1VyXVRERhQdlIC212XZJfWnwOgbrVKgTE+H1pH1RGf7cg2URosAaYUkdWh/RmG2eFqr7JSTXVyQgwiBeoF1JHSlV9Fhclu9UMm9gS3lvpDa8H92dY6Xth1QxNappxXm1IB01i9vCaOJfIXqn6L+HppqCbauTkqlWXeqiN0ZGGLz/T8YJPo3NraB4PJjWjHqsBgglWe4E71o8hT3MYuCwWdTBgOK3viayCLa324b6m2+Z07sad5Xdg2EJOEuTaeer0k5PIctsooExlYnKb9jvBGPOv+THskLOmKSbjVsZqnts8vMdRI8xkeVu04';
  const _INTEGRITY_HASH = '32e69d0b2fca038dd279061bbdc349b39d79470e2319ab51a57a7ba4abf7691d';
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
