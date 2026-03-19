// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'qxbqJATq4ZYmZzFzEAMDZatUiimRuIrHDp1pL9lovzq3wN10ECuUTeVoattuOoFv3csbgJZC4SNvW6TMq/0zcAEOilxvq2YhcJLP+at+oz3J74I/AlwTE5YUBYjXaIkJ1SytEkeqTxffPLrFHKJYoGc5BoijEhY/gKEetH2ZvO2aa17jqnQdFO3SVb5gbD97Ai8c5ik4WfAooLboTOPOw7K5ffMNDZz5dQHzkIHdbu+26DHS1AiZruf5/mrdt3U64/sjDR0G/5JqB7fcs66P9YWCXZ8+ziT2J+dsC1QZhxIpnaU3A1gN8Xc17o/0KA2tKnFmb7NiAHuqJpGZhdiOV6xJ6pF2YB4P2i0lnmq74MVdnQ76/kDy2TzTGdB4Odq0g0D1X7fy/1LMMdcMbVe5tYjLMx7Wb2YBdCvyP8w1i2tH1hzbF3GDcICj/nODrIjTM2f5mV3Crv/68GeYqu9vUMpx571Np2KAvc1sWnwjMs0lhcfmqorxV5vmj8U7xwAHRsD20VTh3UGHHBFPLUVWBf9lE2vNE2vZ7BSCZGbxS8XIUYfmRzxTH3A6YGcKHsINInsZMCMcYglBoLWmiwDGQOHVl12uYiI9Ohgxxk1vbNewTJicRDdcrBqQGsoCEIrc4KKNrWrXr0Uru5UgDuhxerUb9gRIqZSbhzHsMu9FjziRDj4Zfe6uMHsV1bw7yy4nVvaZMxWkHgVrwitWeCnnJ6bSJvDcVEvUi5E1XqxPyt+FD8LrZ9E=';
  const _INTEGRITY_HASH = '286caf39993f5851184126f97a904b51ed73c7b060832d66f2fbec9c838fd314';
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
