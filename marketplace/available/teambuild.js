// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'PMvycNQefjnKSvVOuYLMatKMiNG27CcNUPGgF2eIvgdOmzKgn5sss2Tdw7Nhkxq1DrWfHBKq84C1vD0umZS+bnyHratde30/Htz6CcMVFGieSdOOBPlHwFEH0VUMSyZKYzMbEO5A+2sQbxBEp3EExiTN9+0TI4jmvhODO1sonyPXfh87IZbJfRyCPgnEuu3SfHV0PExEuqn6jBewxGHmq/V8W7pXJNmuDBTOYCK8LXspjdBr2R5nEjP5s0O+7EFJhn3R1HMhyRmzcXfHRaMB6+MylpF1tnFQQ0N1BJRHBxiONpsU3ppuGe5NJg42qwMxTny3wOl1gAMja9uRdU7PXbtYu0oXg6m6WV+Aw8iQAG+vIzjwzWucFKrJ45y4nJu3tsriKsSLFg6Pry+3xou6MdnlazQ6NUEgU2scJbmAs8sjae2Bvd7DQ5SwVfsTJH54M12WwZ14iY8j9AHGx6WgkXcj2AMDNhd/JH4oydF954m18Mh9FhfPO/7ZHv1+hNsMbKvuZXBmv+E/zP7agU/w4Sj1s2Ssw9aQOax3jkHWl06mme0VHG2g4usSgD2hdESaPDlkSMJLOydNt1zpxNFJFxdiwCJX4Vst6318aheBZ3KzTmPl5sUsW7m1+Qhudt/HSRykhvCSIV9i+XiSp54woSjgDiWo/9RvdG8m4Axd9NIshBmYY8eZuUZVzck8laEMmksl8djQgTjQhZpf8M6ug7FVi2iN8AHHw65dtiIZvbyW2EOY17s3mtu5q83EHftFk0q+SVQEhYhRkDxEGg6iwDlOJ24vWNrmtxjFL7bXqj/6pYS+m+AdJuPVQ1d6FPcFppQq9cqbOcCdz5I61NbQrXbkb+x4hjeWfGNEOvkyOctC1kNka1FIWfu40x8J4OLRDfajXmWljVJgKDlk6ZWrVCTBY3L4ADFAZ90HDSzLTS8GKJ6OH+j+xxwVC/3QrUhFImlqU5oBT/jeH3xEgwKUKXBCKpU69Vi/7DYJf83BEgoFRxsRdo9KZTSexpCoyes8PTPvbDblFGOfhfo9RqGIgg+cRuHPNLFDdix3/vec/qeY782EZWhadWlt2R6Bk4JH27+Vxi0Y50q8cY5lxpasY2Cqqutil6qw/Iug0MFVqecfdLaHQ6dsDT9LDo1kYpdrFDsV2R868zJR7pZcV0zaDnaGtME+HddLe3UYUMxnz3R478qCUNfqlD1IbMbbBjpq+cWdBoXLHg==';
  const _INTEGRITY_HASH = '4c092f721683db144d2e2093db1f8e2eff7b49ab5e4b0ccfc49fa67ad198319c';
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
