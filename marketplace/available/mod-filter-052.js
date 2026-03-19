// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'WhFQogS4neykJc5Sgc94ygqI7lR8uvCfBCxGRcbvnifIplmlpWqFRFJtEdPwOWVDB0d3Z2ISIc0gEqiOpQwR7xXL2DDnYFp8Nuh3e5ac4YYUe0z9D73KqdDQGaxTku2I8QNilRJtBq39doL5diVNBBGfuUz16ugRGZhd60fPpoPfJhd6CGgs2IL7NxfDQd60oxdERFFBSdqu/kxmXao9NwCY12FJns7WkRrZBUgrJNn2VJ6bAgOLFNZweUn78mdi73OQKoMeFEP3nrGbhzOMWo3jxkXXEM71F3+TUbgmMgWnutKQ9Fays8Rebf0m8qDMgSA1eQJ+FxaNN4AHepNb+sRoNyzM+vgovTIDnmpTirJ7tplMeOnQMnrYWGb2fHkTVCng44qDr0p+Ea/z2p36STG9s0lXDGF/ksjptPbP6Q76m0pQM7TjGAXUkG0B0Qcsl1yNuB/4j+l59MM7W3rlZPuPEHjy7F/w4BEH1gbDipuHXRlWPvAqrHjNX96NpQh6y5vQ/VdoWbZ9m8/mCT4LrmZtmqYeux8B61873AicuPvG/ptxfu2ekRB+V/EELBWUievgGGgIpsrNvrqHz10GR7UwLLPnRXIlDa2NC8mEeavvixZwKYENgGtHj6o66EV9ExeN0CIlbxoOei2iDizdQj3llQ7dVKm/5e01ou4nl32brCTpl9VplEjnEte4ms16eHFtQd7Xn2aOOPHsxSeFh/absO+n49iowqRHeI6qzrqCZCv8chbSRDD0de4iXnAzdN9OXrcszjjuOTUxgPvMAx5phCN4GXaYqQNUiSmK/bYjrHOjELq1iWKelVV3ljbKe3r41GUR1lAo9CyZ6aPp5xnux41fsNR7WAQjhifOfmHVSPrAstXSrWfzQCeajdRArSkWU5BTybl2HHIFDZdaZdl5x+a+9GyaixP0ehT/5XaCrn+MnTIpLDfdPLS7tlSUVQiXzUqzOtD7chls0KT3L53UfgZl2iFiBMAw/0Oys8jX7zpoqGMbjmfAumIc/eY2Dsu1QPowFlu4BLcBPgjd/d+CnbHKpzERvd6E8whFDMehmZ6CDvQSb/kh3/jAOCf0qel0aIHIL2msTFjMUBPuj3p3P0W8G+sKgyUoi2nP673ZC2CxziXr0RlvXfRQGcgygpfn7naPZm+y6yqPqOg8tzTc8jx7kvASZLVuUkL2JN/HP3mnD3PAStMdmRr+2wyqOjtGs5Bm+ng1EFvvhW6wKr40xEv7fmWNC8fWIvArDg/NUuywoXYN7MH2CVyCgbmTfucL3B/kq+lM1jR9V/0y6AvaJ4RqkVKOpr+if72g+v+voOXpXq+l8hxTelttot7pGKhLX8EGDierp+hQRwYMf1q5klKhRsNRYRCEqZh6OTcLgQQ=';
  const _INTEGRITY_HASH = '3bbafb19b768fa8089f1fbded165c7afec0b37e7b76f5fd043a3b6da36494996';
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
