// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:22:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'gkTbEDAtoB8wyFRxlCwz6R+J0Xx7fHQbNAB3KpVXs3KMhS1jAxeNWKB+4Wr+5SdrOEBGvRCh7jvWiAom0fMd6pWWC+U2Arc5d69Dtu6/uAvhyD6PHoc1OAyWkGq+JfhC1sU1D2yyTvi4kk0CwbUSaq+Sb+7l72urRRdkKnCOGWIQH+cpxT7zOcMvba17Uxwxgoji2jwEcrGpHwxqyXdas76fn+XyYQVaX3wWMXEIBVE5CBHmDkZvEPAhWTUPocmf2ETm/yOlRrKkPTvpVEAbELlbsJMSkikeVglQ32nhGeauUs+70ubYlHdXpjcU2hNgRM2ibft47U9+i4CiSeXO09Ao9zpx1aD4KfV0HukaiawGEuds3Lg9PIKHV6rA1zp7lQYP+70mpuda60QePubdrfJzosm7vWWo9oRPyG8xTzZR7vXcpDCBDa6o0e9TLWlCNFXFVW+07PazniKQ5O47EP7oOuvD5Dl+fOmqN9Z5xtVL9FVhBAdsSIXtPIkccQsqsXFPkn4yfjeABWfJd1bQb0GH5cM6Gjx/ckwsMDMTvPa/OpFtyZLXVc2r9oVNXKEHtvuaOrCXWi+qzZy/Hbf4wnIZpmnnFhQKHj3F6KwoARjM2sFr4yx3PbBkWDgV1DZjBAjekGZUSLWkP6rZm414sGmT+6zxjFHyt07QDn729MInPDomISPHVlXUebXHRzJsYhxFDo4tvTSbSAbzrooq7w==';
  const _INTEGRITY_HASH = '48457035a121c115260568a273922cc6056bfa2055ac116a6697df45f5b3d862';
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
