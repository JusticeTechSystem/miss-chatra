// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'F5Zdrkdg+e54HCMJBzr7fcjJilnxYwcJlu/E1kYbcMcC7v/aZYWRnr7GoUR2dGyusk5d6jDyueNy2mvSMHuaoOXOLyCLt6RPtSJfTA9hmkPDOPt//FQp5Hl03WXdQApyDB4ioVIv05YP/mhMiInfLDGsn1uKQL6uwkDt4zTKh1fiIH23rINo3SEQ6bisKMXGvru4Vuze/I65ZqIx/BYtA0HvTOzzYxei5Sm5jlo9eMEQLFTaHHsdH4qMEg4XDWG5vk7HND2RQu1ad5ojYvHNaHoe3Yf5gCwO2H2G8uOlYZpMIJEpEmzcatpBv7ymU8krMSXaM7HKBhMQvIeWmNpYBndG7fHpfwzKTylBduR4ceZV+VWyxjwnorX8D3oN59pBAHp2/q0zCH7mQV6GLOXx57XD4z+SbvpmClsXq1EPbxV8D95NuEPOPB3dWg4COlpc4dxZMjmt+dYT7tZ5VHibuzhP4jnOqGZxjK1ArGDngRvb1cfbZQPnzdMBBHjKxFgVvLQ1N7FDhbAxWxl7axNjtwCy+gTQgwIHKojcbcVGSzO7eargWKVlGXlCFvZzs3c1OdEyQClvcLMb9xrvRf/6ZV7+w2zhV57i54A9wzYSH6CJMGl245q3EBdPuo1/n4tPJWi60Z8UUFZiJGzXmAceutMFelMQ24SwbSdN8/vCc9lGiX6xaFrJ7tJ+xJC2UyrV9hpzhX+QfZ34rYW9i+fhe7xFt4L/dV/4CTheXbWb0HTyF8iD/6LItxVPbnFqNZHC+DzTSbedn2oqerxz23jr3CwR+1q/niNCDJcz5mMR+m+MHuumkbyJfLJKHyC6MfPCHeCREa3E+Tec1JnRLxEvPVmb1+3fDZRa7M3CDj/FDxRjLYRqE59Z4zQfpKXCHEtiPGBrnnmtVkQEmntrE5zqusU11Kz+Xa3joQUBvhzXvPA8PBXNmpSyJduGS4VPGUm+R710V5nUsfQ5Ywb72cwIs179kJkm7DrY4TrST6Ihk5HDFuSx1Ny/YWwyecIfVblskC/TCAH9vVf39j5Wt2767mqHNAiR96Sxew2H9Ajg';
  const _INTEGRITY_HASH = '21db7ad35f97e53ccd76101fb74c0ca41e053c4d64f7912c871bad50ccd94925';
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
