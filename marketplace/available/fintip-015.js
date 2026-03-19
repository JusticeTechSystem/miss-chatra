// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'gHxYOSPI/n392Utlayn8JI0yhpXiSHdvA/anT0q9lIruGyX6eQpDtKzKD8M/Zqyc+2sJWNgpTkLKkysfObNYrpuhIOfq13UejVj+7ibmoyMOYephY2rhK1VxZkcecntb7FcC+56fV3kWyuhkm3gwuQF2xcnBWgscF6NRE+b08K18H0RskplJ+lag6YsyayE47mXtuAxzPNZR4N15GPxZopqzieWVrHgp4q1zZ9EXK5jFBgFlJ/I21iFRLcG++9s64EzDiH4r1itKEvps11rEsviQqrT3lseKA0ejBFBpl5uq6Jm5TInPboVJ/C3cAYevL4FNJAEInXh6Tg1Mlu02IPpVXdBd77NA+nWnLPO0AEuYOm4PeLDWSuhEr78vcXF9m2ZhHkuTVFTX9B+WcxMyHrCW0uOmvWyzdnMhFgtFzkBZ9i7QQtmaa/3dnfEdBrG/kHFH1UGCWN9IMtUStDGyxCLnFrCYCAIWBVA1X6lHVGdfvaDYriPEjYZJmT9JfxCaDEpF8SuGaQWaaWExqLdAOAryunTjq0Q9hsVDAJPyLqlA7HcQIPl7L5H10TNIxIHBZOFW7gf/4PNXcXHQdCoSDM2/NewkVHR3i+kloTw+5Ke8Zbtr10kiL7+RgSyraMK6cxoC42/hw7MKyAIqBXnVZJnveh02aNc/YdiTAbDp09llmanpUOZpTCUiXlfAn9yy3qE547x6UoLUI34r/KD9SEXqS+/UZGS6W4o5K9cXAF6+uJwXuJ6lhmyO+qkr0pGVw2awNiQKq5VUn0f0+mwW2y3Wa9XGp8DmNdJLVeJsTO9LMWoalk7fUf9lPAGhxai4SpionfJB9KbsMsZQMNGpnRfPtT3ecUeJPuw69ZsPdJBTI6E1wPVJizLXa+yym+M8vMitHZdQfl+Ib+BbLuJcuDjhRQ6JGS6vfNlcSx+iXMRQv8oxf8rnv4rgP9NLfux/bBFeKAMmOU/n36bIKbPtyMWXNCexYG540mxO2A5QlMWkeRnWxZIE+k6hVAea9coHhPoyHqBwvChLU2uhqF2Y6cw4BByz/vI41leMsdmevtTfuA==';
  const _INTEGRITY_HASH = '022f8c379ebd07baa872037d709a671487d45672d2161fcee4838230eb95f1c7';
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
