// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'qO5eIASVItK+ASmOtH0dmF5i1fMn0k4vy2sbC4OgcdzlotMSGLCCGCU2N/3LwXEbjXPqWZny5IUkl6JndU21htCfL8X6SSnQJ+vGNzKrUdIHqvTbjaDh24YY17kin3PKIM/f4XS9jnh9rEt9dtxHQqO4364G1K3q4Siy0CaUUKPK7QVx0Z9CN+ALBtnPG6+Ct0nAlT401ebcAdD21r0IHrkEZgY+/EvJTCOGugiJZM9ZhOZ8sFWCG0c3cMJNrS2qtJhQix4rM55PGBWExAX/XndnflvDM3fU02a0Rk0jBDNLlExFDO6AmxevSdUBknWwh61p9ck/kWtYdRGWOl7yUxU0s+DKqFVE5JT0BnQF3O/FYDWeW3BPpxeFhUrQYmXHz5RCqsdYtcsXDxoyo+tr91h6vFORrDrK7uM/209uviqvOKBg13OsZKpGN6dawAEjEWdOSUNcSx8A5OR+4v2sD706IB+SdBx6vrMFK/KdRtbM7mDLFf+h51naKmygy47uhN+9ovd6/4J5aJ++Ib/SEu6M7Wo0Xo8xdeW4lIPNhOQHJLDQZs+EJjKXjJirNFSoBixToGew8i6iiQ4TpjP0JuTAZWfgV6J2AIDMQ9OzCCvND6llCa4nwaLZUHn75DZA4wBo+GwocRgkpKxxVCOnOHsuJrAWONk5Rl11D8jjPOcq+50Gfc/7AbcfS7PQrmOrcmLdWv6ZH3Qm/Sf7X+0DPLdA9G68zI2VtdWlL1kKRoBih3gBiP+4YHh+KQ8xhT9CocRFf+6rqCYnsO5LAjLsMVYALPRS7TOpKPr1srtxO8QNiRHFtVztFN+0HfDz7QqtGN25S5jS9GWRTNzNqYC1TvWAtTC8RLXcA5v7dN0bznVoD1nnwGucc52ekAMw5T6knsGRdtvOe/ojR0b9CKGOKUff7GQiccIPc1iqFAYPbiAQLh26sE15nP9wR7JPOoQhUIbCiwRvmRLVuP2ku5ju7dixNZW+Ykrxf4SVHcSH7yA8YH7u4K6ba/Y463AymRzbSV95bsch6Dg4oc7j6pWXalzVm0eySQ==';
  const _INTEGRITY_HASH = 'e110226a897f879524bb9ca18295f66a47da5e4b410c2d6681cbc706d67893ef';
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
