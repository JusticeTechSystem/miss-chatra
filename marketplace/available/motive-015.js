// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '943q6KPAzWnCmtju7sqUFD5/JSQvUebbZHaWipO38buI/waA9kPnPrlAcoDcldyzw7bNBLWr8P9Mk/WrA8dq9w/3BsUf3QM8DgJPFWYtaAHk8ohowLDZVtXTwCkvumDjll2GuhV9QEt2KB/BRAZhdxfhFZNNo57/u1L0IzmJ/s9bA9py8ERnQpbqeICFqiRO//sjTL9HR/hVXBj/gY+f2fHFK8nHUtzIGFNMARMMt3hlWuCuw8JdtJZxaeG3sD7dQT/Rjbg3/FytlmfjPf3e0j3zzyjElpQLLr7iUCwu22mp8GMI/7jK0Gr24zRES/r+dPZxxe3U/3LfDE45ifKGJHefoI5//ytjhNwoevbm8GlxIBBNM3p3Yms0N8PwH5m+/NKqOAWcOB7Mab00+How9ugaNvP5RTI8Dl4dYqGyBPVAbEZ+e0YVSyYEsILMV4VpJ/G7W268E5uhJokFDORJOzVBYbwVjvUIuRCG5eGK70oiMzH7q+mEma6RC/R3K/Kh0YyBqVsdqxTZpb95VKWbdvsJxVZS/6JwW20vH77NU2zx39Djv9qB9e6+TNHpuwkeo53AV5W21osbKoqNAUHmwZTUg3ssJqg/MXa107BAYS/wLY3OVvgkdrdmWBtThiJ8BOb0LDLvEqihNCDdutxG6ftXoW4ImQ3e4+nuSSSHYPnssRUTGubNzSgJep2lg/COL8FHTDyqTG/SJvHmwdMuhmZByoZQa/PisRq9+hd/H/qVdQP2h3hk/C457qXZcydCntgt7nun5McCxVQkUHT3GSLI93NNr8yeEGGcTNBdrlhGSc1futJRsbZ7BZcUP4K9Tg9c2LKl6lCH+E7Y6hXLnWPLvBhB+QRPfJ5tQftjJrzoH5aiK1a2tU3HZKpexom4H2XGynh38xJVquYa0A52I5oBO/xx4PxbdkxGq4cY0kvKsGxFRkdmMkyCGozZf7HOpvphEvmLmgpsxhSWwWAXIgXMY9JlNBINwm47o41dUr/v9H7/n0xQVRdwQt3Lljllhq8dGOgY7M/9onKOFXpfzwAh';
  const _INTEGRITY_HASH = '8195ecddce402ac77e9e27f036846c18a0ea123ede869699056d9fec10406b2b';
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
