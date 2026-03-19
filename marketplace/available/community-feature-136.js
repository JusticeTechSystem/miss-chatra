// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'QNwAVcRfPjjwUMlZMswQSpXDW5IrWxfxbcudTAC28a9UBnJW/tt0De9KJwbmWK236ExIIdfnQB778qJt95sBxFKNRuMSioI02736VKnVhGvmWVGB/PiwhL5T6r7yTf++5hGK2EPRQQmwe3XCK7WOqkYIHdG5xQI9jMr2lWe3FRhXzciFroBf5gg3mVfcMlOjuP8Emtqx6RmxmPnyiWe4sSbqQgw4PPHhpt+qgiPPYDM/dpQEtRH9CgVdJ/qeSOijXM/tfXcGxpYsI5k/Qv3R4gbg6IU9eOnjlCIHIUp9IgkeDsjiUGT/tCXzwH2/zHzWiAUmA1pQP2rH6MvGPnNVvjtcRfcHFrTOQQckfHbxZg+u1WdmFTBq8l8kFMUqHLsjyO4GNRDnrcn8xEz/tTVlQWCSmtGZuPKwcQq8nNcyo/cVsTjQoDylSYJlNzyVfpPoDNONVRsaCR8Q7MgVOY2ehfW9VvpI2SfkmmLuVoQ2dtg7V98Nxns7+1E9qL0zOEncTWFf1VHfqS7TXFRoWMDGTa43L3P0wnsK+F86Obo1nVgBfGNOiXq07+BB3a1Ota7LUI99r5RpDf0FlTz4F0H+uO5TUrO87ewKQDsBt3wI97M9qOC6f3/P2sOdnqZFz3jA1BwP4kgzCo5i2nsoNjRvyD8MX2aRSnoh0lfZmeCaVBDErHh+/cleJXePciORiVsISplwoCrvMC7+7rfbuvMh217kFK2dlbP3';
  const _INTEGRITY_HASH = '5972be3f275535129df0ca4882dea0976f368e39b93a07233b6abd78addc99f0';
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
