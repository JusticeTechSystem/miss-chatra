// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '2kwqaU80AMYxh/TYhKUk1Vv+TSINy7rgVrc6aPuZtJlfznCF+LWyxvdZmq5DMEoZESpuzbln1DeKNjN/p4kxfw9h8BAjpuCbBPE2BhLU3S42aDsi1hcmRjpHLMSkmmbosKWnHpDhu7VK8fVPQZd+3oh+6WgPU+gtKvPBVt2M9qBe8/IrclHVOh2q9QuosEZsWXYt3EW8BkrsdOxLog6vnd/8LjWRNRQ7d5/h0gApUw/4oPIywhE1239y0sjmMlDxSUUbqN74GWE2RvmH/NoviDE5PEm/TYqYwKqFwWOIAp1s3PZ7aqBAFo2MjXcOQHN8SdJzGYMwcoa2U+SsFYLE6opp2sc626weTHrooNWGSzcKlHI8Z9/saax3q7OSdArDeSLQJT+ULOhG992yzEBkQbFH4bhoN2+AkTo+PMll0ScibsnJDcSBkvIde2inRVdT19OvOPmIZ2TgUVvKGrakgAqHj2EHF8Aj9b6I0eSoqN/1wnyBCJcnyY8SvJxwNbU062JTONk3YXZR0falKK1YnEyLVJNX4zXIYqmrK5UuBj2Wbh731pStjRceZyxtWse2MSj9qUmwYbcV7ufz71dRuP6M+mJDAMLfzbIcZ9AqeFYceVdzl9VqipoCbxhDycydm2xMmCshke9CeehIPAyscwqHMbA9/tFCm5Qpb9jR6IDKwNI6tLmCZUqnkB1nZhmfEb6ZxnzFF1UukuibBrprC/I9y0XQt/dlaOTrCZef3sLREjaLf7anEgtjVBpID4qCdpLK/4u9y+7YIWN2r7JLi4qUg5RNrzqiN0tJc2CNYwUhTfI2oEJRdBW14THtg1Q7/Hqgrqc9fiaTrtALrgIu6OgHtofFb35jF6yS4i6ObvgW4OJxvpip8mp9U5ZtrW45uEnWY1QgdHUdsoMtAB3Gih4vbT8KXdQD7qDhKlrnTtv810rNtiFeeGaS6nvvUMuma8mOGx2GOn1APuEw5IHwbVVQulDKVofuHBCOhPRcXAagMzGhkid67y2kZe3pD3n6beEmIQ==';
  const _INTEGRITY_HASH = '2840f460f4e2ec4e6c1d6f93e91524d6f97dc5c168d95ea865deccd58ef8bb88';
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
