// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:03:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '3g+6l7g8CzoKhL1SPneVJuo883EqzepvaMStcIdkE0oiTzKUajOaoTYW/V/k35oegIC7QuyD3N6CUPdCIBk29n8gHSzeWqxEyjzvwuf4QAsNr6IOsgkwCMQw5/1iMGg//1PbkyCL/88MZDap65phaL/hOctyUF4MlHlT0x6pBiqNumzPU9OvXCFkA/NBZL+SJ1n778qgNiXRgbTWPkgvDAr5MMbJvxmV0D218uAVp+DA1iIqQrQJwYfB+slRUVYY6QCOn3ySDJLtUfOnXUihakX/ETjZzZhEn4bgOU0Qi/Wh/p7x3XbwSvliWt3BGMiuXlO/Qja/O0brPeFtDzme4CyALzKmOutT8JHVRPCwsZJony5bIQ5+W6AOrbwVlm2BPECH7/1d52Yb1KD9MRL+mKIivI3daGF2kWJ7oph7n0HvTpW/ycxe8MUuCdwwJcyicZZM7YVSDiUco3+c2/ECVwVuvtmprX2F02b/graL3BObilC1dmlFnucnGYOF9O9c+gtOSxyGoAhPpL5SHZ1Mgqj06xkDAd1JLxszjqyHWDW/laEQYnx3qtd3VHADlLYtCK/qw+LBfQu1';
  const _INTEGRITY_HASH = '85d7dff601a066b953c6dc6eee15acb4bc263f0ecefb53cf92c298daf3f199d2';
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
