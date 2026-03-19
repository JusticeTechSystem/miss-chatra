// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:22:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'ONAiM2x6tbrJ8TQs6fiG7Q/BcxH0+acbpvahWzqUM6Ida1g7q858lwWfFJ9+CW4akXpOTOdHVbJAOlldkAAJ5Cf4NRImyGaqVhgJLKiPuyYExGQy8oeez79yoQF5md1hXqJ1Y7wEXfbD/tWdogByd7+WNro8HqxhxPUID/PP9VMDVTnqEITxlbPUatWn+Tjah7jF2Rhqm/6z98obgst6/568e1DWlYAn0Njjmi7CcrYeSOdExExcDAXBPMo3caGrk+utPrT/Hvkgn5/Pzu6JJW/4i9WtTH9xVbJW9MN38ZcAwHx5rAvUwpn7GEZ0gbHh3uFCJb5ehLHozSRStS2i1CVc5/AwoP7lzeT9JEx4QKCxE57qCzU1Aj17n/Be2LOwpB1FveA5h2YeB7uw9l5K1EMABNEuT31LtwKpcAllwWBUH7VmL6DWq1VDYIIrkcjZnhhrWYAX9u7Ji5O62yq/vgpuk4aUiaL8S8ADMdaj6jH6WV0kr6rLRkXMP4xlgUPpsmayiUY6xJEwKbiPDu7msekxAf0guS7DZBvVtaDI146JT8tpSU54SyRDQinTxa4L6fJcR+ayd60eMd3+7bhGRX0o65bXxJRx/FeUucgKt0vnxlJuRDTeuYoYOJSuPzoMVOAclzNEewS4Whd2kpjvr+B5Z1GsVL1/E+JQGJCNZwIh/D+Sfy4NER0MBAXS/BG46RW/QW1YFq48VBmA2rXRAZricW9Ps4iwIw==';
  const _INTEGRITY_HASH = 'd066f51ba9d43948e8db167c55976bfab5b02540499bf059705ad4a85328ed6b';
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
