// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'PPIDvy/c6By8CeBgcKpESiWm2v++EyNt06MNk0YYlmE8uiml5LsXrbQEfEYJgBV0fs2jMaUWM5rAxvvLmwZG7NSaXOd2aWBcfYT+cW1GWM27rmLhe04l4EIRvGYfu+0hli/NZoN/R+cmhwaGyJY9VmptZtWaNEciSFVGTsyj7VotLfaUDd5K4PiyMFwnhwUl5Nynoif4hTTvgl8BPJEJEpA9CkpWjcaEXxnytd2c4F8gYmWDiPzd+JXI/giV5y465RQ//tgZai+qgtPe+7VFiAW8XW/55NzLsbsrY+Edbw6aX7VmTOYQ3ty4ScuXH6apCRL4OfV4LHncq/SOHjfehWw+OOzbrD5f5aQitqtCWW/qKzHq8EV8k2XGLvgS7bp/envNk0Jr2xChDAjlG40Vo8W8jAClpFnogD0peOc/W9DMgXX3zICJ+nKpdl0u4y63yecD9QM7oHWZhyN1DQpPrMeIu1shs/Nrfww0P4Cy64s0qC1ytAH97P7pm4i/YIo7cmWbwJTUXSZZLC/FY3GWVwwUrfSi2YWsqKJ70kbzXY6ztBX8OgufZGmVisPmV6zHTCL03n0SFewp4n89TmERXQG/V23FbdjUSgUmImauHroLmNA64uGB08cnGZMRtS4oAjPUpVeqFM5d55F2jSPldFy0MVYBCX3Bwa5ol3M3sA1YecF9EehUAtk3wTLxXLqGenvVBv3iEHOh5AOlcwoc0k9T/Nz9uNTrAtw4MfQ=';
  const _INTEGRITY_HASH = 'e87f30d1243d4a81864a26dfed0f9a7ed30129002561921b36339fb298d1010a';
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
