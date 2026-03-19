// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'txKkiaTAoNUBUie/n8P3nAPbMnRpXM3sAZKjzUgVNsdc/xB9gd0T6uwwERXuMyJwrxbRBIBRn0Vk3MuHlnpgMqWKo0xq3SRXVBxmGD3G1RyRT2X3D/DIhOQfJFIzOZqhsRqw4sf0mh8PdqxpB2qxp+Z4S3ndv3H0/eG2jOBoQfYuEBvRKzWXSPeEt6Ds1p2YDZezkdUSnIynNmITQeEVRWUAmVrzKnVdc993bo6BbFoKHrcWhrT1fOwlFWn0EDjZPSk25kUtsolskvtEh+FX2VK41IqfL0cX1IVSy6IL4btRnew8SyX/JX8qpyE039V36O9Vw5L6U2muH32IaW6YBQCvgHBA1VtBhQ4DdcH0bzZvx/tGjz5OhBBnVjk54b7BHfJZ3mqtwhmcV720c5z93OkJWQF1eDKhgxRZawQhQwHf/fsC285IZ4q/6s2HssVOO3gHOATNMpldUGmQoXZAdu2GrtQXAR8FUQmvOYCAbX8q2xgeWC4gQg5YZtVAJnW5GFhvC1mIwnVizxSFLiCRGZ9m0vD0Lc/zRMrxKb9qrZrLDKdv1A0j8GGYPjCNPOdzK9N45I6FLaqBvlxFbC7LxdjLIQGfLExsErVrHswOPqkzpNt4WhYUgr9hvQAcASqWgQ4lG8R3mdOMO1bLYhdqamwMplBiOsCvKPtX49Yr8A1KZE3gvqSPZL3njcoxY41FWcR2dZd7TMIhyd2CR+Zg3oJngRLtxMJs';
  const _INTEGRITY_HASH = '32e1806323dd36e27f51704f9c63d9c0e30bef358ce01c9558e636ad67831c85';
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
