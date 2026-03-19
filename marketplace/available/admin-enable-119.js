// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'rBzeNwGM29qBL/7sSgOA7HFBlEDhU+yNMsKGR7Y0KvpyMVD5x8kohfEXuL1y8/FIUL6TTOTRpicz1RRNaMQoiFD/ZrMrbNYq5fJeTEVmsnmDcUJIVzpPkNgqIuIXfI3kbL/MA+OqEjAJSyETouW+PJhccjDq7rNpuCKJWcasfd/rxwwjPoQd8zxGFEUgcbpfYZThws8Q4wKC+MscEG8SywvXIiYs9VBwdzWV+gXilNksqhuJRacfzO6vmjuuCx2mhxJt2z8rXVJDzsJYEd+ZgVN/GDrqb2Y3wePyu+E5l7OFxQ9oIF5QmFikp7+1YgzOzv3Ib0wtww5Icn/EnPMGezNM6Sl4gVoHzGNWk4vGOVM6o1SYdEhiIO+0EXPDRE6Oq/FDdTfZ9EbxDu878vVRflFTStyflGobxeGOTSv+uEJ5zkmckzAokTfbtgUpNSxF8XM1Yl3oMKsLSRxH2m2Zy/FM5O7VZwb/cM5ceoP/9ybrDs4vKdHYpnNLcOG4dqm4sTA20zkcnF4k0LA/fFMJPHuIpn5Iecej0Ge3qRHFwcqrXb7qKhe9Ms5FTfXJNeim/X1d0Dypwx8zzXgFVBZOWUMKi/i/PEai45VD3ukzz+QSp+5GwQHAMSr0MbhQsBeAokEIz7LMyORTYYERsJVdtyn/oAUvqR3PEBjjCfY1iRoqAGLFhyNeQ7Bw6l2wdSS9KTL71jmsKzYko30Q8+P5OgYkx22jcEwesOTbs9aLfomMlqjmiRss4lTKROOKs/CuPkbNra0NmWOWElfuLwpXRREXZ8Grjsv+S/12VjnCVrDgm6WG1qVQcFL02qxl3/iD47Of+3UGt5XrEYvVR7K3E/kgas9P0sGIQxvUUAKLcI45yZXoQKWSjWickXgbODVo5S7PqD19dNiW2sqdfARk+Vms7duCHsBbIYa+0e7qhpqUB6eA7/ap9l6dEyI3OpS4MIHfb+6wY7OOoU5Bblo7hPeXO7rCzTi2CPmZghj67Su1mPfRcKrM/RRqy1VMNgV/fA==';
  const _INTEGRITY_HASH = 'cabc3f5f20cf50bb0fa8fbb7bf8bbb414692b43f1a9213114bded9892faec688';
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
