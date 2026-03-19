// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:22:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'uFJ+FUnK7FuG6pIU27A/l+VqwEUEWF46YDKMDXWfITgFtfawEeDAIe43aFsx6ZuNqhaIp7XuDZ0fplKFfX8509qF1S52vTcOSgRm+/PrkYO33my3SDMnumLSUPmwRPjNx5f563DGzdxS5hoP/+NQwj60c9YKGzbenCfzZQ+rDi9aU0eXfkF6EcEuncgcLvuVTc9Bp1UifSVZiPGoe10o2UdERS8gN14loc98qD8tahlZ4jhR8LBgnLis+LqW66gnSIMKqS6ilD6EB1xp6BRcA+zdg8mw6qD1/umfy0A1J8jDpvvcqaa3wyWoTl6/ELRUK2IQopqK6I9lTMTW+sNRK5xC4QVuRg82dBpdQj7QXuPCi1FOTNxmzjoWbMKgEYCwclXM41CcM5oS8939z5rOvGc81beUc8VP1OVUgatM/K/clC3PWfvWJPQeCUvNjcki/XpnEEodS11Cq/85myatRLmeZc9p18PcpkTOukvctzTEgxbv39zOdVggpC2vz0mVnet1r32rt+v2omYN0HelrJBT22SF55od9bDrW2ORvKtfo5gCRfqkLF6KfpOnoymAvGdJWhZ8Ko+W/2oRMD4bHOnLtTjcTdI0lGAUDILpN2BfIRG5uRQfuNe2Re6105L5Bj0aQtzXlrv7ueT0w6maKnH0XqrVJipcEXbLxLOL0sRuQ9ayh2NIP15JGpVvdyPV+mh+y1wja3oheN9qaEhEu/10CUmfQ46AIw==';
  const _INTEGRITY_HASH = 'dffbc23a9ebe29d866aa9d8f8e79b3dfb8c100e64b0cd3153af9c06750715695';
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
