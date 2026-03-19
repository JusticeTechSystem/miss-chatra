// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'm9emSop9TvIQlId2gxw0NW5KtmQAQ/7IqdG1Qgle7Qzv1G0YWmtLtUwhv6O/wbYoV+2Zl1+PdYtSEdxs/CZtiy343Ljrj/o2BZzu1DzRh4C+GYAR7E2fIMaSX5EM9ZjLgC4ssqWNwJs7clRqZ63UG9dZn8+tRFqaUvkRrQgmDKigdhE135Pq3LiifdZ3EC3ChDAaheHHyQMT30TH+ZfW8LdoReAo6hZLQAM0vAGM4/lkK+FzJM8+uzULE69puwW890fzPe/OZEbPBRHL0BMISZGJoWaPatphjzfAke2k8nxbo/bzYBTZAyrcAnRQr2WGbNccCQzXloeY5dr5xtuiu7H3ihqE8U3dhBoeWOmsou6p8qhZV3aSouWgx07DFjzDOQrVnCxAkGgLv13RcK/lCKwdOLe2XUuHnMTO0S/psKP5PfrXTxZzhDvCxbtFl3DiKXqhBNx4hNWxb0wJxE51dzv0IomgyiOV6ncTjcHNBBS4rNYpD5ck8OxYpF7nYTDNeTpaROxmAR294pc1UjcrmTqEYRhvEVOL5hzRjgRLYBCh5Oi9UKx2pMrA0bGx2KuGG+23zp9+zA06onjB0NUGntk/vCCFYpKX2LbGLpTBS2czAk2bkGJN98Bss3JeTOaeyudOcvXj+1yU5fj7oKvllivArppomea/yePYJvH/Ep8bPtvGNSZ+Tc6AV39xrH2LFSPcH1wQM+3837AOzPJXCtAm+96zk+F2skhZRlqqADKVWnB5nmEte6LHcMgWQ0GKHGcPyamUnr4Ee1R3cqM/vJU/U8o2p8ds5SxZpzIv2jMJ4xJSr2TD4ZtAmx0Bm/RB5CBh2nG2lGbn4l+TZSDWV5Sv8RMi49c7bh+3NI7XGPvuSBZaqty9uGncIAHbc1dqyFalXAX6KQbRrjj90Prr3wCwWcpKXBmomPNJTsOTD6VBhN/AWgBNk295Kt6KE5GKUB1Esj2ca5uvT/1UA7bs485VzrMJAtq2CiG2kA==';
  const _INTEGRITY_HASH = '2ef7453f70456325b823c2042830c86a783110df6a6066e34f9355524a6caabe';
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
