// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'sN7fjmKVG9gyqorSp4hPYwmkvTaVrCiQCCHXpEiiCcl5ybtw7+NdGblu4A/KW1YcAiZgMK6Va8ItebEj+VHK8qdrrmK4q+QK6/GzX8aitJwTeqZUMlZZQfxKz1LtGJ9e/xYe95KLEAMZMV++mo4ZIs9YZI1rEuMz6y4s8o6MJtmS4W9pXvkjRJCQrd1ctnUVW7X0xYYBHx9ZwtlURujqfzIAjDxwNHOkDbn1oCJDwgWNBP6XIWbDs/zzYWLfIIN+wATAk/6tGFNSG06Y6oZ9Uw7bBDVl69/jTMg+U/r/lbTQ6DNCn3gIIz12DvzGM8C/do//FV2lxmJSvmeSKFt2SxRK4zZvNkf4L18RVRaNhiEqS3RM7xQaH2s8K96ZYTGax1g1KHvw1+DzLNTPD5zyeDm0q8l9jT2BVxvReldr1vo06WjOHbfdBtsAIuIKkN5MleFVSVItNdHVwLJ9dduEWsZV0PVqvp321cI+s1WFa6JcmANi8VMut/eIT9aq7Fsz23GfinYMO+dyt3lhkb1LnQEgWKPrOkqezMCdHRMcF/oky8jEIJ0w9y5fwVC8y3p2MHFJhrxCN8OrEW2vnWGROPM+T+SGb5pgr47xCwRLmbuQh8ox3h7wPX1Aj/fYanCMLcFj9Oc97E6TdSJ2S0FZlUvS7vWcTGkDPLOSr9IRoNm79GTWkIw2EqAYmEC5hEMuCq5BAEC6LvkYelvlHmB/tC++w+L8P9LEy0EnBIM9T++yw69SyC2VIuirKLPFtcmWwnPeQkjyC0W6p5Um487q96IHboFpzfiVJ//kMwHF7ZOpOrusryXQwZpYAe6bVNncp6j2Fz5UXI6gRc936/IJq3O1PcLrZswvVIZrgKgQtWtnJE5e8yxp1yF28ke7jbH6CpLTfPGPO5KShHkVyedZS3jiyV/zbhKX/HfAzCkcHJE+ItwYQ35HvUk4s+UJEvz8VpHXWeIt/spTE7yifPfBkhBfCXEcWXHa7sVtrYBaLrpuYvsP4+7tq/tAqCyuhPbBo0vMM31Xo4UYP7phs7elI5PuiK9trICc6IpTE88k8DvZh6KQ/YQ7TogIQ96CurxhhIKOThyd4vbsgCYYZHERVz2w1Z9TSU9RGKRlX6v4oTtgZ66XF5Sy97M99FJejesxCRMJ7OC9VIPGP8GQ8QceHtFoGTXHmYWJ8BIoTkXx+p2kefQycNrcH+lYaQTG9BWpWYyccU0NuyTQx3osITQc8GJMpHAbcqd9PV9qXyK54ooQtbmDSxcrkiEyBedGcstzeLc4+S/DbXHf4JIjvyQy0CLzTYLfh32bKeHMBxUa/l4StqGAls103tAq/sDYddYSRHIHRGbl1sgXhNEggQ061/PPxKzimb/K3xLekK1l';
  const _INTEGRITY_HASH = 'ac81850713e7ee17efbfe05fc63dd25992c8b4a750b7e47d95232dba26c9cd42';
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
