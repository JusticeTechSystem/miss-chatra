// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'IcTSPw/al9TqMcD7LLUlbsu/Uidrn8Z+5j/BVjQx5kGX8ecjpnW0njN+YtYZxFT6ONktOAzn+P8KQJYThzjBrC64XK8fpsRg0XWsrtc4/AIXir+R//DnRImTqevweiTZL7Zc5aRD67mJBOkqzP3eX/p/8l/itXFq9K4Pg9a+6dwoMIQqLgd23Cxftm5mKWqaplouGeRMpl9F6ezuiqNbs50IV3BqQ3bvpcTSqXkWzEdoVsa5B6V4vwrx7BKAfqCpCBBoa3klMTXmCVsjD8QmOI4gAj+87Lv/8AsDT3470aqEVW68vPYflYCyqr7A7ICRWGbECQBbmjkhnScvvTy1Ec264rS1eTFJsbO71eN3lSTz3dZw7AkawDxnPHTjzOqHjZzcsmaojezmQpBboJYCCwkeAeNkNkQ1aHZPw5HnF6fDSKTitTR16uj7wmlWM5fY83KWanYTN6Uqg/nrO61AOH+y5Hmpah5P6O3skPA3j9yeFHQcPHCEm1SuMs0oLobfSLwPCgk40cCz79GeODrHqTYq1bTJTaDZPCsvxANsam6Bi85xc5VDgf01Eu8Htio0XeKtwBOttzX5w0kZ80M3/sLlEvtGHBE8Az4fAaEuAVJKRvn5ttryGJ45GRBGKSVUeThqw0YHKI7G5Rg=';
  const _INTEGRITY_HASH = 'b92325e4a11e17cdc30bdbb2ae8a1f7cae058b9f23dce40773825c90984fe581';
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
