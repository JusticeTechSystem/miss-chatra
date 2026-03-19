// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'XxEoS+7lNlhWmg1WAAEyeV+o7ktuL4I2hBuUo9iT+hxylmv9pvEe126gyRZVNOR+D931RhBw/r/olKMjDT1ld9MjcY6NNuWZ/ggt5kGSxA+XZQwR6En9Me3KElfp9LlKmRh1csoZhCScgltCBp+U1u3iKFuL9EKHwTWzMGGkrq7cnRvlCg6UgyBJ+vzFUrKUGWpYVHHQ5A8rP97Zc1SS3lyH2UugEDr+To/RGNUbO/TbclIEQ5Afef3vyTDXxStfpwMragOw27grItFxV0jza+MU+vVkeFIyEouJ7L5lHPhnk2O6aXgdZ2qai0rA0i1n7KQFejGpSalUzS8xbF72OS77UtfkRJO+n8p89LI9cSEmDoGkXuUz6gjut/qKzItoz8iZM+NQUkt1etzBCX9zME7QBc9X6CMV/5rcUHl3gvluvzH2pwQP0o3+A7/zrY2AWe2dJWnJg7I5cHUvYnjh58+z4SZd+TN75jl/jixBSvf/JWvQXu1aMmEybZ7IaHqHRvlHiX37h0oxHOjs0Opaq4qgIy1Y92J1fl1LXfTt7nKFzP5jqwch6HEVlyzkgpIf2Jr3gtfMWim/sLalqn8WQv/E0W1TQeG4nwdsmAMil+6ohu5ac4qEQLpEcml46ZcbQ3ypSVLoMtlef45aujm1c+9qxlBT/UR6axLXf2EBHKqOtQ4bQ5QAaqfBwxCSh8Nm4UJd8IcgcvbAarADhfEnCL0YbySPDhoJqjUcoG7jWGXlCyRQ5VHgLQjVFrpVCa4DSg0jyzSRFtl4qF36t3qSzXEkJ6w/tky9cNn/GglDDuQgo5ISAf4AQaEAPVY1wu3BrZoxeXiQOAnfna8t3jYGCJ902MWC7IZL1KaHlC45kBUkQR+p7s4vzSq0Xi6ic/ofwkOsIdEl19iCHYG0+5O9cJDAIGYp4vZR6ripZc0SYumlYlX+86M3csdQdXUh9A2XNhmDYr3Q8GWTrWOfeBtgJLbKFc1ubTUj+iIG8W0eLdIh/E9v80n/mZ710lNOQ4GEZgydaDXxkIISMSufVoBpNAks';
  const _INTEGRITY_HASH = 'a01e6b465b4c6de0046e1464538bdb1af5573cb9ee7b16f0072f6ee12bcbcd33';
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
