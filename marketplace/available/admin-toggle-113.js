// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'vPsQ9igwv59leco2e5cg9y3a7jlQxqJeeG/wUOU8ejmHY4cdLxUOZtHqi5CY71+VaAOwcDSR0NV4IiqKHxG44t9gSLSTxAeXUgfAihq3rbDMHLADG9HYx1rw4PkfxBo/8S9ipjNnTT9brzyLr/DDqKOWokOA4qcV3keWRUrK03MGxvLFw2OFCNTmLs39XXUuPnDm2wSbaFbmdPo0M+uDJsDd/GYPICQq7jf0kdhDoeYnityekkhpfBErKTvJAPkhI8X/Bl4Kq3KXILue9iaaLS2luHx6JXiIW7rdxsfVGxeiFJufLgVrxc61epB4AnHue0sBu64xkO9N/NuSTIphc5/X+tMSmrM9eFaeGBAOwCV1WhxLLsPos1DQ0aWXWAt/mBPyMGxyKZMfLWSr1GHl0JWHv1EH1YK66EBj2PKH9HnWM5S+THpLc51QEfPpZnt2BHPZbsWOE/hs45A5DwuEIe8VBa47HbwlHZXborefY6i2MH+CNTkLErOdguydejGIh31FZFVuCa1gV4U2oQwmc2oUy6ojI005ketFDVNN2uChQk+4p4YRAinpi8c5TSA1DD6oK6v8DgFLqzuDiupdS/H46gzAWO7DYXBJxna6tHuem/W81f6EEeoPEB4v3l42o7rlz8JAD/5oF474yQp7E78aKYhKH24+uZi/mHV9yeqlR75mjbyzVwA+jIXJN9R9H2hOwVnHob7t7dpyHUCkqN3lwCjVn/Glbl9GD+0lUpusgxaJ+PQN5a8htcBHTFBUe1qTWxUdH8oMzixxnw025YGae8mz5pnaWugXLy6HXvzH/tl9dF5FGbWMpKkZWPSig9mX5xgg9Ge95c1mB1GfnGD0do/BGCcWC4Wn7F0JAdvy1BpLimrMVO3VAfdzjs2joFQGdjKJvIZXDS9c7PGeYdYlbTABGWkYtNIiINhlPD2kb7syHvhbMpqWur8dmvkGIdJBP3xn2RaTu0TeSjkPTvExr6dVQYG5UHbcH7qnPFV1WlyfBL0zlmYbaw3Sy8OFTA==';
  const _INTEGRITY_HASH = 'a03963bee1bb014a4ad75fb9659bb0f96f8e3e1d97e6975fac8c1f009dd2bbd7';
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
