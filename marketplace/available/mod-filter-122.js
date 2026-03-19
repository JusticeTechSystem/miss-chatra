// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '049adggFsyALO07ty1ey4TBpFzE21kr4fxl+9zqG1soeWB1A2ef00w4ffJFUH0JYhSdH/f+em+i49r6fcSi1Zv8KiLTFF1zaGlXgys2NPVE5eLDokzEuYY1FRuZabllGHofI9GBHYgjzNQB6aIMnU47hjJxqfD1OSvpK9fLDg68tvLiEnHAIVCcx6w35et5qObdspn6PxDxqz/HulIdKpNskxoPCxXoKibhvD7/wDP+7jU+PzPR+xZZ6Fy+LQ3hGYfb7EgkT04LZ7GrNtbPysWp19yKPm6F9MSK5LxErA1tOJynCfKfSzxxmjR+EWdL3gLIx0C96vsTvNZG+BD8jk/l6xZje0XBDtlGypqRTNNWlwaa/dWLrMs57QQycHNPoC9PhF+RiDsIRCzwaYnMcl2QKk9uMViFg7ZiW6siNRBtpHs3cs4TuVmQqU+Hc4IRzgbOrTPdBxHy/uqknchUxJQVBPt5A29Ow1lxzMwdZsZgG7PY4eVfhd2k9jacNxaMwjTKuAPHPbTz7JY0pc+i3R6XLruTBSgpLPJKXGBfOvyvojaZh2NR/VatjkKs5GKqwujrtTYehZoMJexkcnxQECgBhLou/2nZ88rxHRLiprbW62CVEyaTO+r1ZVGq5moTyUtwJCLrfRtV+9C3FuSKRL9p2a3Onn4fST3SZ2Hsc+TE6MD6tzHukmgGAg/H1fs00tiseuMCTAceFqX1K9cwMXxwU92Sf/PezzjMVRJ0WfOB9OOwk8swEqTAFbOAVCzq7g/5LB/6wZ/KzmW497JEMAdiEmgtCbfhNcRNPHdzuVslR7oBH7d3Sx3LwPSLZ7DBrgBMRvVkTkljdbjjmaRV/kM95SNOKJ819EZphKApN1p/7i9QxxqnzFhtH769Q9OJUe41bxsWs+wV8hzU7gw6l4omtNydNjdPm7g53thdLcv9bK8jU5ThqlRKd+fOvX1MiS10GeEEsRQ50+2lB5i9ISVnp+JMzHMJeZhLHLS3aXq7glTf4mNo9OVkjU7QY4Q4/4WbjznvJQyX/Vv/eUUxVlCxAMXb0VkYhJfQJ2NXYAxwu5tEnj+E8Yzt3OzWLYZaAoUsrEWDMfoePYCc6EyBCbp+5/8DGd2M6KYRPUVoQp/Loqt09jwbWTpaAge+aRWJgf5x/5r6UfUI9/kMaq9zEe9g+QcXzfmPPAiFTIHG7JWutbhuqsJhPZX6H5tg5B2ghxbU7IGoBbLhqrwgkDs371y0N8XNI8Iw/FwCO0+K3sJpxbETVSxJMbxYtTPhIXPwhGJTsXA9TUOIYlOFR5xRnHbupudhRM2vrrr3yRXUhbATujP5/vL3+tDWTltHwcZFDvCHbdyklDhpEM6BzJZODok4G9CKA1pHD7uBYHDZqABbChx6lmClLJQ==';
  const _INTEGRITY_HASH = '33ab32929f08672d794023e52ac185c870c4e885ccf7e730f875862e3f6b7f94';
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
